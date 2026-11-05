// 문제 자동 검수(1차): 문제 은행(bank/*.json)과 실제로 만들어지는 문제를 함께 살펴봄.
// 사용: node tools/check_bank.mjs [--n 400] [--out 보고서.md] [--avoid 피할문장.txt]
//   --n      주제·난이도·형식마다 만들어 볼 문제 수(기본 400)
//   --out    마크다운 보고서를 파일로도 남김
//   --avoid  겹치면 안 되는 문장 목록(한 줄에 하나, 저장소에는 올리지 않는 파일). 10글자 넘게 같으면 알림
// 오류(✖)가 하나라도 있으면 끝 상태 1. 알림(△)은 사람이 한 번 보면 되는 것.
import fs from "node:fs";
import { TOPICS, FORMATS, makeQuestion, checkAnswer, answerText, setSeed } from "../game/src/play/questions.js";

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const N = +opt("--n", 400), OUT = opt("--out"), AVOID = opt("--avoid");

const errors = [], warns = [], notes = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warns.push(`${where}: ${msg}`);
const len = (s) => [...String(s)].length;

// ---------- 기준 ----------
const LIMIT = {
  meaning: 22, // 사자성어 뜻(긴 보기 한 줄). 1366×650·둘이서 화면에서 넘치지 않은 최대 길이 근처
  sentence: 24, // 맞춤법 문장(빈칸 포함, 문제 글자 두 줄 안)
  sentenceLong: 46, // 교과형 문장(세 줄, 30글자 넘으면 작은 글씨)
  word: 6, // 객관식 낱말 보기 한 칸
  tiles: 9, // 글자 타일 수(숫자키 1~9로 누름)
};
const HAEYO = /(요|요\.|요\?|요!)$/; // 해요체 끝
const NOT_HAEYO = /(습니다|합니다|입니다|십시오|하시오|하라|[^요]다)[.!?]?$/;
// 학생 글에 쓰지 않는 말(앞뒤 글자로 걸러야 하는 것은 정규식: 설거지의 "거지" 등)
const BAN = ["바보", "멍청", "병신", "찐따", "뚱뚱", "못생", /(?<![설근])거지/, "죽여", "자살", "꺼져", "닥쳐"];
// 뜻풀이 낱말이 겹치지만 사람이 보고 서로 오답 보기로 나와도 괜찮다고 한 짝
const REVIEWED = new Set([]); // 예: "전화위복·금상첨화"
const HANGUL = /^[가-힣]+$/, HANJA = /^[㐀-鿿豈-﫿]+$/;

// ---------- 1. 문제 은행 자료 ----------
const SAJA = TOPICS.saja.bank, SPELL = TOPICS.spell.bank;
function checkCommon(bank, items, name) {
  const [g0, g1] = bank.grades;
  items.forEach((it, i) => {
    const at = `${name} ${i + 1}번(${it.w || it.r})`;
    if (![0, 1, 2].includes(it.d)) err(at, `난이도 d=${it.d}(0~2만)`);
    if (!(it.g >= g0 && it.g <= g1)) err(at, `학년 g=${it.g}(${g0}~${g1}학년 밖)`);
    else if (bank.kind === "단계형" && it.g < g0 + it.d) warn(at, `난이도 ${it.d}인데 ${it.g}학년 낱말이에요(보통 d0=3학년, d1=4학년, d2=5학년 이상)`);
  });
  for (const d of [0, 1, 2]) {
    const c = items.filter((i) => i.d === d).length;
    // 최근 12개를 피하므로 한 난이도에 13개 넘게 있어야 같은 낱말이 덜 겹침
    if (c < 13) warn(name, `난이도 ${d} 문제가 ${c}개뿐이에요(13개 넘게 권장)`);
  }
}
function checkBan(at, s) { for (const b of BAN) { const m = String(s).match(b instanceof RegExp ? b : new RegExp(b)); if (m) err(at, `쓰지 않는 말 "${m[0]}"`); } }

