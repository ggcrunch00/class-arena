// 「성문 대전」 연습 대전: 화면 조립, 문제 풀기, 출전 버튼, 시작·설정·결과 화면, 매 프레임 흐름.
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ROLES, ROLE_INFO, SIDES, AI_LEVELS, QUALITY, QUALITY_ORDER, MINE, CANNON, GOLD, BASE } from "./config.js";
import { LANE_NAMES, LANE_LABEL, MAPS, useMap } from "./lanes.js";
import { Battle } from "./battle.js";
import { ComputerPlayer } from "./ai.js";
import { View3D } from "./view3d.js";
import { Quality } from "./quality.js";
import { Sound } from "./sound.js";
import { TOPICS, FORMATS, makeQuestion, checkAnswer, answerText, questionLine } from "./questions.js";

const $ = (s) => document.querySelector(s);
// 지도는 주소 끝 #diag 또는 #wide 로 고름(시작 화면에서 바꾸면 다시 불러옴)
const MAP_KEY = useMap((location.hash || "").replace("#", "") || remember("classArena.map") || "diag");
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
  return Promise.race([Promise.all([document.fonts.load("40px 'Black Han Sans'"), document.fonts.load("16px 'Gowun Dodum'")]),
    new Promise((r) => setTimeout(r, 2500))]).catch(() => {});
}
function remember(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch { return null; } return null; }

// ---------- 상태 ----------
let models, view, quality, durations, idle;
let mode = "menu";           // menu | play | pause | result
let G = null;                 // 한 판의 상태
const settings = { topic: remember("classArena.topic") || "gugu", ai: remember("classArena.ai") || "recruit", format: remember("classArena.format") || "input" };
if (!FORMATS[settings.format]) settings.format = "input";
if (!TOPICS[settings.topic]) settings.topic = "gugu";
if (!AI_LEVELS[settings.ai]) settings.ai = "recruit";

function loadScript(src) {
  return new Promise((ok, no) => { const s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = () => no(new Error(src + " 를 불러오지 못했어요")); document.head.appendChild(s); });
}
async function boot() {
  models = {};
  let n = 0;
  await loadScript(`models/field_${MAP_KEY}.js`);
  window.GLB.field = window.GLB["field_" + MAP_KEY];
  for (const m of MODELS) { models[m] = await parseGLB(m); $("#loading b").textContent = Math.round(++n / MODELS.length * 100) + "%"; }
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
  buildCards(); buildStart(); buildSettings();
  window.addEventListener("resize", () => setTimeout(layout, 60));
  layout();
  started = true;
  $("#loading").hidden = true;
  showStart();
  requestAnimationFrame(frame);
  if (["localhost", "127.0.0.1"].includes(location.hostname)) exposeTestHook();
}

function layout() {
  const ph = $("#panel").offsetHeight;
  const top = $("#top").getBoundingClientRect();
  view.setViewport({ x: 0, y: 0, w: window.innerWidth, h: Math.max(100, window.innerHeight - ph) }, top.bottom + 4);
  $("#rotate").hidden = !(window.innerHeight > window.innerWidth * 1.05);
}

// ---------- 한 판 ----------
function newGame() {
  view.clear();
  const battle = new Battle(durations);
  G = {
    battle, ai: new ComputerPlayer(battle, CPU, settings.ai), diff: 0, q: null, input: "",
    lock: null, wrongs: [], runRight: 0, runWrong: 0, endT: -1,
  };
  $("#topicChip").textContent = TOPICS[settings.topic].name;
  $("#redSub").textContent = "컴퓨터 · " + AI_LEVELS[settings.ai].name;
  $("#banner").hidden = true;
  for (const s of ["#startScreen", "#resultScreen", "#pauseScreen", "#setScreen"]) $(s).hidden = true;
  quality.reset();
  setLane(lane);
  setDiff(0);
  mode = "play";
  updateHud(true);
}

