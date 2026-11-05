// 전투 규칙(그림과 상관없는 부분). 3갈래 길: 병사는 고른 길을 따라 걷고, 그 길의 적 탑을 부숴야 본성에 닿음.
// 화면(view3d.js)과 컴퓨터 상대(ai.js)가 이 규칙을 씀. 그림 없이 node로도 돌릴 수 있음(tests/balance_play.mjs).
import { LANE, MATCH, GOLD, MINE, CANNON, TOWER, BASE, ROLE_INFO, COUNTER_MULT, SIDES, SPECIAL, HEROES, TRAIN } from "./config.js";
import { LANES, LANE_NAMES, BASES, TOWERS } from "./lanes.js";

const rand = (a, b) => a + Math.random() * (b - a);

export class Battle {
  // durations: { 모형이름: { walk, attack, death, cheer, spawn? } } (초)
  // opts(캠페인): time 판 길이, baseHp/towerHp {[-1]: 배율, [1]: 배율}, gold {[-1]: 시작 골드, [1]: …},
  //   objective { type: "base" | "towers" | "survive", n } — towers: 적 탑 n개를 무너뜨리면 승리, survive: 시간 끝까지 본성을 지키면 승리
  //   hero {[side]: 영웅 이름}, train {[side]: {armor, blade, purse, stone}} — 훈련소 단계
  constructor(durations, opts = {}) {
    this.dur = durations;
    this.opts = opts;
    this.matchTime = opts.time || MATCH.time;
    this.objective = opts.objective || { type: "base" };
    this.units = [];
    this.projectiles = [];
    this.events = [];
    this.time = 0;
    this.state = "play";
    this.winner = 0;
    this.overtime = false;
    this.nextId = 1;
    this.sides = {};
    this.structs = [];
    for (const s of [-1, 1]) {
      const tr = (opts.train && opts.train[s]) || {}, hero = (opts.hero && HEROES[opts.hero[s]]) ? opts.hero[s] : null;
      this.sides[s] = {
        gold: ((opts.gold && opts.gold[s]) ?? GOLD.start) + (tr.purse || 0) * TRAIN.purse.gold, mine: 1, streak: 0, bestStreak: 0, cannon: 0,
        hero, skill: 0, need: hero ? Math.max(3, HEROES[hero].need - (tr.stone || 0) * TRAIN.stone.skill) : 0, skillUsed: 0,
        buff: { guard: 0, rally: 0 }, volleys: [],
        mul: { hp: 1 + (tr.armor || 0) * TRAIN.armor.hp, dmg: 1 + (tr.blade || 0) * TRAIN.blade.dmg },
        cooldown: { shield: 0, rusher: 0, archer: 0, mage: 0 },
        stats: { right: 0, wrong: 0, skip: 0, goldEarned: 0, deployed: 0 },
      };
      const [bx, by] = BASES[s];
      const bh = Math.round(BASE.hp * ((opts.baseHp && opts.baseHp[s]) || 1)), th = Math.round(TOWER.hp * ((opts.towerHp && opts.towerHp[s]) || 1));
      const base = { id: this.nextId++, side: s, kind: "base", x: bx, y: by, hp: bh, max: bh, radius: BASE.radius, alive: true, guardT: 0 };
      this.structs.push(base);
      this.sides[s].base = base;
      this.sides[s].towers = {};
      for (const n of LANE_NAMES) {
        const [tx, ty] = TOWERS[n][s];
        const t = { id: this.nextId++, side: s, kind: "tower", lane: n, s: LANES[n].project(tx, ty), x: tx, y: ty,
          hp: th, max: th, radius: TOWER.radius, alive: true, guardT: 0 };
        this.structs.push(t);
        this.sides[s].towers[n] = t;
      }
    }
  }

  get timeLeft() { return Math.max(0, this.matchTime - this.time); }

