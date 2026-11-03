// 전투 규칙(그림과 상관없는 부분). A안(실시간 3D)과 B안(구운 2D)이 똑같이 쓴다.
// 이번 시험 장면에서는 "학생이 문제를 맞힘"을 컴퓨터가 흉내 낸다(정답이 나오면 유닛이 출전).
(function () {
  "use strict";

  // ---- 카메라 약속: 블렌더(tools/scene_common.py)와 같은 값 ----
  const CAM = { W: 2880, H: 1620, PPU: 90, ELEV: 32 * Math.PI / 180, TX: 0, TY: 4.08, TZ: 0 };
  const SIN = Math.sin(CAM.ELEV), COS = Math.cos(CAM.ELEV);
  // 전장의 한 점(x: 왼→오, y: 앞→뒤, z: 높이)이 배경 그림의 몇 번째 픽셀인지
  function toScreen(x, y, z) {
    return {
      x: CAM.W / 2 + (x - CAM.TX) * CAM.PPU,
      y: CAM.H / 2 - ((y - CAM.TY) * SIN + (z - CAM.TZ) * COS) * CAM.PPU,
    };
  }

  const CASTLE_X = 13.5;
  const CASTLE_FRONT = 11.5;   // 성 앞면(유닛이 여기까지 와서 성을 때림)
  const SPAWN_X = 11.0;
  const CASTLE_HP = 600;

  // 유닛 능력치
  const STATS = {
    knight:       { name: "기사",      hp: 130, dmg: [16, 22], range: 1.45, speed: 1.35, hitAt: 0.42, ranged: false },
    mage:         { name: "마법사",    hp: 70,  dmg: [13, 17], range: 6.5,  speed: 1.15, hitAt: 0.45, ranged: true },
    skel_warrior: { name: "해골 전사", hp: 130, dmg: [16, 22], range: 1.45, speed: 1.35, hitAt: 0.42, ranged: false },
    skel_mage:    { name: "해골 마법사", hp: 70, dmg: [13, 17], range: 6.5, speed: 1.15, hitAt: 0.45, ranged: true },
  };
  const SIDE = {
    [-1]: { name: "기사단", melee: "knight", ranged: "mage" },
    [1]: { name: "해골 군단", melee: "skel_warrior", ranged: "skel_mage" },
  };
  const MAX_UNITS = 9;

  function rand(a, b) { return a + Math.random() * (b - a); }

  class LaneSim {
    // durations: {knight: {walk: 1.07, attack: ..., death: ..., cheer: ..., spawn?: ...}, ...}
    constructor(durations) {
      this.dur = durations;
      this.reset();
    }

    reset() {
      this.units = [];
      this.projectiles = [];
      this.events = [];
      this.castles = { [-1]: { hp: CASTLE_HP, max: CASTLE_HP }, [1]: { hp: CASTLE_HP, max: CASTLE_HP } };
      this.score = { [-1]: { right: 0, wrong: 0 }, [1]: { right: 0, wrong: 0 } };
      this.nextAnswer = { [-1]: rand(0.3, 1.0), [1]: rand(0.6, 1.4) };
      // 판마다 어느 쪽이 조금 더 빨리 푸는지 바꿔서 승패가 갈리게
      const edge = Math.random() < 0.5 ? -1 : 1;
      this.pace = { [edge]: 0.72, [-edge]: 1.1 };
      this.state = "play";
      this.endT = 0;
      this.winner = 0;
      this.time = 0;
      this.nextId = 1;
      this.events.push({ type: "reset" });
    }

    // 학생이 문제를 풀었다고 치고 결과를 낸다
    answer(side) {
      const right = Math.random() < 0.8;
      if (!right) {
        this.score[side].wrong++;
        this.events.push({ type: "answer", side, right: false });
        return;
      }
      this.score[side].right++;
      const alive = this.units.filter((u) => u.side === side && u.state !== "death").length;
      const type = Math.random() < 0.62 ? SIDE[side].melee : SIDE[side].ranged;
      this.events.push({ type: "answer", side, right: true, unit: STATS[type].name });
      if (alive < MAX_UNITS) this.spawn(side, type);
    }

    spawn(side, type) {
      const st = STATS[type];
      const u = {
        id: this.nextId++, side, type, x: side * SPAWN_X, y: rand(-0.95, 0.95),
        hp: st.hp, maxHp: st.hp, state: "spawn", anim: this.dur[type].spawn ? "spawn" : "walk", animT: 0,
        stateT: 0, hitDone: false, flash: 0, target: null,
      };
      this.units.push(u);
      this.events.push({ type: "spawn", unit: u });
      return u;
    }

    setState(u, s) {
      u.state = s; u.stateT = 0; u.animT = 0; u.hitDone = false;
      u.anim = s === "spawn" ? (this.dur[u.type].spawn ? "spawn" : "walk") : s;
    }

    // 앞쪽에서 가장 가까운 적(유닛 또는 성)
    findTarget(u) {
      const st = STATS[u.type];
      let best = null, bestD = 1e9;
      for (const e of this.units) {
        if (e.side === u.side || e.state === "death" || e.state === "spawn" && e.anim === "spawn" && e.animT < 0.4) continue;
        const d = (e.x - u.x) * -u.side; // 내 진행 방향으로의 거리
        if (d < -0.6) continue;
        const dd = Math.abs(d);
        if (dd < bestD) { bestD = dd; best = e; }
      }
      const castleD = Math.abs(-u.side * CASTLE_FRONT - u.x);
      if (castleD < bestD) return { kind: "castle", d: castleD };
      return best ? { kind: "unit", unit: best, d: bestD } : null;
      // st는 거리 판정에 쓰지 않음(사거리는 update에서 비교)
    }

    damageUnit(t, dmg, from) {
      if (t.state === "death") return;
      t.hp -= dmg;
      t.flash = 1;
      this.events.push({ type: "hit", x: t.x, y: t.y, z: 1.4, dmg, target: t, ranged: STATS[from.type].ranged, side: from.side });
      if (t.hp <= 0) {
        t.hp = 0;
        this.setState(t, "death");
        this.events.push({ type: "death", unit: t });
      }
    }

    damageCastle(side, dmg, from) {
      const c = this.castles[side];
      if (this.state !== "play") return;
      c.hp = Math.max(0, c.hp - dmg);
      this.events.push({ type: "castleHit", side, dmg, x: side * CASTLE_FRONT + side * 1.2, y: rand(-0.6, 0.8), z: rand(1.5, 4.5) });
      if (c.hp <= 0) {
        this.state = "end";
        this.winner = -side;
        this.endT = 0;
        this.events.push({ type: "castleDown", side });
        for (const u of this.units) {
          if (u.state === "death") continue;
          if (u.side === side) { this.setState(u, "death"); this.events.push({ type: "death", unit: u }); }
          else this.setState(u, "cheer");
        }
      }
    }

    update(dt) {
      this.time += dt;
      if (this.state === "play") {
        for (const s of [-1, 1]) {
          this.nextAnswer[s] -= dt;
          if (this.nextAnswer[s] <= 0) {
            this.answer(s);
            this.nextAnswer[s] = rand(1.5, 3.1) * this.pace[s];
          }
        }
      } else {
        this.endT += dt;
        if (this.endT > 7) { this.reset(); return; }
      }

      for (const u of this.units) {
        const st = STATS[u.type];
        const D = this.dur[u.type];
        u.stateT += dt; u.animT += dt;
        u.flash = Math.max(0, u.flash - dt * 7);
        if (u.state === "spawn") {
          const len = D.spawn ? D.spawn : 0.35;
          if (u.stateT >= len) this.setState(u, "walk");
          continue;
        }
        if (u.state === "death" || u.state === "cheer") continue;
        const tg = this.findTarget(u);
        const inRange = tg && tg.d <= st.range;
        if (u.state === "walk") {
          if (inRange) { this.setState(u, "attack"); u.target = tg; }
          else u.x += -u.side * st.speed * dt;
        } else if (u.state === "attack") {
          const len = D.attack;
          if (!u.hitDone && u.animT >= len * st.hitAt) {
            u.hitDone = true;
            const t = this.findTarget(u);
            if (t && t.d <= st.range + 0.3) {
              const dmg = Math.round(rand(st.dmg[0], st.dmg[1]));
              if (st.ranged) this.launch(u, t, dmg);
              else if (t.kind === "unit") this.damageUnit(t.unit, dmg, u);
              else this.damageCastle(-u.side, dmg, u);
              this.events.push({ type: "swing", unit: u });
            }
          }
          if (u.animT >= len) {
            u.animT -= len; u.hitDone = false;
            if (!inRange) this.setState(u, "walk");
          }
        }
      }
      // 마법 구슬
      for (const p of this.projectiles) {
        p.t += dt / p.time;
        const k = Math.min(p.t, 1);
        if (p.kind === "unit" && p.target.state !== "death") { p.tx = p.target.x; p.ty = p.target.y; }
        p.x = p.sx + (p.tx - p.sx) * k;
        p.y = p.sy + (p.ty - p.sy) * k;
        p.z = p.sz + (p.tz - p.sz) * k + Math.sin(k * Math.PI) * 1.2;
        if (p.t >= 1 && !p.done) {
          p.done = true;
          this.events.push({ type: "boom", x: p.x, y: p.y, z: p.z, side: p.side });
          if (p.kind === "unit") this.damageUnit(p.target, p.dmg, p.from);
          else this.damageCastle(-p.side, p.dmg, p.from);
        }
      }
      this.projectiles = this.projectiles.filter((p) => !p.done);
      // 쓰러진 유닛은 동작이 끝나고 1초 뒤 사라짐
      this.units = this.units.filter((u) => !(u.state === "death" && u.stateT > this.dur[u.type].death + 1.2));
    }

    launch(u, t, dmg) {
      const fx = u.x - u.side * 0.7, fy = u.y, fz = 2.2;
      const tx = t.kind === "unit" ? t.unit.x : -u.side * (CASTLE_FRONT + 1.0);
      const ty = t.kind === "unit" ? t.unit.y : 0.3;
      const tz = t.kind === "unit" ? 1.3 : 3.0;
      const dist = Math.abs(tx - fx);
      const p = { id: this.nextId++, side: u.side, from: u, kind: t.kind, target: t.unit, dmg,
        sx: fx, sy: fy, sz: fz, tx, ty, tz, x: fx, y: fy, z: fz, t: 0, time: Math.max(0.25, dist / 9) };
      this.projectiles.push(p);
      this.events.push({ type: "launch", proj: p });
    }

    // 동작 프레임 고르기(구운 그림용): 0~1 사이 진행도
    animProgress(u) {
      const D = this.dur[u.type];
      const len = u.anim === "spawn" ? D.spawn : D[u.anim];
      const loop = u.anim === "walk" || u.anim === "attack" || u.anim === "cheer";
      const p = u.animT / len;
      return loop ? p - Math.floor(p) : Math.min(p, 0.999);
    }
  }

  window.Lane = { CAM, toScreen, LaneSim, STATS, SIDE, CASTLE_X, CASTLE_FRONT };
})();
