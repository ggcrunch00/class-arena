// 문제 만들기: 계산 문제 자동 출제 + 문제 은행(bank/*.json, 새로 쓴 낱말 문제).
// 문제 모양: {type: number|choice|ox|tiles, text, prompt, answer, options?, tiles?, reveal?, gk?(골드 종류), word?}
import SAJA from "./bank/saja.json" with { type: "json" };
import SPELL from "./bank/spell.json" with { type: "json" };
import GEO6 from "./bank/geo6.json" with { type: "json" };

// 같은 문제가 바로 다시 나오지 않게 최근 12개는 피함
const recent = [];
// 무작위 수: 보통은 Math.random, "오늘의 도전"에서는 날짜로 정해진 수열(모두 같은 문제가 같은 순서로)
let rnd = Math.random;
export function setSeed(seed) {
  recent.length = 0; // 이전 판 기록이 남으면 문제 순서가 달라짐
  if (seed == null) { rnd = Math.random; return; }
  let a = seed >>> 0;
  rnd = () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1)); // a 이상 b 이하 정수
const pick = (arr) => arr[Math.floor(rnd() * arr.length)];

// 난이도: 0 쉬움, 1 보통, 2 어려움
export const TOPICS = {
  gugu: {
    name: "곱셈구구",
    group: "수학",
    hint: "2단~9단",
    make(diff) {
      if (diff === 0) { const a = pick([2, 3, 4, 5]), b = ri(1, 9); return num(`${a} × ${b}`, a * b); }
      if (diff === 1) { const a = ri(6, 9), b = ri(2, 9); return num(`${a} × ${b}`, a * b); }
      // 어려움: 빈칸 찾기(□ × 7 = 56)
      const a = ri(2, 9), b = ri(2, 9);
      return rnd() < 0.5 ? num(`□ × ${b} = ${a * b}`, a, "□에 들어갈 수") : num(`${a} × □ = ${a * b}`, b, "□에 들어갈 수");
    },
  },
  addsub: {
    name: "덧셈과 뺄셈",
    group: "수학",
    hint: "두 자리~세 자리",
    make(diff) {
      if (diff === 0) { const a = ri(11, 89), b = ri(2, 9); return rnd() < 0.5 ? num(`${a} + ${b}`, a + b) : num(`${a} − ${b}`, a - b); }
      if (diff === 1) { const a = ri(21, 98), b = ri(11, Math.min(89, a - 1)); return rnd() < 0.5 ? num(`${a} + ${b}`, a + b) : num(`${a} − ${b}`, a - b); }
      const a = ri(201, 989), b = ri(102, a - 1); return rnd() < 0.5 ? num(`${a} + ${b}`, a + b) : num(`${a} − ${b}`, a - b);
    },
  },
  muldiv: {
    name: "곱셈과 나눗셈",
    group: "수학",
    hint: "구구 범위~세 자리",
    make(diff) {
      if (diff === 0) { const b = ri(2, 9), q = ri(2, 9); return num(`${b * q} ÷ ${b}`, q); }
      if (diff === 1) { const a = ri(12, 49), b = ri(2, 9); return rnd() < 0.5 ? num(`${a} × ${b}`, a * b) : num(`${a * b} ÷ ${b}`, a); }
      if (rnd() < 0.5) { const a = ri(11, 39), b = ri(11, 25); return num(`${a} × ${b}`, a * b); }
      const b = ri(3, 9), q = ri(21, 99); return num(`${b * q} ÷ ${b}`, q);
    },
  },
  mixed: {
    name: "혼합 계산",
    group: "수학",
    hint: "계산 순서 지키기",
    make(diff) {
      if (diff === 0) { const a = ri(2, 20), b = ri(2, 9), c = ri(2, 9); return rnd() < 0.5 ? num(`${a} + ${b} × ${c}`, a + b * c) : num(`${b * c + a} − ${b} × ${c}`, a); }
      if (diff === 1) { const a = ri(2, 9), b = ri(2, 9), c = ri(2, 6); const d = ri(1, (a + b) * c - 1); return num(`(${a} + ${b}) × ${c} − ${d}`, (a + b) * c - d); }
      const a = ri(3, 9), b = ri(3, 9), d = ri(2, 6), q = ri(2, 9), e = ri(1, 20); const c = d * q;
      const r = a * b - q + e; return num(`${a} × ${b} − ${c} ÷ ${d} + ${e}`, r);
    },
  },
};

