// 문제 만들기. 지금은 저작권 걱정 없는 "계산 문제 자동 출제"만 있음.
// 나중에 문제 은행(성취기준별 꾸러미)이 생기면 같은 모양({type, text, answer, diff})으로 넣으면 됨.

const ri = (a, b) => a + Math.floor(Math.random() * (b - a + 1)); // a 이상 b 이하 정수
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// 난이도: 0 쉬움, 1 보통, 2 어려움
export const TOPICS = {
  gugu: {
    name: "곱셈구구",
    hint: "2단~9단",
    make(diff) {
      if (diff === 0) { const a = pick([2, 3, 4, 5]), b = ri(1, 9); return num(`${a} × ${b}`, a * b); }
      if (diff === 1) { const a = ri(6, 9), b = ri(2, 9); return num(`${a} × ${b}`, a * b); }
      // 어려움: 빈칸 찾기(□ × 7 = 56)
      const a = ri(2, 9), b = ri(2, 9);
      return Math.random() < 0.5 ? num(`□ × ${b} = ${a * b}`, a, "□에 들어갈 수") : num(`${a} × □ = ${a * b}`, b, "□에 들어갈 수");
    },
  },
  addsub: {
    name: "덧셈과 뺄셈",
    hint: "두 자리~세 자리",
    make(diff) {
      if (diff === 0) { const a = ri(11, 89), b = ri(2, 9); return Math.random() < 0.5 ? num(`${a} + ${b}`, a + b) : num(`${a} − ${b}`, a - b); }
      if (diff === 1) { const a = ri(21, 98), b = ri(11, Math.min(89, a - 1)); return Math.random() < 0.5 ? num(`${a} + ${b}`, a + b) : num(`${a} − ${b}`, a - b); }
      const a = ri(201, 989), b = ri(102, a - 1); return Math.random() < 0.5 ? num(`${a} + ${b}`, a + b) : num(`${a} − ${b}`, a - b);
    },
  },
  muldiv: {
    name: "곱셈과 나눗셈",
    hint: "구구 범위~세 자리",
    make(diff) {
      if (diff === 0) { const b = ri(2, 9), q = ri(2, 9); return num(`${b * q} ÷ ${b}`, q); }
      if (diff === 1) { const a = ri(12, 49), b = ri(2, 9); return Math.random() < 0.5 ? num(`${a} × ${b}`, a * b) : num(`${a * b} ÷ ${b}`, a); }
      if (Math.random() < 0.5) { const a = ri(11, 39), b = ri(11, 25); return num(`${a} × ${b}`, a * b); }
      const b = ri(3, 9), q = ri(21, 99); return num(`${b * q} ÷ ${b}`, q);
    },
  },
  mixed: {
    name: "혼합 계산",
    hint: "계산 순서 지키기",
    make(diff) {
      if (diff === 0) { const a = ri(2, 20), b = ri(2, 9), c = ri(2, 9); return Math.random() < 0.5 ? num(`${a} + ${b} × ${c}`, a + b * c) : num(`${b * c + a} − ${b} × ${c}`, a); }
      if (diff === 1) { const a = ri(2, 9), b = ri(2, 9), c = ri(2, 6); const d = ri(1, (a + b) * c - 1); return num(`(${a} + ${b}) × ${c} − ${d}`, (a + b) * c - d); }
      const a = ri(3, 9), b = ri(3, 9), d = ri(2, 6), q = ri(2, 9), e = ri(1, 20); const c = d * q;
      const r = a * b - q + e; return num(`${a} × ${b} − ${c} ÷ ${d} + ${e}`, r);
    },
  },
};

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
// 같은 문제가 바로 다시 나오지 않게 최근 12개는 피함
const recent = [];
export function makeQuestion(topicKey, diff, format = "input") {
  const t = TOPICS[topicKey];
  let q;
  for (let i = 0; i < 20; i++) {
    q = t.make(diff);
    if (!recent.includes(q.text)) break;
  }
  recent.push(q.text);
  if (recent.length > 12) recent.shift();
  const r = Math.random();
  if (format === "pick") q = r < 0.65 ? toChoice(q, diff) : toOX(q);
  else if (format === "mix") q = r < 0.5 ? q : r < 0.8 ? toChoice(q, diff) : toOX(q);
  return { ...q, id: ++seq, topic: topicKey, diff };
}

// 그럴듯한 오답(정답 가까운 수, 자리 바꾸기, 10 차이 등)
function nearMisses(ans) {
  const c = new Set([ans + 1, ans - 1, ans + 2, ans - 2, ans + 10, ans - 10]);
  const sw = String(ans).split("").reverse().join("");
  if (sw.length > 1 && sw[0] !== "0") c.add(Number(sw));
  for (const k of [3, 4, 6, 7, 8, 9]) { c.add(ans + k); c.add(ans - k); }
  return [...c].filter((v) => v >= 0 && v !== ans && Number.isInteger(v));
}
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

// 숫자 문제 → 객관식(쉬움 3지선다, 보통·어려움 4지선다)
function toChoice(q, diff) {
  const n = diff === 0 ? 3 : 4;
  const near = shuffle(nearMisses(q.answer));
  // 가까운 것 우선(±1, ±2, 10 차이가 앞에 오도록 조금 섞음)
  const pickFrom = near.sort((a, b) => Math.abs(a - q.answer) - Math.abs(b - q.answer) + (Math.random() - 0.5) * 6);
  const opts = shuffle([q.answer, ...pickFrom.slice(0, n - 1)]);
  return { type: "choice", text: q.text, prompt: q.prompt || "알맞은 답을 고르세요", options: opts.map(String), answer: String(q.answer), base: q };
}

// 숫자 문제 → OX(식이 맞으면 O)
function toOX(q) {
  const right = Math.random() < 0.5;
  const shown = right ? q.answer : shuffle(nearMisses(q.answer))[0];
  const stmt = q.text.includes("□") ? q.text.replace("□", shown) : `${q.text} = ${shown}`;
  return { type: "ox", text: stmt, prompt: "맞으면 O, 틀리면 X", answer: right ? "O" : "X", base: q };
}

export function checkAnswer(q, input) {
  if (q.type === "choice" || q.type === "ox") return String(input) === String(q.answer);
  const v = Number(String(input).trim());
  return input !== "" && Number.isFinite(v) && v === q.answer;
}

// 틀렸을 때 보여 줄 바른 답
export function answerText(q) {
  if (q.type === "ox") return q.answer === "O" ? "O(맞는 식)" : `X · 바른 답은 ${q.base ? q.base.answer : ""}`;
  return String(q.answer);
}
// 문제 줄에 보일 글자
export function questionLine(q) {
  if (q.type === "ox" || q.text.includes("□")) return q.text;
  return q.text + " =";
}