function setDiff(d, msg) {
  G.diff = d; G.runRight = 0; G.runWrong = 0;
  document.querySelectorAll("#diffSeg button").forEach((b) => { const on = +b.dataset.d === d; b.classList.toggle("on", on); b.setAttribute("aria-checked", on); });
  if (msg) toast(msg);
  nextQuestion();
}

function nextQuestion() {
  G.q = makeQuestion(settings.topic, G.diff, settings.format);
  G.input = "";
  const qt = questionLine(G.q);
  $("#qText").textContent = qt;
  $("#qText").className = qt.length > 16 ? "long" : qt.length > 11 ? "mid" : "";
  $("#qPrompt").textContent = G.q.prompt || "";
  // 형식에 따라 숫자판 / 보기 단추 / O·X 단추
  const isNum = G.q.type === "number";
  $("#keypad").hidden = !isNum; $("#ansBox").hidden = !isNum;
  const box = $("#choices");
  box.hidden = isNum; box.innerHTML = "";
  box.className = "choices " + (G.q.type === "ox" ? "ox" : "n" + (G.q.options || []).length);
  const opts = G.q.type === "ox" ? ["O", "X"] : G.q.options || [];
  opts.forEach((o, i) => {
    const b = document.createElement("button");
    b.innerHTML = G.q.type === "ox" ? `<b>${o}</b><small>${o === "O" ? "맞아요" : "틀려요"}</small>` : `<i>${i + 1}</i><b></b>`;
    if (G.q.type !== "ox") b.querySelector("b").textContent = o;
    b.dataset.v = o;
    b.addEventListener("click", () => pick(o, b));
    box.appendChild(b);
  });
  drawAnswer();
}
function pick(v, el) {
  if (mode !== "play" || !G || G.lock || G.battle.state !== "play") return;
  G.input = v;
  const right = checkAnswer(G.q, v);
  if (el) el.classList.add(right ? "good" : "bad");
  submit();
}
function drawAnswer(cls) {
  $("#ansText").textContent = G.input;
  const box = $("#ansBox");
  box.classList.remove("good", "bad"); void box.offsetWidth;
  if (cls) box.classList.add(cls);
}

function press(k) {
  if (mode !== "play" || !G || G.lock || G.battle.state !== "play") return;
  if (k === "back") G.input = G.input.slice(0, -1);
  else if (k === "ok") return submit();
  else if (G.input.length < 6) G.input += k;
  drawAnswer();
}

function submit() {
  if (!G.input || G.battle.state !== "play") return;
  const b = G.battle;
  if (checkAnswer(G.q, G.input)) {
    const g = b.answer(PLAYER, "right", G.q.type, G.diff);
    Sound.play("right"); Sound.play("coin");
    goldPop("+" + g);
    drawAnswer("good");
    G.runRight++; G.runWrong = 0;
    if (G.runRight >= 5 && G.diff < 2) setDiff(G.diff + 1, "잘하고 있어요! 한 단계 어려운 문제예요(골드 ↑)");
    else nextQuestion();
  } else {
    b.answer(PLAYER, "wrong");
    Sound.play("wrong");
    drawAnswer("bad");
    G.wrongs.push({ q: G.q, given: G.input, kind: "wrong" });
    G.runWrong++; G.runRight = 0;
    lockFor(GOLD.wrongLock, "wrong", "아쉬워요! 정답은 " + answerText(G.q), () => {
      if (G.runWrong >= 2 && G.diff > 0) setDiff(G.diff - 1, "조금 쉬운 문제로 바꿨어요");
      else nextQuestion();
    });
  }
}

function skip() {
  if (mode !== "play" || G.lock || G.battle.state !== "play") return;
  G.battle.answer(PLAYER, "skip");
  Sound.play("skip");
  G.wrongs.push({ q: G.q, given: "", kind: "skip" });
  lockFor(GOLD.skipLock, "skip", "넘겼어요 · 정답은 " + answerText(G.q), nextQuestion);
}

