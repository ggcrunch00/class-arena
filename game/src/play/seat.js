// 조작판 한 자리: 문제 풀기 + 출전(길 고르기·병사 카드·금광·성 대포).
// 혼자 하기에서는 한 자리(기사단), 둘이서 하기에서는 두 자리(왼쪽 기사단, 오른쪽 해골 군단).
import { ROLES, ROLE_INFO, FACTIONS, DEFAULT_FAC, MINE, CANNON, GOLD, HEROES } from "./config.js";
import { LANE_NAMES, LANE_LABEL, LANES, BOUNDS, BASES } from "./lanes.js";
import { Sound } from "./sound.js";
import { TOPICS, makeQuestion, checkAnswer, answerText, questionLine, topicBag, topicsLabel } from "./questions.js";

const TPL = `
<section class="quiz" aria-label="문제">
  <div class="qhead">
    <span class="chip"></span>
    <div class="seg" role="radiogroup" aria-label="난이도(올리기만 직접, 내리기는 자동)"><button data-d="0" role="radio" data-x="×1">쉬움</button><button data-d="1" role="radio" data-x="×2">보통</button><button data-d="2" role="radio" data-x="×4">어려움</button></div>
    <span class="streak" hidden></span>
    <button class="ghost skip">넘기기</button>
  </div>
  <div class="qline"><div class="qtext"><small class="qprompt"></small><b class="qt"></b></div><div class="ans" aria-live="polite"><span class="ansText"></span><i class="caret"></i></div></div>
  <div class="keypad">
    <button>1</button><button>2</button><button>3</button><button>4</button><button>5</button><button>6</button>
    <button>7</button><button>8</button><button>9</button><button>0</button><button data-k="back" aria-label="지우기">지우기</button><button data-k="ok" class="ok">확인</button>
  </div>
  <div class="choices" hidden></div>
  <div class="tiles" hidden></div>
  <span class="tip tip1" hidden>① 문제를 풀어 골드를 모아요</span>
  <div class="lock" hidden><b class="lockMsg"></b><small class="lockSub"></small><i class="lockbar"><i class="lockBar"></i></i></div>
</section>
<section class="army" aria-label="출전">
  <div class="ahead">
    <div class="gold"><i class="coin"></i><b class="goldN">60</b><span class="pop"></span></div>
    <button class="mine"><span>금광 <b class="mineLv">Lv1</b></span><small class="mineCost">120골드로 강화</small></button>
    <button class="hero" hidden disabled><img alt=""><span class="hinfo"><b class="hskill"></b><i class="hgauge"><i></i></i></span></button>
    <button class="cannon" disabled><span>성 대포</span><span class="pips"><i></i><i></i><i></i><i></i><i></i></span></button>
  </div>
  <div class="lanes" role="radiogroup" aria-label="보낼 길">
    <span class="lab">보낼 길</span>
    <button data-lane="top" role="radio"><svg viewBox="0 0 24 16"><path d="M3 14 V3 H21" /></svg><span>윗길</span></button>
    <button data-lane="mid" role="radio"><svg viewBox="0 0 24 16"><path d="M3 14 L21 2" /></svg><span>가운뎃길</span></button>
    <button data-lane="bot" role="radio"><svg viewBox="0 0 24 16"><path d="M3 14 H21 V3" /></svg><span>아랫길</span></button>
  </div>
  <div class="cards"></div>
  <div class="stoast" hidden></div>
  <span class="tip tip2" hidden>② 보낼 길을 골라요</span>
  <span class="tip tip3" hidden>③ 병사를 눌러 출전!</span>
</section>`;

