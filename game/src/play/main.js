// 「성문 대전」 연습 대전: 화면 조립, 문제 풀기, 출전 버튼, 시작·설정·결과 화면, 매 프레임 흐름.
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ROLES, ROLE_INFO, SIDES, AI_LEVELS, QUALITY, QUALITY_ORDER, BASE } from "./config.js";
import { LANE_LABEL, LANE_NAMES, MAPS, useMap } from "./lanes.js";
import { Battle } from "./battle.js";
import { ComputerPlayer } from "./ai.js";
import { View3D } from "./view3d.js";
import { Quality } from "./quality.js";
import { Sound } from "./sound.js";
import { Music } from "./music.js";
import { TOPICS, FORMATS, checkAnswer, questionLine, setSeed } from "./questions.js";
import { Seat } from "./seat.js";
import { WORLD, CHARS, CHAPTERS, ENDING, STAGES, stageById, loadProgress, saveProgress, isOpen, chapterStars, chapterCleared } from "./campaign.js";
import { StageRunner, stageAI, stageBattle, assistLevel } from "./stage.js";

const $ = (s) => document.querySelector(s);
// 지도: 자유 대전에서 고른 지도(주소 끝 #wide 처럼 줄 수도 있음). 판마다 필요한 전장 모형만 그때 받음
const firstMap = (location.hash || "").replace("#", "");
let camp = loadProgress();    // 원정 진행(별·처음 이야기 봤는지)
// 자유 대전에서 쓸 수 있는 지도: 처음부터 둘 + 원정에서 깬 장의 지도
const mapOpen = (k) => !!MAPS[k] && (MAPS[k].free || chapterCleared(camp, MAPS[k].chapter));
let MAP_KEY = useMap(MAPS[firstMap] ? firstMap : remember("classArena.map") || "diag");
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
  topic: remember("classArena.topic") || "gugu", topic2: remember("classArena.topic2") || "gugu",
  ai: remember("classArena.ai") || "recruit", format: remember("classArena.format") || "input",
  map: MAP_KEY,
};
if (!["cpu", "duo", "daily"].includes(settings.mode)) settings.mode = "cpu";
// 오늘의 도전: 날짜로 주제·문제 순서가 정해짐(모두 같음), 상대는 기사, 형식은 직접 입력
function today() {
  const d = new Date(), key = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  const days = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  const topics = Object.keys(TOPICS);
  return { key, label: `${d.getMonth() + 1}월 ${d.getDate()}일`, topic: topics[days % topics.length] };
}
if (!FORMATS[settings.format]) settings.format = "input";
if (!TOPICS[settings.topic]) settings.topic = "gugu";
if (!TOPICS[settings.topic2]) settings.topic2 = "gugu";
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
  const ctx = { view, isPlaying: () => mode === "play", toast };
  seats = m === "duo" ? [new Seat(panel, -1, ctx), new Seat(panel, 1, ctx)] : [new Seat(panel, -1, ctx)];
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
    if ((seats.length === 2) !== duo) makeSeats(duo ? "duo" : "cpu");
    await switchMap(stage ? stage.map : mapOpen(settings.map) ? settings.map : "diag");
    Music.intense(false); Music.duck(false); Music.start();
    document.body.classList.remove("menu");
    layout();
    view.clear();
    const losses = stage ? (camp.loss && camp.loss[stage.id]) || 0 : 0;
    const hard = !!(stage && camp.hard);
    const battle = new Battle(durations, stage ? stageBattle(stage, losses, hard) : {});
    const level = stage ? stageAI(stage, losses, hard) : daily ? "knight" : settings.ai;
    G = { battle, duo, daily, stage, ai: duo ? null : new ComputerPlayer(battle, CPU, level), endT: -1 };
    if (stage) G.runner = new StageRunner(battle, stage, G.ai, { talk: (w, t) => talk(w, t), boss: (w, t) => talk(w, t, true) }, hard ? 0 : assistLevel(losses));
    G.hard = hard;
    setSeed(daily ? daily.key : null);
    seats[0].start(battle, daily ? daily.topic : settings.topic, daily ? "input" : settings.format, stage ? stage.rules : undefined);
    if (duo) seats[1].start(battle, settings.topic2, settings.format);
    $("#blueSub").textContent = duo ? "왼쪽" : "나";
    $("#redSub").textContent = duo ? "오른쪽" : stage ? `${stage.id} ${stage.boss ? CHARS[stage.boss].name : stage.name}` : "컴퓨터 " + AI_LEVELS[daily ? "knight" : settings.ai].name;
    $("#banner").hidden = true; talkQ.length = 0; talkLog.length = 0;
    document.querySelectorAll(".confetti").forEach((c) => c.remove()); // 앞 판 색종이 지우기 $("#talk").hidden = true; talkT = 0;
    if (daily) setTimeout(() => banner(`${daily.label} 오늘의 도전, ${TOPICS[daily.topic].name}`, 2.2), 300);
    if (stage) setTimeout(() => banner((hard ? "도전 모드! " : "") + "목표: " + stage.goal.replace(/요$/, "요!"), 2.4), 300);
    if (stage && stage.unlock && !camp.stars[stage.id]) setTimeout(() => { if (G && G.stage === stage) banner(stage.unlock, 2.4); }, 2900);
    quality.reset();
    mode = "play";
    updateHud(true);
  } catch (e) { toast("전장을 열지 못했어요: " + ((e && e.message) || e)); showStart(); }
  finally { busy = false; }
}
let busy = false;

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
      : ob.type === "survive" ? "목표: 끝까지 버티기" : "남은 시간";
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
    col.innerHTML = (G.duo ? `<h3 class="who">${sideName(seat.side)} · ${seat.side < 0 ? "왼쪽" : "오른쪽"} (${TOPICS[seat.topic].name})</h3>` : "") +
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
    saveProgress(camp);
    if (!won && !G.hard && assistLevel(camp.loss[st.id]) > assistLevel(camp.loss[st.id] - 1)) toast("다음 판부터 해골 군단이 조금 약해져요. 힘내요!");
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
    return `${TOPICS[seat.topic].name} · 정답 ${S.stats.right}/${S.stats.right + S.stats.wrong} · 최고 ${S.bestStreak}연속\n${sq}`;
  };
  if (G.duo) {
    const w = b.winner;
    return `성문 대전 · 둘이서 · ${w ? (w < 0 ? "기사단" : "해골 군단") + " 승리" : "무승부"} · ${tm}\n기사단: ${line(seats[0])}\n해골 군단: ${line(seats[1])}`;
  }
  const res = b.winner === PLAYER ? "승리" : b.winner === CPU ? "패배" : "무승부";
  const head = G.daily ? `성문 대전 · 오늘의 도전 ${G.daily.label}` : G.stage ? `성문 대전 · 원정 ${G.stage.id} ${G.stage.name}` : "성문 대전";
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
  g.textAlign = "center"; g.fillStyle = "#fff3d6"; g.font = "800 120px 'Hahmlet', serif"; g.fillText("성문 대전", 540, 200);
  const lines = $("#shareText").textContent.split("\n");
  g.fillStyle = "#ffd36b"; g.font = "800 52px 'Hahmlet', serif"; g.fillText(lines[0].replace("성문 대전 · ", ""), 540, 320);
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
  const a = document.createElement("a"); a.href = url; a.download = "성문대전_기록.png";
  document.body.appendChild(a); a.click(); a.remove();
  // 저장이 막힌 화면(미리보기 등)에서는 그림을 보여 주고 길게 눌러 저장하게
  const box = $("#cardView"); box.hidden = false; box.querySelector("img").src = url;
}

