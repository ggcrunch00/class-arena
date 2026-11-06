// 원정 스테이지 진행: 시간표(무리·거인·대사), 보스 말풍선, 길 고르기("auto").
// 그림과 상관없어서 node로도 돌릴 수 있음(tests/campaign_balance.mjs). 화면 쪽 일은 hooks로 넘김.
import { LANE_NAMES, LANE_LABEL } from "./lanes.js";
import { bossLine } from "./campaign.js";

export class StageRunner {
  // hooks: { talk(who, text), boss(who, text) } — 화면에 말풍선(없으면 조용히)
  // assist: 도움 단계(0~4) — 거인 체력을 줄이고, 3단계부터 무리를 한 명씩 줄임
  constructor(battle, stage, ai, hooks = {}, assist = 0) {
    this.b = battle; this.stage = stage; this.ai = ai; this.hooks = hooks; this.assist = assist;
    this.done = new Set();
    if (ai) ai.onTalk = (type, info) => {
      const line = bossLine(stage.lines, type, info, LANE_LABEL);
      if (line && hooks.boss) hooks.boss(stage.boss || stage.voice, line); // voice: 보스 판이 아니어도 말하는 상대(11-06)
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
    // trickle: 정해진 간격마다 해골 하나씩(무찌르기 판에서 상대가 끊기지 않게, 11-06)
    const tr = this.stage.trickle;
    if (tr && b.time >= (this.trickT ??= tr.from || tr.every)) {
      this.trickT += tr.every * (1 + 0.1 * this.assist);
      b.spawnFree(1, tr.roles[Math.floor(Math.random() * tr.roles.length)], this.autoLane());
    }
    (this.stage.script || []).forEach((ev, i) => {
      if (this.done.has(i) || b.time < ev.at) return;
      this.done.add(i);
      const lane = (l) => (l && l !== "auto" && LANE_NAMES.includes(l) ? l : this.autoLane());
      if (ev.wave) { const l = lane(ev.wave.lane), rs = ev.wave.roles.slice(0, Math.max(1, ev.wave.roles.length - (this.assist >= 3 ? 1 : 0))); for (const r of rs) b.spawnFree(1, r, l); }
      if (ev.giant) { const g = b.spawnFree(1, "giant", lane(ev.giant)); if (g && this.assist) { g.hp = g.maxHp = Math.round(g.maxHp * (1 - 0.12 * this.assist)); } }
      if (ev.talk && this.hooks.talk) this.hooks.talk(ev.talk[0], ev.talk[1]);
    });
  }
}

// 지면 조금씩 쉽게(학생이 한 스테이지에서 막혀 포기하지 않게): 2번 지면 1단계, 그 뒤 질 때마다 한 단계(최대 4단계)
export const assistLevel = (losses = 0) => (losses >= 2 ? Math.min(4, losses - 1) : 0);
// 캠페인 스테이지의 컴퓨터 상대 설정. hard: 도전 모드(문제를 빨리·잘 푸는 학생용 — 해골이 더 빠르고 영리함, 도움 없음)
export function stageAI(stage, losses = 0, hard = false) {
  const a = { ...stage.ai }, k = hard ? 0 : assistLevel(losses);
  // 도전 모드: 해골도 보통 문제(골드 ×2)를 풀고 더 빠르고 영리함
  if (hard) { a.diff = 1; a.answerEvery *= 0.8; a.accuracy = Math.min(0.95, a.accuracy + 0.06); a.counter = Math.min(0.9, a.counter + 0.3); a.mineTo = Math.max(2, a.mineTo || 1); }
  if (k) { a.answerEvery *= 1 + 0.12 * k; a.accuracy = Math.max(0.6, a.accuracy - 0.03 * k); a.counter *= 1 - 0.12 * k; }
  return a;
}
// 캠페인 스테이지의 전투 설정(도움 단계마다 해골 본성·탑 체력 6%씩 줄임)
export function stageBattle(stage, losses = 0, hard = false) {
  const o = { ...stage.battle }, k = hard ? 0 : assistLevel(losses);
  if (hard) o.baseHp = { ...(o.baseHp || {}), 1: ((o.baseHp && o.baseHp[1]) || 1) * 1.15 };
  // 버티기 판은 해골 본성을 줄여도 소용없으니 우리 본성 체력을 늘림(도움 단계마다 +12%)
  if (k && o.objective && (o.objective.type === "survive" || o.objective.type === "kills")) o.baseHp = { ...(o.baseHp || {}), [-1]: ((o.baseHp && o.baseHp[-1]) || 1) * (1 + 0.12 * k) };
  if (k) {
    o.baseHp = { ...(o.baseHp || {}), 1: ((o.baseHp && o.baseHp[1]) || 1) * (1 - 0.06 * k) };
    o.towerHp = { ...(o.towerHp || {}), 1: ((o.towerHp && o.towerHp[1]) || 1) * (1 - 0.06 * k) };
  }
  return o;
}
