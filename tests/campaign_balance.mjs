// 원정 스테이지마다 학생 흉내로 여러 판 돌려 승률을 잰다(지도·규칙·무리·거인·보스 버릇 읽기 포함).
// 사용: [LOSSES=2] node tests/campaign_balance.mjs [판 수=60] [보통|빠른|느린|모두] [스테이지 id(쉼표)]  (LOSSES: 두 번 진 뒤 도움 켠 상태)
import { readFileSync } from "node:fs";
import { Battle } from "../game/src/play/battle.js";
import { ComputerPlayer } from "../game/src/play/ai.js";
import { useMap } from "../game/src/play/lanes.js";
import { STAGES } from "../game/src/play/campaign.js";
import { StageRunner, stageAI, stageBattle, assistLevel } from "../game/src/play/stage.js";

const dur = JSON.parse(readFileSync(new URL("./durations.json", import.meta.url)));
const N = +process.argv[2] || 60;
const KINDS = {
  보통: { time: [3, 5, 9], acc: [0.95, 0.85, 0.75] },
  빠른: { time: [1.5, 3, 6], acc: [0.98, 0.92, 0.85] },
  느린: { time: [5, 8, 12], acc: [0.85, 0.7, 0.55] },
};
const kinds = !process.argv[3] || process.argv[3] === "모두" ? ["느린", "보통", "빠른"] : [process.argv[3]];
const only = process.argv[4] ? process.argv[4].split(",") : null;
// giant 모형 길이: durations.json에 없으면 해골 전사 것을 씀
const out = [];
for (const st of STAGES) {
  if (only && !only.includes(st.id)) continue;
  useMap(st.map);
  const row = [st.id.padEnd(4), st.name.padEnd(10)];
  for (const k of kinds) {
    let win = 0, len = 0;
    for (let i = 0; i < N; i++) {
      const b = new Battle(dur, stageBattle(st, +(process.env.LOSSES || 0)));
      const R = st.rules;
      const me = new ComputerPlayer(b, -1, { adaptive: KINDS[k], counter: 0.35, mineTo: R.mine === false ? 1 : 2, cannonAt: 2, cannon: R.cannon !== false, roles: R.roles });
      const cpu = new ComputerPlayer(b, 1, stageAI(st, +(process.env.LOSSES || 0)));
      const run = new StageRunner(b, st, cpu, {}, assistLevel(+(process.env.LOSSES || 0)));
      while (b.state === "play") {
        b.update(1 / 20); me.update(1 / 20); cpu.update(1 / 20);
        const ev = b.events; b.events = [];
        run.update(1 / 20, ev);
      }
      if (b.winner === -1) win++;
      len += b.time;
    }
    row.push(`${k} ${String(Math.round(win / N * 100)).padStart(3)}% (${Math.round(len / N)}초)`);
  }
  out.push(row.join(" | "));
  console.log(row.join(" | "));
}