// 사자성어
checkCommon(SAJA, SAJA.items, "사자성어");
{
  const byW = new Map(), byM = new Map(), groups = {};
  SAJA.items.forEach((it, i) => {
    const at = `사자성어 ${i + 1}번(${it.w})`;
    if (!HANGUL.test(it.w) || len(it.w) !== 4) err(at, "사자성어는 한글 4글자여야 해요");
    if (!HANJA.test(it.h) || len(it.h) !== 4) err(at, `한자 "${it.h}"가 4글자 한자가 아니에요`);
    if (!it.m) err(at, "뜻이 비었어요");
    else if (len(it.m) > LIMIT.meaning) warn(at, `뜻이 ${len(it.m)}글자예요(${LIMIT.meaning}글자 넘으면 긴 보기가 넘칠 수 있어요)`);
    if (/[.!?]$/.test(it.m)) warn(at, "뜻은 보기로 쓰여서 문장부호 없이 끝내요");
    checkBan(at, it.m);
    if (byW.has(it.w)) err(at, `${byW.get(it.w)}번과 같은 사자성어`); else byW.set(it.w, i + 1);
    if (byM.has(it.m)) err(at, `${byM.get(it.m)}번과 뜻풀이가 똑같아요`); else byM.set(it.m, i + 1);
    if (it.same) (groups[it.same] ||= []).push(it.w);
  });
  for (const [g, ws] of Object.entries(groups)) if (ws.length < 2) warn(`같은 뜻 묶음 ${g}`, `${ws.join("")} 하나뿐이에요(묶음은 둘 이상)`);
  // 묶음 밖인데 뜻풀이가 많이 겹치면(두 글자 조각 기준) → 같은 뜻 묶음에 넣어야 할지 사람이 보기.
  // 0.38은 지금 은행에서 묶음 짝 절반을 잡고 묶음 아닌 짝은 하나도 안 잡는 값(완벽하지 않음)
  const bi = (m) => { const c = [...m.replace(/\s/g, "")], b = new Set(); for (let i = 0; i + 1 < c.length; i++) b.add(c[i] + c[i + 1]); return b; };
  const its = SAJA.items;
  for (let a = 0; a < its.length; a++) for (let b = a + 1; b < its.length; b++) {
    const A = its[a], B = its[b];
    if ((A.same && A.same === B.same) || REVIEWED.has(`${A.w}·${B.w}`)) continue;
    const ba = bi(A.m), bb = bi(B.m), common = [...ba].filter((x) => bb.has(x));
    if (common.length / Math.min(ba.size, bb.size) >= 0.38)
      warn(`사자성어 ${A.w}·${B.w}`, `뜻풀이가 비슷해요(${common.join(", ")}) → 같은 뜻 묶음(same)에 넣을지 보기`);
  }
}

// 빈칸 문장 은행(맞춤법·사회 …)
const BLANKS = Object.values(TOPICS).filter((t) => t.blank).map((t) => t.bank);
for (const BK of BLANKS) {
  checkCommon(BK, BK.items, BK.name);
  const seen = new Map();
  BK.items.forEach((it, i) => {
    const at = `${BK.name} ${i + 1}번(${it.r})`;
    const blanks = (it.s.match(/＿/g) || []).length;
    if (blanks !== 1) err(at, `문장에 빈칸(＿)이 ${blanks}개예요(1개여야 해요)`);
    if (!Array.isArray(it.x) || !it.x.length) err(at, "틀리기 쉬운 말(x)이 없어요");
    else {
      if (it.x.includes(it.r)) err(at, "틀리기 쉬운 말에 바른 말이 들어 있어요(정답이 둘이 됨)");
      if (new Set(it.x).size !== it.x.length) err(at, "틀리기 쉬운 말이 겹쳐요");
      for (const x of it.x) if (x.replace(/\s/g, "") === it.r.replace(/\s/g, "")) err(at, `"${x}"는 띄어쓰기만 달라서 글자 타일로는 정답과 같아져요`);
      if (it.x.length > 3) warn(at, "틀리기 쉬운 말이 많아요(보기 4개 넘음)");
    }
    const full = it.s.replace("＿", it.r);
    if (!HAEYO.test(full) || NOT_HAEYO.test(full)) err(at, `문장이 해요체로 끝나지 않아요: "${full}"`);
    // 교과형(사회 등)은 세 줄까지 작은 글씨로 보여 줌(11-04 밤, 1024 화면·둘이서에서 확인)
    const lim = BK.kind === "교과형" ? LIMIT.sentenceLong : LIMIT.sentence;
    if (len(it.s) + 1 > lim) warn(at, `문장이 ${len(it.s) + 1}글자예요(${lim}글자 넘으면 둘이서 화면에서 잘릴 수 있어요)`);
    if (!it.why) err(at, "까닭(why)이 없어요");
    else if (!/요\.$/.test(it.why) || NOT_HAEYO.test(it.why)) err(at, `까닭이 해요체로 끝나지 않아요: "${it.why}"`);
    for (const w of [it.r, ...(it.x || [])]) if (len(w) > LIMIT.word) warn(at, `보기 「${w}」 ${len(w)}글자(${LIMIT.word}글자 넘으면 좁은 칸에서 글씨가 줄어들어요)`);
    checkBan(at, it.s); checkBan(at, it.why);
    const k = it.r + it.s;
    if (seen.has(k)) err(at, `${seen.get(k)}번과 똑같은 문제`); else seen.set(k, i + 1);
    // 다른 문제의 바른 말이 이 문제의 틀린 말이면 → 문장이 뜻을 가려 줘야 함(사람 확인)
    if (BK.kind === "단계형") for (const o of BK.items) if (o !== it && it.x?.includes(o.r) && BK.items.indexOf(o) > i) notes.push(`${BK.name} 짝: "${it.s.replace("＿", it.r)}" ↔ "${o.s.replace("＿", o.r)}" (문장이 어느 말인지 가려 주는지 보기)`);
  });
}

