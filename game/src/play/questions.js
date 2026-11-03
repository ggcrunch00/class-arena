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

let seq = 0;
// 같은 문제가 바로 다시 나오지 않게 최근 12개는 피함
const recent = [];
export function makeQuestion(topicKey, diff) {
  const t = TOPICS[topicKey];
  let q;
  for (let i = 0; i < 20; i++) {
    q = t.make(diff);
    if (!recent.includes(q.text)) break;
  }
  recent.push(q.text);
  if (recent.length > 12) recent.shift();
  return { ...q, id: ++seq, topic: topicKey, diff };
}

export function checkAnswer(q, input) {
  const v = Number(String(input).trim());
  return input !== "" && Number.isFinite(v) && v === q.answer;
}
