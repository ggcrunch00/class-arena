// 「아라 원정대」: 화면 조립, 문제 풀기, 출전 버튼, 시작·설정·결과 화면, 매 프레임 흐름.
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ROLES, ROLE_INFO, SIDES, AI_LEVELS, QUALITY, QUALITY_ORDER, BASE, HEROES, HERO_ORDER, HERO_OPEN, TRAIN, TRAIN_ORDER } from "./config.js";
import { LANE_LABEL, LANE_NAMES, LANES, MAPS, MOOD, useMap } from "./lanes.js";
import { Battle } from "./battle.js";
import { ComputerPlayer } from "./ai.js";
import { View3D } from "./view3d.js";
import { Quality } from "./quality.js";
import { Sound } from "./sound.js";
import { Music } from "./music.js";
import { TOPICS, FORMATS, checkAnswer, questionLine, setSeed, topicsLabel } from "./questions.js";
import { Seat } from "./seat.js";
import { WORLD, CHARS, CHAPTERS, ENDING, EPILOGUE, ITEMS, STAGES, stageById, loadProgress, saveProgress, isOpen, chapterStars, chapterCleared, starsTotal, starsSpent, heroOpen, heroOf } from "./campaign.js";
import { StageRunner, stageAI, stageBattle, assistLevel } from "./stage.js";
import { Account } from "./account.js";

const $ = (s) => document.querySelector(s);
// 지도: 자유 대전에서 고른 지도(주소 끝 #wide 처럼 줄 수도 있음). 판마다 필요한 전장 모형만 그때 받음
const firstMap = (location.hash || "").replace("#", "");
let camp = Account.loadCamp(loadProgress);
const saveCamp = (p) => Account.saveCamp(p, saveProgress); // 원정 진행 저장은 모두 이곳을 거침(나중에 학급 서버로)    // 원정 진행(별·처음 이야기 봤는지)
// 자유 대전에서 쓸 수 있는 지도: 처음부터 대각선 + 원정에서 깬 장의 지도
const mapOpen = (k) => !!MAPS[k] && (MAPS[k].free || chapterCleared(camp, MAPS[k].chapter));
let MAP_KEY = useMap(MAPS[firstMap] ? firstMap : mapOpen(remember("classArena.map")) ? remember("classArena.map") : "diag");
const MODELS = ["field", ...Object.values(SIDES[-1].models), ...Object.values(SIDES[1].models)];
const PLAYER = -1, CPU = 1;

// ---------- 불러오기 ----------
let started = false;
setTimeout(() => { if (!started) fail(new Error("25초가 지나도 전장을 열지 못했어요. 새로고침해 보세요.")); }, 25000);
function fail(e) {
  const l = $("#loading"); l.hidden = false; l.classList.add("err");
  l.innerHTML = "<p>게임을 열지 못했어요</p><small></small>";
  l.querySelector("small").textContent = (e && e.message) || String(e);
  console.error(e);
}
function b64ToBuffer(b64) {
  const bin = atob(b64), out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out.buffer;
}
function parseGLB(name) {
  const loader = new GLTFLoader();
  loader.register((parser) => { parser.textureLoader = new THREE.TextureLoader(parser.options.manager); return { name: "img_textures" }; });
  return new Promise((ok, no) => loader.parse(b64ToBuffer(window.GLB[name]), "", ok, no));
}
function fontsReady() {
  if (!document.fonts) return Promise.resolve();
  return Promise.race([Promise.all([document.fonts.load("800 40px 'Hahmlet'"), document.fonts.load("16px 'Gowun Dodum'")]),
    new Promise((r) => setTimeout(r, 2500))]).catch(() => {});
}
function remember(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch { return null; } return null; }

// ---------- 상태 ----------
let models, view, quality, durations, idle;
let mode = "menu";           // menu | play | pause | result
let G = null;                 // 한 판의 상태
let seats = [];               // 조작판 자리(혼자 1개, 둘이서 2개)
let demo = null;              // 시작 화면 뒤에서 컴퓨터끼리 싸우는 전투
const settings = {
  mode: remember("classArena.mode") || "cpu",               // cpu: 연습 대전, duo: 둘이서(한 기기)
  // 11-06: 주제를 여러 개(배열). 예전 기기의 주제 하나(classArena.topic)도 그대로 이어받음
  topics: readTopics("classArena.topics", "classArena.topic"), topics2: readTopics("classArena.topics2", "classArena.topic2"),
  ai: remember("classArena.ai") || "recruit", format: remember("classArena.format") || "input",
  map: MAP_KEY,
  duoLeft: remember("classArena.duoLeft") === "1" ? 1 : -1, // 둘이서 왼쪽 자리 진영(11-06)
  randN: Math.max(1, Math.min(8, +remember("classArena.randN") || 3)), // 무작위로 고를 주제 수
};
if (!["cpu", "duo", "daily"].includes(settings.mode)) settings.mode = "cpu";
// 오늘의 도전: 날짜로 주제·문제 순서가 정해짐(모두 같음), 상대는 기사, 형식은 직접 입력
function today() {
  const d = new Date(), key = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  const days = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  const topics = Object.keys(TOPICS).filter((k) => !TOPICS[k].noDaily); // 한자 5·4급처럼 어려운 꾸러미는 오늘의 도전에서 뺌
  return { key, label: `${d.getMonth() + 1}월 ${d.getDate()}일`, topic: topics[days % topics.length] };
}
if (!FORMATS[settings.format]) settings.format = "input";
function readTopics(key, oldKey) {
  let v = null; try { v = JSON.parse(remember(key) || "null"); } catch { v = null; }
  const list = (Array.isArray(v) ? v : [remember(oldKey)]).filter((k) => k && TOPICS[k]);
  return list.length ? list : ["gugu"];
}
const saveTopics = (key) => remember("classArena." + key, JSON.stringify(settings[key]));
if (!AI_LEVELS[settings.ai]) settings.ai = "recruit";
const isDuo = () => G && G.duo;

function loadScript(src) {
  return new Promise((ok, no) => { const s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = () => no(new Error(src + " 를 불러오지 못했어요")); document.head.appendChild(s); });
}
const TIPS = [
  "팁: 화살표 방향으로 강해요. 방패병은 돌격병을 막아요!",
  "팁: 그 길의 적 탑을 부숴야 본성에 닿아요.",
  "팁: 5번 연속 정답이면 성 대포가 충전돼요.",
  "팁: 금광을 강화하면 문제마다 골드를 더 받아요.",
  "팁: 마지막 1분은 총력전! 골드가 2배예요.",
  "팁: 모르는 문제는 넘기기. 틀릴 때보다 덜 쉬어요.",
];
async function boot() {
  models = {};
  $("#ltip").textContent = TIPS[Math.floor(Math.random() * TIPS.length)];
  const files = [`field_${MAP_KEY}`, ...MODELS.slice(1)];
  let n = 0;
  const step = () => { n++; const k = Math.round(n / (files.length * 2) * 100); $("#loading b").textContent = k + "%"; $("#lbar").style.width = k + "%"; };
  for (const f of files) { await loadScript(`models/${f}.js`); step(); }   // 파일을 하나씩 받으며 진행 막대
  window.GLB.field = window.GLB["field_" + MAP_KEY];
  for (const m of MODELS) { models[m] = await parseGLB(m); step(); }
  models["field_" + MAP_KEY] = models.field;
  await fontsReady();
  durations = {};
  for (const m of MODELS.slice(1)) {
    durations[m] = {};
    for (const c of models[m].animations) durations[m][c.name] = c.duration;
  }
  quality = new Quality();
  view = new View3D($("#stage"), $("#overlay"), models, quality);
  quality.onChange((lv, why) => {
    view.applyQuality();
    if (why !== "user") toast(`기기에 맞춰 화질을 '${QUALITY[lv].name}'(으)로 맞췄어요`);
    drawQualOpts();
  });
  idle = new Battle(durations);
  makeSeats("cpu");
  buildStart(); buildSettings(); buildKeys();
  // 전장을 눌러 길 고르기(혼자 할 때): 누른 곳에서 가장 가까운 길
  $("#stage").addEventListener("pointerdown", (e) => {
    if (mode !== "play" || isDuo() || !seats[0]) return;
    const p = view.pickGround(e.clientX, e.clientY); if (!p) return;
    let best = null, bd = 1e9;
    for (const n of LANE_NAMES) { const L = LANES[n], q = L.at(L.project(p.x, p.y)), d = Math.hypot(q.x - p.x, q.y - p.y); if (d < bd) { bd = d; best = n; } }
    if (best && bd < 4.5 && best !== seats[0].lane) { seats[0].setLane(best); Sound.play("tap"); seats[0].say(`${LANE_LABEL[best]}로 보낼게요`); }
  });
  window.addEventListener("resize", () => setTimeout(layout, 60));
  layout();
  started = true;
  $("#loading").hidden = true;
  showStart();
  requestAnimationFrame(frame);
  if (["localhost", "127.0.0.1"].includes(location.hostname)) exposeTestHook();
  // 배포 주소(https)에서만 기기에 저장(두 번째부터 빠르게). 미리보기 페이지에서는 막혀 있어 건너뜀
  try {
    if ("serviceWorker" in navigator && location.protocol === "https:" && !/claude\.ai|claudeusercontent/.test(location.hostname))
      navigator.serviceWorker.register("sw.js").catch(() => {});
  } catch { /* 지원 안 하는 브라우저 */ }
}

// 지도 바꾸기: 처음 쓰는 지도면 전장 모형을 받아 풀고(약 1.5MB), 길·탑·빛을 새 지도로
async function switchMap(key) {
  if (!MAPS[key]) key = "diag";
  if (key === MAP_KEY && view.field === models["field_" + key]) return;
  const name = "field_" + key;
  if (!models[name]) {
    const l = $("#loading"); l.hidden = false; l.classList.add("soft");
    $("#loading b").textContent = ""; $("#lbar").style.width = "30%"; $("#ltip").textContent = MAPS[key].name + " 전장을 여는 중…";
    try {
      if (!window.GLB || !window.GLB[name]) await loadScript(`models/${name}.js`);
      $("#lbar").style.width = "70%";
      models[name] = await parseGLB(name);
    } finally { l.hidden = true; l.classList.remove("soft"); }
  }
  MAP_KEY = useMap(key);
  view.clear();
  view.setField(models[name]);
  for (const s of seats) s.setLanes();
  layout();
}