// ---------- 2. 시판 문장 겹침(선택) ----------
const allText = [
  ...SAJA.items.map((i) => ["사자성어 " + i.w, i.m]),
  ...BLANKS.flatMap((B) => B.items.flatMap((i) => [[B.name + " " + i.r, i.s.replace("＿", i.r)], [B.name + " " + i.r + " 까닭", i.why]])),
];
if (AVOID) {
  const lines = fs.readFileSync(AVOID, "utf8").split(/\r?\n/).map((l) => l.replace(/\s/g, "")).filter((l) => len(l) >= 10);
  const grams = new Set();
  for (const l of lines) { const c = [...l]; for (let i = 0; i + 10 <= c.length; i++) grams.add(c.slice(i, i + 10).join("")); }
  let hit = 0;
  for (const [at, s] of allText) {
    const c = [...s.replace(/\s/g, "")];
    for (let i = 0; i + 10 <= c.length; i++) if (grams.has(c.slice(i, i + 10).join(""))) { err(at, `피할 문장과 10글자 넘게 같아요: "${s}"`); hit++; break; }
  }
  notes.push(`시판 문장 겹침: 피할 문장 ${lines.length}줄과 견줌, 겹친 문제 ${hit}개`);
} else notes.push("시판 문장 겹침: 피할 문장 파일(--avoid)이 없어서 건너뜀");