  // ---------- 문제 결과 → 골드 ----------
  // kind: "right" | "wrong" | "skip", qtype: number/choice/ox, diff: 0~2. 번 골드를 돌려줌
  answer(side, kind, qtype = "number", diff = 0) {
    const S = this.sides[side];
    if (this.state !== "play") return 0;
    if (kind === "skip") { S.stats.skip++; return 0; }
    if (kind === "wrong") {
      S.stats.wrong++; S.streak = 0;
      if (S.cannon < CANNON.charge) S.cannon = 0;
      this.events.push({ type: "answer", side, right: false });
      return 0;
    }
    S.stats.right++; S.streak++; S.bestStreak = Math.max(S.bestStreak, S.streak);
    if (S.cannon < CANNON.charge) S.cannon++;
    if (S.hero && S.skill < S.need) S.skill++;
    let g = (GOLD.base[qtype] || GOLD.base.number) * GOLD.diffMult[diff];
    if (S.streak >= GOLD.streakFrom) g *= 1 + GOLD.streakBonus;
    g *= 1 + MINE.bonus * (S.mine - 1);
    if (this.overtime) g *= 2;
    g = Math.round(g);
    S.gold += g; S.stats.goldEarned += g;
    this.events.push({ type: "answer", side, right: true, gold: g, streak: S.streak });
    return g;
  }

  // ---------- 출전·금광·대포 ----------
  aliveCount(side) { return this.units.filter((u) => u.side === side && u.state !== "death").length; }

  canDeploy(side, role) {
    const S = this.sides[side], R = ROLE_INFO[role];
    if (this.state !== "play") return "끝남";
    if (S.cooldown[role] > 0) return "대기";
    if (S.gold < R.cost) return "골드 부족";
    if (this.aliveCount(side) >= MATCH.maxUnits) return "병사가 가득";
    return "";
  }

  deploy(side, role, lane) {
    if (this.canDeploy(side, role) || !LANES[lane]) return null;
    const S = this.sides[side], R = ROLE_INFO[role], L = LANES[lane];
    S.gold -= R.cost; S.cooldown[role] = R.cooldown; S.stats.deployed++;
    const model = SIDES[side].models[role];
    const spawnLen = this.dur[model].spawn ? this.dur[model].spawn / 2 : 0.35; // 해골 등장은 2배속
    const u = {
      id: this.nextId++, side, role, model, lane, dir: -side, s: side < 0 ? LANE.spawn : L.length - LANE.spawn,
      off: rand(-LANE.halfWidth, LANE.halfWidth), hp: Math.round(R.hp * S.mul.hp), maxHp: Math.round(R.hp * S.mul.hp),
      state: "spawn", anim: this.dur[model].spawn ? "spawn" : "walk", animT: 0, stateT: 0, spawnLen, hitDone: false, flash: 0,
      x: 0, y: 0, fx: 0, fy: 0,
    };
    this.place(u);
    this.units.push(u);
    this.events.push({ type: "spawn", unit: u });
    return u;
  }

  // 이야기 장면용 출전(골드·대기 시간·병사 수 제한 없음): role은 병사 종류 또는 "giant"(안개 거인)
  spawnFree(side, role, lane) {
    if (this.state !== "play" || !LANES[lane]) return null;
    const sp = SPECIAL[role], R = sp || ROLE_INFO[role], L = LANES[lane];
    const model = sp ? sp.model : SIDES[side].models[role];
    const spawnLen = this.dur[model].spawn ? this.dur[model].spawn / 2 : 0.35;
    const u = {
      id: this.nextId++, side, role, model, lane, dir: -side, s: side < 0 ? LANE.spawn : L.length - LANE.spawn,
      off: sp ? 0 : rand(-LANE.halfWidth, LANE.halfWidth), hp: R.hp, maxHp: R.hp, special: !!sp, scale: sp ? sp.scale : 1, tint: sp ? sp.tint : 0,
      state: "spawn", anim: this.dur[model].spawn ? "spawn" : "walk", animT: 0, stateT: 0, spawnLen, hitDone: false, flash: 0,
      x: 0, y: 0, fx: 0, fy: 0,
    };
    this.place(u);
    this.units.push(u);
    this.events.push({ type: "spawn", unit: u, free: true });
    return u;
  }