// ---------- 5·6학년 수학(자동 출제, 11-04 밤) ----------
// 분수 답은 숫자판으로 쓸 수 없어서 객관식·OX로 냄(정수 답은 숫자판). 분수는 "3/4", 대분수는 "1과 1/2"처럼 씀
const gcd = (a, b) => (b ? gcd(b, a % b) : a), lcm = (a, b) => a / gcd(a, b) * b;
const fr = (n, d) => { const g = gcd(Math.abs(n), Math.abs(d)); return [n / g, d / g]; };
// 1보다 큰 분수는 대분수로("1과 7/12")
const fs = ([n, d]) => (n % d === 0 ? String(n / d) : n > d ? `${jo(Math.floor(n / d), "과")} ${n % d}/${d}` : `${n}/${d}`);
// 수 뒤 조사: 읽는 소리의 받침으로(24 → 이십사 → "와", 16 → 십육 → "과", 분수는 분자를 마지막에 읽음)
const BAT = { 0: 1, 1: 1, 2: 0, 3: 1, 4: 0, 5: 0, 6: 1, 7: 1, 8: 1, 9: 0 };
function jo(x, j) {
  const str = String(x), last = str.includes("/") ? str.split("/")[0].replace(/.*과 /, "") : str;
  const has = /\d0$/.test(last) && !last.includes(".") ? 1 : BAT[last[last.length - 1]] ?? 1;
  const pair = { 과: ["과", "와"], 와: ["과", "와"], 을: ["을", "를"], 를: ["을", "를"], 은: ["은", "는"], 는: ["은", "는"], 이: ["이", "가"], 가: ["이", "가"] }[j];
  return str + (has ? pair[0] : pair[1]);
}
// 분수 문제 보기: 정답 + 흔한 실수(분자·분모끼리 더하기, 약분 안 하기, 하나 차이)
// equiv: 값이 같은 분수(약분 안 한 것)를 오답으로 써도 되는지(“기약분수로” 문제만)
function fracChoice(text, ans, wrongs, diff, format, prompt, equiv = false) {
  const a = fs(ans), seen = new Set([a]), opts = [a];
  const same = ([n, d]) => n * ans[1] === d * ans[0];
  for (const w of shuffle(wrongs.filter((x) => x[1] > 0 && x[0] > 0 && (equiv || !same(x))).map(fs))) { if (opts.length >= (diff === 0 ? 3 : 4)) break; if (!seen.has(w) && !w.includes("-") && !w.startsWith("0")) { seen.add(w); opts.push(w); } }
  for (let k = 1; opts.length < (diff === 0 ? 3 : 4) && k < 9; k++) { const w = fs([ans[0] + k, ans[1]]); if (!seen.has(w)) { seen.add(w); opts.push(w); } }
  if (format === "mix" && rnd() < 0.25 || format === "pick" && rnd() < 0.35) {
    const right = rnd() < 0.5, shown = right ? a : opts[1 + Math.floor(rnd() * (opts.length - 1))];
    const words = /[가-힣]/.test(text);
    return { type: "ox", text: words ? `${text} → ${shown}` : `${text} = ${shown}`, prompt: "맞으면 O, 틀리면 X", answer: right ? "O" : "X", reveal: `${text} → ${a}`, frac: true };
  }
  return { type: "choice", text, prompt: prompt || "알맞은 답을 골라요", answer: a, options: shuffle(opts), reveal: `${text} = ${a}`, frac: true };
}
Object.assign(TOPICS, {
  factor: {
    name: "약수와 배수", group: "수학", hint: "5학년 · 최대공약수·최소공배수", noOX: true,
    make(diff) {
      if (diff === 0) {
        if (rnd() < 0.5) { const n = pick([6, 8, 10, 12, 15, 16, 18, 20, 24, 28, 30, 36]); let c = 0; for (let k = 1; k <= n; k++) if (n % k === 0) c++; return num(`${n}의 약수는 모두 몇 개`, c, "약수의 개수를 써요"); }
        const a = ri(3, 9), k = ri(3, 9); return num(`${a}의 배수 중 ${k}번째 수`, a * k, "배수 찾기");
      }
      const g = ri(2, diff === 1 ? 9 : 12), p = ri(1, 7), q = ri(2, 8);
      const x = g * p, y = g * (gcd(p, q) === 1 && p !== q ? q : q + (q % p === 0 ? 1 : 0));
      if (diff === 1) return num(`${jo(x, "과")} ${y}의 최대공약수`, gcd(x, y));
      const a = ri(4, 15), b0 = ri(4, 18), b = b0 === a ? b0 + 1 : b0;
      return num(`${jo(a, "과")} ${b}의 최소공배수`, lcm(a, b));
    },
  },
  fracadd: {
    name: "분수의 덧셈과 뺄셈", group: "수학", hint: "5학년 · 약분과 통분",
    make(diff, format) {
      if (diff === 0) { // 기약분수로 나타내기
        const d = ri(2, 9), n = ri(1, d - 1), k = ri(2, 6), [a, b] = fr(n, d);
        return fracChoice(`${jo(`${n * k}/${d * k}`, "을")} 기약분수로`, [a, b], [[n * k, d * k], [a * 2, b * 2], [a + 1, b], [a, b + 1]], diff, format === "input" ? "pick" : format, "기약분수로 나타내요", true);
      }
      const b = ri(2, diff === 1 ? 6 : 9), d = ri(2, diff === 1 ? 6 : 10), a = ri(1, b - 1), c = ri(1, d - 1);
      if (gcd(a, b) > 1 || gcd(c, d) > 1) return TOPICS.fracadd.make(diff, format); // 기약분수끼리만
      const plus = diff === 1 || rnd() < 0.5;
      let n = plus ? a * d + c * b : a * d - c * b; const den = b * d;
      if (!plus && n <= 0) return TOPICS.fracadd.make(diff, format);
      const ans = fr(n, den);
      const naive = plus ? [a + c, b + d] : [Math.abs(a - c) || 1, Math.abs(b - d) || 1];
      return fracChoice(`${a}/${b} ${plus ? "+" : "−"} ${c}/${d}`, ans, [naive, [n, den], [ans[0] + 1, ans[1]], [ans[0], ans[1] + 1]], diff, format);
    },
  },
  fracdiv: {
    name: "분수·소수의 나눗셈", group: "수학", hint: "6학년",
    make(diff, format) {
      if (diff === 0) { // (분수) ÷ (자연수)
        const k = ri(2, 6), d = ri(3, 9), n0 = ri(1, d - 1), n = n0 * (rnd() < 0.5 && n0 * k < d ? k : 1), ans = fr(n, d * k);
        if (gcd(n, d) > 1) return TOPICS.fracdiv.make(diff, format);
        return fracChoice(`${n}/${d} ÷ ${k}`, ans, [[n * k, d], [n, d + k], [ans[0] + 1, ans[1]]], diff, format === "input" ? "pick" : format);
      }
      if (diff === 1) { // (분수) ÷ (분수)
        const b = ri(2, 9), d = ri(2, 9), a = ri(1, b - 1), c = ri(1, d - 1), ans = fr(a * d, b * c);
        if (gcd(a, b) > 1 || gcd(c, d) > 1) return TOPICS.fracdiv.make(diff, format);
        if (ans[1] === 1 && format === "input") return num(`${a}/${b} ÷ ${c}/${d}`, ans[0]);
        return fracChoice(`${a}/${b} ÷ ${c}/${d}`, ans, [fr(a * c, b * d), [a + c, b + d], [ans[0] + 1, ans[1]]], diff, format === "input" ? "pick" : format);
      }
      // (소수) ÷ (소수), 몫이 자연수
      const q = ri(2, 9), dv = pick([0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.2, 1.4, 1.5, 1.6, 2.5]), x = Math.round(q * dv * 100) / 100;
      return num(`${x} ÷ ${dv}`, q);
    },
  },
  ratio: {
    name: "비와 비율", group: "수학", hint: "6학년 · 백분율", noOX: true,
    make(diff, format) {
      if (diff === 0) { // 비 → 비율(분수)
        const b = ri(2, 10), a = ri(1, b - 1);
        return fracChoice(`${a} : ${b}의 비율을 분수로`, fr(a, b), [[b, a], [a, a + b], fr(a + 1, b)], diff, format === "input" ? "pick" : format, "비율을 분수로 나타내요");
      }
      if (diff === 1) { const p = pick([5, 10, 20, 25, 40, 50, 60, 75, 80]); return num(`비율 ${jo(p / 100, "을")} 백분율로(%)`, p, "% 앞의 수를 써요"); }
      const whole = pick([20, 25, 40, 50, 80, 200, 400]), p = pick([5, 10, 20, 25, 30, 40, 50, 60, 75].filter((v) => (whole * v) % 100 === 0)); // 사람 수가 자연수인 것만
      return num(`${whole}명 중 ${whole * p / 100}명은 몇 %`, p, "% 앞의 수를 써요");
    },
  },
});