// ---------- 3. 실제로 만들어지는 문제 ----------
// 계산식을 따로 다시 풀어 보기(× ÷ − 와 괄호, 소수점만 씀)
const calc = (expr) => {
  const js = expr.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");
  if (!/^[\d\s+\-*/().]+$/.test(js)) throw new Error("알 수 없는 식 " + expr);
  return Math.round(Function(`"use strict";return (${js})`)() * 1e9) / 1e9;
};
// 낱말이 섞인 수학 문제(5·6학년) 다시 풀기
const gcdC = (a, b) => (b ? gcdC(b, a % b) : a);
function solveWords(t) {
  let m;
  if ((m = t.match(/^(\d+)의 약수는 모두 몇 개$/))) { let c = 0; for (let k = 1; k <= +m[1]; k++) if (m[1] % k === 0) c++; return c; }
  if ((m = t.match(/^(\d+)의 배수 중 (\d+)번째 수$/))) return m[1] * m[2];
  if ((m = t.match(/^(\d+)[과와] (\d+)의 최대공약수$/))) return gcdC(+m[1], +m[2]);
  if ((m = t.match(/^(\d+)[과와] (\d+)의 최소공배수$/))) return m[1] * m[2] / gcdC(+m[1], +m[2]);
  if ((m = t.match(/^비율 ([\d.]+)[을를] 백분율로\(%\)$/))) return Math.round(m[1] * 100);
  if ((m = t.match(/^(\d+)명 중 (\d+)명은 몇 %$/))) return m[2] / m[1] * 100;
  return null;
}
// 분수: "3/4", "1과 1/12", "2" → [분자, 분모]
function parseFrac(x) {
  x = String(x).trim(); let m;
  if ((m = x.match(/^(\d+)[과와] (\d+)\/(\d+)$/))) return [m[1] * m[3] + +m[2], +m[3]];
  if ((m = x.match(/^(\d+)\/(\d+)$/))) return [+m[1], +m[2]];
  if (/^\d+$/.test(x)) return [+x, 1];
  throw new Error("분수 모양이 아님: " + x);
}
const fEq = (a, b) => a[0] * b[1] === a[1] * b[0];
// 분수 문제 식을 따로 풀기 → [값, 기약분수여야 하는지]
function solveFrac(t) {
  let m;
  if ((m = t.match(/^(\d+)\/(\d+)[을를] 기약분수로$/))) return [[+m[1], +m[2]], true];
  if ((m = t.match(/^(\d+) : (\d+)의 비율을 분수로$/))) return [[+m[1], +m[2]], false];
  if ((m = t.match(/^(\d+)\/(\d+) ([+−÷]) (\d+)(?:\/(\d+))?$/))) {
    const a = [+m[1], +m[2]], b = [+m[4], m[5] ? +m[5] : 1];
    if (m[3] === "+") return [[a[0] * b[1] + b[0] * a[1], a[1] * b[1]], false];
    if (m[3] === "−") return [[a[0] * b[1] - b[0] * a[1], a[1] * b[1]], false];
    return [[a[0] * b[1], a[1] * b[0]], false];
  }
  throw new Error("풀 수 없는 분수 문제: " + t);
}
// 수 뒤 조사(읽는 소리 받침): 24와, 16과, 0.5를, 30/54을(분자를 마지막에 읽음)
const BATC = { 0: 1, 1: 1, 2: 0, 3: 1, 4: 0, 5: 0, 6: 1, 7: 1, 8: 1, 9: 0 };
function checkJosa(at, t) {
  for (const m of t.matchAll(/([\d./]+)(과|와|을|를)(?=\s)/g)) {
    const num = m[1].includes("/") ? m[1].split("/")[0] : m[1];
    const has = /\d0$/.test(num) && !num.includes(".") ? 1 : BATC[num[num.length - 1]];
    const want = { 과: has ? "과" : "와", 와: has ? "과" : "와", 을: has ? "을" : "를", 를: has ? "을" : "를" }[m[2]];
    if (want !== m[2]) err(at, `조사가 어색해요: "${m[1]}${m[2]}" → "${m[1]}${want}"`);
  }
}
const sajaByW = new Map(SAJA.items.map((i) => [i.w, i]));
const sajaByM = new Map(SAJA.items.map((i) => [i.m, i]));
const sameGroup = (a, b) => a && b && a !== b && a.same && a.same === b.same;
const formable = (word, tiles) => { const pool = [...tiles]; for (const c of word.replace(/\s/g, "")) { const k = pool.indexOf(c); if (k < 0) return false; pool.splice(k, 1); } return true; };