function makeSeats(m) {
  for (const s of seats) s.destroy();
  const panel = $("#panel");
  panel.className = m === "duo" ? "two" : "one";
  document.body.classList.toggle("duo", m === "duo");
  const ctx = { view, isPlaying: () => mode === "play", toast, skill: (k, H) => { talk(k, H.line); banner(`${H.name}의 ${H.skill}!`, 1.6); } };
  // 둘이서: 왼쪽 자리가 고른 진영(settings.duoLeft, 기사단 -1 / 해골 군단 1), 오른쪽은 반대 진영
  const L = m === "duo" ? settings.duoLeft : -1;
  seats = m === "duo" ? [new Seat(panel, L, ctx), new Seat(panel, -L, ctx)] : [new Seat(panel, -1, ctx)];
  view.setLane(null, 1);
  setTimeout(layout, 0);
}

function layout() {
  const ph = $("#panel").offsetHeight;
  const top = $("#top").getBoundingClientRect();
  // 전장은 화면 전체에 그리고, 지도는 조작판 위 칸에 맞춤(조작판은 반투명이라 밑으로 숲·바다가 이어져 보임)
  view.setViewport({ x: 0, y: 0, w: window.innerWidth, h: window.innerHeight }, top.height ? top.bottom + 4 : 0, ph);
  $("#rotate").hidden = !(window.innerHeight > window.innerWidth * 1.05);
}

// ---------- 한 판 ----------
// 시작 화면 뒤 전투(소리 없음, 끝나면 새로)
function startDemo() {
  view.clear();
  const b = new Battle(durations);
  b.sides[-1].gold = b.sides[1].gold = 180;
  demo = { b, ais: [new ComputerPlayer(b, -1, "knight"), new ComputerPlayer(b, 1, "knight")], endT: 0 };
  for (const a of demo.ais) a.next = 0.3 + Math.random();
}
function tickDemo(dt) {
  if (!demo) return;
  const b = demo.b;
  b.update(dt);
  for (const a of demo.ais) a.update(dt);
  const evts = b.events; b.events = [];
  Sound.quiet = true; view.handle(evts, b); Sound.quiet = false;
  if (b.state !== "play") { demo.endT += dt; if (demo.endT > 5) startDemo(); }
}

// stage: 원정 스테이지(없으면 자유 대전·둘이서·오늘의 도전)
async function newGame(stage = null) {
  if (busy) return;
  busy = true;
  try {
    demo = null;
    const duo = !stage && settings.mode === "duo", daily = !stage && settings.mode === "daily" ? today() : null;
    for (const s of ["#titleScreen", "#startScreen", "#resultScreen", "#pauseScreen", "#setScreen", "#campScreen", "#storyScreen"]) $(s).hidden = true;
    if ((seats.length === 2) !== duo || (duo && seats[0].side !== settings.duoLeft)) makeSeats(duo ? "duo" : "cpu");
    await switchMap(stage ? stage.map : mapOpen(settings.map) ? settings.map : "diag");
    view.setMood(stage && stage.chapter.mood ? { ...MOOD, ...stage.chapter.mood } : MOOD); // 장마다 빛(등대섬은 해 질 녘)
    Music.theme(stage && stage.boss ? stage.boss : "march"); // 원정 보스 판은 그 보스 곡
    Music.intense(false); Music.duck(false); Music.start();
    document.body.classList.remove("menu");
    layout();
    view.clear();
    const losses = stage ? (camp.loss && camp.loss[stage.id]) || 0 : 0;
    const hard = !!(stage && camp.hard);
    const bopts = stage ? stageBattle(stage, losses, hard) : {};
    // 영웅·훈련소는 원정에만(11-05 선생님): 자유 대전·둘이서·오늘의 도전, 앞으로의 PvP는 모두 같은 조건.
    // Battle은 opts.hero {[-1], [1]}로 양쪽 영웅을 받을 수 있어, 나중에 대전 모드에서 "양쪽 같은 조건으로 영웅 고르기"를 열 수 있음(훈련은 넣지 않음)
    if (stage) { bopts.hero = { [-1]: heroOf(camp) }; bopts.train = { [-1]: camp.train }; }
    const battle = new Battle(durations, bopts);
    const level = stage ? stageAI(stage, losses, hard) : daily ? "knight" : settings.ai;
    G = { battle, duo, daily, stage, ai: duo ? null : new ComputerPlayer(battle, CPU, level), endT: -1 };
    view.setHero(battle.sides[-1].hero); // 원정: 영웅이 우리 본성 곁에 서서 기술 쓸 때 움직임
    if (stage) G.runner = new StageRunner(battle, stage, G.ai, { talk: (w, t) => talk(w, t), boss: (w, t) => talk(w, t, true) }, hard ? 0 : assistLevel(losses));
    G.hard = hard;
    setSeed(daily ? daily.key : null);
    seats[0].start(battle, daily ? daily.topic : stage ? Account.campRange(settings.topics) : settings.topics, daily ? "input" : settings.format, stage ? stage.rules : undefined);
    if (duo) seats[1].start(battle, settings.topics2, settings.format);
    const mirror = duo && settings.duoLeft === 1; view.setMirror(mirror); document.body.classList.toggle("mirror", mirror);
    $("#blueSub").textContent = duo ? (mirror ? "오른쪽" : "왼쪽") : "나";
    $("#redSub").textContent = duo ? (mirror ? "왼쪽" : "오른쪽") : stage ? `${stage.id} ${stage.boss ? CHARS[stage.boss].name : stage.name}` : "컴퓨터 " + AI_LEVELS[daily ? "knight" : settings.ai].name;
    $("#banner").hidden = true; talkQ.length = 0; talkLog.length = 0;
    document.querySelectorAll(".confetti").forEach((c) => c.remove()); // 앞 판 색종이 지우기
    $("#talk").hidden = true; talkT = 0;
    // 시작 뒤에 띄울 알림(카운트다운이 끝나면)
    G.after = [];
    if (daily) G.after.push(() => banner(`${daily.label} 오늘의 도전, ${TOPICS[daily.topic].name}`, 2.2));
    if (stage) G.after.push(() => banner((hard ? "도전 모드! " : "") + "목표: " + stage.goal.replace(/요$/, "요!"), 2.4));
    if (stage && stage.unlock && !camp.stars[stage.id]) G.after.push(() => setTimeout(() => { if (G && G.stage === stage) banner(stage.unlock, 2.4); }, 2600));
    quality.reset();
    // 준비 → 3 → 2 → 1 → 시작! (실제 시간 기준, 그동안 전투·문제는 멈춤)
    mode = "count"; G.countAt = performance.now(); G.countStep = -1; document.body.classList.add("counting");
    updateHud(true);
  } catch (e) { toast("전장을 열지 못했어요: " + ((e && e.message) || e)); showStart(); }
  finally { busy = false; }
}
let busy = false;

// ---------- 시작 카운트다운 ----------
const COUNT = [["준비", 0], ["3", 0.75], ["2", 1.45], ["1", 2.15], ["시작!", 2.85]];
function tickCount() {
  const t = (performance.now() - G.countAt) / 1000, el = $("#count");
  let k = -1; COUNT.forEach(([, at], i) => { if (t >= at) k = i; });
  if (k !== G.countStep && k >= 0) {
    G.countStep = k; el.hidden = false; el.textContent = COUNT[k][0];
    el.className = k === COUNT.length - 1 ? "go" : k === 0 ? "ready" : "";
    el.style.animation = "none"; void el.offsetWidth; el.style.animation = "";
    Sound.play(k === COUNT.length - 1 ? "horn" : "tap");
    if (k === COUNT.length - 1) { mode = "play"; document.body.classList.remove("counting"); for (const f of G.after || []) f(); setTimeout(() => { el.hidden = true; }, 650); }
  }
}

// ---------- 전투 중 말풍선(인물 대사·보스가 읽은 버릇) ----------
const talkQ = [], talkLog = []; let talkT = 0;
function talk(who, text, foe) {
  const c = CHARS[who] || CHARS.narr;
  talkLog.push(c.name + ": " + text); if (talkLog.length > 30) talkLog.shift();
  talkQ.push({ c, text, foe: foe || c.side === 1 });
  if (talkT <= 0) nextTalk();
}
function nextTalk() {
  const t = talkQ.shift(), el = $("#talk");
  if (!t) { el.hidden = true; talkT = 0; return; }
  el.className = t.foe ? "foe" : "";
  const key = Object.keys(CHARS).find((k) => CHARS[k] === t.c);
  el.querySelector("img").src = FACES.has(key) ? `assets/faces/${key}.webp` : `assets/portraits/${t.c.img || "knight"}.webp`;
  el.querySelector("b").textContent = t.c.name;
  el.querySelector("p").textContent = t.text;
  el.hidden = false; el.style.animation = "none"; void el.offsetWidth; el.style.animation = "";
  talkT = Math.max(3.2, 1.6 + t.text.length * 0.07);
  Sound.play(t.foe ? "horn" : "talk");
}

function buildKeys() {
  $("#storyScreen").addEventListener("click", (e) => { if (e.target.closest("#sSkip")) return; storyNext(); });
  $("#sSkip").addEventListener("click", storyEnd);
  window.addEventListener("keydown", (e) => {
    if (story && (e.key === "Enter" || e.key === " " || e.key === "ArrowRight")) { e.preventDefault(); storyNext(); return; }
    if (story && e.key === "Escape") { storyEnd(); return; }
    if (e.key === "Escape") { if (mode === "play") pause(); else if (mode === "pause") resume(); return; }
    // 전투 중 Enter·스페이스가 마지막에 누른 단추(병사 카드 등)를 다시 누르지 않게 막음
    // (크롬북: 카드를 누른 뒤 키보드로 답을 쓰고 Enter → 그 카드가 또 출전하던 문제)
    if (mode === "play" && (e.key === "Enter" || e.key === " ") && e.target.tagName === "BUTTON") e.preventDefault();
    if (mode !== "play" || e.target.tagName === "INPUT" || isDuo()) return; // 둘이서는 키보드를 나눠 쓸 수 없어 끔
    const s = seats[0];
    if (e.key === "ArrowUp" || e.key === "ArrowDown") { s.moveLane(e.key === "ArrowUp" ? -1 : 1); e.preventDefault(); return; }
    s.key(e);
  });
}

