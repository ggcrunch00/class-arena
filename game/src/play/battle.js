// 전투 규칙(그림과 상관없는 부분). 화면(view3d.js)과 컴퓨터 상대(ai.js)가 이 규칙을 씀.
import { LANE, MATCH, GOLD, MINE, CANNON, GUARD, ROLE_INFO, COUNTER_MULT, SIDES } from "./config.js";

const rand = (a, b) => a + Math.random() * (b - a);

export class Battle {
  // durations: { 모형이름: { walk, attack, death, cheer, spawn? } } (초)
  constructor(durations) {
    this.dur = durations;
    this.units = [];
    this.projectiles = [];
    this.events = [];
    this.time = 0;
    this.state = "play";
    this.winner = 0;
    this.overtime = false;
    this.nextId = 1;
    this.sides = {};
    for (const s of [-1, 1]) {
      this.sides[s] = {
        gold: GOLD.start, castle: MATCH.castleHp, guardT: 0, mine: 1, streak: 0, bestStreak: 0, cannon: 0,
        cooldown: { shield: 0, rusher: 0, archer: 0, mage: 0 },
        stats: { right: 0, wrong: 0, skip: 0, goldEarned: 0, deployed: 0 },
      };
    }
  }

  get timeLeft() { return Math.max(0, MATCH.time - this.time); }

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

  deploy(side, role) {
    if (this.canDeploy(side, role)) return null;
    const S = this.sides[side], R = ROLE_INFO[role];
    S.gold -= R.cost; S.cooldown[role] = R.cooldown; S.stats.deployed++;
    const model = SIDES[side].models[role];
    const spawnLen = this.dur[model].spawn ? this.dur[model].spawn / 2 : 0.35; // 해골 등장은 2배속
    const u = {
      id: this.nextId++, side, role, model, x: side * LANE.spawn, y: rand(-LANE.halfWidth, LANE.halfWidth),
      hp: R.hp, maxHp: R.hp, state: "spawn", anim: this.dur[model].spawn ? "spawn" : "walk", animT: 0, stateT: 0,
      spawnLen, hitDone: false, flash: 0,
    };
    this.units.push(u);
    this.events.push({ type: "spawn", unit: u });
    return u;
  }

  mineCost(side) { const lv = this.sides[side].mine; return lv >= MINE.maxLevel ? 0 : MINE.cost[lv]; }
  upgradeMine(side) {
    const S = this.sides[side], c = this.mineCost(side);
    if (!c || S.gold < c || this.state !== "play") return false;
    S.gold -= c; S.mine++;
    this.events.push({ type: "mine", side, level: S.mine });
    return true;
  }

  // 대포 목표: 내 성에 가장 가까이 온 적
  cannonTarget(side) {
    let best = null, bestD = 1e9;
    for (const e of this.units) {
      if (e.side === side || e.state === "death") continue;
      const d = Math.abs(side * LANE.castleFront - e.x);
      if (d < bestD) { bestD = d; best = e; }
    }
    return best;
  }
  fireCannon(side) {
    const S = this.sides[side];
    const t = this.cannonTarget(side);
    if (S.cannon < CANNON.charge || !t || this.state !== "play") return false;
    S.cannon = 0;
    const p = this.addProjectile({ kind: "ball", side, sx: side * LANE.castleX, sy: 0.9, sz: 7.5, tx: t.x, ty: t.y, tz: 0.2,
      time: 0.8, arc: 4, dmg: CANNON.damage, splash: CANNON.radius });
    this.events.push({ type: "cannon", side, proj: p });
    return true;
  }

  // ---------- 싸움 ----------
  findTarget(u) {
    let best = null, bestD = 1e9;
    for (const e of this.units) {
      if (e.side === u.side || e.state === "death") continue;
      if (e.state === "spawn" && e.anim === "spawn" && e.stateT < e.spawnLen * 0.5) continue; // 땅에서 막 솟는 중
      const d = (e.x - u.x) * -u.side;
      if (d < -0.6) continue;
      const dd = Math.abs(d);
      if (dd < bestD) { bestD = dd; best = e; }
    }
    const castleD = Math.abs(-u.side * LANE.castleFront - u.x);
    if (castleD < bestD) return { kind: "castle", d: castleD };
    return best ? { kind: "unit", unit: best, d: bestD } : null;
  }

  damageUnit(t, raw, from) {
    if (t.state === "death") return;
    const counter = from && ROLE_INFO[from.role] && ROLE_INFO[from.role].beats === t.role;
    const dmg = Math.round(raw * (counter ? COUNTER_MULT : 1));
    t.hp -= dmg; t.flash = 1;
    this.events.push({ type: "hit", target: t, x: t.x, y: t.y, z: 1.5, dmg, counter, side: from ? from.side : 0 });
    if (t.hp <= 0) { t.hp = 0; this.setState(t, "death"); this.events.push({ type: "death", unit: t }); }
  }

