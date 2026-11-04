// 컴퓨터 상대: 학생처럼 문제를 풀고(정답률·속도는 단계별), 번 골드로 "어느 길에 무엇을" 보낼지 고른다.
// 위협받는 길이 있으면 막고, 없으면 밀기 좋은 길(적 탑이 약하거나 우리 병사가 많은 길)로 보낸다.
// 캠페인 보스(habits): 학생의 버릇(한 길 몰기·한 종류만·모아 두기·대포)을 최근 45초 기록으로 읽고, 말풍선으로 알린 뒤 30초 동안 전술을 바꾼다.
// 정답률은 보스 힘에 쓰지 않는다(기획서 5-1).
import { AI_LEVELS, ROLES, ROLE_INFO } from "./config.js";
import { LANES, LANE_NAMES } from "./lanes.js";

const BEATEN_BY = {}; // 이 병사를 이기는 병사
for (const r of ROLES) BEATEN_BY[ROLE_INFO[r].beats] = r;

export class ComputerPlayer {
  // level: AI_LEVELS 이름 또는 { answerEvery, accuracy, diff, counter, mineTo, cannonAt, roles?, habits? } (캠페인 스테이지)
  constructor(battle, side, level, onTalk) {
    this.b = battle; this.side = side; this.L = typeof level === "string" ? AI_LEVELS[level] : level;
    this.roles = this.L.roles || ROLES;
    this.habits = this.L.habits || [];
    this.onTalk = onTalk || (() => {});
    this.log = []; this.mode = null; this.reactT = -99; this.readT = 0; this.mineSaid = false;
    this.next = (this.L.adaptive ? this.L.adaptive.time[0] : this.L.answerEvery) * (0.5 + Math.random());
    this.plan = null;
  }