export class Seat {
  // ctx: { view, isPlaying(): bool, toast(msg) }
  constructor(root, side, ctx, fac = DEFAULT_FAC[side]) {
    this.side = side; this.ctx = ctx; this.fac = fac;
    this.el = document.createElement("div");
    this.el.className = "seat " + (side < 0 ? "blue" : "red") + " f-" + fac;
    this.el.innerHTML = TPL;
    root.appendChild(this.el);
    const q = (s) => this.el.querySelector(s);
    this.$ = q;
    this.lane = "mid";
    this.cards = {};
    for (const role of ROLES) {
      const R = ROLE_INFO[role], model = FACTIONS[fac].models[role];
      const b = document.createElement("button");
      b.className = "card";
      b.setAttribute("aria-label", `${R.name} 출전, ${R.cost}골드, ${ROLE_INFO[R.beats].name}에 강함`);
      b.innerHTML = `<img src="assets/portraits/${model}.webp" alt=""><span class="meta"><span class="nm">${R.name}</span>` +
        `<span class="beat">▶ ${ROLE_INFO[R.beats].name}에 강함</span></span><span class="cost"><i class="coin"></i>${R.cost}</span><i class="cd"></i>`;
      b.addEventListener("click", () => this.deploy(role, b));
      q(".cards").appendChild(b);
      this.cards[role] = b;
    }
    this.el.querySelectorAll(".lanes button").forEach((b) => b.addEventListener("click", () => this.setLane(b.dataset.lane)));
    q(".mine").addEventListener("click", () => {
      if (!this.active()) return;
      if (this.b.upgradeMine(side)) { Sound.play("mine"); this.say(`금광 Lv${this.b.sides[side].mine}! 문제당 골드 +${Math.round(MINE.bonus * 100)}%`); }
    });
    q(".cannon").addEventListener("click", () => { if (this.active() && this.b.fireCannon(side)) this.say("성 대포 발사!"); });
    q(".hero").addEventListener("click", () => this.useSkill());
    q(".skip").addEventListener("click", () => this.skip());
    q(".keypad").addEventListener("click", (e) => { const t = e.target.closest("button"); if (t) this.press(t.dataset.k || t.textContent); });
    // 난이도: 올리기만 직접(골드 ×1·×2·×4). 내리기는 2번 틀리면 자동 → "쉬운 문제만 빨리 풀기"를 막음(11-04 A안)
    this.el.querySelectorAll(".seg button").forEach((b) => b.addEventListener("click", () => {
      if (!this.active() || this.lock) return;
      const d = +b.dataset.d;
      if (d > this.diff) this.setDiff(d, `${b.textContent} 문제로! 골드 ${b.dataset.x}`);
      else if (d < this.diff) this.say("난이도는 2번 틀리면 저절로 내려가요");
    }));
    this.toastT = 0;
    // 누른 단추에 초점이 남지 않게(키보드 Enter가 그 단추를 다시 누르는 일 막기)
    this.el.addEventListener("click", (e) => { const t = e.target.closest("button"); if (t && e.detail > 0) t.blur(); });
  }

  active() { return this.ctx.isPlaying() && this.b && this.b.state === "play"; }

  // 지도에 있는 길만 단추로(길이 하나면 길 줄을 숨김), 길 이름도 지도에 맞춤
  setLanes() {
    // 단추마다 지금 지도의 작은 그림: 모든 길은 흐리게, 그 길만 굵게(내 본성 → 적 본성)
    const [bx, by] = BOUNDS, W = 60, H = Math.max(18, Math.round(60 * by / bx));
    const px = (x, y) => [((x + bx) / (2 * bx)) * (W - 8) + 4, ((by - y) / (2 * by)) * (H - 8) + 4];
    const path = (n) => LANES[n].pts.map((p, i) => (i ? "L" : "M") + px(p[0], p[1]).map((v) => v.toFixed(1)).join(" ")).join(" ");
    const mine = this.side < 0 ? BASES[-1] : BASES[1], foe = this.side < 0 ? BASES[1] : BASES[-1];
    this.el.querySelectorAll(".lanes button").forEach((b) => {
      const n = b.dataset.lane, on = LANE_NAMES.includes(n);
      b.hidden = !on;
      b.querySelector("span").textContent = LANE_LABEL[n];
      if (!on) return;
      const [mx, my] = px(...mine), [fx, fy] = px(...foe);
      b.querySelector("svg").outerHTML = `<svg class="mini" viewBox="0 0 ${W} ${H}" aria-hidden="true">` +
        LANE_NAMES.map((k) => `<path d="${path(k)}" class="${k === n ? "me" : "other"}"/>`).join("") +
        `<circle cx="${mx}" cy="${my}" r="3.6" class="home"/><circle cx="${fx}" cy="${fy}" r="3.6" class="foe"/></svg>`;
    });
    this.$(".lanes").hidden = LANE_NAMES.length < 2;
    this.el.classList.toggle("onelane", LANE_NAMES.length < 2);
    if (!LANE_NAMES.includes(this.lane)) this.lane = LANE_NAMES.includes("mid") ? "mid" : LANE_NAMES[0];
  }
  // 이번 판에 쓸 수 있는 병사·금광·대포(캠페인 앞 장에서는 하나씩 열림)
  setRules(rules = {}) {
    this.roles = rules.roles || ROLES;
    for (const r of ROLES) { const c = this.cards[r]; c.hidden = !this.roles.includes(r); }
    this.$(".cards").style.setProperty("--n", this.roles.length);
    this.$(".mine").hidden = rules.mine === false;
    this.$(".cannon").hidden = rules.cannon === false;
  }

