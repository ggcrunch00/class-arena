// 배경 음악: 파일 없이 코드로 만드는 중세풍 행진곡(북·베이스·멜로디). 총력전엔 빨라짐.
// 첫 터치 뒤에만 소리가 남(브라우저 규칙). 설정에서 끌 수 있고 기기에 기억.
import { Sound } from "./sound.js";

const KEY = "classArena.music";
let on = true;
try { on = localStorage.getItem(KEY) !== "0"; } catch { /* 기본 켜짐 */ }

// 음 높이(미디 번호 → 주파수)
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
// 8마디 화음: D단조 느낌(Dm C B♭ C | Dm F C Dm)
const ROOTS = [50, 48, 46, 48, 50, 53, 48, 50];
// 멜로디(16분음표 자리마다, null은 쉼). 마디마다 화음 위 5음계
const MEL = [
  [74, null, 77, null, 81, null, 77, 74], [72, null, 76, null, 79, null, 76, null], [70, null, 74, 77, 74, null, 70, null], [72, 74, 76, null, 79, null, 76, 74],
  [74, null, 77, null, 81, 79, 77, null], [77, null, 81, null, 84, null, 81, 77], [76, null, 72, null, 79, 77, 76, null], [74, null, null, null, 69, null, 74, null],
];

let gain = null, timer = null, nextT = 0, step = 0, bpm = 104, playing = false, duck = 1;

function voice(t, f, len, type, vol) {
  const ctx = Sound.ctx, o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(f, t);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  o.connect(g); g.connect(gain); o.start(t); o.stop(t + len + 0.03);
}
function kick(t) {
  const ctx = Sound.ctx, o = ctx.createOscillator(), g = ctx.createGain();
  o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.18);
  g.gain.setValueAtTime(0.9, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
  o.connect(g); g.connect(gain); o.start(t); o.stop(t + 0.25);
}
let noiseBuf = null;
function hit(t, len, freq, vol) {
  const ctx = Sound.ctx;
  if (!noiseBuf) { const n = ctx.sampleRate * 0.3; noiseBuf = ctx.createBuffer(1, n, ctx.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1; }
  const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = noiseBuf; f.type = "bandpass"; f.frequency.value = freq; g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + len);
  s.connect(f); f.connect(g); g.connect(gain); s.start(t); s.stop(t + len + 0.02);
}

// 16분음표 하나 소리 내기
function tick(t, i, intense) {
  const bar = Math.floor(i / 16) % 8, s16 = i % 16, root = ROOTS[bar];
  if (s16 % 8 === 0) kick(t);
  if (s16 === 4 || s16 === 12) hit(t, 0.12, 1800, 0.35);
  if (intense ? s16 % 2 === 0 : s16 % 4 === 2) hit(t, 0.04, 7000, intense ? 0.12 : 0.08);
  if (s16 % 4 === 0) voice(t, hz(root - 12), 0.32, "triangle", 0.32);
  if (s16 % 2 === 0) { const m = MEL[bar][s16 / 2]; if (m) voice(t, hz(m), 0.22, "square", 0.05); }
  if (s16 === 0) { voice(t, hz(root + 12), 1.6, "sawtooth", 0.018); voice(t, hz(root + 15 + (root === 53 ? 1 : 0)), 1.6, "sawtooth", 0.014); }
}

export const Music = {
  get on() { return on; },
  set(v) { on = v; try { localStorage.setItem(KEY, v ? "1" : "0"); } catch { /* 무시 */ } if (!v) this.stop(); },
  start() {
    const ctx = Sound.ctx;
    if (!on || !ctx || playing) return;
    if (!gain) { gain = ctx.createGain(); gain.gain.value = 0.0001; gain.connect(ctx.destination); }
    playing = true; nextT = ctx.currentTime + 0.1; step = 0;
    gain.gain.cancelScheduledValues(ctx.currentTime);
    gain.gain.setTargetAtTime(0.13 * duck, ctx.currentTime, 0.4);
    timer = setInterval(() => {
      const c = Sound.ctx; if (!c) return;
      while (nextT < c.currentTime + 0.15) { tick(nextT, step, bpm > 110); nextT += 60 / bpm / 4; step++; }
    }, 30);
  },
  stop() {
    if (!playing) return;
    playing = false; clearInterval(timer);
    const ctx = Sound.ctx; if (ctx && gain) gain.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.2);
  },
  intense(v) { bpm = v ? 128 : 104; },
  duck(v) { duck = v ? 0.35 : 1; const ctx = Sound.ctx; if (ctx && gain && playing) gain.gain.setTargetAtTime(0.13 * duck, ctx.currentTime, 0.2); },
};
