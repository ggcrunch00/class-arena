// 배경 음악: 파일 없이 코드로 만드는 중세풍 행진곡(북·베이스·멜로디). 총력전엔 빨라짐.
// 첫 터치 뒤에만 소리가 남(브라우저 규칙). 설정에서 끌 수 있고 기기에 기억.
import { Sound } from "./sound.js";

const KEY = "classArena.music";
let on = true;
try { on = localStorage.getItem(KEY) !== "0"; } catch { /* 기본 켜짐 */ }

// 음 높이(미디 번호 → 주파수)
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
// 곡(테마): 8마디 화음 뿌리음(미디) + 마디마다 8분음표 멜로디(null은 쉼).
// maj: 장화음으로 쌓을 뿌리음, kick·snare: 16분음표 자리, hat: "off"(엇박 8분)·"eighth"·"none", echo: 멜로디를 조금 늦게 작게 한 번 더(메아리)
// 11-06: 원정 보스마다 따로 곡(덜컥 익살·살랑 살금살금·회색깃 신비·철골 묵직·모로 슬픈 장중·안개 그림자 메아리)
const THEMES = {
  march: { bpm: 104, roots: [50, 48, 46, 48, 50, 53, 48, 50], maj: [48, 46, 53], lead: "square", leadVol: 0.05, leadLen: 0.22,
    mel: [[74, null, 77, null, 81, null, 77, 74], [72, null, 76, null, 79, null, 76, null], [70, null, 74, 77, 74, null, 70, null], [72, 74, 76, null, 79, null, 76, 74],
      [74, null, 77, null, 81, 79, 77, null], [77, null, 81, null, 84, null, 81, 77], [76, null, 72, null, 79, 77, 76, null], [74, null, null, null, 69, null, 74, null]] },
  deolkeok: { bpm: 116, roots: [53, 48, 50, 46, 53, 48, 46, 48], maj: [53, 48, 46], lead: "square", leadVol: 0.05, leadLen: 0.12,
    mel: [[77, null, 81, 77, 72, null, 77, null], [76, null, 79, 76, 72, null, 76, null], [74, 77, 81, null, 77, 74, null, null], [70, null, 74, 77, 82, null, 77, null],
      [77, 79, 81, null, 84, null, 81, 77], [79, null, 76, null, 72, 74, 76, null], [74, null, 77, 74, 70, null, 74, null], [76, null, 79, null, 72, null, null, null]] },
  sallang: { bpm: 100, roots: [52, 52, 48, 50, 52, 52, 47, 47], maj: [48, 50, 47], lead: "triangle", leadVol: 0.09, leadLen: 0.1, kick: [0, 10], snare: [], hat: "eighth",
    mel: [[76, null, null, 75, 76, null, 79, null], [null, 78, null, 76, null, 74, null, null], [72, null, 76, null, 79, null, 76, 72], [74, null, 78, null, 81, null, 78, null],
      [76, null, null, 75, 76, null, 83, null], [null, 81, null, 79, null, 78, null, 76], [75, null, 78, null, 81, null, 78, 75], [71, null, null, null, 75, null, null, null]] },
  hoesaek: { bpm: 92, roots: [45, 43, 45, 50, 45, 43, 41, 40], maj: [43, 50, 41, 40], lead: "sine", leadVol: 0.11, leadLen: 0.9, kick: [0], snare: [], hat: "none", pad: 1.6,
    mel: [[81, null, null, null, 76, null, null, null], [79, null, null, 74, null, null, 79, null], [81, null, 84, null, 83, null, 81, null], [78, null, null, null, 74, null, null, null],
      [76, null, null, 81, null, null, 79, null], [74, null, 79, null, 83, null, null, null], [77, null, 76, null, 72, null, null, null], [76, null, null, null, 68, null, null, null]] },
  cheolgol: { bpm: 96, roots: [48, 48, 44, 43, 48, 48, 41, 43], maj: [44, 43], lead: "sawtooth", leadVol: 0.035, leadLen: 0.2, kick: [0, 4, 8, 12], snare: [4, 12], bass: "sawtooth",
    mel: [[72, null, 72, 75, null, 72, 79, null], [77, null, 75, null, 72, null, null, null], [68, null, 72, 75, null, 72, 68, null], [67, null, 71, null, 74, null, null, null],
      [72, null, 72, 75, null, 72, 79, null], [80, null, 79, null, 75, null, 72, null], [77, null, 72, null, 68, null, 72, null], [71, null, 74, null, 67, null, null, null]] },
  moro: { bpm: 84, roots: [50, 46, 43, 45, 50, 46, 45, 50], maj: [46, 45], lead: "triangle", leadVol: 0.1, leadLen: 0.5, kick: [0, 8], snare: [12], hat: "none", pad: 1.5,
    mel: [[74, null, null, 77, 76, null, 74, null], [77, null, null, 74, 70, null, null, null], [79, null, 77, null, 74, null, 70, null], [73, null, null, 76, 81, null, null, null],
      [86, null, null, 84, 82, null, 81, null], [82, null, null, 81, 77, null, 74, null], [76, null, 73, null, 76, null, 81, null], [74, null, null, null, null, null, null, null]] },
  geurimja: { bpm: 100, roots: [47, 43, 50, 45, 47, 43, 42, 42], maj: [43, 50, 45, 42], lead: "triangle", leadVol: 0.09, leadLen: 0.3, kick: [0, 10], snare: [8], echo: true,
    mel: [[83, null, null, 78, null, null, 74, null], [79, null, null, 74, null, null, 71, null], [78, null, null, 74, null, null, 69, null], [76, null, null, 73, null, null, 69, null],
      [83, null, null, 86, null, null, 85, null], [83, null, null, 79, null, null, 74, null], [78, null, null, 82, null, null, 85, null], [78, null, null, null, null, null, null, null]] },
};
let T = THEMES.march;

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
  const bar = Math.floor(i / 16) % 8, s16 = i % 16, root = T.roots[bar];
  if ((T.kick || [0, 8]).includes(s16)) kick(t);
  if ((T.snare || [4, 12]).includes(s16)) hit(t, 0.12, 1800, 0.35);
  const hat = T.hat || "off";
  if (intense ? s16 % 2 === 0 : hat === "eighth" ? s16 % 2 === 0 : hat === "off" ? s16 % 4 === 2 : false) hit(t, 0.04, 7000, intense ? 0.12 : 0.08);
  if (s16 % 4 === 0) voice(t, hz(root - 12), 0.32, T.bass || "triangle", T.bass ? 0.12 : 0.32);
  if (s16 % 2 === 0) {
    const m = T.mel[bar][s16 / 2];
    if (m) { voice(t, hz(m), T.leadLen, T.lead, T.leadVol); if (T.echo) voice(t + 60 / bpm * 0.75, hz(m), T.leadLen, "sine", T.leadVol * 0.45); }
  }
  if (s16 === 0) { const p = T.pad || 1; voice(t, hz(root + 12), 1.6 * p, "sawtooth", 0.018); voice(t, hz(root + 12 + (T.maj.includes(root) ? 4 : 3)), 1.6 * p, "sawtooth", 0.014); }
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
  intense(v) { this.fast = v; bpm = Math.round(T.bpm * (v ? 1.23 : 1)); },
  // 곡 바꾸기(원정 보스 판이면 그 보스 곡, 아니면 행진곡). 마디 처음부터 새 곡
  theme(name) { const n = THEMES[name] || THEMES.march; if (n === T) return; T = n; step = 0; bpm = Math.round(T.bpm * (this.fast ? 1.23 : 1)); },
  get themes() { return Object.keys(THEMES); },
  duck(v) { duck = v ? 0.35 : 1; const ctx = Sound.ctx; if (ctx && gain && playing) gain.gain.setTargetAtTime(0.13 * duck, ctx.currentTime, 0.2); },
};