// ---------- 화면 위 정보 ----------
let lastHp = { [-1]: -1, [1]: -1 };
function updateHud(force) {
  const b = G.battle;
  for (const s of seats) s.update();
  for (const s of [-1, 1]) {
    const hp = b.sides[s].base.hp;
    const towersLeft = Object.values(b.sides[s].towers).filter((t) => t.alive).length;
    const tEl = $(s < 0 ? "#blueTowers" : "#redTowers");
    const tk = towersLeft + "/" + LANE_NAMES.length;
    if (tEl.dataset.n !== tk) { tEl.dataset.n = tk; tEl.innerHTML = "탑 " + "<i></i>".repeat(towersLeft) + "<i class=\"x\"></i>".repeat(LANE_NAMES.length - towersLeft); }
    if (hp !== lastHp[s] || force) {
      const el = $(s < 0 ? "#blue" : "#red"), k = hp / BASE.hp;
      el.querySelector(".hp i").style.width = (k * 100).toFixed(1) + "%";
      el.querySelector(".hp span").textContent = Math.ceil(k * 100) + "%";
      if (!force && hp < lastHp[s]) { el.classList.remove("hit"); void el.offsetWidth; el.classList.add("hit"); }
      lastHp[s] = hp;
    }
  }
  const t = Math.ceil(b.timeLeft);
  $("#clock b").textContent = Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0");
  $("#clock").classList.toggle("ot", b.overtime);
  const ob = b.objective;
  $("#clockSub").textContent = b.overtime ? "총력전, 골드 2배"
    : ob.type === "towers" ? `목표: 탑 ${Object.values(b.sides[CPU].towers).filter((t) => !t.alive).length}/${ob.n}`
      : ob.type === "survive" ? "목표: 끝까지 버티기"
        : ob.type === "kills" ? `목표: 해골 ${Math.min(b.kills[PLAYER], ob.n)}/${ob.n}` : "남은 시간";
}
let toastT = 0;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.hidden = false; t.style.animation = "none"; void t.offsetWidth; t.style.animation = ""; toastT = 2.6; }
function banner(msg, sec = 1.8) { const b = $("#banner"); b.textContent = msg; b.hidden = false; b.style.animation = "none"; void b.offsetWidth; b.style.animation = ""; setTimeout(() => { b.hidden = true; }, sec * 1000); }
const sideName = (s) => (s < 0 ? "기사단" : "해골 군단");
const seatOf = (side) => seats.find((x) => x.side === side);