function lockFor(sec, kind, msg, then) {
  G.lock = { t: sec, total: sec, then };
  const l = $("#lock"); l.hidden = false; l.className = "lock " + kind;
  $("#lockMsg").textContent = msg;
  $("#lockSub").textContent = kind === "wrong" ? "잠깐 쉬었다가 다음 문제" : "다음 문제를 준비해요";
}
function tickLock(dt) {
  if (!G.lock) return;
  G.lock.t -= dt;
  $("#lockBar").style.width = Math.max(0, G.lock.t / G.lock.total * 100) + "%";
  if (G.lock.t <= 0) { const f = G.lock.then; G.lock = null; $("#lock").hidden = true; f(); }
}

// ---------- 출전 버튼 ----------
const cards = {};
function buildCards() {
  const box = $("#cards");
  for (const role of ROLES) {
    const R = ROLE_INFO[role], model = SIDES[PLAYER].models[role];
    const b = document.createElement("button");
    b.className = "card";
    b.setAttribute("aria-label", `${R.name} 출전, ${R.cost}골드, ${ROLE_INFO[R.beats].name}에 강함`);
    b.innerHTML = `<img src="assets/portraits/${model}.webp" alt=""><span class="meta"><span class="nm">${R.name}</span>` +
      `<span class="beat">▶ ${ROLE_INFO[R.beats].name}에 강함</span></span><span class="cost"><i class="coin"></i>${R.cost}</span><i class="cd"></i>`;
    b.addEventListener("click", () => deploy(role, b));
    box.appendChild(b);
    cards[role] = b;
  }
  document.querySelectorAll("#lanes button").forEach((b) => b.addEventListener("click", () => setLane(b.dataset.lane)));
  setLane("mid");
  $("#mineBtn").addEventListener("click", () => {
    if (mode !== "play") return;
    if (G.battle.upgradeMine(PLAYER)) { Sound.play("mine"); toast(`금광 Lv${G.battle.sides[PLAYER].mine}! 문제당 골드 +${Math.round(MINE.bonus * 100)}%`); }
  });
  $("#cannonBtn").addEventListener("click", () => { if (mode === "play" && G.battle.fireCannon(PLAYER)) toast("성 대포 발사!"); });
  $("#skipBtn").addEventListener("click", skip);
  $("#keypad").addEventListener("click", (e) => { const t = e.target.closest("button"); if (t) press(t.dataset.k || t.textContent); });
  document.querySelectorAll("#diffSeg button").forEach((b) => b.addEventListener("click", () => { if (mode === "play" && !G.lock) setDiff(+b.dataset.d); }));
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { if (mode === "play") pause(); else if (mode === "pause") resume(); return; }
    if (mode !== "play" || e.target.tagName === "INPUT") return;
    if (G && G.q && G.q.type !== "number") {
      const btns = [...document.querySelectorAll("#choices button")];
      const k = e.key.toUpperCase();
      const i = G.q.type === "ox" ? (k === "O" || k === "1" ? 0 : k === "X" || k === "2" ? 1 : -1) : Number(e.key) - 1;
      if (btns[i]) pick(btns[i].dataset.v, btns[i]);
      return;
    }
    if (/^[0-9]$/.test(e.key)) press(e.key);
    else if (e.key === "Backspace") press("back");
    else if (e.key === "Enter") press("ok");
    else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      const i = LANE_NAMES.indexOf(lane) + (e.key === "ArrowUp" ? -1 : 1);
      setLane(LANE_NAMES[Math.max(0, Math.min(2, i))]); e.preventDefault();
    }
  });
}
let lane = "mid";
function setLane(n) {
  lane = n;
  document.querySelectorAll("#lanes button").forEach((b) => { const on = b.dataset.lane === n; b.classList.toggle("on", on); b.setAttribute("aria-checked", on); });
  if (view) view.setLane(n);
}
function deploy(role, el) {
  if (mode !== "play") return;
  const why = G.battle.canDeploy(PLAYER, role);
  if (why === "끝남") return;
  if (why) { toast(why === "골드 부족" ? "골드가 모자라요. 문제를 더 풀어요!" : why === "대기" ? "아직 준비 중이에요" : why); el.animate([{ transform: "translateX(-4px)" }, { transform: "translateX(4px)" }, { transform: "none" }], 200); return; }
  G.battle.deploy(PLAYER, role, lane);
}