  // 새 판
  // topics: 주제 하나(이름) 또는 여러 개(배열). 여러 개면 섞어서 고르게 냄
  start(battle, topics, format, rules) {
    this.topics = [...new Set([].concat(topics))].filter((k) => TOPICS[k]);
    if (!this.topics.length) this.topics = ["gugu"];
    this.nextTopic = topicBag(this.topics); this.topic = this.topics[0];
    this.b = battle; this.format = format;
    this.setLanes(); this.setRules(rules);
    this.lock = null; this.wrongs = []; this.runRight = 0; this.runWrong = 0;
    // 11-07 검토: 난이도는 주제마다 따로(곱셈구구를 잘한다고 낯선 사회 문제까지 어려워지지 않게)
    this.dByT = {}; this.runs = {};
    this.log = [];            // 맞힘(1)·틀림(0)·넘김(2) 순서(기록 카드의 ■□▫ 줄)
    this.recs = [];           // 문제마다 {주제, 문제 꼴, 난이도, 결과} — 결과 화면의 주제·형식·난이도별 표(11-07)
    this.shownGold = battle.sides[this.side].gold; this.wasReady = {};
    this.$(".chip").textContent = TOPICS[this.topic].name;
    this.$(".chip").title = this.topics.map((k) => TOPICS[k].name).join(", ");
    const hero = battle.sides[this.side].hero, hb = this.$(".hero");
    hb.hidden = !hero;
    if (hero) {
      const H = HEROES[hero];
      hb.querySelector("img").src = `assets/faces/${H.face}.webp`;
      hb.querySelector(".hskill").textContent = H.skill;
      hb.title = `${H.title} ${H.name}: ${H.desc}`;
      hb.setAttribute("aria-label", `${H.skill}, ${H.desc}`);
    }
    this.$(".lock").hidden = true;
    this.setLane(this.lane);
    this.setDiff(0);
    // 처음 하는 학생에게 단계별 안내(첫 출전을 하면 사라지고 기기에 기억)
    let seen = false; try { seen = localStorage.getItem("classArena.tips") === "1"; } catch { /* 안내 보여 줌 */ }
    this.tipStep = seen ? 9 : 1;
    this.showTips();
    this.update(true);
  }
  // 영웅 기술: 깨침돌 기운이 다 차면 고른 길에 씀
  useSkill() {
    if (!this.active() || !this.b.useSkill(this.side, this.lane)) return false;
    const H = HEROES[this.b.sides[this.side].hero];
    Sound.play("skill_" + H.kind);
    if (this.ctx.skill) this.ctx.skill(this.b.sides[this.side].hero, H); else this.say(H.skill + "!");
    return true;
  }
  showTips() {
    const st = this.tipStep;
    this.$(".tip1").hidden = st !== 1;
    this.$(".tip2").hidden = st !== 2 || LANE_NAMES.length < 2; // 길이 하나인 지도에서는 "길을 골라요" 안내를 건너뜀
    this.$(".tip3").hidden = st !== 2;
  }
  destroy() { this.el.remove(); }

  setLane(n) {
    this.lane = n;
    this.el.querySelectorAll(".lanes button").forEach((b) => { const on = b.dataset.lane === n; b.classList.toggle("on", on); b.setAttribute("aria-checked", on); });
    if (this.ctx.view) this.ctx.view.setLane(n, this.side);
  }
  moveLane(d) { const i = LANE_NAMES.indexOf(this.lane) + d; this.setLane(LANE_NAMES[Math.max(0, Math.min(LANE_NAMES.length - 1, i))]); }

