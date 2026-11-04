// 원정 스테이지 진행: 시간표(무리·거인·대사), 보스 말풍선, 길 고르기("auto").
// 그림과 상관없어서 node로도 돌릴 수 있음(tests/campaign_balance.mjs). 화면 쪽 일은 hooks로 넘김.
import { LANE_NAMES, LANE_LABEL } from "./lanes.js";
import { bossLine } from "./campaign.js";

export class StageRunner {
  // hooks: { talk(who, text), boss(who, text) } — 화면에 말풍선(없으면 조용히)
  constructor(battle, stage, ai, hooks = {}) {
    this.b = battle; this.stage = stage; this.ai = ai; this.hooks = hooks;
    this.done = new Set();
    if (ai) ai.onTalk = (type, info) => {
      const line = bossLine(stage.lines, type, info, LANE_LABEL);
      if (line && hooks.boss) hooks.boss(stage.boss, line);
    };
  }

  // 무리·거인을 보낼 길: 학생 탑이 가장 약한 길(같으면 아무 길)
  autoLane() {
    const me = this.b.sides[-1];
    return LANE_NAMES.slice().sort((a, c) => (me.towers[a].alive ? me.towers[a].hp : 9999) - (me.towers[c].alive ? me.towers[c].hp : 9999) + (Math.random() - 0.5) * 50)[0];
  }

  update(dt, evts) {
    const b = this.b;
    if (this.ai && this.ai.watch) this.ai.watch(evts);
    if (b.state !== "play") return;
    (this.stage.script || []).forEach((ev, i) => {
      if (this.done.has(i) || b.time < ev.at) return;
      this.done.add(i);
      const lane = (l) => (l && l !== "auto" && LANE_NAMES.includes(l) ? l : this.autoLane());
      if (ev.wave) { const l = lane(ev.wave.lane); for (const r of ev.wave.roles) b.spawnFree(1, r, l); }
      if (ev.giant) b.spawnFree(1, "giant", lane(ev.giant));
      if (ev.talk && this.hooks.talk) this.hooks.talk(ev.talk[0], ev.talk[1]);
    });
  }
}

// 캠페인 스테이지의 컴퓨터 상대 설정(장 안 숫자) — 별을 못 받고 두 번 넘게 지면 조금 약하게(학생이 막히지 않게)
export function stageAI(stage, losses = 0) {
  const a = { ...stage.ai };
  if (losses >= 2) { a.answerEvery *= 1.15; a.accuracy = Math.max(0.6, a.accuracy - 0.05); a.counter *= 0.8; }
  return a;
}