  update(dt) {
    const b = this.b, S = b.sides[this.side];
    if (b.state !== "play") return;
    this.next -= dt;
    if (this.next <= 0) {
      // adaptive(학생 흉내용): 난이도마다 걸리는 시간·정답률이 다르고, 학생 화면과 같은 규칙으로 난이도가 오르내림
      const A = this.L.adaptive, d = A ? (this.d ??= 0) : this.L.diff;
      const right = Math.random() < (A ? A.acc[d] : this.L.accuracy);
      b.answer(this.side, right ? "right" : "wrong", "number", d);
      if (A) {
        if (right) { this.rr = (this.rr || 0) + 1; this.rw = 0; if (this.rr >= 5 && d < 2) { this.d++; this.rr = 0; } }
        else { this.rw = (this.rw || 0) + 1; this.rr = 0; if (this.rw >= 2 && d > 0) { this.d--; this.rw = 0; } }
      }
      this.next = (A ? A.time[d] : this.L.answerEvery) * (0.6 + Math.random() * 0.8) + (right ? 0 : 3);
    }
    const threat = this.threats();
    const quiet = Object.values(threat).every((v) => v.n === 0);
    if (S.mine < (this.L.mineTo ?? 1) && quiet && b.mineCost(this.side) && S.gold >= b.mineCost(this.side) + 20) b.upgradeMine(this.side);
    if (S.cannon >= 5) {
      const near = Math.max(...Object.values(threat).map((v) => v.n));
      if (near >= (this.L.cannonAt ?? 3) && this.L.cannon !== false) b.fireCannon(this.side);
    }
    if (this.habits.length) this.read(dt);
    if (this.mode && b.time > this.mode.until) this.mode = null;
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

  // 쓸 수 있는 병사만(캠페인 앞 장은 일부만)
  ok(role) { return role && this.roles.includes(role) ? role : this.randomRole(); }

  choose(threat) {
    const b = this.b, L = this.L, foe = b.sides[-this.side], M = this.mode;
    // 보스가 읽은 버릇에 맞춘 전술
    if (M && M.type === "role" && Math.random() < 0.75) return { lane: this.pickLane(threat, foe), role: this.ok(BEATEN_BY[M.role]) };
    if (M && M.type === "lane" && LANE_NAMES.length > 1 && Math.random() < 0.6) {
      // 학생이 몰아 보내는 길은 천적으로 막고, 비어 있는 길로 돌아 들어감
      if (Math.random() < 0.4) { const f = threat[M.lane].front; return { lane: M.lane, role: this.ok(f && BEATEN_BY[f.role]) }; }
      const other = LANE_NAMES.filter((n) => n !== M.lane).sort((a, c) => threat[a].foe - threat[c].foe)[0];
      return { lane: other, role: this.randomRole() };
    }
    if (M && M.type === "cannon" && Math.random() < 0.7) { M.i = (M.i || 0) + 1; return { lane: LANE_NAMES[M.i % LANE_NAMES.length], role: this.randomRole() }; }
    // 1) 막아야 할 길
    const danger = LANE_NAMES.filter((n) => threat[n].n > 0).sort((a, c) => threat[c].n - threat[a].n);
    if (danger.length && Math.random() < 0.35 + L.counter * 0.6) {
      const n = danger[0], f = threat[n].front;
      return { lane: n, role: f && Math.random() < L.counter ? this.ok(BEATEN_BY[f.role]) : this.randomRole() };
    }
    const lane = this.pickLane(threat, foe);
    // 그 길의 적 병사를 이기는 병사
    const foes = b.units.filter((u) => u.side !== this.side && u.lane === lane && u.state !== "death");
    if (foes.length && Math.random() < L.counter) {
      const cnt = {}; for (const u of foes) cnt[u.role] = (cnt[u.role] || 0) + 1;
      const top = Object.keys(cnt).sort((a, c) => cnt[c] - cnt[a])[0];
      return { lane, role: this.ok(BEATEN_BY[top]) };
    }
    return { lane, role: this.randomRole() };
  }

  // 밀 길: 똑똑할수록 적 탑이 약하거나 우리 병사가 많은 길(아니면 아무 길, 가운뎃길이 조금 더 자주)
  pickLane(threat, foe) {
    if (Math.random() < this.L.counter) return LANE_NAMES.slice().sort((a, c) => this.pushScore(c, threat, foe) - this.pushScore(a, threat, foe))[0];
    if (LANE_NAMES.includes("mid") && Math.random() < 0.4) return "mid";
    return LANE_NAMES[Math.floor(Math.random() * LANE_NAMES.length)];
  }

  // ---------- 보스: 학생 버릇 읽기 ----------
  // 전투 사건을 받아 학생 쪽 출전·대포·금광을 기록
  watch(evts) {
    for (const e of evts) {
      if (e.type === "spawn" && e.unit.side === -this.side && !e.free) this.log.push({ t: this.b.time, lane: e.unit.lane, role: e.unit.role });
      else if (e.type === "cannon" && e.side === -this.side) this.cannonT = this.b.time;
      else if (e.type === "mine" && e.side === -this.side) this.mineT = this.b.time;
    }
  }
  read(dt) {
    this.readT -= dt;
    const b = this.b, now = b.time;
    if (this.readT > 0 || this.mode || now - this.reactT < 20) return;
    this.readT = 1;
    const recent = this.log.filter((x) => now - x.t < 45);
    const has = (h) => this.habits.includes(h);
    const react = (type, extra, line) => { this.mode = { type, until: now + 30, ...extra }; this.reactT = now; this.onTalk(type, line); };
    if (has("lane") && LANE_NAMES.length > 1 && recent.length >= 5) {
      const cnt = {}; for (const x of recent) cnt[x.lane] = (cnt[x.lane] || 0) + 1;
      const [lane, n] = Object.entries(cnt).sort((a, c) => c[1] - a[1])[0];
      if (n / recent.length >= 0.7) return react("lane", { lane }, { lane });
    }
    if (has("role") && recent.length >= 5) {
      const cnt = {}; for (const x of recent) cnt[x.role] = (cnt[x.role] || 0) + 1;
      const [role, n] = Object.entries(cnt).sort((a, c) => c[1] - a[1])[0];
      if (n / recent.length >= 0.6 && BEATEN_BY[role] && this.roles.includes(BEATEN_BY[role])) return react("role", { role }, { role, counter: BEATEN_BY[role] });
    }
    if (has("cannon") && this.cannonT && now - this.cannonT < 8) { this.cannonT = 0; return react("cannon", {}, {}); }
    // 모아 두기: 골드를 많이 쌓아 두거나 금광에 일찍 투자 → 보스가 바로 밀고 들어옴(무리 3명)
    const S = b.sides[-this.side];
    if (has("hoard") && (S.gold >= 260 || (this.mineT && !this.mineSaid && now < 120))) {
      this.mineSaid = this.mineSaid || !!this.mineT;
      const lane = LANE_NAMES.slice().sort((a, c) => b.sides[-this.side].towers[a].hp - b.sides[-this.side].towers[c].hp)[0];
      for (let i = 0; i < 3; i++) b.spawnFree(this.side, this.ok(i === 0 ? "shield" : "rusher"), lane);
      return react("hoard", {}, { lane });
    }
  }

  pushScore(n, threat, foe) {
    const tw = foe.towers[n];
    return (tw.alive ? 1 - tw.hp / tw.max : 1.5) + (threat[n].mine - threat[n].foe) * 0.25 + Math.random() * 0.3;
  }

  randomRole() {
    const w = [["shield", 3], ["rusher", 2], ["archer", 3], ["mage", 2]].filter(([r]) => this.roles.includes(r));
    let t = Math.random() * w.reduce((a, [, k]) => a + k, 0);
    for (const [r, k] of w) { if ((t -= k) <= 0) return r; }
    return w[0][0];
  }
}
