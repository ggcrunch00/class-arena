// 학생(흉내) 대 컴퓨터 3단계를 여러 판 돌려 승률·판 길이를 잰다. 사용: node tests/balance_play.mjs [판 수]
import { readFileSync } from "node:fs";
import { Battle } from "../game/src/play/battle.js";
import { ComputerPlayer } from "../game/src/play/ai.js";
import { AI_LEVELS } from "../game/src/play/config.js";
import { useMap } from "../game/src/play/lanes.js";
const MAPK = process.argv[3] || "diag"; useMap(MAPK); console.log("지도:", MAPK);
const dur = JSON.parse(readFileSync(new URL("./durations.json", import.meta.url)));
const N = +process.argv[2] || 150;
// 학생 모습(11-04 A안): 난이도는 게임이 정함(5연속 정답 → 올림, 2번 틀림 → 내림).
// 난이도마다 문제당 평균 시간(초)·정답률이 다름. 사용: node tests/balance_play.mjs [판 수] [지도] [보통|빠른|느린]
const KINDS = {
  보통: { time: [3, 5, 9], acc: [0.95, 0.85, 0.75] },
  빠른: { time: [1.5, 3, 6], acc: [0.98, 0.92, 0.85] },
  느린: { time: [5, 8, 12], acc: [0.85, 0.7, 0.55] },
};
const KIND = process.argv[4] || "보통"; console.log("학생:", KIND, JSON.stringify(KINDS[KIND]));
AI_LEVELS.student = { name: "학생", adaptive: KINDS[KIND], counter: 0.35, mineTo: 2, cannonAt: 2 };
for (const lv of (process.env.LV || "recruit,knight,general,warlord").split(",")) {
  let win = 0, lose = 0, draw = 0, lens = [], dep = [0, 0], timeEnd = 0, towers = [0, 0], gold = [0, 0], dsum = [0, 0, 0];
  for (let i = 0; i < N; i++) {
    const b = new Battle(dur), me = new ComputerPlayer(b, -1, "student"), cpu = new ComputerPlayer(b, 1, lv);
    while (b.state === "play") { b.update(1 / 20); me.update(1 / 20); cpu.update(1 / 20); b.events.length = 0; dsum[me.d || 0]++; }
    gold[0] += b.sides[-1].stats.goldEarned / b.time * 60; gold[1] += b.sides[1].stats.goldEarned / b.time * 60;
    if (b.winner === -1) win++; else if (b.winner === 1) lose++; else draw++;
    if (b.endWhy === "time") timeEnd++;
    lens.push(b.time); dep[0] += b.sides[-1].stats.deployed; dep[1] += b.sides[1].stats.deployed;
    towers[0] += Object.values(b.sides[1].towers).filter((t) => !t.alive).length; towers[1] += Object.values(b.sides[-1].towers).filter((t) => !t.alive).length;
  }
  lens.sort((a, c) => a - c);
  console.log(`${AI_LEVELS[lv].name}: 학생 승 ${Math.round(win / N * 100)}% 패 ${Math.round(lose / N * 100)}% 무 ${Math.round(draw / N * 100)}% | 시간 끝 ${Math.round(timeEnd / N * 100)}% | 판 길이 중앙 ${Math.round(lens[N >> 1])}초 (${Math.round(lens[0])}~${Math.round(lens[N - 1])}) | 출전 평균 학생 ${(dep[0] / N).toFixed(0)} 컴 ${(dep[1] / N).toFixed(0)} | 부순 탑 학생 ${(towers[0] / N).toFixed(1)} 컴 ${(towers[1] / N).toFixed(1)} | 분당 골드 학생 ${(gold[0] / N).toFixed(0)} 컴 ${(gold[1] / N).toFixed(0)} | 난이도 시간 비율 ${dsum.map((v) => Math.round(v / (dsum[0] + dsum[1] + dsum[2]) * 100)).join("/")}%`);
}