let hitstop = 0, dangerT = 0, dangerSaid = -99;
function confetti(n = 90) {
  n = Math.round(n * quality.preset.fx); // 느린 기기에선 적게
  const cols = ["#ffd36b", "#7fd0ff", "#ff8f80", "#8fe388", "#fff3d6", "#c9a0ff"];
  for (let i = 0; i < n; i++) {
    const c = document.createElement("i"); c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw"; c.style.background = cols[i % cols.length];
    c.style.setProperty("--dx", (Math.random() - 0.5) * 30 + "vw");
    c.style.animationDuration = 2.2 + Math.random() * 1.8 + "s"; c.style.animationDelay = Math.random() * 0.6 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}
function onEvents(evts) {
  for (const e of evts) {
    // 큰 사건엔 아주 짧게 멈칫(히트스톱)
    if (e.type === "structDown") hitstop = Math.max(hitstop, e.struct.kind === "base" ? 0.25 : 0.12);
    if (e.type === "land" && e.proj.kind === "ball") hitstop = Math.max(hitstop, 0.07);
    // 내 본성이 맞으면 붉은 경고
    if (e.type === "structHit" && e.struct.kind === "base" && seatOf(e.struct.side)) {
      if (!isDuo()) dangerT = 2.5;
      if (G.battle.time - dangerSaid > 8) { dangerSaid = G.battle.time; seatOf(e.struct.side).say("본성이 공격받고 있어요! 막아야 해요"); }
    }
    if (e.type === "overtime") { banner("총력전! 골드 2배"); Sound.play("horn"); Music.intense(true); }
    else if (e.type === "mine" && !seatOf(e.side)) toast("상대가 금광을 강화했어요");
    else if (e.type === "cannon" && !seatOf(e.side)) toast("상대의 성 대포!");
    else if (e.type === "structDown" && e.struct.kind === "tower") {
      const n = LANE_LABEL[e.struct.lane];
      if (isDuo()) banner(`${sideName(e.struct.side)} ${n} 탑 무너짐!`, 1.6);
      else if (e.struct.side === CPU) banner(`${n} 탑을 무너뜨렸어요!`, 1.6);
      else toast(`우리 ${n} 탑이 무너졌어요! 막아야 해요`);
    }
    else if (e.type === "end") {
      G.endT = 0;
      const w = e.winner;
      const fallen = w ? G.battle.sides[-w].base : null;
      if (fallen && fallen.hp <= 0) view.focusOn(fallen.x, fallen.y, 2.5);
      if (isDuo() ? w : w === PLAYER) setTimeout(() => confetti(), 400);
      if (isDuo()) { banner(w ? `${sideName(w)} 승리!` : "무승부", 2.6); Sound.play("win"); }
      else { banner(w === PLAYER ? "승리!" : w === CPU ? "패배…" : "무승부", 2.6); Sound.play(w === PLAYER ? "win" : "lose"); }
    }
  }
}

// ---------- 결과 ----------
function reviewList(seat, box, scoreEl) {
  const seen = new Set(), list = seat.wrongs.filter((x) => !seen.has(x.q.text) && seen.add(x.q.text)).slice(0, 12);
  let fixed = 0;
  const score = () => { scoreEl.textContent = list.length ? `${fixed}/${list.length} 다시 맞힘` : "틀린 문제가 없어요!"; };
  list.forEach((x, i) => {
    const row = document.createElement("label");
    row.className = "rev" + (x.q.word ? " wide" : "");
    const done = () => { row.classList.add("done"); fixed++; score(); Sound.play("right"); row.querySelector(".mine-ans").textContent = "다시 맞혔어요"; };
    if (x.q.type === "number") {
      row.innerHTML = `<span></span><input id="rev${seat.side}_${i}" inputmode="numeric" autocomplete="off"><span class="mine-ans"></span>`;
      const inp = row.querySelector("input");
      inp.addEventListener("input", () => { if (!row.classList.contains("done") && checkAnswer(x.q, inp.value)) { inp.disabled = true; done(); } });
    } else {
      row.innerHTML = `<span></span><span class="mini"></span><span class="mine-ans"></span>`;
      for (const o of x.q.type === "ox" ? ["O", "X"] : x.q.options) {
        const b = document.createElement("button"); b.type = "button"; b.textContent = o;
        b.addEventListener("click", () => {
          if (row.classList.contains("done")) return;
          if (checkAnswer(x.q, o)) { b.classList.add("good"); done(); } else { b.classList.add("bad"); Sound.play("wrong"); }
        });
        row.querySelector(".mini").appendChild(b);
      }
    }
    row.firstChild.textContent = questionLine(x.q);
    row.querySelector(".mine-ans").textContent = x.kind === "skip" ? "넘긴 문제" : "내 답 " + x.given;
    box.appendChild(row);
  });
  score();
}

function showResult() {
  mode = "result";
  Music.intense(false); Music.duck(true);
  const b = G.battle, w = b.winner;
  if (G.duo) {
    $("#resTitle").textContent = w ? `${sideName(w)} 승리!` : "무승부";
    $("#resWhy").textContent = b.endWhy === "base" ? `${sideName(-w)}의 본성이 무너졌어요.` : "시간이 끝나서 본성과 탑이 더 튼튼한 쪽이 이겼어요.";
  } else {
    $("#resTitle").textContent = w === PLAYER ? "승리!" : w === CPU ? "아쉬운 패배" : "무승부";
    $("#resultScreen").classList.toggle("lose", w !== PLAYER);
    $("#resWhy").textContent = b.endWhy === "towers" ? "목표한 탑을 모두 무너뜨렸어요!"
      : b.endWhy === "survive" ? "끝까지 본성을 지켜 냈어요!"
      : b.endWhy === "kills" ? "목표만큼 해골 병사를 무찔렀어요!"
      : b.endWhy === "killsTime" ? "시간 안에 목표만큼 무찌르지 못했어요. 상성을 노려 더 빨리 무찔러 봐요!"
        : b.endWhy === "base"
          ? (w === PLAYER ? "해골 군단의 본성을 무너뜨렸어요!" : "우리 본성이 무너졌어요. 약한 길을 막고 상성을 노려 다시 도전해요!")
          : (w ? "시간이 끝나서 본성과 탑이 더 튼튼한 쪽이 이겼어요." : "시간이 끝났고 양쪽이 비슷했어요.");
  }
  const stat = (k, v) => `<div class="stat"><small>${k}</small><b>${v}</b></div>`;
  const statsOf = (side) => {
    const S = b.sides[side], tried = S.stats.right + S.stats.wrong;
    return stat("맞힌 문제", S.stats.right) + stat("정답률", tried ? Math.round(S.stats.right / tried * 100) + "%" : "-") +
      stat("최고 연속", S.bestStreak) + stat("번 골드", S.stats.goldEarned) + stat("출전한 병사", S.stats.deployed);
  };
  const res = $("#resBody"); res.innerHTML = "";
  for (const seat of seats) {
    const col = document.createElement("div"); col.className = "rescol " + (seat.side < 0 ? "blue" : "red");
    col.innerHTML = (G.duo ? `<h3 class="who">${seats.indexOf(seat) === 0 ? "왼쪽" : "오른쪽"} ${sideName(seat.side)} (${topicsLabel(seat.topics)})</h3>` : "") +
      `<div class="stats">${statsOf(seat.side)}</div><div class="review"><h3>틀린 문제 다시 풀기 <small class="revScore"></small></h3><div class="revList"></div></div>`;
    res.appendChild(col);
    reviewList(seat, col.querySelector(".revList"), col.querySelector(".revScore"));
  }
  res.classList.toggle("two", G.duo);
  // 별 3개(혼자 하기): 이기기 / 정답률 80% 이상 / 본성 체력 절반 이상
  const S0 = b.sides[PLAYER], tried0 = S0.stats.right + S0.stats.wrong, acc0 = tried0 ? S0.stats.right / tried0 : 0;
  const stars = G.duo ? 0 : (w === PLAYER ? 1 : 0) + (acc0 >= 0.8 && tried0 >= 5 ? 1 : 0) + (S0.base.hp / S0.base.max >= 0.5 ? 1 : 0);
  const starBox = $("#stars"); starBox.hidden = G.duo;
  [...starBox.children].forEach((st, i) => { st.className = ""; if (i < stars) setTimeout(() => { st.className = "on"; Sound.play("coin"); }, 500 + i * 350); });
  G.stars = stars;
  // 원정: 별 저장, 이기면 "이야기 계속", 지면 도움말
  const st = G.stage, won = w === PLAYER;
  if (st) {
    camp.stars[st.id] = Math.max(camp.stars[st.id] || 0, won ? Math.max(1, stars) : 0);
    if (G.hard && won) { camp.hstars = camp.hstars || {}; camp.hstars[st.id] = Math.max(camp.hstars[st.id] || 0, Math.max(1, stars)); }
    camp.loss = camp.loss || {};
    if (won) delete camp.loss[st.id]; else camp.loss[st.id] = (camp.loss[st.id] || 0) + 1;
    saveCamp(camp);
    const S0 = G.battle.sides[PLAYER].stats;
    Account.report({ stage: st.id, won, stars, hard: !!G.hard, right: S0.right, wrong: S0.wrong, topics: seats[0].topics, time: Math.round(G.battle.time) });
    if (!won && !G.hard && assistLevel(camp.loss[st.id]) > assistLevel(camp.loss[st.id] - 1)) toast("다음 판부터 해골 군단이 조금 약해져요. 힘내요!");
  }
  // 원정: 인물 한마디(이기면 기사단, 지면 보스가 놀리고 하람이 다독임)
  const rl = $("#resLine");
  rl.hidden = !st;
  if (st) {
    // 이긴 뒤 한마디는 인물마다 말투가 다름(누가 말할지는 장·별 수로 돌아가며)
    const CHEER = [["haram", "잘했어요, 지휘관. 이 섬의 안개가 걷히고 있어요."], ["sol", "좋았어요! 깨침돌이 환하게 빛나요."],
      ["saebyeok", "해골들이 흩어졌어요. 문제를 정말 잘 풀었어요!"], ["uru", "하하, 이 정도면 안개도 겁먹겠어요!"]];
    const [who, say] = won ? CHEER[(stars + st.chapter.id) % 4]
      : st.boss ? [st.boss, "다음엔 다른 작전으로 와 보세요. 기다릴게요!"] : ["haram", "괜찮아요. 작전 도움말을 보고 다시 도전해요."];
    rl.className = "resline" + (CHARS[who].side === 1 ? " foe" : "");
    rl.querySelector("img").src = `assets/faces/${who}.webp`;
    rl.querySelector("p").textContent = `${CHARS[who].name}: ${say}`;
  }
  $("#resHint").hidden = !st || won;
  if (st && !won) $("#resHint").textContent = "작전 도움말: " + st.hint;
  $("#nextBtn").hidden = !st || !won;
  $("#campMapBtn").hidden = !st;
  $("#homeBtn").hidden = !!st;
  $("#againBtn").className = st && won ? "ghost" : "go";
  $("#shareText").textContent = shareText();
  $("#resultScreen").hidden = false;
}

// 기록(워들처럼: 별 + 맞힘■ 틀림□ 줄, 문제 내용은 안 나옴)
function shareText() {
  const b = G.battle, t = Math.round(b.time), tm = Math.floor(t / 60) + "분 " + (t % 60) + "초";
  const line = (seat) => {
    const S = b.sides[seat.side];
    const sq = seat.log.slice(-30).map((v) => (v ? "■" : "□")).join("");
    return `${topicsLabel(seat.topics)} · 정답 ${S.stats.right}/${S.stats.right + S.stats.wrong} · 최고 ${S.bestStreak}연속\n${sq}`;
  };
  if (G.duo) {
    const w = b.winner;
    return `아라 원정대 · 둘이서 · ${w ? (w < 0 ? "기사단" : "해골 군단") + " 승리" : "무승부"} · ${tm}\n왼쪽 ${sideName(seats[0].side)}: ${line(seats[0])}\n오른쪽 ${sideName(seats[1].side)}: ${line(seats[1])}`;
  }
  const res = b.winner === PLAYER ? "승리" : b.winner === CPU ? "패배" : "무승부";
  const head = G.daily ? `아라 원정대 · 오늘의 도전 ${G.daily.label}` : G.stage ? `아라 원정대 · 원정 ${G.stage.id} ${G.stage.name}` : "아라 원정대";
  const foe = G.stage ? "" : ` · 컴퓨터 ${G.daily ? "기사" : AI_LEVELS[settings.ai].name}`;
  return `${head} · ${res} ${"★".repeat(G.stars)}${"☆".repeat(3 - G.stars)}${foe} · ${tm}\n${line(seats[0])}`;
}
function copyShare() {
  const txt = $("#shareText").textContent;
  const done = () => toast("기록을 복사했어요. 패들렛·클래스룸에 붙여 넣어 자랑해요!");
  try {
    navigator.clipboard.writeText(txt).then(done, () => selectShare());
  } catch { selectShare(); }
}
function selectShare() { const r = document.createRange(); r.selectNodeContents($("#shareText")); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); toast("글자를 길게 눌러 복사해요"); }
// 기록 카드 그림(1080×1080)
function saveCard() {
  const c = document.createElement("canvas"); c.width = c.height = 1080;
  const g = c.getContext("2d");
  const gr = g.createLinearGradient(0, 0, 0, 1080); gr.addColorStop(0, "#1f3a2b"); gr.addColorStop(1, "#0d1712");
  g.fillStyle = gr; g.fillRect(0, 0, 1080, 1080);
  g.strokeStyle = "#c9a45c"; g.lineWidth = 10; g.strokeRect(30, 30, 1020, 1020);
  g.textAlign = "center"; g.fillStyle = "#fff3d6"; g.font = "800 120px 'Hahmlet', serif"; g.fillText("아라 원정대", 540, 200);
  const lines = $("#shareText").textContent.split("\n");
  g.fillStyle = "#ffd36b"; g.font = "800 52px 'Hahmlet', serif"; g.fillText(lines[0].replace("아라 원정대 · ", ""), 540, 320);
  g.fillStyle = "#f6efe0"; g.font = "40px 'Gowun Dodum', sans-serif";
  let y = 430;
  for (const ln of lines.slice(1)) {
    if (/^[■□]+$/.test(ln)) { // 맞힘·틀림 칸을 색 네모로
      const n = ln.length, size = Math.min(52, 900 / n), x0 = 540 - (n * size) / 2;
      [...ln].forEach((ch, i) => { g.fillStyle = ch === "■" ? "#8fe388" : "#ff8f7a"; g.fillRect(x0 + i * size + 3, y - size + 6, size - 6, size - 6); });
      g.fillStyle = "#f6efe0"; y += size + 40;
    } else { g.fillText(ln, 540, y); y += 70; }
  }
  g.fillStyle = "#aeb5a6"; g.font = "30px 'Gowun Dodum', sans-serif";
  g.fillText(new Date().toLocaleDateString("ko-KR"), 540, 1000);
  const url = c.toDataURL("image/png");
  const a = document.createElement("a"); a.href = url; a.download = "아라원정대_기록.png";
  document.body.appendChild(a); a.click(); a.remove();
  // 저장이 막힌 화면(미리보기 등)에서는 그림을 보여 주고 길게 눌러 저장하게
  const box = $("#cardView"); box.hidden = false; box.querySelector("img").src = url;
}