// ---------- 낱말 문제(문제 은행) ----------
// 난이도에 맞는 묶음: 그 난이도 문제를 주로, 가끔(30%) 더 쉬운 것도
function poolFor(items, diff) {
  const exact = items.filter((i) => i.d === diff), lower = items.filter((i) => i.d < diff);
  return lower.length && (rnd() < 0.3 || !exact.length) ? lower : exact;
}
// 최근에 나온 낱말은 피해서 고르기
function pickItem(items, diff, keyOf) {
  const pool = poolFor(items, diff);
  let it;
  for (let i = 0; i < 20; i++) { it = pick(pool); if (!recent.includes(keyOf(it))) break; }
  return it;
}
const syl = (w) => [...w.replace(/\s/g, "")];
// 글자 타일: 정답 글자 + 헷갈리는 글자(틀리기 쉬운 말의 글자 먼저) + 다른 낱말 글자
function makeTiles(answer, extra, others, n) {
  const ans = syl(answer), set = new Set(ans), dec = [];
  for (const c of extra) if (!set.has(c) && !dec.includes(c)) dec.push(c);
  const pool = shuffle(others.flatMap(syl).filter((c) => !set.has(c)));
  for (const c of pool) { if (dec.length >= n) break; if (!dec.includes(c)) dec.push(c); }
  return shuffle([...ans, ...dec.slice(0, n)]);
}
// 형식에 따라 문제 꼴 고르기: [꼴, 비율]
function pickKind(table) { let r = rnd(), last; for (const [k, p] of table) { last = k; if ((r -= p) < 0) return k; } return last; }