// ---------- 화면 위 정보 ----------
let lastHp = { [-1]: -1, [1]: -1 };
function updateHud(force) {
  const b = G.battle, S = b.sides[PLAYER];
  $("#gold").textContent = S.gold;
  for (const role of ROLES) {
    const c = cards[role], R = ROLE_INFO[role];
    c.classList.toggle("poor", S.gold < R.cost);
    c.classList.toggle("ready", !b.canDeploy(PLAYER, role));
    c.querySelector(".cd").style.setProperty("--p", (S.cooldown[role] / R.cooldown * 100).toFixed(1) + "%");
  }
  const mc = b.mineCost(PLAYER);
  $("#mineLv").textContent = "Lv" + S.mine;
  $("#mineCost").textContent = mc ? `${mc}골드로 강화` : "최고 단계";
  $("#mineBtn").disabled = !mc || S.gold < mc;
  const pips = $("#pips").children;
  for (let i = 0; i < pips.length; i++) pips[i].classList.toggle("on", i < S.cannon);
  const ready = S.cannon >= CANNON.charge && !!b.cannonTarget(PLAYER);
  $("#cannonBtn").disabled = !ready; $("#cannonBtn").classList.toggle("ready", ready);
  const st = $("#streak");
  st.hidden = S.streak < 2; st.textContent = S.streak + "연속!";
  for (const s of [-1, 1]) {
    const hp = b.sides[s].base.hp;
    const towersLeft = Object.values(b.sides[s].towers).filter((t) => t.alive).length;
    const tEl = $(s < 0 ? "#blueTowers" : "#redTowers");
    if (tEl.dataset.n !== String(towersLeft)) { tEl.dataset.n = towersLeft; tEl.innerHTML = "탑 " + "<i></i>".repeat(towersLeft) + "<i class=\"x\"></i>".repeat(3 - towersLeft); }
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
  $("#clockSub").textContent = b.overtime ? "총력전 · 골드 2배" : "남은 시간";
}
function goldPop(t) { const p = $("#goldPop"); p.textContent = t; p.classList.remove("go"); void p.offsetWidth; p.classList.add("go"); }
let toastT = 0;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.hidden = false; t.style.animation = "none"; void t.offsetWidth; t.style.animation = ""; toastT = 2.6; }
function banner(msg, sec = 1.8) { const b = $("#banner"); b.textContent = msg; b.hidden = false; b.style.animation = "none"; void b.offsetWidth; b.style.animation = ""; setTimeout(() => { b.hidden = true; }, sec * 1000); }

function onEvents(evts) {
  for (const e of evts) {
    if (e.type === "overtime") { banner("총력전! 골드 2배"); Sound.play("horn"); }
    else if (e.type === "mine" && e.side === CPU) toast("상대가 금광을 강화했어요");
    else if (e.type === "cannon" && e.side === CPU) toast("상대의 성 대포!");
    else if (e.type === "structDown" && e.struct.kind === "tower") {
      const n = LANE_LABEL[e.struct.lane];
      if (e.struct.side === CPU) banner(`${n} 탑을 무너뜨렸어요!`, 1.6); else toast(`우리 ${n} 탑이 무너졌어요! 막아야 해요`);
    }
    else if (e.type === "end") {
      G.endT = 0;
      const w = e.winner;
      banner(w === PLAYER ? "승리!" : w === CPU ? "패배…" : "무승부", 2.6);
      Sound.play(w === PLAYER ? "win" : "lose");
    }
  }
}