// ---------- 원정: 군도 지도·이야기 ----------
function openCamp() {
  for (const s of ["#titleScreen", "#startScreen"]) $(s).hidden = true;
  if (!camp.seenIntro) {
    playStory(WORLD.intro, { art: "world" }, () => { camp.seenIntro = true; saveCamp(camp); showCamp(); });
  } else showCamp();
}
// 다음에 할 스테이지(안 깬 것 중 처음), 다 깼으면 마지막
const nextStage = () => STAGES.find((x) => !camp.stars[x.id]) || STAGES[STAGES.length - 1];
let campSel = 1;
function showCamp(stageId) {
  mode = "menu"; G = null;
  document.body.classList.add("menu"); document.body.classList.remove("counting"); $("#count").hidden = true;
  if (!demo) startDemo();
  for (const s of ["#titleScreen", "#startScreen", "#resultScreen", "#pauseScreen", "#storyScreen"]) $(s).hidden = true;
  $("#talk").hidden = true; talkQ.length = 0;
  const st = stageById(stageId) || nextStage();
  campSel = st.chapter.id;
  drawCamp();
  $("#campScreen").hidden = false;
}
function drawCamp() {
  const nodes = $("#cNodes"); nodes.innerHTML = "";
  const nx = nextStage();
  for (const ch of CHAPTERS) {
    if (ch.after && !chapterCleared(camp, ch.id - 1)) continue; // 등대섬: 앞 장(안개 성채)을 마친 뒤에 지도에 나타남
    const open = isOpen(camp, ch.stages[0].id), stars = chapterStars(camp, ch);
    const b = document.createElement("button");
    b.className = "cnode" + (ch.id === campSel ? " on" : "") + (open ? "" : " locked") + (nx.chapter.id === ch.id && !camp.stars[nx.id] ? " next" : "");
    b.style.left = ch.pos[0] + "%"; b.style.top = ch.pos[1] + "%";
    b.innerHTML = `<span class="num">${ch.id}</span><b>${ch.name}</b><small>${open ? `★ ${stars}/${ch.stages.length * 3}` : "잠김"}</small>`;
    b.addEventListener("click", () => { campSel = ch.id; Sound.play("tap"); drawCamp(); });
    nodes.appendChild(b);
  }
  const ch = CHAPTERS[campSel - 1];
  $("#cKicker").textContent = `${ch.id}장`;
  $("#cTitle").textContent = ch.name;
  $("#cTeach").textContent = ch.teach;
  const box = $("#cStages"); box.innerHTML = "";
  for (const st of ch.stages) {
    const open = isOpen(camp, st.id), stars = camp.stars[st.id] || 0;
    const row = document.createElement("div");
    row.className = "cstage" + (st.boss ? " boss" : "") + (open ? "" : " locked");
    const hs = (camp.hstars && camp.hstars[st.id]) || 0;
    if (st.boss && FACES.has(st.boss)) row.classList.add("withface");
    row.innerHTML = (st.boss && FACES.has(st.boss) ? `<img class="bface" src="assets/faces/${st.boss}.webp" alt="">` : "") + `<span class="t"><i>${st.id}</i>${st.name}${st.boss ? '<span class="badge">보스</span>' : ""}</span><span class="st">${"★".repeat(stars)}${"☆".repeat(3 - stars)}${hs ? ` <b class="hs" title="도전 모드 별">도전 ${"★".repeat(hs)}</b>` : ""}</span>` +
      `<span class="g">${open ? st.goal : "앞 스테이지를 깨면 열려요"}</span>`;
    const go = document.createElement("button"); go.className = "go"; go.textContent = stars ? "다시" : "출전"; go.disabled = !open;
    go.addEventListener("click", () => startStage(stageById(st.id)));
    row.appendChild(go);
    box.appendChild(row);
  }
  // 문제 주제·형식(원정에서도 고를 수 있게)
  // 로그인을 붙이기 전까지는 원정도 학생이 주제를 여러 개 고름(나중엔 선생님이 정한 범위: 아래 rangeFor)
  const fSel = $("#cFmt");
  if (!fSel.options.length) {
    for (const [k, f] of Object.entries(FORMATS)) fSel.add(new Option(f.name, k));
    fSel.addEventListener("change", () => { settings.format = fSel.value; remember("classArena.format", fSel.value); drawStart(); });
    $("#cTopicBtn").addEventListener("click", () => { Sound.play("tap"); openTopicPick("topics", "#campScreen"); });
  }
  const pickable = Account.canPickCampTopics();
  $("#cTopicBtn").textContent = topicsLabel(Account.campRange(settings.topics)) + (pickable ? " · 바꾸기" : " · 선생님이 정함");
  $("#cTopicBtn").disabled = !pickable;
  fSel.value = settings.format;
  const hc = $("#cHard");
  if (!hc.dataset.on) { hc.dataset.on = 1; hc.addEventListener("change", () => { camp.hard = hc.checked; saveCamp(camp); Sound.play("tap"); }); }
  hc.checked = !!camp.hard;
}
function startStage(st) {
  Sound.unlock(); Music.start();
  const ch = st.chapter;
  // 장에 처음 들어갈 때 한 번: 그 섬 이야기(장 머리말)
  const pro = ch.prologue && !camp.seenCh[ch.id] ? ch.prologue : [];
  if (pro.length) { camp.seenCh = { ...camp.seenCh, [ch.id]: 1 }; saveCamp(camp); }
  playStory(pro.concat(st.intro), { art: ch.art, card: { kick: `${ch.id}장 ${ch.name}`, title: `${st.id} ${st.name}`, goal: "목표: " + st.goal } }, () => wipe(() => newGame(st)));
}
// 이야기 → 전투로 넘어갈 때 한 번: 양피지 막이 쓸고 지나감(한곳에만 쓰는 큰 움직임)
function wipe(next) {
  const w = $("#wipe");
  if (reduceMotion()) { next(); return; }
  w.hidden = false; w.className = "in";
  setTimeout(() => { next(); w.className = "out"; setTimeout(() => { w.hidden = true; w.className = ""; }, 420); }, 380);
}
// 이긴 뒤: 이야기 → (마지막이면 맺음 이야기) → 군도 지도(다음 스테이지)
function afterWin(st) {
  if (!st) return showStart();
  $("#resultScreen").hidden = true;
  // 이 스테이지를 깨면 함께할 수 있게 되는 영웅이 있으면 그 인물이 한마디(기사단 막사 안내)
  const joins = HERO_ORDER.filter((k) => HERO_OPEN[k] === st.id).map((k) => ({ who: k, text: HEROES[k].join }));
  playStory(st.win.concat(joins), { art: st.chapter.art }, () => {
    if (st.final) {
      playStory(ENDING, { art: "ending", card: { kick: "원정 완료", title: "안개가 걷혔어요", goal: "모든 장의 지도가 자유 대전에 열렸어요" } }, () => { camp.done = true; saveCamp(camp); drawStart(); showCamp(nextStage().id); });
    } else if (st.epilogue) {
      playStory(EPILOGUE, { art: st.chapter.art, card: { kick: "모든 원정 완료", title: "등대에 불이 켜졌어요", goal: "도전 모드와 별 3개에도 도전해 보세요" } }, () => { camp.done2 = true; saveCamp(camp); drawStart(); showCamp(st.id); });
    } else { drawStart(); showCamp(nextStage().id); }
  });
}

// 인물 도감: 기사단은 처음 만나는 스테이지가 열리면, 해골 쪽은 그 스테이지를 깨면 들어옴
// 원정 도감: 인물(기사단은 처음 만나는 스테이지가 열리면, 해골 쪽은 그 스테이지를 깨면) · 장소(장이 열리면) · 물건
let dexTab = "who";
const ICON = {
  gem: '<path d="M12 3 20 9 12 21 4 9Z M4 9h16 M9 9l3 12 3-12 M9 9l3-6 3 6"/>',
  rune: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4 M12 18v4 M2 12h4 M18 12h4"/>',
  cloud: '<path d="M6 17h11a4 4 0 0 0 0-8 6 6 0 0 0-11-1 4 4 0 0 0 0 9Z"/>',
  ring: '<path d="M12 4a8 8 0 0 1 8 8 M20 12a8 8 0 0 1-8 8 M12 20a8 8 0 0 1-8-8 M4 12a8 8 0 0 1 8-8"/><path d="M18 9l2 3 2-3 M15 18l-3 2 3 2"/>',
  pick: '<path d="M4 9c4-5 12-5 16 0 M12 6v15"/>',
  ball: '<circle cx="11" cy="13" r="6"/><path d="M15 9l4-4 M18 3l3 3"/>',
  skull: '<path d="M5 11a7 7 0 0 1 14 0v4h-3v3H8v-3H5Z"/><circle cx="9.5" cy="11.5" r="1.5"/><circle cx="14.5" cy="11.5" r="1.5"/>',
  flame: '<path d="M12 3c3 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-4 3-7 1 2 2 3 3 3 0-3 0-5 0-7Z"/>',
};
function openDex(tab) {
  if (tab) dexTab = tab;
  document.querySelectorAll(".dtabs button").forEach((b) => b.classList.toggle("on", b.dataset.t === dexTab));
  const box = $("#dexList"); box.innerHTML = "";
  let got = 0, all = 0;
  const card = (cls, img, title, text) => {
    const d = document.createElement("div"); d.className = "dexcard " + cls;
    d.innerHTML = img + "<b></b><p></p>"; d.querySelector("b").textContent = title; d.querySelector("p").textContent = text;
    box.appendChild(d);
  };
  if (dexTab === "who") {
    for (const [k, c] of Object.entries(CHARS)) {
      if (!c.lore) continue;
      all++;
      const open = c.side === 1 ? (camp.stars[c.meet] || 0) > 0 : isOpen(camp, c.meet);
      if (open) got++;
      const st = stageById(c.meet);
      card((c.side === 1 ? "foe" : "") + (open ? "" : " unknown"), `<img src="assets/faces/${k}.webp" alt="">`,
        open ? c.name : "아직 못 만난 인물", open ? c.lore : `${st.chapter.id}장 「${st.chapter.name}」에서 만나요.`);
    }
    $("#dexNote").textContent = `만난 인물 ${got}명, 남은 인물 ${all - got}명`;
  } else if (dexTab === "place") {
    for (const ch of CHAPTERS) {
      if (ch.after && !chapterCleared(camp, ch.id - 1)) continue;
      all++;
      const open = isOpen(camp, ch.stages[0].id);
      if (open) got++;
      card("place" + (open ? "" : " unknown"), `<img src="assets/story/${ch.art}.webp" alt="">`,
        open ? `${ch.id}장 ${ch.name}` : "아직 가 보지 못한 곳", open ? (ch.prologue || []).map((x) => x.text).join(" ") : "앞 장을 마치면 갈 수 있어요.");
    }
    $("#dexNote").textContent = `가 본 곳 ${got}곳` + (all - got ? `, 남은 곳 ${all - got}곳` : "");
  } else {
    for (const it of ITEMS) {
      all++;
      const open = isOpen(camp, it.open);
      if (open) got++;
      card("item" + (open ? "" : " unknown"), `<svg class="dicon" viewBox="0 0 24 24" aria-hidden="true">${ICON[it.icon] || ""}</svg>`,
        open ? it.name : "아직 모르는 물건", open ? it.text : `${it.open} 스테이지가 열리면 알게 돼요.`);
    }
    $("#dexNote").textContent = `알게 된 물건 ${got}개, 남은 물건 ${all - got}개`;
  }
  $("#campScreen").hidden = true; $("#dexScreen").hidden = false;
}