const sajaKey = (i) => i.w;
function makeSaja(diff, format) {
  const items = SAJA.items, it = pickItem(items, diff, sajaKey);
  const others = items.filter((o) => o.w !== it.w && (!it.same || o.same !== it.same));
  const reveal = `${it.w}(${it.h}) · ${it.m}`;
  const kind = format === "input" ? "tiles"
    : format === "pick" ? pickKind([["m2w", 0.4], ["w2m", 0.25], ["blank", 0.15], ["ox", 0.2]])
      : pickKind([["tiles", 0.35], ["m2w", 0.2], ["w2m", 0.15], ["blank", 0.1], ["ox", 0.2]]);
  const nOpt = diff === 0 ? 3 : 4;
  const wrongWords = (n) => shuffle(others.slice()).slice(0, n).map((o) => o.w);
  const base = { word: true, key: it.w, reveal };
  if (kind === "tiles") {
    return { ...base, type: "tiles", text: it.m, prompt: "뜻에 맞는 사자성어를 만들어요", answer: it.w,
      tiles: makeTiles(it.w, [], others.map((o) => o.w), diff === 0 ? 2 : 4), options: shuffle([it.w, ...wrongWords(2)]) };
  }
  if (kind === "m2w") {
    return { ...base, type: "choice", text: it.m, prompt: "뜻에 맞는 사자성어를 골라요", answer: it.w, options: shuffle([it.w, ...wrongWords(nOpt - 1)]) };
  }
  if (kind === "w2m") {
    const ms = shuffle(others.slice()).slice(0, 2).map((o) => o.m);
    return { ...base, type: "choice", long: true, text: it.w, prompt: "이 사자성어의 뜻을 골라요", answer: it.m, options: shuffle([it.m, ...ms]) };
  }
  if (kind === "blank") {
    const ch = syl(it.w), at = Math.floor(rnd() * 4), right = ch[at];
    const dec = shuffle(others.flatMap((o) => syl(o.w)).filter((c) => !ch.includes(c)));
    const opts = [right]; for (const c of dec) { if (opts.length >= nOpt) break; if (!opts.includes(c)) opts.push(c); }
    const shown = ch.map((c, i) => (i === at ? "□" : c)).join("");
    return { ...base, type: "choice", text: `${shown} · ${it.m}`, prompt: "□에 알맞은 글자를 골라요", answer: right, options: shuffle(opts) };
  }
  // OX: 사자성어와 뜻이 맞게 짝지어졌나
  const right = rnd() < 0.5, m = right ? it.m : pick(others).m;
  return { ...base, type: "ox", text: `${it.w}: ${m}`, prompt: "뜻이 맞으면 O, 틀리면 X", answer: right ? "O" : "X" };
}

