// 전투 규칙만 여러 판 돌려 승률·판 길이를 잰다(그림 없음)
global.window = {};
require('../game/assets/data.js'.replace('../', __dirname + '/../'));
require(__dirname + '/../game/js/sim.js');
const D = window.GAME_DATA, dur = {};
for (const [k, u] of Object.entries(D.units)) { dur[k] = {}; for (const [a, v] of Object.entries(u.anims)) dur[k][a] = v.dur; }
console.log('durations', JSON.stringify(dur));
const N = +process.argv[2] || 40; const res = { '-1': 0, '1': 0, timeout: 0 }; const lens = [];
const fair = process.argv[3] === 'fair';
for (let i = 0; i < N; i++) {
  const s = new window.Lane.LaneSim(dur); if (fair) s.pace = { '-1': 1, '1': 1 };
  let t = 0; while (s.state === 'play' && t < 300) { s.update(1 / 30); s.events.length = 0; t += 1 / 30; }
  if (s.state === 'play') res.timeout++; else { res[s.winner]++; lens.push(t); }
}
lens.sort((a, b) => a - b);
console.log(JSON.stringify(res), 'median len', lens[lens.length >> 1]?.toFixed(0), 'min', lens[0]?.toFixed(0), 'max', lens[lens.length - 1]?.toFixed(0));