const stats = {}; // 주제별 문제 꼴, 나온 낱말, 가장 긴 글
function checkQ(q, topic, diff, fmt) {
  const at = `${TOPICS[topic].name} 난이도${diff} ${FORMATS[fmt].name} "${q.text}"`;
  const s = (stats[topic] ||= { kinds: {}, seen: new Set(), maxText: 0, maxOpt: 0, maxTiles: 0, longText: "", longOpt: "" });
  const kind = q.type + (q.long ? "-긴보기" : "");
  s.kinds[kind] = (s.kinds[kind] || 0) + 1;
  if (len(q.text) > s.maxText) { s.maxText = len(q.text); s.longText = q.text; }
  for (const o of q.options || []) if (q.type === "choice" && len(o) > s.maxOpt) { s.maxOpt = len(o); s.longOpt = o; }
  if (!q.text) err(at, "문제 글이 비었어요");
  if (q.prompt && NOT_HAEYO.test(q.prompt)) err(at, `안내 글이 해요체가 아니에요: "${q.prompt}"`);

  // 바른 답은 맞다고, 틀린 보기는 틀리다고 채점되는지
  const right = q.type === "number" ? String(q.answer) : q.answer;
  if (!checkAnswer(q, right)) err(at, "정답을 넣어도 틀렸다고 채점돼요");
  if (q.type === "choice") {
    if (new Set(q.options).size !== q.options.length) err(at, `보기가 겹쳐요: ${q.options.join(" / ")}`);
    if (q.options.filter((o) => o === q.answer).length !== 1) err(at, "보기에 정답이 정확히 하나 있지 않아요");
    if (q.options.length < 2 || q.options.length > 4) err(at, `보기 수 ${q.options.length}`);
    for (const o of q.options) if (o !== q.answer && checkAnswer(q, o)) err(at, `오답 보기 "${o}"도 맞다고 채점돼요`);
  }
  if (q.type === "ox") {
    if (!["O", "X"].includes(q.answer)) err(at, `OX 정답이 ${q.answer}`);
    if (checkAnswer(q, q.answer === "O" ? "X" : "O")) err(at, "OX 반대 답도 맞다고 채점돼요");
  }
  if (q.type === "tiles") {
    if (!formable(q.answer, q.tiles)) err(at, "타일로 정답을 만들 수 없어요");
    if (q.tiles.length > LIMIT.tiles) err(at, `타일이 ${q.tiles.length}개예요(숫자키는 ${LIMIT.tiles}개까지)`);
    s.maxTiles = Math.max(s.maxTiles, q.tiles.length);
  }
  if (q.word && !q.reveal) err(at, "틀렸을 때 보여 줄 바른 답(reveal)이 없어요");
  if (!answerText(q)) err(at, "바른 답 글이 비었어요");

  // 정답을 따로 다시 풀어 보기
  if (q.frac) {
    checkJosa(at, q.text);
    const expr = q.type === "ox" ? q.text.split(/ = | → /)[0] : q.text;
    const [val, mustReduce] = solveFrac(expr);
    const ok = (o) => { const f = parseFrac(o); return fEq(f, val) && (!mustReduce || gcdC(f[0], f[1]) === 1); };
    if (q.type === "choice") {
      const good = q.options.filter(ok);
      if (good.length !== 1 || good[0] !== q.answer) err(at, `다시 풀어 보니 맞는 보기가 ${good.length}개(${good.join(", ")}), 정답 표시는 ${q.answer}`);
    } else if (q.type === "ox") {
      const shown = q.text.split(/ = | → /)[1];
      if (ok(shown) !== (q.answer === "O")) err(at, "분수 OX 정답이 반대예요");
    }
    return;
  }
  if (!q.word && solveWords((q.base || q).text) !== null) {
    const base = q.base || q;
    checkJosa(at, base.text);
    const sol = solveWords(base.text);
    if (sol !== base.answer) err(at, `다시 풀어 보니 ${sol}인데 정답이 ${base.answer}예요`);
    if (q.type === "choice") for (const o of q.options) if (!/^\d+$/.test(o) || +o <= 0) err(at, `보기 "${o}"가 자연수가 아니에요`);
    if (q.type === "ox") err(at, "낱말이 섞인 문제는 OX로 바꾸지 않기로 했어요");
    return;
  }
  if (!q.word && (q.base || q).text.includes("/")) { // 분수 ÷ 분수의 몫이 자연수(숫자판으로 답함)
    const base = q.base || q, [v] = solveFrac(base.text);
    if (v[1] === 0 || v[0] % v[1] !== 0 || v[0] / v[1] !== base.answer) err(at, `다시 풀어 보니 ${v[0]}/${v[1]}인데 정답이 ${base.answer}예요`);
    if (q.type === "ox") { const shown = q.text.split(" = ")[1]; if ((+shown === base.answer) !== (q.answer === "O")) err(at, "OX 정답이 반대예요"); }
    return;
  }
  if (!q.word) {
    const base = q.base || q;
    let solved;
    if (base.text.includes("□")) {
      const [l, r] = base.text.split("=");
      for (let v = 0; v <= 1000 && solved == null; v++) if (calc(l.replace("□", v)) === calc(r.replace("□", v))) solved = v;
    } else solved = calc(base.text);
    if (solved !== base.answer) err(at, `다시 풀어 보니 ${solved}인데 정답이 ${base.answer}예요`);
    if (!Number.isInteger(base.answer) || base.answer < 0) err(at, `답 ${base.answer}가 0 이상의 정수가 아니에요(초등 범위)`);
    if (base.answer > 2000) warn(at, `답이 ${base.answer}로 커요`);
    if (q.type === "choice") for (const o of q.options) if (!/^\d+$/.test(o)) err(at, `보기 "${o}"가 0 이상의 정수가 아니에요`);
    if (q.type === "ox") {
      const [l, r] = q.text.split("=");
      if ((calc(l) === calc(r)) !== (q.answer === "O")) err(at, `식을 계산해 보니 OX 정답이 반대예요`);
    }
    return;
  }

  if (topic === "saja") {
    const it = sajaByW.get(q.key); s.seen.add(q.key);
    if (!it) { err(at, `은행에 없는 사자성어 ${q.key}`); return; }
    if (q.type === "choice" && !q.long && !q.text.includes("□")) { // 뜻 → 사자성어
      for (const o of q.options) if (o !== q.answer && sameGroup(it, sajaByW.get(o))) err(at, `오답 보기 "${o}"가 같은 뜻 묶음이라 정답이 둘이에요`);
    }
    if (q.long) { // 사자성어 → 뜻
      for (const o of q.options) if (o !== q.answer && sameGroup(it, sajaByM.get(o))) err(at, `오답 보기 "${o}"가 같은 뜻 묶음의 뜻이에요`);
      for (const o of q.options) if (len(o) > LIMIT.meaning) warn(at, `긴 보기 "${o}" ${len(o)}글자`);
    }
    if (q.type === "choice" && q.text.includes("□")) { // 빈칸 글자
      const shown = q.text.split(" · ")[0];
      for (const o of q.options) {
        const w = shown.replace("□", o), hit = sajaByW.get(w);
        if (o === q.answer && w !== it.w) err(at, "정답 글자를 넣어도 사자성어가 안 돼요");
        if (o !== q.answer && hit) err(at, `오답 글자 "${o}"를 넣어도 사자성어 ${w}가 돼요`);
      }
    }
    if (q.type === "ox") {
      const [w, m] = q.text.split(": "), mi = sajaByM.get(m);
      if (w !== it.w) err(at, "OX 문장의 사자성어가 다른 것");
      if ((m === it.m) !== (q.answer === "O")) err(at, "OX 정답이 은행 뜻과 맞지 않아요");
      if (q.answer === "X" && sameGroup(it, mi)) err(at, `같은 뜻 묶음의 뜻이라 X가 아닐 수 있어요`);
    }
    if (q.type === "tiles") {
      for (const o of SAJA.items) if (o !== it && (sameGroup(it, o) || o.m === it.m) && formable(o.w, q.tiles)) err(at, `타일로 같은 뜻의 ${o.w}도 만들 수 있어요`);
    }
  }
  if (TOPICS[topic].blank) {
    const it = TOPICS[topic].bank.items.find((i) => i.r + i.s === q.key); s.seen.add(q.key);
    if (!it) { err(at, "은행에 없는 맞춤법 문제"); return; }
    if (q.type === "choice") {
      const want = new Set([it.r, ...it.x]);
      if (q.options.length !== want.size || q.options.some((o) => !want.has(o))) err(at, "보기가 바른 말·틀리기 쉬운 말과 달라요");
    }
    if (q.type === "ox") {
      const w = q.text.match(/「(.+?)」/)?.[1];
      if (!w || it.s.replace("＿", `「${w}」`) !== q.text) err(at, "OX 문장이 은행 문장과 달라요");
      else if ((w === it.r) !== (q.answer === "O")) err(at, "OX 정답이 은행과 맞지 않아요");
      else if (w !== it.r && !it.x.includes(w)) err(at, `「${w}」는 은행의 틀리기 쉬운 말이 아니에요`);
    }
    if (q.type === "tiles" && (/\s/.test(it.r) || len(it.r) > 5)) err(at, "띄어쓰기가 있거나 긴 말은 타일로 내지 않기로 했어요");
  }
}

