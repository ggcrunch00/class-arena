// B안: 블렌더에서 미리 구운 그림(배경·성·유닛 프레임)을 PixiJS로 띄운다.
(async function () {
  "use strict";
  const { CAM, toScreen, LaneSim } = window.Lane;
  const DATA = window.GAME_DATA;
  const hud = window.HUD;

  // ---------- 그림 불러오기 (fetch 없이 <img>로) ----------
  function loadImage(src) {
    return new Promise((ok, fail) => {
      const im = new Image();
      im.onload = () => ok(im);
      im.onerror = () => fail(new Error(src + " 를 불러오지 못했어요"));
      im.src = src;
    });
  }
  const names = ["bg", "castle_blue", "castle_red", "ruin_blue", "ruin_red", ...Object.keys(DATA.units)];
  let done = 0;
  const imgs = {};
  await Promise.all(names.map((n) => loadImage("assets/" + n + ".webp").then((im) => {
    imgs[n] = im; done++; hud.progress(done / names.length);
  })));
  await hud.fontsReady();

  const app = new PIXI.Application();
  await app.init({
    resizeTo: window, background: 0x0d1712, antialias: true,
    resolution: Math.min(window.devicePixelRatio || 1, 2), autoDensity: true,
  });
  document.getElementById("stage").appendChild(app.canvas);

  const tex = {};
  for (const n of names) tex[n] = new PIXI.Texture({ source: new PIXI.ImageSource({ resource: imgs[n] }) });
  // 유닛 동작별 프레임 조각
  const frames = {};
  for (const [key, u] of Object.entries(DATA.units)) {
    frames[key] = {};
    for (const [anim, a] of Object.entries(u.anims)) {
      frames[key][anim] = a.f.map(([x, y, w, h, ox, oy]) => ({
        tex: new PIXI.Texture({ source: tex[key].source, frame: new PIXI.Rectangle(x, y, w, h) }), ox, oy, k: 1 / (u.scale || 1),
      }));
    }
  }
  // 효과용 작은 그림(코드로 그림)
  function radial(size, stops) {
    const c = document.createElement("canvas"); c.width = c.height = size;
    const g = c.getContext("2d");
    const gr = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    for (const [o, col] of stops) gr.addColorStop(o, col);
    g.fillStyle = gr; g.fillRect(0, 0, size, size);
    return PIXI.Texture.from(c);
  }
  const T_GLOW = radial(64, [[0, "rgba(255,255,255,1)"], [0.35, "rgba(255,255,255,0.55)"], [1, "rgba(255,255,255,0)"]]);
  const T_SMOKE = radial(64, [[0, "rgba(255,255,255,0.85)"], [0.6, "rgba(255,255,255,0.35)"], [1, "rgba(255,255,255,0)"]]);
  const T_SHADOW = radial(64, [[0, "rgba(0,0,0,0.55)"], [1, "rgba(0,0,0,0)"]]);
  const T_CLOUD = radial(256, [[0, "rgba(0,0,0,0.5)"], [0.55, "rgba(0,0,0,0.3)"], [1, "rgba(0,0,0,0)"]]);

  // ---------- 장면 짜기 ----------
  const root = new PIXI.Container();
  app.stage.addChild(root);
  const world = new PIXI.Container();
  root.addChild(world);
  world.addChild(new PIXI.Sprite(tex.bg));
  const clouds = new PIXI.Container();
  world.addChild(clouds);
  for (let i = 0; i < 4; i++) {
    const c = new PIXI.Sprite(T_CLOUD);
    c.anchor.set(0.5); c.scale.set(5 + Math.random() * 3, 2.6 + Math.random());
    c.alpha = 0.16; c.x = Math.random() * CAM.W; c.y = 200 + Math.random() * 1200;
    c.speed = 18 + Math.random() * 14;
    clouds.addChild(c);
  }
  const field = new PIXI.Container();
  field.sortableChildren = true;
  world.addChild(field);
  const fx = new PIXI.Container();
  world.addChild(fx);
  const texts = new PIXI.Container();
  world.addChild(texts);

  // 성
  const castles = {};
  for (const side of [-1, 1]) {
    const col = side < 0 ? "blue" : "red";
    const m = DATA.world["castle_" + col], r = DATA.world["ruin_" + col];
    const c = new PIXI.Container();
    const body = new PIXI.Sprite(tex["castle_" + col]);
    body.position.set(m.x, m.y);
    const flash = new PIXI.Sprite(tex["castle_" + col]);
    flash.position.set(m.x, m.y); flash.blendMode = "add"; flash.alpha = 0;
    const ruin = new PIXI.Sprite(tex["ruin_" + col]);
    ruin.position.set(r.x, r.y); ruin.visible = false;
    c.addChild(ruin, body, flash);
    c.zIndex = toScreen(side * 13.5, 0.9, 0).y;
    field.addChild(c);
    castles[side] = { c, body, flash, ruin, shake: 0, flashT: 0 };
  }

  // ---------- 효과(파티클) ----------
  const parts = [];
  function puff(o) {
    const s = new PIXI.Sprite(o.tex || T_GLOW);
    s.anchor.set(0.5);
    s.tint = o.tint ?? 0xffffff;
    s.blendMode = o.add ? "add" : "normal";
    s.position.set(o.x, o.y);
    fx.addChild(s);
    parts.push({ s, vx: o.vx || 0, vy: o.vy || 0, g: o.g || 0, life: 0, max: o.life || 0.5,
      s0: o.s0 ?? 0.6, s1: o.s1 ?? 0.1, a0: o.a0 ?? 1, drag: o.drag ?? 1 });
  }
  function burst(x, y, n, o) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, sp = (o.speed || 300) * (0.4 + Math.random() * 0.8);
      puff({ ...o, x: x + (Math.random() - 0.5) * (o.spread || 0), y: y + (Math.random() - 0.5) * (o.spread || 0),
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp * (o.flat ?? 0.6) - (o.up || 0), life: (o.life || 0.5) * (0.7 + Math.random() * 0.6) });
    }
  }
  const dmgTexts = [];
  const DMG_STYLE = new PIXI.TextStyle({ fontFamily: "Black Han Sans, sans-serif", fontSize: 54, fill: 0xffffff,
    stroke: { color: 0x2b1408, width: 10, join: "round" } });
  function damageText(x, y, n, color) {
    const t = new PIXI.Text({ text: String(n), style: DMG_STYLE });
    t.anchor.set(0.5); t.position.set(x + (Math.random() - 0.5) * 30, y); t.tint = color;
    texts.addChild(t);
    dmgTexts.push({ t, life: 0, y0: t.y });
  }

  // ---------- 유닛 그림 ----------
  const views = new Map();
  function unitView(u) {
    let v = views.get(u.id);
    if (v) return v;
    const c = new PIXI.Container();
    const body = new PIXI.Sprite();
    const flash = new PIXI.Sprite(); flash.blendMode = "add"; flash.alpha = 0;
    const bar = new PIXI.Graphics();
    c.addChild(body, flash, bar);
    field.addChild(c);
    v = { c, body, flash, bar, lastHp: -1 };
    views.set(u.id, v);
    return v;
  }
  const projViews = new Map();

  // ---------- 화면 크기 맞추기 ----------
  let fitScale = 1;
  function fit() {
    const w = app.screen.width, h = app.screen.height;
    fitScale = Math.min(w / CAM.W, h / CAM.H);
    world.scale.set(fitScale);
    world.position.set((w - CAM.W * fitScale) / 2, (h - CAM.H * fitScale) / 2);
    hud.layout(world.position.y, CAM.H * fitScale);
  }
  window.addEventListener("resize", () => setTimeout(fit, 50));
  fit();

  // ---------- 전투 ----------
  const durations = {};
  for (const [k, u] of Object.entries(DATA.units)) {
    durations[k] = {};
    for (const [a, v] of Object.entries(u.anims)) durations[k][a] = v.dur;
  }
  const sim = new LaneSim(durations);
  let shake = 0;
  const TEAM = { [-1]: 0x9fd8ff, [1]: 0xc8ff7a };

  function handleEvents() {
    for (const e of sim.events) {
      if (e.type === "reset") {
        for (const v of views.values()) v.c.destroy({ children: true });
        views.clear();
        for (const side of [-1, 1]) { castles[side].body.visible = true; castles[side].ruin.visible = false; }
        hud.reset();
      } else if (e.type === "spawn") {
        const p = toScreen(e.unit.x, e.unit.y, 0);
        if (e.unit.side > 0) burst(p.x, p.y - 10, 14, { tex: T_SMOKE, tint: 0x9dff8a, add: true, speed: 120, up: 60, life: 0.9, s0: 0.9, s1: 1.6, a0: 0.5 });
        else burst(p.x, p.y - 10, 10, { tex: T_SMOKE, tint: 0xe8dcc8, speed: 160, up: 40, life: 0.7, s0: 0.6, s1: 1.4, a0: 0.6 });
      } else if (e.type === "hit") {
        const p = toScreen(e.x, e.y, e.z);
        burst(p.x, p.y, 8, { tint: 0xfff1b8, add: true, speed: 420, life: 0.28, s0: 0.35, s1: 0.05 });
        damageText(p.x, p.y - 70, e.dmg, e.side < 0 ? 0xffe27a : 0xffb08a);
      } else if (e.type === "death") {
        const p = toScreen(e.unit.x, e.unit.y, 0.6);
        burst(p.x, p.y, 10, { tex: T_SMOKE, tint: 0xd9d2c5, speed: 140, up: 30, life: 1.0, s0: 0.7, s1: 1.5, a0: 0.45 });
      } else if (e.type === "castleHit") {
        const c = castles[e.side];
        c.shake = 0.18; c.flashT = 1;
        const p = toScreen(e.x, e.y, e.z);
        burst(p.x, p.y, 12, { tint: 0xffd27a, add: true, speed: 520, life: 0.35, s0: 0.4, s1: 0.05 });
        burst(p.x, p.y, 4, { tex: T_SMOKE, tint: 0x8d8478, speed: 90, g: 500, life: 0.6, s0: 0.25, s1: 0.18, a0: 0.9 });
        damageText(p.x, p.y - 40, e.dmg, 0xffffff);
        shake = Math.max(shake, 5);
        hud.castle(e.side, sim.castles[e.side].hp / sim.castles[e.side].max);
      } else if (e.type === "castleDown") {
        const c = castles[e.side];
        c.body.visible = false; c.ruin.visible = true;
        const p = toScreen(e.side * 13.5, 0.9, 3);
        burst(p.x, p.y, 40, { tex: T_SMOKE, tint: 0xb8ad9c, speed: 380, up: 80, life: 2.2, s0: 1.4, s1: 3.2, a0: 0.75, spread: 160 });
        burst(p.x, p.y, 30, { tint: 0xffc06a, add: true, speed: 700, life: 0.7, s0: 0.6, s1: 0.1, spread: 120 });
        shake = 22;
        hud.castle(e.side, 0);
        hud.victory(-e.side);
      } else if (e.type === "launch") {
        projViews.set(e.proj.id, makeProj(e.proj));
      } else if (e.type === "boom") {
        const p = toScreen(e.x, e.y, e.z);
        const col = TEAM[e.side];
        burst(p.x, p.y, 16, { tint: col, add: true, speed: 380, life: 0.45, s0: 0.7, s1: 0.1 });
        puff({ x: p.x, y: p.y, tint: col, add: true, life: 0.3, s0: 1.2, s1: 3.0, a0: 0.8 });
      } else if (e.type === "answer") {
        hud.answer(e.side, e.right, e.unit, sim.score[e.side]);
      }
    }
    sim.events.length = 0;
  }

  function makeProj(p) {
    const c = new PIXI.Container();
    const sh = new PIXI.Sprite(T_SHADOW); sh.anchor.set(0.5); sh.scale.set(0.9, 0.35);
    const glow = new PIXI.Sprite(T_GLOW); glow.anchor.set(0.5); glow.blendMode = "add"; glow.tint = TEAM[p.side]; glow.scale.set(1.5);
    const core = new PIXI.Sprite(T_GLOW); core.anchor.set(0.5); core.blendMode = "add"; core.scale.set(0.55);
    fx.addChild(sh);
    c.addChild(glow, core);
    fx.addChild(c);
    return { c, sh, glow };
  }

  function drawUnits() {
    for (const u of sim.units) {
      const v = unitView(u);
      const f = frames[u.type][u.anim];
      const fr = f[Math.floor(sim.animProgress(u) * f.length)];
      const p = toScreen(u.x, u.y, 0);
      v.c.position.set(p.x, p.y);
      v.c.zIndex = p.y;
      v.body.texture = fr.tex; v.body.position.set(fr.ox, fr.oy); v.body.scale.set(fr.k);
      v.flash.texture = fr.tex; v.flash.position.set(fr.ox, fr.oy); v.flash.scale.set(fr.k);
      v.flash.alpha = u.flash * 0.85;
      let a = 1;
      if (u.state === "spawn" && u.anim === "walk") a = Math.min(1, u.stateT / 0.35);
      if (u.state === "death") a = 1 - Math.max(0, Math.min(1, (u.stateT - durations[u.type].death - 0.1) / 1.0));
      v.c.alpha = a;
      // 체력 막대(다쳤을 때만)
      if (u.hp !== v.lastHp) {
        v.lastHp = u.hp;
        v.bar.clear();
        if (u.hp < u.maxHp && u.hp > 0) {
          const w = 84, k = u.hp / u.maxHp;
          v.bar.roundRect(-w / 2 - 3, -300, w + 6, 16, 6).fill({ color: 0x1b1410, alpha: 0.75 });
          v.bar.roundRect(-w / 2, -297, w * k, 10, 4).fill(u.side < 0 ? 0x5fc3ff : 0xff6a5a);
        }
      }
      v.bar.visible = u.state !== "death";
    }
    // 사라진 유닛 정리
    const alive = new Set(sim.units.map((u) => u.id));
    for (const [id, v] of views) if (!alive.has(id)) { v.c.destroy({ children: true }); views.delete(id); }
    // 구슬
    const live = new Set(sim.projectiles.map((p) => p.id));
    for (const p of sim.projectiles) {
      const v = projViews.get(p.id); if (!v) continue;
      const s = toScreen(p.x, p.y, p.z), g = toScreen(p.x, p.y, 0);
      v.c.position.set(s.x, s.y); v.sh.position.set(g.x, g.y);
      v.glow.scale.set(1.4 + Math.sin(sim.time * 30) * 0.15);
      if (Math.random() < 0.9) puff({ x: s.x, y: s.y, tint: TEAM[p.side], add: true, life: 0.35, s0: 0.45, s1: 0.05, a0: 0.8 });
    }
    for (const [id, v] of projViews) if (!live.has(id)) { v.c.destroy({ children: true }); v.sh.destroy(); projViews.delete(id); }
  }

  function updateFx(dt) {
    for (let i = parts.length - 1; i >= 0; i--) {
      const q = parts[i];
      q.life += dt;
      const k = q.life / q.max;
      if (k >= 1) { q.s.destroy(); parts.splice(i, 1); continue; }
      q.vy += q.g * dt; q.vx *= Math.pow(0.08, dt); q.vy *= Math.pow(0.2, dt);
      q.s.x += q.vx * dt; q.s.y += q.vy * dt;
      q.s.scale.set(q.s0 + (q.s1 - q.s0) * k);
      q.s.alpha = q.a0 * (1 - k * k);
    }
    for (let i = dmgTexts.length - 1; i >= 0; i--) {
      const d = dmgTexts[i];
      d.life += dt;
      const k = d.life / 0.85;
      if (k >= 1) { d.t.destroy(); dmgTexts.splice(i, 1); continue; }
      d.t.y = d.y0 - 90 * (1 - Math.pow(1 - k, 3));
      d.t.scale.set(k < 0.12 ? 0.6 + k / 0.12 * 0.6 : 1.2 - Math.min(0.2, (k - 0.12) * 0.5));
      d.t.alpha = k > 0.65 ? 1 - (k - 0.65) / 0.35 : 1;
    }
    for (const side of [-1, 1]) {
      const c = castles[side];
      c.shake = Math.max(0, c.shake - dt);
      c.flashT = Math.max(0, c.flashT - dt * 6);
      c.c.x = c.shake > 0 ? (Math.random() - 0.5) * 10 : 0;
      c.flash.alpha = c.flashT * 0.6;
    }
    for (const c of clouds.children) {
      c.x += c.speed * dt;
      if (c.x > CAM.W + 700) { c.x = -700; c.y = 200 + Math.random() * 1200; }
    }
    shake = Math.max(0, shake - dt * 40);
    root.position.set((Math.random() - 0.5) * shake * fitScale * 2, (Math.random() - 0.5) * shake * fitScale * 2);
  }

  hud.ready("B안 · 구운 2D");
  app.ticker.add((t) => {
    const dt = Math.min(t.deltaMS / 1000, 1 / 20);
    sim.update(dt);
    handleEvents();
    drawUnits();
    updateFx(dt);
    hud.fps(app.ticker.FPS);
  });
  window.__lane = { sim, app };
})().catch((e) => window.HUD && window.HUD.error(e));