  setDiff(d, msg) {
    this.diff = d; this.runRight = 0; this.runWrong = 0;
    this.dByT[this.topic] = d;
    this.paintDiff();
    if (msg) this.say(this.topics.length > 1 ? `${TOPICS[this.topic].name}: ${msg}` : msg);
    this.next();
  }
  paintDiff() {
    const d = this.diff;
    const soon = this.runRight >= 4 && d < 2; // 자동으로 오르기 한 문제 전: 다음 단계 단추가 깜빡임
    this.el.querySelectorAll(".seg button").forEach((b) => { const on = +b.dataset.d === d; b.classList.toggle("on", on); b.classList.toggle("below", +b.dataset.d < d); b.classList.toggle("soon", soon && +b.dataset.d === d + 1); b.setAttribute("aria-checked", on); });
  }

  next() {
    if (this.topic) this.runs[this.topic] = [this.runRight, this.runWrong]; // 주제마다 연속 기록을 따로 둠
    this.topic = this.nextTopic();
    this.diff = this.dByT[this.topic] ?? 0;
    [this.runRight, this.runWrong] = this.runs[this.topic] || [0, 0];
    this.paintDiff();
    this.q = makeQuestion(this.topic, this.diff, this.format);
    const chip = this.$(".chip"); chip.textContent = TOPICS[this.topic].name;
    chip.classList.toggle("multi", this.topics.length > 1); chip.dataset.n = this.topics.length > 1 ? this.topics.length : "";
    this.input = "";
    const qt = questionLine(this.q);
    const t = this.$(".qt");
    t.textContent = qt;
    // 낱말 문제는 문장이라 줄바꿈 허용(길이에 따라 글자 크기)
    const wordy = this.q.word || /[가-힣]/.test(qt); // 낱말 문제·낱말이 섞인 수학 문제는 줄바꿈되는 본문 글씨
    t.className = "qt " + (wordy && qt.length > 8 ? "sent" + (qt.length > (this.q.type === "tiles" ? 12 : 20) ? " long" : "") + (qt.length > 30 ? " xl" : "") : qt.length > 16 ? "long" : qt.length > 11 ? "mid" : "");
    this.$(".qprompt").textContent = this.q.prompt || "";
    const isNum = this.q.type === "number", isTiles = this.q.type === "tiles";
    this.$(".keypad").hidden = !isNum; this.$(".ans").hidden = !isNum && !isTiles;
    this.$(".ans").classList.toggle("slots", isTiles);
    this.$(".qline").classList.toggle("tq", isTiles);
    this.picked = [];
    const tb = this.$(".tiles");
    tb.hidden = !isTiles; tb.innerHTML = "";
    if (isTiles) {
      tb.style.setProperty("--n", Math.ceil(this.q.tiles.length / 2));
      tb.style.setProperty("--m", this.q.tiles.length);
      this.q.tiles.forEach((c, i) => {
        const b = document.createElement("button"); b.className = "tile"; b.textContent = c; b.dataset.i = i;
        b.addEventListener("click", () => this.tile(i));
        tb.appendChild(b);
      });
      const back = document.createElement("button"); back.className = "tback"; back.textContent = "지우기"; back.setAttribute("aria-label", "한 글자 지우기");
      back.addEventListener("click", () => this.press("back"));
      tb.appendChild(back);
    }
    const box = this.$(".choices");
    box.hidden = isNum || isTiles; box.innerHTML = "";
    box.className = "choices " + (this.q.type === "ox" ? "ox" : this.q.long ? "long" : "n" + (this.q.options || []).length) + ((this.q.word || this.q.frac) && !this.q.long ? " words" : "");
    const opts = this.q.type === "ox" ? ["O", "X"] : this.q.options || [];
    opts.forEach((o, i) => {
      const b = document.createElement("button");
      b.innerHTML = this.q.type === "ox" ? `<b>${o}</b><small>${o === "O" ? "맞아요" : "틀려요"}</small>` : `<i>${i + 1}</i><b></b>`;
      if (this.q.type !== "ox") b.querySelector("b").textContent = o;
      b.dataset.v = o;
      b.addEventListener("click", () => this.pick(o, b));
      box.appendChild(b);
    });
    this.drawAnswer();
  }