let made = 0;
for (const topic of Object.keys(TOPICS)) for (const diff of [0, 1, 2]) for (const fmt of Object.keys(FORMATS)) {
  setSeed(topic.length * 1000 + diff * 100 + fmt.length); // 다시 돌려도 같은 결과
  for (let k = 0; k < N; k++) {
    let q;
    try { q = makeQuestion(topic, diff, fmt); } catch (e) { err(`${topic} ${diff} ${fmt}`, "문제를 만들다 오류: " + e.message); break; }
    try { checkQ(q, topic, diff, fmt); } catch (e) { err(`${topic} ${diff} ${fmt} "${q.text}"`, "검사 중 오류: " + e.message); }
    made++;
  }
}
// 오늘의 도전: 같은 씨앗이면 같은 문제 순서
for (const topic of Object.keys(TOPICS)) {
  const run = () => { setSeed(20261104); return Array.from({ length: 30 }, (_, i) => makeQuestion(topic, i % 3, "mix").text).join("|"); };
  if (run() !== run()) err(`${TOPICS[topic].name}`, "같은 날짜 씨앗인데 문제 순서가 달라요(오늘의 도전이 반마다 달라짐)");
}
setSeed(null);
// 은행 낱말이 한 번도 안 나오면 뽑기에 문제가 있는 것
for (const [topic, keyOf] of [["saja", (i) => i.w], ...Object.keys(TOPICS).filter((k) => TOPICS[k].blank).map((k) => [k, (i) => i.r + i.s])]) {
  const miss = TOPICS[topic].bank.items.filter((i) => !stats[topic]?.seen.has(keyOf(i)));
  if (miss.length) err(TOPICS[topic].name, `${N}번씩 만들어도 한 번도 안 나온 문제 ${miss.length}개: ${miss.map((i) => i.w || i.r).join(", ")}`);
}