// ---------- 원정: 군도 지도·이야기 ----------
function openCamp() {
  for (const s of ["#titleScreen", "#startScreen"]) $(s).hidden = true;
  if (!camp.seenIntro) {
    playStory(WORLD.intro, { art: "world" }, () => { camp.seenIntro = true; saveProgress(camp); showCamp(); });
  } else showCamp();
}
// 다음에 할 스테이지(안 깬 것 중 처음), 다 깼으면 마지막
const nextStage = () => STAGES.find((x) => !camp.stars[x.id]) || STAGES[STAGES.length - 1];
let campSel = 1;
function showCamp(stageId) {
  mode = "menu"; G = null;
  document.body.classList.add("menu");
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
    const open = isOpen(camp, ch.stages[0].id), stars = chapterStars(camp, ch);
    const b = document.createElement("button");
    b.className = "cnode" + (ch.id === campSel ? " on" : "") + (open ? "" : " locked") + (nx.chapter.id === ch.id && !camp.done ? " next" : "");
    b.style.left = ch.pos[0] + "%"; b.style.top = ch.pos[1] + "%";
    b.innerHTML = `<span class="num">${ch.id}</span><b>${ch.name}</b><small>${open ? "★".repeat(stars) + "☆".repeat(ch.stages.length * 3 - stars) : "잠김"}</small>`;
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
  const tSel = $("#cTopic"), fSel = $("#cFmt");
  if (!tSel.options.length) {
    const groups = {};
    for (const [k, t] of Object.entries(TOPICS)) {
      const g = t.group || "그 밖";
      if (!groups[g]) { groups[g] = document.createElement("optgroup"); groups[g].label = g; tSel.appendChild(groups[g]); }
      groups[g].appendChild(new Option(t.name, k));
    }
    for (const [k, f] of Object.entries(FORMATS)) fSel.add(new Option(f.name, k));
    tSel.addEventListener("change", () => { settings.topic = tSel.value; remember("classArena.topic", tSel.value); drawStart(); });
    fSel.addEventListener("change", () => { settings.format = fSel.value; remember("classArena.format", fSel.value); drawStart(); });
  }
  tSel.value = settings.topic; fSel.value = settings.format;
  const hc = $("#cHard");
  if (!hc.dataset.on) { hc.dataset.on = 1; hc.addEventListener("change", () => { camp.hard = hc.checked; saveProgress(camp); Sound.play("tap"); }); }
  hc.checked = !!camp.hard;
}
function startStage(st) {
  Sound.unlock(); Music.start();
  const ch = st.chapter;
  playStory(st.intro, { art: ch.art, card: { kick: `${ch.id}장 ${ch.name}`, title: `${st.id} ${st.name}`, goal: "목표: " + st.goal } }, () => newGame(st));
}
// 이긴 뒤: 이야기 → (마지막이면 맺음 이야기) → 군도 지도(다음 스테이지)
function afterWin(st) {
  if (!st) return showStart();
  $("#resultScreen").hidden = true;
  playStory(st.win, { art: st.chapter.art }, () => {
    if (st.final) {
      playStory(ENDING, { art: "ending", card: { kick: "원정 완료", title: "안개가 걷혔어요", goal: "모든 장의 지도가 자유 대전에 열렸어요" } }, () => { camp.done = true; saveProgress(camp); drawStart(); showCamp(st.id); });
    } else { drawStart(); showCamp(nextStage().id); }
  });
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
const FACES = new Set(["haram", "sol", "saebyeok", "uru", "deolkeok", "sallang", "hoesaek", "cheolgol", "moro"]);
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

// ---------- 시작·설정·멈춤 ----------
function buildStart() {
  document.querySelectorAll("#modes .mode[data-m]").forEach((b) => b.addEventListener("click", () => {
    settings.mode = b.dataset.m; remember("classArena.mode", settings.mode); drawStart();
  }));
  for (const [boxId, key] of [["#topicOpts", "topic"], ["#topic2Opts", "topic2"]]) {
    const topicBox = $(boxId);
    let group = "", row = null;
    for (const [k, t] of Object.entries(TOPICS)) {
      // 과목(수학·국어·사회)마다 한 줄: 묶음 이름 + 주제 단추
      if (!row || (t.group && t.group !== group)) {
        group = t.group; row = document.createElement("div"); row.className = "tgroup"; topicBox.appendChild(row);
        const g = document.createElement("span"); g.className = "ogroup"; g.textContent = group || ""; row.appendChild(g);
      }
      const b = document.createElement("button"); b.className = "opt"; b.dataset.k = k;
      b.innerHTML = `<span>${t.name}</span><small>${t.hint}</small>`;
      b.addEventListener("click", () => { settings[key] = k; remember("classArena." + key, k); drawStart(); });
      row.appendChild(b);
    }
  }
  const fmtBox = $("#fmtOpts");
  for (const [k, f] of Object.entries(FORMATS)) {
    const b = document.createElement("button"); b.className = "opt"; b.dataset.k = k;
    b.innerHTML = `<span>${f.name}</span><small>${f.hint}</small>`;
    b.addEventListener("click", () => { settings.format = k; remember("classArena.format", k); drawStart(); });
    fmtBox.appendChild(b);
  }
  // 지도 단추는 drawStart가 그림(원정에서 장을 깨면 늘어남)
  const aiBox = $("#aiOpts"), desc = { recruit: "천천히 풀어요", knight: "가끔 상성을 노려요", general: "빠르고 영리해요" };
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
  $("#quickBtn").addEventListener("click", () => { Sound.unlock(); if (settings.mode === "duo" || settings.mode === "daily") { /* 지난 설정 그대로 */ } newGame(); });
  $("#campBtn").addEventListener("click", () => { Sound.unlock(); Music.start(); openCamp(); });
  $("#modeCamp").addEventListener("click", () => { $("#startScreen").hidden = true; openCamp(); });
  $("#campMapBtn").addEventListener("click", () => showCamp(G && G.stage ? G.stage.id : null));
  $("#nextBtn").addEventListener("click", () => afterWin(G.stage));
  $("#cBack").addEventListener("click", () => { Sound.play("tap"); showStart(); });
  // 이야기 다시 보기: 처음 이야기 + 고른 장에서 깬 스테이지 이야기(시작·끝)
  $("#cStory").addEventListener("click", () => {
    const ch = CHAPTERS[campSel - 1];
    const lines = ch.id === 1 ? [...WORLD.intro] : [];
    for (const st of ch.stages) if (camp.stars[st.id]) lines.push(...st.intro, ...st.win);
    if (ch.stages.some((x) => x.final) && camp.done) lines.push(...ENDING);
    if (!lines.length) { toast("이 장은 아직 이야기가 없어요. 먼저 출전해요!"); return; }
    playStory(lines, { art: ch.id === 1 && !camp.stars["1-1"] ? "world" : ch.art }, () => showCamp(ch.stages[0].id));
  });
  $("#prepBtn").addEventListener("click", () => { Sound.unlock(); Music.start(); $("#titleScreen").hidden = true; $("#startScreen").hidden = false; drawStart(); });
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
  document.querySelectorAll("#modes .mode[data-m]").forEach((b) => b.classList.toggle("on", b.dataset.m === settings.mode));
  $("#topic2Pick").hidden = !duo; $("#aiPick").hidden = duo || daily;
  for (const id of ["#topicOpts", "#fmtOpts"]) $(id).closest(".pick").hidden = daily;
  $("#dailyNote").hidden = !daily;
  if (daily) { const t = today(); $("#dailyNote").textContent = `${t.label} 오늘의 도전은 ${TOPICS[t.topic].name}이에요. 직접 입력으로 컴퓨터 기사와 겨뤄요. 반 친구들 모두 같은 문제가 같은 순서로 나와요. 끝나고 기록을 복사해 비교해 보세요!`; }
  $("#topicLabel").textContent = duo ? "왼쪽(기사단) 문제 주제" : "문제 주제";
  document.querySelectorAll("#topicOpts .opt").forEach((b) => b.classList.toggle("on", b.dataset.k === settings.topic));
  document.querySelectorAll("#topic2Opts .opt").forEach((b) => b.classList.toggle("on", b.dataset.k === settings.topic2));
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
  mode = "menu"; G = null;
  document.body.classList.add("menu");
  layout();
  startDemo();
  for (const s of ["#resultScreen", "#pauseScreen", "#setScreen", "#startScreen", "#campScreen", "#storyScreen"]) $(s).hidden = true;
  $("#talk").hidden = true; talkQ.length = 0;
  for (const st of seats) { st.lock = null; st.$(".lock").hidden = true; }
  drawLastSet();
  $("#titleScreen").hidden = false;
}
function drawLastSet() {
  const duo = settings.mode === "duo";
  const mapName = MAPS[mapOpen(settings.map) ? settings.map : "diag"].name;
  // 바로 시작하면 무엇으로 하는지 한 문장으로(자유 대전 바로 시작 단추 아래)
  if (settings.mode === "daily") { const t = today(); $("#lastSet").textContent = `바로 시작: ${t.label} 오늘의 도전, ${TOPICS[t.topic].name}, ${mapName} 지도`; }
  else $("#lastSet").textContent = "바로 시작: " + (duo ? `둘이서 대전, ${TOPICS[settings.topic].name} 대 ${TOPICS[settings.topic2].name}`
    : `연습 대전, ${TOPICS[settings.topic].name}, 컴퓨터 ${AI_LEVELS[settings.ai].name}`) + `, ${FORMATS[settings.format].name}, ${mapName} 지도`;
  const n = STAGES.filter((x) => camp.stars[x.id]).length;
  $("#campBtn").textContent = n === 0 ? "원정 떠나기" : camp.done ? "원정 지도" : `원정 이어 하기 (${n}/${STAGES.length})`;
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
  const cap = quality.preset.cap;
  if (cap) { renderAcc += dt; if (renderAcc < 1 / cap - 0.004) return; renderAcc = 0; }
  view.render();
}

// 로컬 점검용(배포 주소에서는 꺼짐)
function exposeTestHook() {
  window.__arena = {
    get battle() { return G && G.battle; }, get mode() { return mode; }, get q() { return seats[0] && seats[0].q; }, quality, view, get seats() { return seats; },
    start: (topic, ai, format, m) => { if (topic) settings.topic = topic; if (ai) settings.ai = ai; if (format) settings.format = format; settings.mode = m || "cpu"; newGame(); },
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
    setCamp(p) { camp = { stars: {}, seenIntro: false, done: false, ...p }; saveProgress(camp); drawStart(); drawLastSet(); }, get story() { return story; }, storyNext, get G() { return G; },
  };
}

boot().catch(fail);
