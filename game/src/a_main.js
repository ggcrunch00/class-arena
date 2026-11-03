// A안: 같은 KayKit 모형을 브라우저에서 실시간 3D로 그린다(three.js).
// 이 파일은 esbuild로 묶어서 js/a_bundle.js 가 된다.
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";

const { CAM, LaneSim, CASTLE_X } = window.Lane;
const hud = window.HUD;
const UNIT_SCALE = 1.35, FACE = 65 * Math.PI / 180;

// 블렌더 좌표(x 오른쪽, y 뒤쪽, z 위) → three 좌표(x, y 위, z 앞)
const V = (x, y, z) => new THREE.Vector3(x, z, -y);

function b64ToBuffer(b64) {
  const bin = atob(b64), n = bin.length, out = new Uint8Array(n);
  for (let i = 0; i < n; i++) out[i] = bin.charCodeAt(i);
  return out.buffer;
}
function parseGLB(name) {
  const loader = new GLTFLoader();
  // 그림은 <img> 방식으로 읽게 한다(배포 페이지 보안 규칙 대비)
  loader.register((parser) => { parser.textureLoader = new THREE.TextureLoader(parser.options.manager); return { name: "img_textures" }; });
  return new Promise((ok, fail) => loader.parse(b64ToBuffer(window.GLB[name]), "", ok, fail));
}