const spellKey = (i) => i.r + i.s;
// 빈칸 문장 은행(맞춤법·사회 등 r/x/s/why 꼴)으로 문제 만들기: 글자 타일·객관식·OX
const makeBlank = (BANK, tilePrompt) => (diff, format) => makeSpell(diff, format, BANK, tilePrompt);
function makeSpell(diff, format, BANK = SPELL, tilePrompt = "빈칸에 들어갈 말을 바르게 만들어요") {
  const items = BANK.items, it = pickItem(items, diff, spellKey);
  const reveal = `${it.r} · ${it.why}`;
  const blank = it.s.replace("＿", "＿＿");
  const tileable = !/\s/.test(it.r) && syl(it.r).length <= 5;
  let kind = format === "input" ? "tiles"
    : format === "pick" ? pickKind([["choice", 0.65], ["ox", 0.35]])
      : pickKind([["tiles", 0.4], ["choice", 0.35], ["ox", 0.25]]);
  if (kind === "tiles" && !tileable) kind = "choice";
  const base = { word: true, key: spellKey(it), reveal };
  if (kind === "tiles") {
    const others = items.filter((o) => o !== it).map((o) => o.r);
    return { ...base, type: "tiles", text: blank, prompt: tilePrompt, answer: it.r,
      tiles: makeTiles(it.r, it.x.flatMap(syl), others, diff === 0 ? 2 : 3), options: shuffle([it.r, ...it.x]) };
  }
  if (kind === "choice") {
    const opts = shuffle([it.r, ...it.x]);
    return { ...base, type: "choice", text: blank, prompt: "빈칸에 알맞은 말을 골라요", answer: it.r, options: opts, gk: opts.length <= 2 ? "ox" : "choice" };
  }
  const right = rnd() < 0.5, w = right ? it.r : pick(it.x);
  return { ...base, type: "ox", text: it.s.replace("＿", `「${w}」`), prompt: "「 」 안의 말이 바르면 O, 틀리면 X", answer: right ? "O" : "X" };
}

TOPICS.saja = { name: SAJA.name, group: "국어", hint: SAJA.hint, words: true, make: makeSaja, bank: SAJA };
TOPICS.spell = { name: SPELL.name, group: "국어", hint: SPELL.hint, words: true, make: makeBlank(SPELL), bank: SPELL, blank: true };
TOPICS.geo6 = { name: GEO6.name, group: "사회", hint: GEO6.hint, words: true, make: makeBlank(GEO6, "빈칸에 들어갈 말을 만들어요"), bank: GEO6, blank: true };

function num(text, answer, prompt = "") {
  return { type: "number", text, answer, prompt };
}