  drawAnswer(cls) {
    // 글자 타일: 고른 글자 + 남은 칸(＿)
    this.$(".ansText").textContent = this.q && this.q.type === "tiles"
      ? this.input + "＿".repeat(Math.max(0, [...this.q.answer.replace(/\s/g, "")].length - [...this.input].length)) : this.input;
    const box = this.$(".ans");
    box.classList.remove("good", "bad"); void box.offsetWidth;
    if (cls) box.classList.add(cls);
  }

  press(k) {
    if (!this.active() || this.lock) return;
    if (this.q.type === "tiles") {
      if (k !== "back" || !this.picked.length) return;
      const i = this.picked.pop();
      this.$(`.tiles .tile[data-i="${i}"]`).disabled = false;
      this.input = this.picked.map((j) => this.q.tiles[j]).join("");
      return this.drawAnswer();
    }
    if (k === "back") this.input = this.input.slice(0, -1);
    else if (k === "ok") return this.submit();
    else if (this.input.length < 6) this.input += k;
    this.drawAnswer();
  }
  // 글자 타일 누르기: 칸이 다 차면 바로 확인
  tile(i) {
    if (!this.active() || this.lock || this.picked.includes(i)) return;
    this.picked.push(i);
    this.$(`.tiles .tile[data-i="${i}"]`).disabled = true;
    this.input = this.picked.map((j) => this.q.tiles[j]).join("");
    this.drawAnswer();
    if (this.picked.length >= [...this.q.answer.replace(/\s/g, "")].length) this.submit();
  }
  pick(v, el) {
    if (!this.active() || this.lock) return;
    this.input = v;
    if (el) el.classList.add(checkAnswer(this.q, v) ? "good" : "bad");
    this.submit();
  }
  // 키보드(혼자 하기에서만)
  key(e) {
    if (e.key === "q" || e.key === "Q" || e.key === "ㅂ") { this.useSkill(); return; } // 영웅 기술
    if (this.q && this.q.type === "tiles") {
      if (e.key === "Backspace") this.press("back");
      else if (/^[1-9]$/.test(e.key) && this.q.tiles[+e.key - 1]) this.tile(+e.key - 1);
      return;
    }
    if (this.q && this.q.type !== "number") {
      const btns = [...this.el.querySelectorAll(".choices button")];
      const k = e.key.toUpperCase();
      const i = this.q.type === "ox" ? (k === "O" || k === "1" ? 0 : k === "X" || k === "2" ? 1 : -1) : Number(e.key) - 1;
      if (btns[i]) this.pick(btns[i].dataset.v, btns[i]);
      return;
    }
    if (/^[0-9]$/.test(e.key)) this.press(e.key);
    else if (e.key === "Backspace") this.press("back");
    else if (e.key === "Enter") this.press("ok");
  }