  // 길 위 위치(s, 옆으로 비킨 정도) → 좌표와 바라보는 방향
  place(u) {
    const p = LANES[u.lane].at(u.s);
    u.x = p.x - p.dy * u.off; u.y = p.y + p.dx * u.off;
    u.fx = p.dx * u.dir; u.fy = p.dy * u.dir;
  }

  mineCost(side) { const lv = this.sides[side].mine; return lv >= MINE.maxLevel ? 0 : MINE.cost[lv]; }
  upgradeMine(side) {
    const S = this.sides[side], c = this.mineCost(side);
    if (!c || S.gold < c || this.state !== "play") return false;
    S.gold -= c; S.mine++;
    this.events.push({ type: "mine", side, level: S.mine });
    return true;
  }

  // ---------- 영웅 기술 ----------
  // 고른 길에서 우리 쪽으로 가장 많이 다가온 적(없으면 그 길의 적 탑, 탑이 없으면 적 본성)
  frontTarget(side, lane) {
    let best = null, bv = -1e9;
    for (const e of this.units) {
      if (e.side === side || e.lane !== lane || e.state === "death") continue;
      const v = side < 0 ? -e.s : e.s;
      if (v > bv) { bv = v; best = e; }
    }
    if (best) return { unit: best, x: best.x, y: best.y };
    const foe = this.sides[-side], tw = foe.towers[lane], st = tw && tw.alive ? tw : foe.base;
    return st.alive ? { struct: st, x: st.x, y: st.y } : null;
  }
  canSkill(side) { const S = this.sides[side]; return this.state === "play" && !!S.hero && S.skill >= S.need; }
  useSkill(side, lane) {
    if (!this.canSkill(side) || !LANES[lane]) return false;
    const S = this.sides[side], H = HEROES[S.hero];
    S.skill = 0; S.skillUsed++;
    if (H.kind === "guard") {
      S.buff.guard = H.time;
      for (const u of this.units) if (u.side === side && u.state !== "death") u.hp = Math.min(u.maxHp, u.hp + Math.round(u.maxHp * H.heal));
    } else if (H.kind === "rally") S.buff.rally = H.time;
    else if (H.kind === "volley") for (let i = 0; i < H.n; i++) S.volleys.push({ at: this.time + i * 0.55, lane });
    else if (H.kind === "blast") {
      const t = this.frontTarget(side, lane);
      if (t) {
        const b = S.base;
        this.addProjectile({ kind: "orb", big: true, side, from: { side, role: null }, target: t.unit || null, sx: b.x, sy: b.y, sz: 7, tx: t.x, ty: t.y, tz: 0.4,
          time: Math.max(0.7, Math.hypot(t.x - b.x, t.y - b.y) / 20), arc: 6, dmg: H.dmg, splash: H.splash,
          blastStruct: t.struct || this.frontStruct(side, lane), structDmg: H.struct });
      }
    }
    this.events.push({ type: "skill", side, hero: S.hero, kind: H.kind, lane });
    return true;
  }
  frontStruct(side, lane) { const foe = this.sides[-side], tw = foe.towers[lane]; return tw && tw.alive ? tw : foe.base; }
  volley(side, lane) {
    const H = HEROES[this.sides[side].hero] || HEROES.saebyeok, t = this.frontTarget(side, lane);
    if (!t) return;
    for (let k = 0; k < 4; k++) {
      const tx = t.x + rand(-1.1, 1.1), ty = t.y + rand(-1.1, 1.1);
      this.addProjectile({ kind: "arrow", side, from: { side, role: null }, struct: t.unit ? null : t.struct, sx: tx - 2.5, sy: ty - 1, sz: 11,
        tx, ty, tz: t.unit ? 0.6 : 2.4, time: 0.5 + k * 0.06, arc: 0, dmg: H.dmg, splash: t.unit ? H.splash : 0, rain: true });
    }
  }
  // 우리 병사 공격 배율(훈련소 × 돌격 함성)
  dmgMul(u) {
    const S = this.sides[u.side];
    return S.mul.dmg * (S.buff.rally > 0 ? HEROES.uru.dmg : 1);
  }

