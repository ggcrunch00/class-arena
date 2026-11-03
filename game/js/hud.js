// 화면 위 정보(성 체력, 정답 수, 소식, 승리 띠). A안·B안이 함께 쓴다.
(function () {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const startAt = performance.now();
  let started = false;

  // 25초 안에 못 열리면 이유를 보여 준다(작은 섬 노트 4-2 교훈)
  setTimeout(() => {
    if (!started) HUD.error(new Error("25초가 지나도 장면을 열지 못했어요. 새로고침해 보세요."));
  }, 25000);

  const feedTimers = { [-1]: [], [1]: [] };
  let fpsAvg = 60, fpsShown = 0;

  const HUD = {
    progress(k) {
      const b = $("#loading b");
      if (b) b.textContent = Math.round(k * 100) + "%";
    },
    fontsReady() {
      if (!document.fonts) return Promise.resolve();
      return Promise.race([
        Promise.all([document.fonts.load("54px 'Black Han Sans'"), document.fonts.load("16px 'Gowun Dodum'")]),
        new Promise((r) => setTimeout(r, 2500)),
      ]).catch(() => {});
    },
    ready(label) {
      started = true;
      $("#loading").hidden = true;
      $("#mode").textContent = label;
      document.body.classList.add("on");
      console.log("준비 완료", Math.round(performance.now() - startAt) + "ms");
    },
    layout(top, h) {
      // 전장 그림의 위쪽 끝에 맞춰 붙인다(태블릿 4:3이면 위 띠 안에 들어감)
      $("#hud").style.top = Math.max(8, top + Math.min(18, h * 0.02)) + "px";
    },
    reset() {
      for (const s of [-1, 1]) {
        this.castle(s, 1);
        const el = $(s < 0 ? "#blue" : "#red");
        el.querySelector(".r").textContent = "0";
        el.querySelector(".w").textContent = "0";
        el.querySelector(".feed").innerHTML = "";
      }
      $("#victory").hidden = true;
    },
    castle(side, k) {
      const el = $(side < 0 ? "#blue" : "#red");
      el.querySelector(".hp i").style.width = (k * 100).toFixed(1) + "%";
      el.querySelector(".hp span").textContent = Math.ceil(k * 100) + "%";
      el.classList.remove("hit"); void el.offsetWidth; el.classList.add("hit");
    },
    answer(side, right, unitName, score) {
      const el = $(side < 0 ? "#blue" : "#red");
      el.querySelector(".r").textContent = score.right;
      el.querySelector(".w").textContent = score.wrong;
      const feed = el.querySelector(".feed");
      const row = document.createElement("div");
      row.className = right ? "ok" : "no";
      row.textContent = right ? "정답! " + unitName + " 출전" : "오답… 다시 도전";
      feed.prepend(row);
      while (feed.children.length > 3) feed.lastChild.remove();
      setTimeout(() => row.classList.add("out"), 1800);
      setTimeout(() => row.remove(), 2300);
    },
    victory(side) {
      const v = $("#victory");
      v.className = side < 0 ? "blue" : "red";
      v.querySelector("b").textContent = side < 0 ? "기사단 승리!" : "해골 군단 승리!";
      v.hidden = false;
    },
    fps(f) {
      fpsAvg += (f - fpsAvg) * 0.05;
      const now = performance.now();
      if (now - fpsShown > 500) { fpsShown = now; $("#fps").textContent = Math.round(fpsAvg) + " fps"; }
    },
    error(e) {
      const l = $("#loading");
      l.hidden = false;
      l.classList.add("err");
      l.innerHTML = "<p>장면을 열지 못했어요</p><small></small>";
      l.querySelector("small").textContent = (e && e.message) || String(e);
      console.error(e);
    },
  };
  window.HUD = HUD;
})();