  submit() {
    if (!this.input || !this.active()) return;
    const b = this.b, side = this.side;
    if (checkAnswer(this.q, this.input)) {
      const g = b.answer(side, "right", this.q.gk || this.q.type, this.diff);
      Sound.play("right"); Sound.play("coin");
      this.goldPop("+" + g);
      this.log.push(1); this.rec("right");
      this.flyCoins(g);
      const st = b.sides[side].streak;
      if (st === 3 || st === 10 || st === 20) this.say(`${st}연속 정답! 골드 +20%`);
      if (st === 5) this.say("5연속! 성 대포 충전 — 눌러서 발사!");
      this.drawAnswer("good");
      this.runRight++; this.runWrong = 0;
      if (this.runRight === 4 && this.diff < 2) this.say(`한 문제만 더 맞히면 ${["보통", "어려움"][this.diff]} 문제로 올라가요(골드 ${["×2", "×4"][this.diff]})`);
      this.paintDiff();
      if (this.tipStep === 1 && b.sides[side].gold >= 60) { this.tipStep = 2; this.showTips(); }
      if (this.runRight >= 5 && this.diff < 2) this.setDiff(this.diff + 1, `잘하고 있어요! 한 단계 어려운 문제(골드 ${["×1", "×2", "×4"][this.diff + 1]})`);
      else this.next();
    } else {
      b.answer(side, "wrong");
      Sound.play("wrong");
      this.log.push(0); this.rec("wrong");
      this.drawAnswer("bad");
      this.wrongs.push({ q: this.q, given: this.input, kind: "wrong" });
      this.runWrong++; this.runRight = 0; this.paintDiff();
      this.lockFor(GOLD.wrongLock, "wrong", "아쉬워요! 정답은 " + answerText(this.q), () => {
        if (this.runWrong >= 2 && this.diff > 0) this.setDiff(this.diff - 1, "조금 쉬운 문제로 바꿨어요");
        else this.next();
      });
    }
  }
  rec(r) { this.recs.push({ t: this.topic, k: this.q.type, d: this.diff, r }); }
  skip() {
    if (!this.active() || this.lock) return;
    this.b.answer(this.side, "skip");
    this.runRight = 0; this.paintDiff(); // 자동 난이도: 넘긴 문제는 "연속으로 잘 푼 것"에 넣지 않음
    this.log.push(2); this.rec("skip"); // 기록 카드에서 ▫(넘김)
    Sound.play("skip");
    this.wrongs.push({ q: this.q, given: "", kind: "skip" });
    this.lockFor(GOLD.skipLock, "skip", "넘겼어요. 정답은 " + answerText(this.q), () => this.next());
  }
  lockFor(sec, kind, msg, then) {
    this.lock = { t: sec, total: sec, then };
    const l = this.$(".lock"); l.hidden = false; l.className = "lock " + kind;
    this.$(".lockMsg").textContent = msg;
    this.$(".lockSub").textContent = kind === "wrong" ? "잠깐 쉬었다가 다음 문제" : "다음 문제를 준비해요";
  }
  tick(dt) {
    if (this.toastT > 0) { this.toastT -= dt; if (this.toastT <= 0) this.$(".stoast").hidden = true; }
    if (!this.lock) return;
    this.lock.t -= dt;
    this.$(".lockBar").style.width = Math.max(0, this.lock.t / this.lock.total * 100) + "%";
    if (this.lock.t <= 0) { const f = this.lock.then; this.lock = null; this.$(".lock").hidden = true; f(); }
  }

  deploy(role, el) {
    if (!this.ctx.isPlaying() || !this.b) return;
    const why = this.b.canDeploy(this.side, role);
    if (why === "끝남") return;
    if (why) {
      this.say(why === "골드 부족" ? "골드가 모자라요. 문제를 더 풀어요!" : why === "대기" ? "아직 준비 중이에요" : why);
      el.animate([{ transform: "translateX(-4px)" }, { transform: "translateX(4px)" }, { transform: "none" }], 200);
      return;
    }
    this.b.deploy(this.side, role, this.lane);
    if (this.tipStep < 9) { this.tipStep = 9; this.showTips(); try { localStorage.setItem("classArena.tips", "1"); } catch { /* 무시 */ } }
  }

  say(msg) { const t = this.$(".stoast"); t.textContent = msg; t.hidden = false; t.style.animation = "none"; void t.offsetWidth; t.style.animation = ""; this.toastT = 2.4; }
  goldPop(t) { const p = this.$(".pop"); p.textContent = t; p.classList.remove("go"); void p.offsetWidth; p.classList.add("go"); }
  // 동전이 답 칸에서 골드 칸으로 날아감(최대 8개, 도착하면 골드 칸이 통통)
  flyCoins(g) {
    const from = (this.q && (this.q.type === "number" || this.q.type === "tiles") ? this.$(".ans") : this.$(".choices")).getBoundingClientRect();
    const to = this.$(".gold .coin").getBoundingClientRect();
    const n = Math.min(8, Math.max(3, Math.round(g / 4)));
    for (let i = 0; i < n; i++) {
      const c = document.createElement("i"); c.className = "coin flycoin";
      const x0 = from.left + from.width * (0.3 + Math.random() * 0.4), y0 = from.top + from.height * 0.5;
      const x1 = to.left + to.width / 2, y1 = to.top + to.height / 2;
      const mx = (x0 + x1) / 2 + (Math.random() - 0.5) * 80, my = Math.min(y0, y1) - 60 - Math.random() * 50;
      c.style.left = x0 + "px"; c.style.top = y0 + "px";
      document.body.appendChild(c);
      const a = c.animate([
        { transform: "translate(-50%, -50%) scale(.6)", offset: 0 },
        { transform: `translate(calc(${mx - x0}px - 50%), calc(${my - y0}px - 50%)) scale(1.15)`, offset: 0.45 },
        { transform: `translate(calc(${x1 - x0}px - 50%), calc(${y1 - y0}px - 50%)) scale(.7)`, offset: 1 },
      ], { duration: 520 + i * 45, easing: "cubic-bezier(.3,.1,.3,1)", delay: i * 35 });
      a.onfinish = () => { c.remove(); const gEl = this.$(".gold"); gEl.classList.remove("bump"); void gEl.offsetWidth; gEl.classList.add("bump"); };
    }
  }