// 기사단 막사: 함께할 영웅(원정에서 만나면 열림) + 훈련소(별로 단련, 되돌리기 없음)
let barBack = "#campScreen";
function heroLock(k) { const at = HERO_OPEN[k]; return at ? `원정 ${at} 「${stageById(at).name}」 스테이지를 깨면 함께해요` : ""; }
function openBar(back) {
  if (back) barBack = back;
  camp.hero = heroOf(camp);
  const hb = $("#barHeroes"); hb.innerHTML = "";
  for (const k of HERO_ORDER) {
    const H = HEROES[k], open = heroOpen(camp, k);
    const b = document.createElement("button");
    b.className = "herocard" + (k === camp.hero ? " on" : "") + (open ? "" : " locked");
    b.innerHTML = `<img src="assets/faces/${H.face}.webp" alt=""><span><small></small><b></b><em></em><i></i></span>`;
    b.querySelector("small").textContent = H.title + " " + H.name;
    b.querySelector("b").textContent = H.skill;
    b.querySelector("em").textContent = open ? H.desc : heroLock(k);
    b.querySelector("i").textContent = open ? `정답 ${Math.max(3, H.need - (camp.train.stone || 0))}개마다` : "";
    b.disabled = !open;
    b.addEventListener("click", () => { camp.hero = k; saveCamp(camp); Sound.play("tap"); openBar(); });
    hb.appendChild(b);
  }
  const left = starsTotal(camp) - starsSpent(camp);
  $("#barStars").textContent = `남은 별 ★${left}`;
  const tb = $("#barTrain"); tb.innerHTML = "";
  for (const k of TRAIN_ORDER) {
    const T = TRAIN[k], lv = camp.train[k] || 0, cost = lv < T.max ? T.cost[lv] : 0;
    const row = document.createElement("div"); row.className = "trow";
    row.innerHTML = `<span class="tname"><b></b><small></small></span><span class="tpips">${Array.from({ length: T.max }, (_, i) => `<i class="${i < lv ? "on" : ""}"></i>`).join("")}</span><button class="go small"></button>`;
    row.querySelector("b").textContent = T.name;
    row.querySelector("small").textContent = `${T.desc} ${T.unit} (단계마다)`;
    const btn = row.querySelector("button");
    btn.textContent = cost ? `★${cost}로 단련` : "모두 단련함";
    btn.disabled = !cost || left < cost;
    btn.addEventListener("click", () => {
      if (!cost || starsTotal(camp) - starsSpent(camp) < cost) return;
      camp.train = { ...camp.train, [k]: lv + 1 }; saveCamp(camp); Sound.play("mine"); openBar();
    });
    tb.appendChild(row);
  }
  for (const s of ["#campScreen", "#titleScreen", "#startScreen"]) $(s).hidden = true;
  $("#barScreen").hidden = false;
}

// 이야기 보여 주기: 배경 그림 + (제목 카드) + 대사 한 줄씩. 누르거나 Enter·스페이스로 넘김
let story = null;
function playStory(lines, opt, done) {
  mode = "story";
  for (const s of ["#titleScreen", "#startScreen", "#resultScreen", "#campScreen"]) $(s).hidden = true;
  $("#sArt").src = `assets/story/${opt.art || "world"}.webp`;
  story = { lines, i: -1, done, card: opt.card };
  $("#storyScreen").hidden = false;
  if (opt.card) {
    $("#sCardKick").textContent = opt.card.kick; $("#sCardTitle").textContent = opt.card.title; $("#sCardGoal").textContent = opt.card.goal || "";
    $("#sCard").hidden = false; $("#sBox").hidden = true; story.i = -2;
  } else { $("#sCard").hidden = true; storyNext(); }
}
// 대사 한 줄: 큰 초상화(말하는 사람이 바뀌면 옆에서 미끄러져 들어옴) + 글자가 한 자씩(누르면 한 번에)
const FACES = new Set(["haram", "sol", "saebyeok", "uru", "deolkeok", "sallang", "hoesaek", "cheolgol", "moro", "geurimja", "chulleong", "seori"]);
const reduceMotion = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
function storyNext() {
  if (!story) return;
  if (story.typing) { finishTyping(); return; }
  if (story.i === -2) { story.i = -1; $("#sCard").hidden = true; }
  story.i++;
  if (story.i >= story.lines.length) return storyEnd();
  const L = story.lines[story.i], c = CHARS[L.who] || CHARS.narr, box = $("#sBox");
  const face = FACES.has(L.who) && !story.noFace, foe = c.side === 1;
  box.hidden = false;
  box.className = "sbox" + (foe ? " foe" : "") + (c.img ? "" : " narr") + (face ? " has-bust" : "");
  $("#sFace").hidden = !c.img || face;
  if (c.img && !face) $("#sFace").src = `assets/portraits/${c.img}.webp`;
  const bust = $("#sBust");
  bust.hidden = !face;
  if (face) {
    const changed = story.who !== L.who;
    bust.onerror = () => { story && (story.noFace = true); bust.hidden = true; box.classList.remove("has-bust"); $("#sFace").hidden = false; $("#sFace").src = `assets/portraits/${c.img}.webp`; };
    bust.src = `assets/faces/${L.who}.webp`;
    if (changed && !reduceMotion()) bust.animate([{ opacity: 0, transform: `translateX(${foe ? 40 : -40}px)` }, { opacity: 1, transform: "none" }], { duration: 260, easing: "cubic-bezier(.2,.9,.3,1)" });
  }
  story.who = L.who;
  $("#sName").textContent = c.name; $("#sName").hidden = !c.name;
  typeText(L.text);
}
function typeText(text) {
  const el = $("#sText");
  clearInterval(story.timer);
  if (reduceMotion()) { el.textContent = text; story.typing = false; return; }
  const chars = [...text]; let n = 0;
  el.textContent = ""; story.typing = true; story.full = text;
  story.timer = setInterval(() => {
    n += 2; el.textContent = chars.slice(0, n).join("");
    if (n % 6 === 0) Sound.play("tick");
    if (n >= chars.length) finishTyping();
  }, 34);
}
function finishTyping() {
  if (!story) return;
  clearInterval(story.timer); story.typing = false; $("#sText").textContent = story.full || $("#sText").textContent;
}
function storyEnd() {
  if (story) clearInterval(story.timer);
  const d = story && story.done; story = null;
  $("#storyScreen").hidden = true;
  if (d) d();
}

// ---------- 주제 고르기(여러 개) ----------
const GROUPS = () => [...new Set(Object.values(TOPICS).map((t) => t.group || "수학"))];
// box에 주제 단추를 그림(group이 있으면 그 과목만). key: settings의 "topics"·"topics2". 누르면 켜고 끄기
function buildTopicChips(box, key, after, group = null) {
  box.innerHTML = "";
  let g0 = null, row = null;
  for (const [k, t] of Object.entries(TOPICS)) {
    const g = t.group || "수학";
    if (group && g !== group) continue;
    if (!row || g !== g0) {
      g0 = g; row = document.createElement("div"); row.className = "tgroup"; box.appendChild(row);
      const gl = document.createElement("span"); gl.className = "ogroup"; gl.textContent = group ? "" : g; row.appendChild(gl);
    }
    const b = document.createElement("button"); b.className = "opt"; b.dataset.k = k; b.setAttribute("aria-pressed", "false");
    b.innerHTML = `<span>${t.name}</span><small>${t.hint}</small>`;
    b.addEventListener("click", () => {
      const list = settings[key], i = list.indexOf(k);
      if (i >= 0) list.splice(i, 1); else list.push(k);
      saveTopics(key); Sound.play("tap"); paintTopicChips(box, key); if (after) after();
    });
    row.appendChild(b);
  }
  paintTopicChips(box, key);
}
function paintTopicChips(box, key) {
  box.querySelectorAll(".opt").forEach((b) => { const on = settings[key].includes(b.dataset.k); b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); });
}
// 무작위 n개(과목을 주면 그 과목 안에서)
function randomTopics(key, n, group = null) {
  const pool = Object.keys(TOPICS).filter((k) => !group || (TOPICS[k].group || "수학") === group);
  for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
  settings[key] = pool.slice(0, Math.max(1, Math.min(n, pool.length))); saveTopics(key);
}
// 고른 주제를 과목별로 한 줄씩(× 누르면 빼기)
function drawPicked(box, key, after) {
  box.innerHTML = "";
  for (const g of GROUPS()) {
    const ks = settings[key].filter((k) => (TOPICS[k].group || "수학") === g);
    if (!ks.length) continue;
    const row = document.createElement("div"); row.className = "pg";
    row.innerHTML = `<span class="subj s-${GROUPS().indexOf(g)}">${g}</span><span class="pchips"></span>`;
    for (const k of ks) {
      const c = document.createElement("button"); c.className = "pchip"; c.title = TOPICS[k].hint; c.setAttribute("aria-label", TOPICS[k].name + " 빼기");
      c.innerHTML = `${TOPICS[k].name}<i>×</i>`;
      c.addEventListener("click", () => {
        if (settings[key].length === 1) { toast("주제는 하나 넘게 골라야 해요"); return; }
        settings[key] = settings[key].filter((x) => x !== k); saveTopics(key); Sound.play("tap"); after();
      });
      row.querySelector(".pchips").appendChild(c);
    }
    box.appendChild(row);
  }
}
// 주제 고르기 창: 과목 탭 + 단추 + 고른 것 요약 + 무작위 n개
let tp = { key: "topics", back: "#startScreen", tab: "전체" };
function openTopicPick(key, back) {
  tp = { key, back, tab: tp.tab || "전체" };
  const duo = settings.mode === "duo" && back === "#startScreen";
  $("#tpWho").textContent = back === "#campScreen" ? "원정 문제 주제" : duo ? `${key === "topics" ? "왼쪽" : "오른쪽"} 자리 · ${sideName(key === "topics" ? settings.duoLeft : -settings.duoLeft)}` : "문제 주제";
  for (const s of ["#campScreen", "#startScreen"]) $(s).hidden = true;
  $("#topicScreen").hidden = false; drawTopicPick();
}
function drawTopicPick() {
  const key = tp.key, tabs = $("#tpTabs");
  tabs.innerHTML = "";
  for (const g of ["전체", ...GROUPS()]) {
    const n = settings[key].filter((k) => g === "전체" || (TOPICS[k].group || "수학") === g).length;
    const b = document.createElement("button"); b.className = "tptab" + (g === tp.tab ? " on" : ""); b.setAttribute("role", "tab"); b.setAttribute("aria-selected", g === tp.tab);
    b.innerHTML = `${g}${n ? `<i>${n}</i>` : ""}`;
    b.addEventListener("click", () => { tp.tab = g; Sound.play("tap"); drawTopicPick(); });
    tabs.appendChild(b);
  }
  buildTopicChips($("#topicPickOpts"), key, drawTopicPickFoot, tp.tab === "전체" ? null : tp.tab);
  drawTopicPickFoot();
}
function drawTopicPickFoot() {
  const key = tp.key, list = settings[key];
  $("#tpCount").textContent = `${list.length}개 고름`;
  $("#tpList").textContent = list.length ? list.map((k) => TOPICS[k].name).join(", ") : "아직 없어요";
  $("#tpN").textContent = settings.randN;
  $("#tpRand").textContent = tp.tab === "전체" ? "뽑기" : `${tp.tab}에서 뽑기`;
  $("#tpTabs").querySelectorAll(".tptab").forEach((b, i) => { const g = ["전체", ...GROUPS()][i], n = list.filter((k) => g === "전체" || (TOPICS[k].group || "수학") === g).length; b.innerHTML = `${g}${n ? `<i>${n}</i>` : ""}`; });
}
function buildTopicPick() {
  $("#tpMinus").addEventListener("click", () => { settings.randN = Math.max(1, settings.randN - 1); remember("classArena.randN", settings.randN); drawTopicPickFoot(); });
  $("#tpPlus").addEventListener("click", () => { settings.randN = Math.min(8, settings.randN + 1); remember("classArena.randN", settings.randN); drawTopicPickFoot(); });
  $("#tpRand").addEventListener("click", () => { randomTopics(tp.key, settings.randN, tp.tab === "전체" ? null : tp.tab); Sound.play("coin"); drawTopicPick(); });
  $("#tpClear").addEventListener("click", () => { settings[tp.key] = []; saveTopics(tp.key); Sound.play("tap"); drawTopicPick(); });
  $("#topicDone").addEventListener("click", () => {
    if (!settings[tp.key].length) { toast("주제를 하나 넘게 골라요"); return; }
    $("#topicScreen").hidden = true; $(tp.back).hidden = false;
    if (tp.back === "#campScreen") drawCamp(); else drawStart();
    drawLastSet();
  });
}