  myStructs(side) { return this.structs.filter((t) => t.side === side && t.alive); }
  // 대포 목표: 내 건물에 가장 가까이 온 적
  cannonTarget(side) {
    let best = null, bestD = 1e9;
    const mine = this.myStructs(side);
    for (const e of this.units) {
      if (e.side === side || e.state === "death") continue;
      for (const t of mine) {
        const d = Math.hypot(e.x - t.x, e.y - t.y);
        if (d < bestD) { bestD = d; best = e; }
      }
    }
    return best;
  }
  fireCannon(side) {
    const S = this.sides[side];
    const t = this.cannonTarget(side);
    if (S.cannon < CANNON.charge || !t || this.state !== "play") return false;
    S.cannon = 0;
    const b = S.base;
    const p = this.addProjectile({ kind: "ball", side, sx: b.x, sy: b.y, sz: 7.5, tx: t.x, ty: t.y, tz: 0.2,
      time: Math.max(0.8, Math.hypot(t.x - b.x, t.y - b.y) / 22), arc: 5, dmg: CANNON.damage, splash: CANNON.radius });
    this.events.push({ type: "cannon", side, proj: p });
    return true;
  }

  // ---------- 싸움 ----------
  // 내 길 앞쪽에서 가장 가까운 적(병사, 그 길의 적 탑, 탑이 무너졌으면 적 본성)
  findTarget(u) {
    let best = null, bestD = 1e9;
    for (const e of this.units) {
      if (e.side === u.side || e.lane !== u.lane || e.state === "death") continue;
      if (e.state === "spawn" && e.anim === "spawn" && e.stateT < e.spawnLen * 0.5) continue; // 땅에서 막 솟는 중
      const d = (e.s - u.s) * u.dir;
      if (d < -0.6) continue;
      const dd = Math.abs(d);
      if (dd < bestD) { bestD = dd; best = { kind: "unit", unit: e, d: dd }; }
    }
    const foe = this.sides[-u.side], tw = foe.towers[u.lane];
    let st, d;
    if (tw.alive) { st = tw; d = (tw.s - u.s) * u.dir - tw.radius; }
    else { st = foe.base; d = ((u.dir > 0 ? LANES[u.lane].length : 0) - u.s) * u.dir - foe.base.radius; }
    if (st.alive && d < bestD) best = { kind: "struct", struct: st, d: Math.max(0, d) };
    return best;
  }

  damageUnit(t, raw, from) {
    if (t.state === "death") return;
    const counter = !!(from && ROLE_INFO[from.role] && ROLE_INFO[from.role].beats === t.role);
    if (t.special) raw *= 0.85; // 거인은 조금 단단함
    if (this.sides[t.side].buff.guard > 0) raw *= HEROES.haram.cut; // 방패 함성
    const dmg = Math.round(raw * (counter ? COUNTER_MULT : 1));
    t.hp -= dmg; t.flash = 1;
    this.events.push({ type: "hit", target: t, x: t.x, y: t.y, z: 1.5, dmg, counter, side: from ? from.side : 0 });
    if (t.hp <= 0) { t.hp = 0; this.setState(t, "death"); this.events.push({ type: "death", unit: t }); }
  }

  damageStruct(st, dmg) {
    if (this.state !== "play" || !st.alive) return;
    st.hp = Math.max(0, st.hp - dmg);
    const h = st.kind === "base" ? BASE.height : TOWER.height;
    this.events.push({ type: "structHit", struct: st, dmg, x: st.x + rand(-0.8, 0.8), y: st.y + rand(-0.5, 0.5), z: rand(1.2, h) });
    if (st.hp <= 0) {
      st.alive = false;
      this.events.push({ type: "structDown", struct: st });
      if (st.kind === "base") this.finish(-st.side, "base");
      else if (this.objective.type === "towers" && st.side === 1) {
        const down = Object.values(this.sides[1].towers).filter((t) => !t.alive).length;
        if (down >= (this.objective.n || 1)) this.finish(-1, "towers");
      }
    }
  }

