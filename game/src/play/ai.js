// 컴퓨터 상대: 학생처럼 문제를 풀고(정답률·속도는 단계별), 번 골드로 "어느 길에 무엇을" 보낼지 고른다.
// 위협받는 길이 있으면 막고, 없으면 밀기 좋은 길(적 탑이 약하거나 우리 병사가 많은 길)로 보낸다.
import { AI_LEVELS, ROLES, ROLE_INFO } from "./config.js";
import { LANES, LANE_NAMES } from "./lanes.js";

const BEATEN_BY = {}; // 이 병사를 이기는 병사
for (const r of ROLES) BEATEN_BY[ROLE_INFO[r].beats] = r;

export class ComputerPlayer {
  constructor(battle, side, levelKey) {
    this.b = battle; this.side = side; this.L = AI_LEVELS[levelKey];
    this.next = this.L.answerEvery * (0.5 + Math.random());
    this.plan = null;
  }

  update(dt) {
    const b = this.b, S = b.sides[this.side];
    if (b.state !== "play") return;
    this.next -= dt;
    if (this.next <= 0) {
      const right = Math.random() < this.L.accuracy;
      b.answer(this.side, right ? "right" : "wrong", "number", this.L.diff);
      this.next = this.L.answerEvery * (0.6 + Math.random() * 0.8) + (right ? 0 : 3);
    }
    const threat = this.threats();
    const quiet = Object.values(threat).every((v) => v.n === 0);
    if (S.mine < this.L.mineTo && quiet && b.mineCost(this.side) && S.gold >= b.mineCost(this.side) + 20) b.upgradeMine(this.side);
    if (S.cannon >= 5) {
      const near = Math.max(...Object.values(threat).map((v) => v.n));
      if (near >= this.L.cannonAt) b.fireCannon(this.side);
    }
    if (!this.plan) this.plan = this.choose(threat);
    if (b.canDeploy(this.side, this.plan.role) === "") { b.deploy(this.side, this.plan.role, this.plan.lane); this.plan = null; }
    else if (S.cooldown[this.plan.role] > 0) this.plan = null;
  }

  // 길마다: 내 건물(탑, 없으면 본성) 9m 안으로 들어온 적 수와 가장 앞선 적
  threats() {
    const b = this.b, me = b.sides[this.side], out = {};
    for (const n of LANE_NAMES) {
      const tw = me.towers[n];
      const guardS = tw.alive ? tw.s : (this.side < 0 ? 0 : LANES[n].length);
      let cnt = 0, front = null, frontD = 1e9;
      for (const e of b.units) {
        if (e.side === this.side || e.lane !== n || e.state === "death") continue;
        const d = Math.abs(e.s - guardS);
        if (d < 9) cnt++;
        if (d < frontD) { frontD = d; front = e; }
      }
      out[n] = { n: cnt, front, mine: b.units.filter((u) => u.side === this.side && u.lane === n && u.state !== "death").length,
        foe: b.units.filter((u) => u.side !== this.side && u.lane === n && u.state !== "death").length };
    }
    return out;
  }

  choose(threat) {
    const b = this.b, L = this.L, foe = b.sides[-this.side];
    // 1) 막아야 할 길
    const danger = LANE_NAMES.filter((n) => threat[n].n > 0).sort((a, c) => threat[c].n - threat[a].n);
    if (danger.length && Math.random() < 0.35 + L.counter * 0.6) {
      const n = danger[0], f = threat[n].front;
      return { lane: n, role: f && Math.random() < L.counter ? BEATEN_BY[f.role] : this.randomRole() };
    }
    // 2) 밀 길: 똑똑할수록 적 탑이 약하거나 우리 병사가 많은 길
    let lane;
    if (Math.random() < L.counter) {
      lane = LANE_NAMES.slice().sort((a, c) => this.pushScore(c, threat, foe) - this.pushScore(a, threat, foe))[0];
    } else lane = Math.random() < 0.4 ? "mid" : (Math.random() < 0.5 ? "top" : "bot");
    // 그 길의 적 병사를 이기는 병사
    const foes = b.units.filter((u) => u.side !== this.side && u.lane === lane && u.state !== "death");
    if (foes.length && Math.random() < L.counter) {
      const cnt = {}; for (const u of foes) cnt[u.role] = (cnt[u.role] || 0) + 1;
      const top = Object.keys(cnt).sort((a, c) => cnt[c] - cnt[a])[0];
      return { lane, role: BEATEN_BY[top] };
    }
    return { lane, role: this.randomRole() };
  }

  pushScore(n, threat, foe) {
    const tw = foe.towers[n];
    return (tw.alive ? 1 - tw.hp / tw.max : 1.5) + (threat[n].mine - threat[n].foe) * 0.25 + Math.random() * 0.3;
  }

  randomRole() {
    const w = [["shield", 3], ["rusher", 2], ["archer", 3], ["mage", 2]];
    let t = Math.random() * 10;
    for (const [r, k] of w) { if ((t -= k) <= 0) return r; }
    return "shield";
  }
}
