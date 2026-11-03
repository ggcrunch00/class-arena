// 컴퓨터 상대: 학생처럼 문제를 풀고(정답률·속도는 단계별), 번 골드로 병사를 고른다.
import { AI_LEVELS, ROLES, ROLE_INFO, MINE, LANE } from "./config.js";

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
    // 문제 풀기
    this.next -= dt;
    if (this.next <= 0) {
      const right = Math.random() < this.L.accuracy;
      b.answer(this.side, right ? "right" : "wrong", "number", this.L.diff);
      this.next = this.L.answerEvery * (0.6 + Math.random() * 0.8) + (right ? 0 : 3);
    }
    // 금광: 앞이 조용할 때 투자
    const enemyNear = b.units.some((u) => u.side !== this.side && u.state !== "death" && Math.abs(this.side * LANE.castleFront - u.x) < 9);
    if (S.mine < this.L.mineTo && !enemyNear && b.mineCost(this.side) && S.gold >= b.mineCost(this.side) + 20) b.upgradeMine(this.side);
    // 대포: 적이 성 가까이 몰렸을 때
    if (S.cannon >= 5) {
      const near = b.units.filter((u) => u.side !== this.side && u.state !== "death" && Math.abs(this.side * LANE.castleFront - u.x) < 6).length;
      if (near >= this.L.cannonAt) b.fireCannon(this.side);
    }
    // 출전할 병사 정하기
    if (!this.plan) this.plan = this.choose();
    if (b.canDeploy(this.side, this.plan) === "") { b.deploy(this.side, this.plan); this.plan = null; }
    else if (b.sides[this.side].cooldown[this.plan] > 0) this.plan = null; // 대기 중이면 다른 걸 고려
  }

  choose() {
    const enemies = this.b.units.filter((u) => u.side !== this.side && u.state !== "death");
    if (enemies.length && Math.random() < this.L.counter) {
      // 가장 앞에 나온 적을 이기는 병사
      enemies.sort((a, c) => Math.abs(this.side * LANE.castleFront - a.x) - Math.abs(this.side * LANE.castleFront - c.x));
      return BEATEN_BY[enemies[0].role];
    }
    const w = [["shield", 3], ["rusher", 2], ["archer", 3], ["mage", 2]];
    let t = Math.random() * 10;
    for (const [r, k] of w) { if ((t -= k) <= 0) return r; }
    return "shield";
  }
}