// 문제 형식: 숫자 직접 입력 / 섞어서 / 고르기만(객관식·OX)
export const FORMATS = {
  input: { name: "직접 입력", hint: "숫자판으로 답 쓰기(골드 많이)" },
  mix: { name: "섞어서", hint: "입력·객관식·OX 섞기" },
  pick: { name: "고르기만", hint: "객관식·OX(처음 하는 학생)" },
};

let seq = 0;
export function makeQuestion(topicKey, diff, format = "input") {
  const t = TOPICS[topicKey];
  let q;
  if (t.words) {
    // 낱말 문제는 형식에 맞는 꼴로 바로 만들어짐(같은 낱말은 최근 12개 안에서 피함)
    q = t.make(diff, format);
    recent.push(q.key);
    if (recent.length > 12) recent.shift();
    return { ...q, id: ++seq, topic: topicKey, diff };
  }
  for (let i = 0; i < 20; i++) {
    q = t.make(diff, format);
    if (!recent.includes(q.text)) break;
  }
  recent.push(q.text);
  if (recent.length > 12) recent.shift();
  if (q.type !== "number") return { ...q, id: ++seq, topic: topicKey, diff }; // 분수 문제는 이미 객관식·OX
  const r = rnd();
  if (format === "pick") q = r < 0.65 || t.noOX ? toChoice(q, diff) : toOX(q);
  else if (format === "mix") q = r < 0.5 ? q : r < 0.8 || t.noOX ? toChoice(q, diff) : toOX(q);
  return { ...q, id: ++seq, topic: topicKey, diff };
}

// 그럴듯한 오답(정답 가까운 수, 자리 바꾸기, 10 차이 등)
function nearMisses(ans) {
  const c = new Set([ans + 1, ans - 1, ans + 2, ans - 2, ans + 10, ans - 10]);
  const sw = String(ans).split("").reverse().join("");
  if (sw.length > 1 && sw[0] !== "0") c.add(Number(sw));
  for (const k of [3, 4, 6, 7, 8, 9]) { c.add(ans + k); c.add(ans - k); }
  return [...c].filter((v) => (ans > 0 ? v > 0 : v >= 0) && v !== ans && Number.isInteger(v));
}
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

// 숫자 문제 → 객관식(쉬움 3지선다, 보통·어려움 4지선다)
function toChoice(q, diff) {
  const n = diff === 0 ? 3 : 4;
  const near = shuffle(nearMisses(q.answer));
  // 가까운 것 우선(±1, ±2, 10 차이가 앞에 오도록 조금 섞음)
  const pickFrom = near.sort((a, b) => Math.abs(a - q.answer) - Math.abs(b - q.answer) + (rnd() - 0.5) * 6);
  const opts = shuffle([q.answer, ...pickFrom.slice(0, n - 1)]);
  return { type: "choice", text: q.text, prompt: q.prompt || "알맞은 답을 고르세요", options: opts.map(String), answer: String(q.answer), base: q };
}

// 숫자 문제 → OX(식이 맞으면 O)
function toOX(q) {
  const right = rnd() < 0.5;
  const shown = right ? q.answer : shuffle(nearMisses(q.answer))[0];
  const stmt = q.text.includes("□") ? q.text.replace("□", shown) : `${q.text} = ${shown}`;
  return { type: "ox", text: stmt, prompt: "맞으면 O, 틀리면 X", answer: right ? "O" : "X", base: q };
}

export function checkAnswer(q, input) {
  if (q.type === "tiles") return String(input).replace(/\s/g, "") === String(q.answer).replace(/\s/g, "");
  if (q.type === "choice" || q.type === "ox") return String(input) === String(q.answer);
  const v = Number(String(input).trim());
  return input !== "" && Number.isFinite(v) && v === q.answer;
}

// 틀렸을 때 보여 줄 바른 답
export function answerText(q) {
  if (q.reveal) return q.reveal;
  if (q.type === "ox") return q.answer === "O" ? "O(맞는 식)" : `X · 바른 답은 ${q.base ? q.base.answer : ""}`;
  return String(q.answer);
}
// 문제 줄에 보일 글자
export function questionLine(q) {
  if (q.word) return q.text;
  if (q.type === "ox" || q.text.includes("□") || /[가-힣]/.test(q.text)) return q.text;
  return q.text + " =";
}