// ---------- 결과 ----------
function showResult() {
  mode = "result";
  const b = G.battle, S = b.sides[PLAYER], w = b.winner;
  $("#resTitle").textContent = w === PLAYER ? "승리!" : w === CPU ? "아쉬운 패배" : "무승부";
  $("#resWhy").textContent = b.endWhy === "base"
    ? (w === PLAYER ? "해골 군단의 본성을 무너뜨렸어요!" : "우리 본성이 무너졌어요. 약한 길을 막고 상성을 노려 다시 도전해요!")
    : (w ? "시간이 끝나서 본성과 탑이 더 튼튼한 쪽이 이겼어요." : "시간이 끝났고 양쪽이 비슷했어요.");
  const tried = S.stats.right + S.stats.wrong;
  const stat = (k, v) => `<div class="stat"><small>${k}</small><b>${v}</b></div>`;
  $("#resStats").innerHTML = stat("맞힌 문제", S.stats.right) + stat("정답률", tried ? Math.round(S.stats.right / tried * 100) + "%" : "-") +
    stat("최고 연속", S.bestStreak) + stat("번 골드", S.stats.goldEarned) + stat("출전한 병사", S.stats.deployed);
  // 틀린·넘긴 문제 다시 풀기(같은 문제는 한 번만)
  const seen = new Set(), list = G.wrongs.filter((x) => !seen.has(x.q.text) && seen.add(x.q.text)).slice(0, 12);
  const box = $("#revList"); box.innerHTML = "";
  let fixed = 0;
  const score = () => { $("#revScore").textContent = list.length ? `${fixed}/${list.length} 다시 맞힘` : "틀린 문제가 없어요!"; };
  list.forEach((x, i) => {
    const row = document.createElement("label");
    row.className = "rev";
    const label = questionLine(x.q);
    const done = () => { row.classList.add("done"); fixed++; score(); Sound.play("right"); row.querySelector(".mine-ans").textContent = "다시 맞혔어요"; };
    if (x.q.type === "number") {
      row.innerHTML = `<span></span><input id="rev${i}" inputmode="numeric" autocomplete="off"><span class="mine-ans"></span>`;
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
    row.firstChild.textContent = label;
    row.querySelector(".mine-ans").textContent = x.kind === "skip" ? "넘긴 문제" : "내 답 " + x.given;
    box.appendChild(row);
  });
  score();
  $("#resultScreen").hidden = false;
}

// ---------- 시작·설정·멈춤 ----------
function buildStart() {
  const topicBox = $("#topicOpts");
  for (const [k, t] of Object.entries(TOPICS)) {
    const b = document.createElement("button"); b.className = "opt"; b.dataset.k = k;
    b.innerHTML = `<span>${t.name}</span><small>${t.hint}</small>`;
    b.addEventListener("click", () => { settings.topic = k; remember("classArena.topic", k); drawStart(); });
    topicBox.appendChild(b);
  }
  const fmtBox = $("#fmtOpts");
  for (const [k, f] of Object.entries(FORMATS)) {
    const b = document.createElement("button"); b.className = "opt"; b.dataset.k = k;
    b.innerHTML = `<span>${f.name}</span><small>${f.hint}</small>`;
    b.addEventListener("click", () => { settings.format = k; remember("classArena.format", k); drawStart(); });
    fmtBox.appendChild(b);
  }
  const mapBox = $("#mapOpts"), mapDesc = { diag: "롤처럼 모서리에서 모서리로", wide: "옆으로 넓게, 병사가 크게" };
  for (const [k, m] of Object.entries(MAPS)) {
    const b = document.createElement("button"); b.className = "opt" + (k === MAP_KEY ? " on" : ""); b.dataset.k = k;
    b.innerHTML = `<span>${m.name}</span><small>${mapDesc[k]}</small>`;
    b.addEventListener("click", () => {
      if (k === MAP_KEY) return;
      remember("classArena.map", k);
      location.hash = k; location.reload();
    });
    mapBox.appendChild(b);
  }
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
  $("#againBtn").addEventListener("click", () => { Sound.unlock(); newGame(); });
  $("#homeBtn").addEventListener("click", showStart);
  $("#pauseBtn").addEventListener("click", pause);
  $("#resumeBtn").addEventListener("click", resume);
  $("#quitBtn").addEventListener("click", showStart);
  $("#setBtn1").addEventListener("click", () => openSettings("#startScreen"));
  $("#setBtn2").addEventListener("click", () => openSettings("#pauseScreen"));
  drawStart();
}
function drawStart() {
  document.querySelectorAll("#topicOpts .opt").forEach((b) => b.classList.toggle("on", b.dataset.k === settings.topic));
  document.querySelectorAll("#aiOpts .opt").forEach((b) => b.classList.toggle("on", b.dataset.k === settings.ai));
  document.querySelectorAll("#fmtOpts .opt").forEach((b) => b.classList.toggle("on", b.dataset.k === settings.format));
}
function showStart() {
  mode = "menu"; G = null; view.clear();
  for (const s of ["#resultScreen", "#pauseScreen", "#setScreen"]) $(s).hidden = true;
  $("#lock").hidden = true;
  $("#startScreen").hidden = false;
}
function pause() { if (mode !== "play") return; mode = "pause"; $("#pauseScreen").hidden = false; }
function resume() { mode = "play"; $("#pauseScreen").hidden = true; }

let setBack = null;
function buildSettings() {
  drawQualOpts();
  $("#fpsToggle").checked = quality.showFps;
  $("#fpsToggle").addEventListener("change", (e) => { quality.setShowFps(e.target.checked); $("#fps").hidden = !e.target.checked; });
  $("#fps").hidden = !quality.showFps;
  $("#soundToggle").checked = Sound.on;
  $("#soundToggle").addEventListener("change", (e) => Sound.set(e.target.checked));
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
  if (G && playing) {
    G.battle.update(dt);
    if (mode === "play") { G.ai.update(dt); tickLock(dt); }
    const evts = G.battle.events; G.battle.events = [];
    view.handle(evts, G.battle);
    onEvents(evts);
    updateHud(false);
    if (G.endT >= 0 && mode === "play") { G.endT += dt; if (G.endT > 2.8) showResult(); }
  }
  view.update(mode === "pause" ? 0 : dt, G ? G.battle : idle);
  if (toastT > 0) { toastT -= dt; if (toastT <= 0) $("#toast").hidden = true; }
  if (quality.showFps && now - fpsShown > 500) { fpsShown = now; $("#fps").textContent = Math.round(quality.fps) + " fps · " + QUALITY[quality.level].name; }
  const cap = quality.preset.cap;
  if (cap) { renderAcc += dt; if (renderAcc < 1 / cap - 0.004) return; renderAcc = 0; }
  view.render();
}

// 로컬 점검용(배포 주소에서는 꺼짐)
function exposeTestHook() {
  window.__arena = {
    get battle() { return G && G.battle; }, get mode() { return mode; }, get q() { return G && G.q; }, quality, view,
    start: (topic, ai, format) => { if (topic) settings.topic = topic; if (ai) settings.ai = ai; if (format) settings.format = format; newGame(); },
    answerRight() { if (!G || G.lock) return false; G.input = String(G.q.answer); submit(); return true; },
    answerWrong() { if (!G || G.lock) return false; G.input = String(G.q.answer + 1); submit(); return true; },
    deploy: (r, l) => { if (l) setLane(l); deploy(r, cards[r]); },
  };
}

boot().catch(fail);