// ---------- 보고서 ----------
const out = [];
const date = new Date().toISOString().slice(0, 10);
out.push(`# 문제 자동 검수 보고서 (${date})`, "");
out.push(`- 문제 은행: 사자성어 ${SAJA.items.length}개, ${BLANKS.map((B) => `${B.name} ${B.items.length}개`).join(", ")}`);
out.push(`- 만들어 본 문제: ${made}개 (주제 ${Object.keys(TOPICS).length} × 난이도 3 × 형식 3 × ${N})`);
out.push(`- 결과: 오류 ${errors.length}개, 알림 ${warns.length}개`, "");
out.push("## 주제별", "", "| 주제 | 문제 꼴 | 가장 긴 문제 글 | 가장 긴 객관식 보기 | 타일 최대 |", "|---|---|---|---|---|");
for (const [t, s] of Object.entries(stats)) {
  const kinds = Object.entries(s.kinds).map(([k, v]) => `${k} ${Math.round((v / Object.values(s.kinds).reduce((a, b) => a + b)) * 100)}%`).join(", ");
  out.push(`| ${TOPICS[t].name} | ${kinds} | ${s.maxText}글자 | ${s.maxOpt}글자 | ${s.maxTiles || "-"} |`);
}
out.push("");
const sect = (title, arr, mark) => { out.push(`## ${title} (${arr.length})`, ""); if (!arr.length) out.push("없음"); for (const e of [...new Set(arr)].slice(0, 80)) out.push(`- ${mark} ${e}`); if (new Set(arr).size > 80) out.push(`- … 외 ${new Set(arr).size - 80}개`); out.push(""); };
sect("오류", errors, "✖");
sect("알림(사람이 한 번 보기)", warns, "△");
sect("참고", notes, "·");
out.push("## 이 검수기가 하지 않는 것", "",
  "- 뜻풀이·까닭이 사전과 맞는지(사람이 확인).",
  "- 학년별 낱말 목록과 견주기(목록이 아직 없어서 학년 표시 g와 난이도 d가 맞는지만 봄).",
  "- 실제 화면에서 넘치는지(글자 수로만 짐작. 실제 확인은 tests/word_shot.js).", "");
const report = out.join("\n");
console.log(report);
if (OUT) fs.writeFileSync(OUT, report);
process.exit(errors.length ? 1 : 0);