  damageCastle(side, dmg) {
    if (this.state !== "play") return;
    const S = this.sides[side];
    S.castle = Math.max(0, S.castle - dmg);
    this.events.push({ type: "castleHit", side, dmg, x: side * (LANE.castleFront + 1.2), y: rand(-0.6, 0.8), z: rand(1.5, 5) });
    if (S.castle <= 0) this.finish(-side, "castle");
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
    const R = ROLE_INFO[u.role];
    const sx = u.x - u.side * 0.6, sy = u.y, sz = R.shot === "arrow" ? 1.6 : 2.3;
    const tx = t.kind === "unit" ? t.unit.x : -u.side * (LANE.castleFront + 1.0);
    const ty = t.kind === "unit" ? t.unit.y : 0.3;
    const tz = t.kind === "unit" ? 1.3 : 3.0;
    const speed = R.shot === "arrow" ? 16 : 9;
    this.addProjectile({ kind: R.shot, side: u.side, from: u, target: t.kind === "unit" ? t.unit : null, castle: t.kind === "castle",
      sx, sy, sz, tx, ty, tz, time: Math.max(0.2, Math.abs(tx - sx) / speed), arc: R.shot === "arrow" ? 0.6 : 1.2, dmg, splash: R.splash || 0 });
  }

  update(dt) {
    if (this.state === "play") {
      this.time += dt;
      if (!this.overtime && this.timeLeft <= MATCH.overtime) { this.overtime = true; this.events.push({ type: "overtime" }); }
      if (this.timeLeft <= 0) {
        const a = this.sides[-1].castle, b = this.sides[1].castle;
        this.finish(a === b ? 0 : (a > b ? -1 : 1), "time");
      }
      for (const s of [-1, 1]) for (const r in this.sides[s].cooldown) this.sides[s].cooldown[r] = Math.max(0, this.sides[s].cooldown[r] - dt);
      for (const s of [-1, 1]) this.guard(s, dt);
    }

    for (const u of this.units) {
      const R = ROLE_INFO[u.role], D = this.dur[u.model];
      u.stateT += dt; u.animT += dt;
      u.flash = Math.max(0, u.flash - dt * 7);
      if (u.state === "spawn") { if (u.stateT >= u.spawnLen) this.setState(u, "walk"); continue; }
      if (u.state === "death" || u.state === "cheer") continue;
      const tg = this.findTarget(u);
      const inRange = tg && tg.d <= R.range;
      if (u.state === "walk") {
        if (inRange) this.setState(u, "attack");
        else u.x += -u.side * R.speed * dt;
      } else if (u.state === "attack") {
        if (!u.hitDone && u.animT >= D.attack * R.hitAt) {
          u.hitDone = true;
          const t = this.findTarget(u);
          if (t && t.d <= R.range + 0.3) {
            const dmg = Math.round(R.dmg * rand(0.9, 1.1));
            if (R.shot) this.shoot(u, t, dmg);
            else if (t.kind === "unit") this.damageUnit(t.unit, dmg, u);
            else this.damageCastle(-u.side, dmg);
          }
        }
        if (u.animT >= D.attack) { u.animT -= D.attack; u.hitDone = false; if (!inRange) this.setState(u, "walk"); }
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

  // 성 방어 사격
  guard(side, dt) {
    const S = this.sides[side];
    S.guardT -= dt;
    if (S.guardT > 0) return;
    const t = this.cannonTarget(side);
    if (!t || Math.abs(side * LANE.castleFront - t.x) > GUARD.range) return;
    const fast = S.castle / MATCH.castleHp < GUARD.lastStand;
    S.guardT = GUARD.every / (fast ? GUARD.lastStandMult : 1);
    this.addProjectile({ kind: "arrow", side, from: { side, role: null }, target: t, sx: side * (LANE.castleX - 0.8), sy: 0.4, sz: 6.2,
      tx: t.x, ty: t.y, tz: 1.3, time: 0.45, arc: 0.5, dmg: GUARD.dmg, splash: 0 });
  }

  land(p) {
    this.events.push({ type: "land", proj: p });
    if (p.castle) { this.damageCastle(-p.side, p.dmg); return; }
    if (p.splash) {
      for (const e of this.units) {
        if (e.side === p.side || e.state === "death") continue;
        const d = Math.hypot(e.x - p.x, (e.y - p.y) * 0.8);
        if (d <= p.splash) this.damageUnit(e, e === p.target ? p.dmg : Math.round(p.dmg * 0.6), p.from || { side: p.side });
      }
    } else if (p.target) this.damageUnit(p.target, p.dmg, p.from);
  }
}