// ---------- 시작·설정·멈춤 ----------
function buildStart() {
  // 타이틀의 모드 카드: 고르면 그 모드 준비 창
  document.querySelectorAll(".mcard[data-m]").forEach((b) => b.addEventListener("click", () => {
    Sound.unlock(); Music.start(); Sound.play("tap");
    settings.mode = b.dataset.m; remember("classArena.mode", settings.mode);
    $("#titleScreen").hidden = true; $("#startScreen").hidden = false; drawStart();
  }));
  buildTopicPick();
  document.querySelectorAll("#sideCards [data-pick]").forEach((b) => b.addEventListener("click", () => { Sound.play("tap"); openTopicPick(b.dataset.pick, "#startScreen"); }));
  document.querySelectorAll("#sideCards [data-rand]").forEach((b) => b.addEventListener("click", () => {
    randomTopics(b.dataset.rand, settings.randN); Sound.play("coin"); toast(`주제를 무작위로 ${settings[b.dataset.rand].length}개 골랐어요`); drawStart(); drawLastSet();
  }));
  $("#swapSides").addEventListener("click", () => { settings.duoLeft = -settings.duoLeft; remember("classArena.duoLeft", settings.duoLeft); Sound.play("tap"); drawStart(); drawLastSet(); });

  const fmtBox = $("#fmtOpts");
  for (const [k, f] of Object.entries(FORMATS)) {
    const b = document.createElement("button"); b.className = "opt"; b.dataset.k = k;
    b.innerHTML = `<span>${f.name}</span><small>${f.hint}</small>`;
    b.addEventListener("click", () => { settings.format = k; remember("classArena.format", k); drawStart(); });
    fmtBox.appendChild(b);
  }
  // 지도 단추는 drawStart가 그림(원정에서 장을 깨면 늘어남)
  const aiBox = $("#aiOpts"), desc = { recruit: "천천히 풀어요", knight: "가끔 상성을 노려요", general: "빠르고 영리해요", warlord: "어려운 문제를 푸는 강적" };
  for (const [k, a] of Object.entries(AI_LEVELS)) {
    const b = document.createElement("button"); b.className = "opt"; b.dataset.k = k;
    b.innerHTML = `<span>${a.name}</span><small>${desc[k]}</small>`;
    b.addEventListener("click", () => { settings.ai = k; remember("classArena.ai", k); drawStart(); });
    aiBox.appendChild(b);
  }
  // 상성 고리 그림
  const ring = $("#ring"), pos = { shield: [47, 0], rusher: [94, 47], archer: [47, 94], mage: [0, 47] };
  ring.innerHTML = `<svg viewBox="0 0 150 150"><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#c9a45c"/></marker></defs>` +
    `<path d="M95,28 Q118,32 122,55" stroke="#c9a45c" stroke-width="3" fill="none" marker-end="url(#ah)"/>` +
    `<path d="M122,95 Q118,118 95,122" stroke="#c9a45c" stroke-width="3" fill="none" marker-end="url(#ah)"/>` +
    `<path d="M55,122 Q32,118 28,95" stroke="#c9a45c" stroke-width="3" fill="none" marker-end="url(#ah)"/>` +
    `<path d="M28,55 Q32,32 55,28" stroke="#c9a45c" stroke-width="3" fill="none" marker-end="url(#ah)"/></svg>`;
  for (const role of ROLES) {
    const img = document.createElement("img");
    img.src = `assets/portraits/${SIDES[PLAYER].models[role]}.webp`; img.alt = ROLE_INFO[role].name; img.title = ROLE_INFO[role].name;
    img.style.left = pos[role][0] + "px"; img.style.top = pos[role][1] + "px";
    ring.appendChild(img);
  }
  $("#startBtn").addEventListener("click", () => { Sound.unlock(); newGame(); });
  $("#campBtn").addEventListener("click", () => { Sound.unlock(); Music.start(); openCamp(); });
  $("#campMapBtn").addEventListener("click", () => showCamp(G && G.stage ? G.stage.id : null));
  $("#nextBtn").addEventListener("click", () => afterWin(G.stage));
  $("#cBack").addEventListener("click", () => { Sound.play("tap"); showStart(); });
  $("#cDex").addEventListener("click", () => { Sound.play("tap"); openDex(); });
  $("#cBar").addEventListener("click", () => { Sound.play("tap"); openBar("#campScreen"); });
  $("#barClose").addEventListener("click", () => { $("#barScreen").hidden = true; $(barBack).hidden = false; if (barBack === "#campScreen") drawCamp(); });
  document.querySelectorAll(".dtabs button").forEach((b) => b.addEventListener("click", () => { Sound.play("tap"); openDex(b.dataset.t); }));
  $("#dexClose").addEventListener("click", () => { $("#dexScreen").hidden = true; $("#campScreen").hidden = false; });
  // 이야기 다시 보기: 처음 이야기 + 고른 장에서 깬 스테이지 이야기(시작·끝)
  $("#cStory").addEventListener("click", () => {
    const ch = CHAPTERS[campSel - 1];
    const lines = ch.id === 1 ? [...WORLD.intro] : [];
    for (const st of ch.stages) if (camp.stars[st.id]) lines.push(...st.intro, ...st.win);
    if (ch.prologue && lines.length) lines.unshift(...ch.prologue);
    if (ch.stages.some((x) => x.final) && camp.done) lines.push(...ENDING);
    if (ch.stages.some((x) => x.epilogue) && camp.done2) lines.push(...EPILOGUE);
    if (!lines.length) { toast("이 장은 아직 이야기가 없어요. 먼저 출전해요!"); return; }
    playStory(lines, { art: ch.id === 1 && !camp.stars["1-1"] ? "world" : ch.art }, () => showCamp(ch.stages[0].id));
  });
  $("#backBtn").addEventListener("click", () => { $("#startScreen").hidden = true; drawLastSet(); $("#titleScreen").hidden = false; });
  $("#setBtn0").addEventListener("click", () => openSettings("#titleScreen"));
  $("#againBtn").addEventListener("click", () => { Sound.unlock(); newGame(G ? G.stage : null); });
  $("#copyBtn").addEventListener("click", copyShare);
  $("#cardBtn").addEventListener("click", saveCard);
  $("#cardView").addEventListener("click", () => { $("#cardView").hidden = true; });
  $("#homeBtn").addEventListener("click", showStart);
  $("#pauseBtn").addEventListener("click", pause);
  $("#resumeBtn").addEventListener("click", resume);
  $("#quitBtn").addEventListener("click", () => { const st = G && G.stage; if (st) showCamp(st.id); else showStart(); });
  $("#setBtn1").addEventListener("click", () => openSettings("#startScreen"));
  $("#setBtn2").addEventListener("click", () => openSettings("#pauseScreen"));
  drawStart();
}
function drawStart() {
  const duo = settings.mode === "duo", daily = settings.mode === "daily";
  $("#prepTitle").textContent = { cpu: "연습 대전", duo: "둘이서 대전", daily: "오늘의 도전" }[settings.mode] || "연습 대전";
  $("#aiPick").hidden = duo || daily;
  $("#fmtOpts").closest(".pick").hidden = daily;
  $("#dailyNote").hidden = !daily;
  if (daily) { const t = today(); $("#dailyNote").textContent = `${t.label} 오늘의 도전은 ${TOPICS[t.topic].name}이에요. 직접 입력으로 컴퓨터 기사와 겨뤄요. 반 친구들 모두 같은 문제가 같은 순서로 나와요. 끝나고 기록을 복사해 비교해 보세요!`; }
  // 자리 카드: 연습은 하나(나), 둘이서는 왼쪽·오른쪽(진영 표시, 바꾸기)
  $("#sideCards").hidden = daily; $("#sideR").hidden = !duo; $("#swapSides").hidden = !duo;
  $("#sideCards").classList.toggle("two", duo);
  for (const [id, key, side, where] of [["#sideL", "topics", duo ? settings.duoLeft : -1, duo ? "왼쪽 자리" : "문제 주제"], ["#sideR", "topics2", -settings.duoLeft, "오른쪽 자리"]]) {
    const c = $(id);
    c.className = "sidecard " + (side < 0 ? "blue" : "red");
    c.querySelector(".fac").textContent = duo ? sideName(side) : "나 · 기사단";
    c.querySelector(".where").textContent = where;
    c.querySelector(".cnt").textContent = `${settings[key].length}개 · 번갈아 나와요`;
    drawPicked(c.querySelector(".picked"), key, () => { drawStart(); drawLastSet(); });
    c.querySelector("[data-rand]").textContent = `무작위 ${settings.randN}개`;
  }
  document.querySelectorAll("#aiOpts .opt").forEach((b) => b.classList.toggle("on", b.dataset.k === settings.ai));
  document.querySelectorAll("#fmtOpts .opt").forEach((b) => b.classList.toggle("on", b.dataset.k === settings.format));
  const mapBox = $("#mapOpts"); mapBox.innerHTML = "";
  for (const [k, m] of Object.entries(MAPS)) {
    if (!mapOpen(k)) continue;
    const b = document.createElement("button"); b.className = "opt" + (k === settings.map ? " on" : ""); b.dataset.k = k;
    b.innerHTML = `<span>${m.name}</span><small>${m.desc}</small>`;
    b.addEventListener("click", () => { settings.map = k; remember("classArena.map", k); drawStart(); });
    mapBox.appendChild(b);
  }
  const lock = Object.keys(MAPS).filter((k) => !mapOpen(k)).length;
  if (lock) { const n = document.createElement("span"); n.className = "note"; n.textContent = `원정에서 열 지도 ${lock}개`; mapBox.appendChild(n); }
}
function showStart() {
  mode = "menu"; G = null; Music.theme("march"); view.setHero(null); view.setMirror(false); document.body.classList.remove("mirror");
  document.body.classList.add("menu"); document.body.classList.remove("counting"); $("#count").hidden = true;
  layout();
  startDemo();
  for (const s of ["#resultScreen", "#pauseScreen", "#setScreen", "#startScreen", "#campScreen", "#storyScreen", "#topicScreen", "#barScreen", "#dexScreen"]) $(s).hidden = true;
  $("#talk").hidden = true; talkQ.length = 0;
  for (const st of seats) { st.lock = null; st.$(".lock").hidden = true; }
  drawLastSet();
  $("#titleScreen").hidden = false;
}
function drawLastSet() {
  // 모드 카드 아래 작은 글: 지난번 설정(누르면 준비 창에서 바꿀 수 있음)
  const t = today(), ai = AI_LEVELS[settings.ai].name;
  const meta = { cpu: `${topicsLabel(settings.topics)} · ${ai}`, duo: `${topicsLabel(settings.topics)} 대 ${topicsLabel(settings.topics2)}`, daily: `${t.label} ${TOPICS[t.topic].name}` };
  document.querySelectorAll(".mcard[data-m]").forEach((b) => { b.querySelector(".mmeta").textContent = meta[b.dataset.m] || ""; });
  const n = STAGES.filter((x) => camp.stars[x.id]).length;
  $("#campMeta").textContent = n === 0 ? "처음부터 시작" : camp.done2 ? "모든 원정 완료" : `${n}/${STAGES.length} 스테이지`;
}
function pause() {
  if (mode !== "play") return;
  mode = "pause"; $("#pauseScreen").hidden = false; Music.duck(true);
  $("#quitBtn").textContent = G && G.stage ? "그만하고 원정 지도로" : "그만하고 처음으로";
}
function resume() { mode = "play"; $("#pauseScreen").hidden = true; Music.duck(false); }