  finish(winner, why) {
    if (this.state !== "play") return;
    this.state = "end"; this.winner = winner; this.endWhy = why;
    for (const u of this.units) {
      if (u.state === "death") continue;
      if (winner && u.side === -winner) { this.setState(u, "death"); this.events.push({ type: "death", unit: u }); }
      else if (winner) this.setState(u, "cheer");
    }
    this.events.push({ type: "end", winner, why });
  }

  // 시간이 끝났을 때 점수: 본성 체력(2배) + 탑 체력
  score(side) {
    let v = 0;
    for (const t of this.structs) if (t.side === side) v += (t.hp / t.max) * (t.kind === "base" ? 2 : 1);
    return v;
  }

  setState(u, s) {
    u.state = s; u.stateT = 0; u.animT = 0; u.hitDone = false;
    u.anim = s === "spawn" ? (this.dur[u.model].spawn ? "spawn" : "walk") : s;
  }

  addProjectile(p) {
    p.id = this.nextId++; p.t = 0; p.x = p.sx; p.y = p.sy; p.z = p.sz;
    this.projectiles.push(p);
    this.events.push({ type: "launch", proj: p });
    return p;
  }

  shoot(u, t, dmg) {
    const R = ROLE_INFO[u.role] || SPECIAL[u.role];
    const sx = u.x + u.fx * 0.6, sy = u.y + u.fy * 0.6, sz = R.shot === "arrow" ? 1.6 : 2.3;
    const tx = t.kind === "unit" ? t.unit.x : t.struct.x, ty = t.kind === "unit" ? t.unit.y : t.struct.y;
    const tz = t.kind === "unit" ? 1.3 : 2.6;
    const speed = R.shot === "arrow" ? 16 : 9;
    this.addProjectile({ kind: R.shot, side: u.side, from: u, target: t.kind === "unit" ? t.unit : null, struct: t.kind === "struct" ? t.struct : null,
      sx, sy, sz, tx, ty, tz, time: Math.max(0.2, Math.hypot(tx - sx, ty - sy) / speed), arc: R.shot === "arrow" ? 0.6 : 1.2, dmg, splash: R.splash || 0 });
  }

  // 탑·본성 방어 사격
  guard(st, dt) {
    st.guardT -= dt;
    if (st.guardT > 0) return;
    const C = st.kind === "base" ? BASE : TOWER;
    let t = null, bestD = C.range;
    for (const e of this.units) {
      if (e.side === st.side || e.state === "death") continue;
      const d = Math.hypot(e.x - st.x, e.y - st.y);
      if (d < bestD) { bestD = d; t = e; }
    }
    if (!t) return;
    const fast = st.kind === "base" && st.hp / st.max < BASE.lastStand;
    st.guardT = C.every / (fast ? BASE.lastStandMult : 1);
    this.addProjectile({ kind: "arrow", side: st.side, from: { side: st.side, role: null }, target: t, sx: st.x, sy: st.y, sz: C.height,
      tx: t.x, ty: t.y, tz: 1.3, time: 0.45, arc: 0.5, dmg: C.dmg, splash: 0 });
  }