async function main() {
  const names = ["field", "knight", "mage", "skel_warrior", "skel_mage"];
  const models = {};
  let done = 0;
  for (const n of names) { models[n] = await parseGLB(n); hud.progress(++done / names.length); }
  await hud.fontsReady();

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.AgXToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.setClearColor(0x0d1712);
  document.getElementById("stage").appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = null;

  // 카메라: 블렌더 배경 카메라와 같은 방향·같은 넓이(32m × 18m)
  const e = CAM.ELEV;
  const cam = new THREE.OrthographicCamera(-16, 16, 9, -9, 0.1, 400);
  const target = V(CAM.TX, CAM.TY, CAM.TZ);
  const dir = V(0, Math.cos(e), -Math.sin(e));
  cam.position.copy(target).addScaledVector(dir, -120);
  cam.up.copy(V(0, Math.sin(e), Math.cos(e)));
  cam.lookAt(target);
  const camBase = cam.position.clone();

  // 빛: 블렌더 햇빛과 같은 방향
  const sun = new THREE.DirectionalLight(0xfff8ee, 3.4);
  const sunDir = V(0.485, 0.621, -0.616).normalize();
  sun.position.copy(target).addScaledVector(sunDir, -40);
  sun.target.position.copy(target);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -24, right: 24, top: 24, bottom: -24, near: 1, far: 100 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
  scene.add(sun, sun.target);
  scene.add(new THREE.HemisphereLight(0xa8c4f0, 0x5a6b3a, 1.25));

  // 전장
  const field = models.field.scene;
  const castles = {};
  field.traverse((o) => {
    if (!o.isMesh) return;
    o.castShadow = true; o.receiveShadow = true;
    // 블렌더의 얼룩 흙 재질은 모형 파일로 안 넘어오므로 흙색을 직접 칠한다
    for (const m of [].concat(o.material)) if (m.name === "Dirt") m.color.setRGB(0.5, 0.33, 0.19);
  });
  scene.add(field);
  for (const side of [-1, 1]) {
    const col = side < 0 ? "blue" : "red";
    const body = field.getObjectByName("castle_" + col), ruin = field.getObjectByName("ruin_" + col);
    ruin.visible = false;
    const mats = [];
    body.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); mats.push(o.material); } });
    castles[side] = { body, ruin, mats, base: body.position.clone(), shake: 0, flash: 0 };
  }

  // 효과 그림
  function radialTex(stops) {
    const c = document.createElement("canvas"); c.width = c.height = 64;
    const g = c.getContext("2d"), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    for (const [o, col] of stops) gr.addColorStop(o, col);
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }
  const T_GLOW = radialTex([[0, "rgba(255,255,255,1)"], [0.35, "rgba(255,255,255,0.55)"], [1, "rgba(255,255,255,0)"]]);
  const T_SMOKE = radialTex([[0, "rgba(255,255,255,0.85)"], [0.6, "rgba(255,255,255,0.35)"], [1, "rgba(255,255,255,0)"]]);

  // 구름 그림자(땅 위를 천천히 지나감)
  const clouds = [];
  const cloudMat = new THREE.MeshBasicMaterial({ map: radialTex([[0, "rgba(0,0,0,0.5)"], [0.55, "rgba(0,0,0,0.3)"], [1, "rgba(0,0,0,0)"]]),
    transparent: true, opacity: 0.16, depthWrite: false });
  for (let i = 0; i < 4; i++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), cloudMat);
    m.rotation.x = -Math.PI / 2; m.scale.set(16 + Math.random() * 8, 7 + Math.random() * 3, 1);
    m.position.copy(V(-20 + Math.random() * 40, -6 + Math.random() * 22, 3));
    m.renderOrder = 2; m.speed = 0.2 + Math.random() * 0.15;
    scene.add(m); clouds.push(m);
  }

  // 파티클
  const parts = [];
  function puff(o) {
    const mat = new THREE.SpriteMaterial({ map: o.tex || T_GLOW, color: o.tint ?? 0xffffff, transparent: true, depthWrite: false,
      blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending, opacity: o.a0 ?? 1 });
    const s = new THREE.Sprite(mat);
    s.position.copy(o.p);
    s.renderOrder = 5;
    scene.add(s);
    parts.push({ s, v: o.v || new THREE.Vector3(), g: o.g || 0, life: 0, max: o.life || 0.5, s0: o.s0 ?? 0.6, s1: o.s1 ?? 0.1, a0: o.a0 ?? 1 });
  }
  function burst(p, n, o) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, sp = (o.speed || 3) * (0.4 + Math.random() * 0.8);
      const v = new THREE.Vector3(Math.cos(a) * sp, (Math.random() * 0.8 + 0.2) * sp * (o.upk ?? 0.7) + (o.up || 0), Math.sin(a) * sp * 0.6);
      const q = p.clone().add(new THREE.Vector3((Math.random() - 0.5) * (o.spread || 0), (Math.random() - 0.5) * (o.spread || 0) * 0.5, 0));
      puff({ ...o, p: q, v, life: (o.life || 0.5) * (0.7 + Math.random() * 0.6) });
    }
  }

  // 화면 맞추기(B안과 같은 16:9 틀)
  const view = { x: 0, y: 0, w: 1, h: 1 };
  function fit() {
    const W = window.innerWidth, H = window.innerHeight;
    renderer.setSize(W, H);
    const s = Math.min(W / CAM.W, H / CAM.H);
    view.w = CAM.W * s; view.h = CAM.H * s; view.x = (W - view.w) / 2; view.y = (H - view.h) / 2;
    hud.layout(view.y, view.h);
  }
  window.addEventListener("resize", () => setTimeout(fit, 50));
  fit();
  const overlay = document.getElementById("overlay");
  function toPx(p) {
    const v = p.clone().project(cam);
    return { x: view.x + (v.x + 1) / 2 * view.w, y: view.y + (1 - v.y) / 2 * view.h };
  }
  function damageText(p, n, color) {
    const s = toPx(p), d = document.createElement("div");
    d.className = "dmg"; d.textContent = n; d.style.color = color;
    d.style.left = s.x + (Math.random() - 0.5) * 12 + "px"; d.style.top = s.y + "px";
    d.style.fontSize = Math.max(14, view.w / 2880 * 54) + "px";
    overlay.appendChild(d);
    setTimeout(() => d.remove(), 900);
  }

  // 유닛
  // 동작 길이는 모형에 든 동작에서 바로 읽는다
  const durations = {};
  for (const k of ["knight", "mage", "skel_warrior", "skel_mage"]) {
    durations[k] = {};
    for (const clip of models[k].animations) durations[k][clip.name] = clip.duration;
  }
  const sim = new LaneSim(durations);
  const views = new Map();
  function unitView(u) {
    let v = views.get(u.id);
    if (v) return v;
    const src = models[u.type];
    const obj = SkeletonUtils.clone(src.scene);
    obj.scale.setScalar(UNIT_SCALE);
    obj.rotation.y = FACE * (u.side < 0 ? 1 : -1);
    const mats = [];
    obj.traverse((o) => {
      if (o.isMesh) { o.castShadow = true; o.material = o.material.clone(); o.material.transparent = true; mats.push(o.material); }
    });
    scene.add(obj);
    const mixer = new THREE.AnimationMixer(obj);
    const actions = {};
    for (const clip of src.animations) actions[clip.name] = mixer.clipAction(clip);
    const bar = document.createElement("div"); bar.className = "bar " + (u.side < 0 ? "b" : "r"); bar.innerHTML = "<i></i>";
    overlay.appendChild(bar);
    v = { obj, mixer, actions, mats, anim: null, bar };
    views.set(u.id, v);
    return v;
  }
  function play(v, name) {
    if (v.anim === name) return;
    const a = v.actions[name]; if (!a) return;
    const once = name === "death" || name === "spawn";
    a.reset(); a.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat); a.clampWhenFinished = once;
    if (v.anim && v.actions[v.anim]) a.crossFadeFrom(v.actions[v.anim], name === "spawn" ? 0 : 0.12, false);
    a.play();
    v.anim = name;
  }
  const projViews = new Map();
  const TEAM = { [-1]: 0x9fd8ff, [1]: 0xc8ff7a };
  let shake = 0;

  function handleEvents() {
    for (const e of sim.events) {
      if (e.type === "reset") {
        for (const v of views.values()) { scene.remove(v.obj); v.bar.remove(); }
        views.clear();
        for (const s of [-1, 1]) { castles[s].body.visible = true; castles[s].ruin.visible = false; }
        hud.reset();
      } else if (e.type === "spawn") {
        const p = V(e.unit.x, e.unit.y, 0.3);
        if (e.unit.side > 0) burst(p, 14, { tex: T_SMOKE, tint: 0x9dff8a, add: true, speed: 1.4, up: 0.6, life: 0.9, s0: 0.9, s1: 1.8, a0: 0.5 });
        else burst(p, 10, { tex: T_SMOKE, tint: 0xe8dcc8, speed: 1.8, up: 0.4, life: 0.7, s0: 0.7, s1: 1.5, a0: 0.6 });
      } else if (e.type === "hit") {
        const p = V(e.x, e.y, e.z);
        burst(p, 8, { tint: 0xfff1b8, add: true, speed: 4.5, life: 0.28, s0: 0.45, s1: 0.06 });
        damageText(V(e.x, e.y, e.z + 0.8), e.dmg, e.side < 0 ? "#ffe27a" : "#ffb08a");
      } else if (e.type === "death") {
        burst(V(e.unit.x, e.unit.y, 0.6), 10, { tex: T_SMOKE, tint: 0xd9d2c5, speed: 1.5, up: 0.3, life: 1.0, s0: 0.8, s1: 1.7, a0: 0.45 });
      } else if (e.type === "castleHit") {
        const c = castles[e.side]; c.shake = 0.18; c.flash = 1;
        const p = V(e.x, e.y, e.z);
        burst(p, 12, { tint: 0xffd27a, add: true, speed: 5.5, life: 0.35, s0: 0.5, s1: 0.06 });
        burst(p, 4, { tex: T_SMOKE, tint: 0x8d8478, speed: 1.0, g: -6, life: 0.6, s0: 0.3, s1: 0.22, a0: 0.9 });
        damageText(V(e.x, e.y, e.z + 0.5), e.dmg, "#ffffff");
        shake = Math.max(shake, 0.06);
        hud.castle(e.side, sim.castles[e.side].hp / sim.castles[e.side].max);
      } else if (e.type === "castleDown") {
        const c = castles[e.side]; c.body.visible = false; c.ruin.visible = true;
        const p = V(e.side * CASTLE_X, 0.9, 3);
        burst(p, 40, { tex: T_SMOKE, tint: 0xb8ad9c, speed: 4, up: 0.8, life: 2.2, s0: 1.6, s1: 3.6, a0: 0.75, spread: 3 });
        burst(p, 30, { tint: 0xffc06a, add: true, speed: 8, life: 0.7, s0: 0.7, s1: 0.1, spread: 2.5 });
        shake = 0.25;
        hud.castle(e.side, 0); hud.victory(-e.side);
      } else if (e.type === "launch") {
        const g = new THREE.Group();
        const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: T_GLOW, color: TEAM[e.proj.side], blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
        glow.scale.setScalar(1.3);
        const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: T_GLOW, color: 0xffffff, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
        core.scale.setScalar(0.5);
        const light = new THREE.PointLight(TEAM[e.proj.side], 6, 5, 2);
        g.add(glow, core, light); g.renderOrder = 6;
        scene.add(g);
        projViews.set(e.proj.id, { g, glow });
      } else if (e.type === "boom") {
        const p = V(e.x, e.y, e.z);
        burst(p, 16, { tint: TEAM[e.side], add: true, speed: 4.5, life: 0.45, s0: 0.8, s1: 0.1 });
        puff({ p, tint: TEAM[e.side], add: true, life: 0.3, s0: 1.4, s1: 3.4, a0: 0.8 });
      } else if (e.type === "answer") {
        hud.answer(e.side, e.right, e.unit, sim.score[e.side]);
      }
    }
    sim.events.length = 0;
  }

  function drawUnits(dt) {
    for (const u of sim.units) {
      const v = unitView(u);
      play(v, u.anim);
      v.mixer.update(dt);
      v.obj.position.copy(V(u.x, u.y, 0));
      let a = 1;
      if (u.state === "spawn" && u.anim === "walk") a = Math.min(1, u.stateT / 0.35);
      if (u.state === "death") a = 1 - Math.max(0, Math.min(1, (u.stateT - durations[u.type].death - 0.1) / 1.0));
      for (const m of v.mats) { m.opacity = a; m.emissive.setScalar(u.flash * 0.9); }
      // 체력 막대
      if (u.hp < u.maxHp && u.state !== "death") {
        const s = toPx(V(u.x, u.y, 3.9));
        v.bar.style.display = "block";
        v.bar.style.transform = `translate(${s.x}px, ${s.y}px)`;
        v.bar.style.width = view.w / 2880 * 90 + "px";
        v.bar.firstChild.style.width = (u.hp / u.maxHp * 100) + "%";
      } else v.bar.style.display = "none";
    }
    const alive = new Set(sim.units.map((u) => u.id));
    for (const [id, v] of views) if (!alive.has(id)) { scene.remove(v.obj); v.bar.remove(); views.delete(id); }
    const live = new Set(sim.projectiles.map((p) => p.id));
    for (const p of sim.projectiles) {
      const v = projViews.get(p.id); if (!v) continue;
      v.g.position.copy(V(p.x, p.y, p.z));
      v.glow.scale.setScalar(1.3 + Math.sin(sim.time * 30) * 0.15);
      puff({ p: v.g.position.clone(), tint: TEAM[p.side], add: true, life: 0.35, s0: 0.5, s1: 0.05, a0: 0.8 });
    }
    for (const [id, v] of projViews) if (!live.has(id)) { scene.remove(v.g); projViews.delete(id); }
  }

  function updateFx(dt) {
    for (let i = parts.length - 1; i >= 0; i--) {
      const q = parts[i];
      q.life += dt;
      const k = q.life / q.max;
      if (k >= 1) { scene.remove(q.s); q.s.material.dispose(); parts.splice(i, 1); continue; }
      q.v.y += q.g * dt; q.v.multiplyScalar(Math.pow(0.12, dt));
      q.s.position.addScaledVector(q.v, dt);
      q.s.scale.setScalar(q.s0 + (q.s1 - q.s0) * k);
      q.s.material.opacity = q.a0 * (1 - k * k);
    }
    for (const s of [-1, 1]) {
      const c = castles[s];
      c.shake = Math.max(0, c.shake - dt); c.flash = Math.max(0, c.flash - dt * 6);
      c.body.position.x = c.base.x + (c.shake > 0 ? (Math.random() - 0.5) * 0.12 : 0);
      for (const m of c.mats) m.emissive.setScalar(c.flash * 0.5);
    }
    for (const m of clouds) {
      m.position.x += m.speed * dt;
      if (m.position.x > 30) { m.position.x = -30; m.position.z = -(-6 + Math.random() * 22); }
    }
    shake = Math.max(0, shake - dt * 0.5);
    cam.position.copy(camBase).add(new THREE.Vector3((Math.random() - 0.5) * shake * 2, (Math.random() - 0.5) * shake * 2, 0));
  }

  hud.ready("A안 · 실시간 3D");
  let last = performance.now();
  let fpsT = 0, fpsN = 0;
  renderer.setScissorTest(true);
  renderer.setAnimationLoop(() => {
    const now = performance.now(); const dt = Math.min((now - last) / 1000, 1 / 20); last = now;
    sim.update(dt);
    handleEvents();
    drawUnits(dt);
    updateFx(dt);
    renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
    renderer.setScissor(0, 0, window.innerWidth, window.innerHeight);
    renderer.clear();
    renderer.setViewport(view.x, view.y, view.w, view.h);
    renderer.setScissor(view.x, view.y, view.w, view.h);
    renderer.render(scene, cam);
    fpsT += dt; fpsN++;
    if (fpsT > 0.25) { hud.fps(fpsN / fpsT); fpsT = 0; fpsN = 0; }
  });
  window.__lane = { sim, renderer, scene };
}

main().catch((e) => hud.error(e));