let setBack = null;
function buildSettings() {
  drawQualOpts();
  $("#fpsToggle").checked = quality.showFps;
  $("#fpsToggle").addEventListener("change", (e) => { quality.setShowFps(e.target.checked); $("#fps").hidden = !e.target.checked; });
  $("#fps").hidden = !quality.showFps;
  $("#soundToggle").checked = Sound.on;
  $("#soundToggle").addEventListener("change", (e) => Sound.set(e.target.checked));
  $("#musicToggle").checked = Music.on;
  $("#musicToggle").addEventListener("change", (e) => { Music.set(e.target.checked); if (e.target.checked) { Sound.unlock(); Music.start(); } });
  $("#setClose").addEventListener("click", () => { $("#setScreen").hidden = true; if (setBack) $(setBack).hidden = false; });
}
function drawQualOpts() {
  const box = $("#qualOpts"); box.innerHTML = "";
  const add = (k, name, sub) => {
    const b = document.createElement("button"); b.className = "opt" + (quality.choice === k ? " on" : "");
    b.innerHTML = `<span>${name}</span><small>${sub}</small>`;
    b.addEventListener("click", () => { quality.choose(k); drawQualOpts(); });
    box.appendChild(b);
  };
  add("auto", "자동", "지금: " + QUALITY[quality.level].name);
  const subs = { high: "그림자 부드럽게", mid: "기본", low: "그림자 간단히", lowest: "느린 기기용" };
  for (const k of QUALITY_ORDER) add(k, QUALITY[k].name, subs[k]);
  $("#qualNote").textContent = "자동은 전투 처음 5초 동안 재서 맞추고, 느려지면 한 단계씩 낮춰요. 계단 현상 보정은 다음에 열 때부터 바뀌어요.";
}
function openSettings(from) { setBack = from; $(from).hidden = true; $("#setScreen").hidden = false; drawQualOpts(); }

// ---------- 매 프레임 ----------
let last = performance.now(), renderAcc = 0, fpsShown = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min((now - last) / 1000, 0.05); last = now;
  quality.tick(dt, mode === "play");
  const playing = mode === "play" || mode === "result";
  let simDt = dt;
  if (hitstop > 0) { hitstop -= dt; simDt = 0; }
  if (dangerT > 0) dangerT -= dt;
  $("#vignette").classList.toggle("danger", dangerT > 0 && mode === "play");
  if (G && mode === "count") tickCount();
  if (G && playing) {
    G.battle.update(simDt);
    if (mode === "play") { if (G.ai) G.ai.update(simDt); for (const st of seats) st.tick(dt); }
    const evts = G.battle.events; G.battle.events = [];
    if (G.runner && mode === "play") G.runner.update(simDt, evts);
    view.handle(evts, G.battle);
    onEvents(evts);
    updateHud(false);
    if (G.endT >= 0 && mode === "play") { G.endT += dt; if (G.endT > 2.8) showResult(); }
  }
  if (mode === "menu") tickDemo(dt);
  view.update(mode === "pause" ? 0 : simDt, G ? G.battle : demo ? demo.b : idle);
  if (toastT > 0) { toastT -= dt; if (toastT <= 0) $("#toast").hidden = true; }
  if (talkT > 0 && mode === "play") { talkT -= dt; if (talkT <= 0) nextTalk(); }
  if (mode !== "play") for (const st of seats) if (st.toastT > 0) st.tick(0);
  if (quality.showFps && now - fpsShown > 500) { fpsShown = now; $("#fps").textContent = Math.round(quality.fps) + " fps · " + QUALITY[quality.level].name; }
  // 이야기·원정 지도·도감이 화면을 덮고 있으면 3D를 그리지 않음(밑에서 계속 그리면 느린 기기가 버벅임)
  if (!$("#storyScreen").hidden || !$("#campScreen").hidden || !$("#dexScreen").hidden) return;
  const cap = quality.preset.cap;
  if (cap) { renderAcc += dt; if (renderAcc < 1 / cap - 0.004) return; renderAcc = 0; }
  view.render();
}

// 로컬 점검용(배포 주소에서는 꺼짐)
function exposeTestHook() {
  window.__arena = {
    get battle() { return G && G.battle; }, get mode() { return mode; }, get q() { return seats[0] && seats[0].q; }, quality, view, get seats() { return seats; },
    start: (topic, ai, format, m) => { if (topic) settings.topics = [].concat(topic); if (ai) settings.ai = ai; if (format) settings.format = format; settings.mode = m || "cpu"; newGame(); },
    answerRight(i = 0) { const s = seats[i]; if (!G || s.lock) return false; s.input = String(s.q.answer); s.submit(); return true; },
    answerWrong(i = 0) { const s = seats[i]; if (!G || s.lock) return false; s.input = String(s.q.answer + 1); s.submit(); return true; },
    deploy: (r, l, i = 0) => { const s = seats[i]; if (l) s.setLane(l); s.deploy(r, s.cards[r]); },
    stage: (id) => newGame(stageById(id)), playStage: (id) => startStage(stageById(id)), openCamp, showCamp, get camp() { return camp; },
    // 점검용: 그림 없이 게임 시간을 빨리 감기(학생 대신 n번째마다 출전)
    fast(sec, every = 0, role = "shield", lane = null) {
      const b = G.battle; let t = 0, k = 0;
      while (t < sec && b.state === "play") {
        const dt = 1 / 20; t += dt; k++;
        b.update(dt); if (G.ai) G.ai.update(dt);
        const ev = b.events; b.events = [];
        if (G.runner) G.runner.update(dt, ev);
        onEvents(ev); view.handle(ev, b);
        if (every && k % Math.round(every * 20) === 0) { b.sides[-1].gold += 80; b.deploy(-1, role, lane || "mid"); }
      }
      return { time: b.time, talks: talkLog.slice(), state: b.state, mode: G.ai && G.ai.mode && G.ai.mode.type };
    },
    setCamp(p) { camp = { stars: {}, hstars: {}, loss: {}, seenIntro: false, done: false, hard: false, hero: "haram", train: {}, seenCh: {}, ...p }; saveCamp(camp); drawStart(); drawLastSet(); }, get story() { return story; }, storyNext, get G() { return G; },
  };
}

boot().catch(fail);