  update(dt) {
    if (this.state === "play") {
      this.time += dt;
      if (!this.overtime && this.timeLeft <= MATCH.overtime) { this.overtime = true; this.events.push({ type: "overtime" }); }
      if (this.timeLeft <= 0) {
        if (this.objective.type === "survive") this.finish(-1, "survive");
        else {
          const a = this.score(-1), b = this.score(1);
          this.finish(Math.abs(a - b) < 0.01 ? 0 : (a > b ? -1 : 1), "time");
        }
      }
      for (const s of [-1, 1]) for (const r in this.sides[s].cooldown) this.sides[s].cooldown[r] = Math.max(0, this.sides[s].cooldown[r] - dt);
      for (const s of [-1, 1]) {
        const S = this.sides[s];
        S.buff.guard = Math.max(0, S.buff.guard - dt); S.buff.rally = Math.max(0, S.buff.rally - dt);
        while (S.volleys.length && S.volleys[0].at <= this.time) this.volley(s, S.volleys.shift().lane);
      }
      for (const st of this.structs) if (st.alive) this.guard(st, dt);
    }

    for (const u of this.units) {
      const R = ROLE_INFO[u.role] || SPECIAL[u.role], D = this.dur[u.model];
      u.stateT += dt; u.animT += dt;
      u.flash = Math.max(0, u.flash - dt * 7);
      if (u.state === "spawn") { if (u.stateT >= u.spawnLen) this.setState(u, "walk"); continue; }
      if (u.state === "death" || u.state === "cheer") continue;
      const tg = this.findTarget(u);
      const inRange = tg && tg.d <= R.range;
      if (u.state === "walk") {
        if (inRange) this.setState(u, "attack");
        else { const sp = R.speed * (this.sides[u.side].buff.rally > 0 ? HEROES.uru.speed : 1); u.s = Math.max(0, Math.min(LANES[u.lane].length, u.s + u.dir * sp * dt)); this.place(u); }
      } else if (u.state === "attack") {
        if (tg) { // 공격할 땐 상대를 바라봄
          const tx = tg.kind === "unit" ? tg.unit.x : tg.struct.x, ty = tg.kind === "unit" ? tg.unit.y : tg.struct.y;
          const l = Math.hypot(tx - u.x, ty - u.y) || 1; u.fx = (tx - u.x) / l; u.fy = (ty - u.y) / l;
        }
        if (!u.hitDone && u.animT >= D.attack * R.hitAt) {
          u.hitDone = true;
          const t = this.findTarget(u);
          if (t && t.d <= R.range + 0.3) {
            const dmg = Math.round(R.dmg * rand(0.9, 1.1) * this.dmgMul(u));
            if (R.shot) this.shoot(u, t, dmg);
            else if (t.kind === "unit") this.damageUnit(t.unit, dmg, u);
            else this.damageStruct(t.struct, dmg);
          }
        }
        if (u.animT >= D.attack) { u.animT -= D.attack; u.hitDone = false; if (!inRange) { this.setState(u, "walk"); this.place(u); } }
      }
    }

    for (const p of this.projectiles) {
      p.t += dt / p.time;
      const k = Math.min(p.t, 1);
      if (p.target && p.target.state !== "death") { p.tx = p.target.x; p.ty = p.target.y; }
      p.x = p.sx + (p.tx - p.sx) * k;
      p.y = p.sy + (p.ty - p.sy) * k;
      p.z = p.sz + (p.tz - p.sz) * k + Math.sin(k * Math.PI) * p.arc;
      if (p.t >= 1 && !p.done) { p.done = true; this.land(p); }
    }
    this.projectiles = this.projectiles.filter((p) => !p.done);
    this.units = this.units.filter((u) => !(u.state === "death" && u.stateT > this.dur[u.model].death + 1.2));
  }

  land(p) {
    this.events.push({ type: "land", proj: p });
    if (p.blastStruct && p.blastStruct.alive && Math.hypot(p.blastStruct.x - p.x, p.blastStruct.y - p.y) <= p.splash + p.blastStruct.radius + 1) this.damageStruct(p.blastStruct, p.structDmg);
    if (p.struct) { this.damageStruct(p.struct, p.dmg); return; }
    if (p.splash) {
      for (const e of this.units) {
        if (e.side === p.side || e.state === "death") continue;
        const d = Math.hypot(e.x - p.x, (e.y - p.y));
        if (d <= p.splash) this.damageUnit(e, e === p.target ? p.dmg : Math.round(p.dmg * 0.6), p.from || { side: p.side });
      }
    } else if (p.target) this.damageUnit(p.target, p.dmg, p.from);
  }
}
