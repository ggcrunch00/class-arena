// 효과음: 파일 없이 코드로 만든 짧은 소리(Web Audio). 첫 터치 뒤에만 소리가 남(브라우저 규칙).
const KEY = "classArena.sound";
let ctx = null, master = null;
let on = true;
try { on = localStorage.getItem(KEY) !== "0"; } catch { /* 기본은 켜짐 */ }
const last = {};

export const Sound = {
  get on() { return on; },
  get ctx() { return ctx; },
  set(v) { on = v; try { localStorage.setItem(KEY, v ? "1" : "0"); } catch { /* 무시 */ } },
  unlock() {
    if (ctx) { if (ctx.state === "suspended") ctx.resume(); return; }
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain(); master.gain.value = 0.35; master.connect(ctx.destination);
    } catch { ctx = null; }
  },
  quiet: false, // 시작 화면 뒤 전투처럼 소리 없이 보여 줄 때
  play(name) {
    if (!on || !ctx || Sound.quiet) return;
    const now = ctx.currentTime;
    if (last[name] && now - last[name] < (GAP[name] || 0)) return; // 같은 소리가 너무 겹치지 않게
    last[name] = now;
    (S[name] || (() => {}))(now);
  },
};
const GAP = { hit: 0.06, castle: 0.12, deploy: 0.05 };

function tone(t, f0, f1, len, type = "sine", vol = 0.5) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + len);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + len);
  o.connect(g); g.connect(master); o.start(t); o.stop(t + len + 0.02);
}
function noise(t, len, vol = 0.4, freq = 1200, q = 0.8) {
  const n = ctx.sampleRate * len, buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
  const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = buf; f.type = "bandpass"; f.frequency.value = freq; f.Q.value = q; g.gain.value = vol;
  s.connect(f); f.connect(g); g.connect(master); s.start(t);
}
const S = {
  right: (t) => { tone(t, 660, 660, 0.09, "triangle", 0.4); tone(t + 0.08, 990, 990, 0.16, "triangle", 0.4); },
  wrong: (t) => { tone(t, 220, 150, 0.25, "square", 0.18); },
  skip: (t) => { tone(t, 440, 330, 0.12, "sine", 0.2); },
  tap: (t) => { tone(t, 880, 990, 0.05, "triangle", 0.18); },
  talk: (t) => { tone(t, 587, 587, 0.07, "triangle", 0.2); tone(t + 0.08, 784, 784, 0.09, "triangle", 0.2); },
  coin: (t) => { tone(t, 1320, 1760, 0.08, "square", 0.12); },
  deploy: (t) => { noise(t, 0.18, 0.35, 500, 0.6); tone(t, 180, 90, 0.15, "sine", 0.4); },
  hit: (t) => { noise(t, 0.07, 0.25, 2400, 1.2); },
  counter: (t) => { noise(t, 0.09, 0.3, 3200, 1.5); tone(t, 900, 1300, 0.1, "square", 0.08); },
  castle: (t) => { tone(t, 120, 60, 0.25, "sine", 0.5); noise(t, 0.15, 0.2, 400); },
  cannon: (t) => { tone(t, 90, 40, 0.6, "sine", 0.8); noise(t, 0.5, 0.5, 300, 0.4); },
  magic: (t) => { tone(t, 500, 1200, 0.2, "sine", 0.15); },
  arrow: (t) => { noise(t, 0.08, 0.15, 5000, 2); },
  mine: (t) => { tone(t, 523, 523, 0.1, "triangle", 0.3); tone(t + 0.1, 659, 659, 0.1, "triangle", 0.3); tone(t + 0.2, 784, 784, 0.2, "triangle", 0.3); },
  horn: (t) => { tone(t, 220, 220, 0.5, "sawtooth", 0.12); tone(t + 0.5, 294, 294, 0.6, "sawtooth", 0.12); },
  win: (t) => { [523, 659, 784, 1047].forEach((f, i) => tone(t + i * 0.13, f, f, 0.25, "triangle", 0.35)); },
  lose: (t) => { [392, 330, 262].forEach((f, i) => tone(t + i * 0.2, f, f * 0.98, 0.3, "triangle", 0.3)); },
};