  update() {
    const b = this.b, S = b.sides[this.side];
    // 골드 숫자는 바로 바뀌지 않고 차오르듯(동전이 도착하는 동안)
    const gap = S.gold - this.shownGold;
    this.shownGold = Math.abs(gap) < 1 ? S.gold : this.shownGold + gap * (gap > 0 ? 0.12 : 0.35);
    this.$(".goldN").textContent = Math.round(this.shownGold);
    for (const role of ROLES) {
      const c = this.cards[role], R = ROLE_INFO[role];
      const ready = !b.canDeploy(this.side, role);
      c.classList.toggle("poor", S.gold < R.cost);
      c.classList.toggle("ready", ready);
      if (ready && !this.wasReady[role]) { c.classList.remove("shine"); void c.offsetWidth; c.classList.add("shine"); }
      this.wasReady[role] = ready;
      c.querySelector(".cd").style.setProperty("--p", (S.cooldown[role] / R.cooldown * 100).toFixed(1) + "%");
    }
    // 길마다 위험(11-07): 우리 쪽 절반에 들어온 적 병사 수, 우리 탑·본성 가까이면 빨갛게 깜빡
    this.threatT = (this.threatT || 0) + 1;
    if (this.threatT % 6 === 0) for (const n of LANE_NAMES) {
      const L = LANES[n]; let cnt = 0, near = false;
      for (const u of b.units) {
        if (u.side === this.side || u.lane !== n || u.state === "death") continue;
        const d = this.side < 0 ? u.s / L.length : 1 - u.s / L.length; // 우리 본성에서 떨어진 정도(0 = 우리 본성)
        if (d < 0.55) cnt++; if (d < 0.38) near = true;
      }
      const bt = this.el.querySelector(`.lanes button[data-lane="${n}"]`); if (!bt) continue;
      let tg = bt.querySelector(".threat"); if (!tg) { tg = document.createElement("em"); tg.className = "threat"; bt.appendChild(tg); }
      const key = cnt + (near ? "!" : "");
      if (tg.dataset.k !== key) { tg.dataset.k = key; tg.textContent = cnt ? `⚠${cnt}` : ""; tg.hidden = !cnt; bt.classList.toggle("danger", near); }
    }
    const mc = b.mineCost(this.side);
    this.$(".mineLv").textContent = "Lv" + S.mine;
    this.$(".mineCost").textContent = mc ? `${mc}골드로 강화` : "최고 단계";
    this.$(".mine").disabled = !mc || S.gold < mc;
    const pips = this.$(".pips").children;
    for (let i = 0; i < pips.length; i++) pips[i].classList.toggle("on", i < S.cannon);
    const ready = S.cannon >= CANNON.charge && !!b.cannonTarget(this.side);
    const cb = this.$(".cannon"); cb.disabled = !ready; cb.classList.toggle("ready", ready);
    if (S.hero) {
      const hb = this.$(".hero"), ok = b.canSkill(this.side);
      hb.disabled = !ok; hb.classList.toggle("ready", ok);
      hb.querySelector(".hgauge i").style.width = (S.skill / S.need * 100).toFixed(0) + "%";
      hb.classList.toggle("live", S.buff.guard > 0 || S.buff.rally > 0);
    }
    const st = this.$(".streak");
    if (st.dataset.n !== String(S.streak)) {
      st.dataset.n = S.streak; st.hidden = S.streak < 2; st.textContent = S.streak + "연속!";
      if (S.streak >= 2) { st.classList.remove("bump"); void st.offsetWidth; st.classList.add("bump"); }
    }
  }
}
