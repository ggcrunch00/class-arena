// 전장 그리기(three.js 실시간 3D). 전투 규칙(battle.js)의 상태를 받아 그림·효과·소리로 보여 줌.
import * as THREE from "three";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";
import { ELEV, UNIT_SCALE, SIDES, ROLE_INFO, TOWER, BASE } from "./config.js";
import { LANES, LANE_NAMES, BOUNDS, BASES, RIVER } from "./lanes.js";
import { Sound } from "./sound.js";

// 블렌더 좌표(x 오른쪽, y 뒤쪽, z 위) → three 좌표
const V = (x, y, z) => new THREE.Vector3(x, z, -y);
const backOut = (k) => { const c = 1.70158; return 1 + (c + 1) * Math.pow(k - 1, 3) + c * Math.pow(k - 1, 2); };
const smooth = (k) => k * k * (3 - 2 * k);

function radialTex(stops, size = 64) {
  const c = document.createElement("canvas"); c.width = c.height = size;
  const g = c.getContext("2d"), r = size / 2, gr = g.createRadialGradient(r, r, 0, r, r, r);
  for (const [o, col] of stops) gr.addColorStop(o, col);
  g.fillStyle = gr; g.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export class View3D {
  constructor(stage, overlay, models, quality) {
    this.models = models; this.quality = quality; this.overlay = overlay;
    const P = quality.preset;
    this.renderer = new THREE.WebGLRenderer({ antialias: P.aa, powerPreference: "high-performance" });
    this.renderer.toneMapping = THREE.AgXToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.setClearColor(0x0d1712);
    this.renderer.autoClear = false;
    stage.appendChild(this.renderer.domElement);

    const scene = this.scene = new THREE.Scene();
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 400);
    const target = V(0, 0, 0);
    const dir = V(0, Math.cos(ELEV), -Math.sin(ELEV));
    this.cam.position.copy(target).addScaledVector(dir, -120);
    this.cam.up.copy(V(0, Math.sin(ELEV), Math.cos(ELEV)));
    this.cam.lookAt(target);
    this.camBase = this.cam.position.clone();

    const sun = this.sun = new THREE.DirectionalLight(0xfff8ee, 3.4);
    sun.position.copy(target).addScaledVector(V(0.485, 0.621, -0.616).normalize(), -40);
    sun.target.position.copy(target);
    Object.assign(sun.shadow.camera, { left: -30, right: 30, top: 26, bottom: -26, near: 1, far: 120 });
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
    scene.add(sun, sun.target, new THREE.HemisphereLight(0xa8c4f0, 0x5a6b3a, 1.25));

    // 전장·성
    const field = models.field.scene;
    field.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = true; o.receiveShadow = true;
      for (const m of [].concat(o.material)) if (m.name === "Dirt") m.color.setRGB(0.5, 0.33, 0.19);
    });
    scene.add(field);
    // 본성·탑(무너지면 폐허로 바꿔 끼움)
    this.nodes = {};
    for (const side of [-1, 1]) {
      const col = side < 0 ? "blue" : "red";
      for (const name of ["base_" + col, ...LANE_NAMES.map((n) => `tower_${col}_${n}`)]) {
        const body = field.getObjectByName(name), ruin = field.getObjectByName("ruin_" + name);
        ruin.visible = false;
        const mats = [];
        body.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); mats.push(o.material); } });
        let bar = null;
        if (name.startsWith("tower")) {
          bar = document.createElement("div"); bar.className = "tbar " + (side < 0 ? "b" : "r"); bar.innerHTML = "<i></i>";
          overlay.appendChild(bar);
        }
        this.nodes[name] = { body, ruin, mats, base: body.position.clone(), scale: body.scale.clone(), shake: 0, flash: 0, bar };
      }
    }
    this.laneMarks = this.makeLaneMarks();

    this.T_GLOW = radialTex([[0, "rgba(255,255,255,1)"], [0.35, "rgba(255,255,255,0.55)"], [1, "rgba(255,255,255,0)"]]);
    this.T_SMOKE = radialTex([[0, "rgba(255,255,255,0.85)"], [0.6, "rgba(255,255,255,0.35)"], [1, "rgba(255,255,255,0)"]]);
    this.T_BLOB = radialTex([[0, "rgba(0,0,0,0.55)"], [0.7, "rgba(0,0,0,0.25)"], [1, "rgba(0,0,0,0)"]]);

    // 구름 그림자
    this.clouds = [];
    const cloudMat = new THREE.MeshBasicMaterial({ map: radialTex([[0, "rgba(0,0,0,0.5)"], [0.55, "rgba(0,0,0,0.3)"], [1, "rgba(0,0,0,0)"]], 128),
      transparent: true, opacity: 0.16, depthWrite: false });
    for (let i = 0; i < 4; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), cloudMat);
      m.rotation.x = -Math.PI / 2; m.scale.set(16 + Math.random() * 8, 7 + Math.random() * 3, 1);
      m.position.copy(V(-20 + Math.random() * 40, -6 + Math.random() * 22, 3));
      m.renderOrder = 2; m.speed = 0.2 + Math.random() * 0.15;
      scene.add(m); this.clouds.push(m);
    }
    this.blobGeo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
    this.blobMat = new THREE.MeshBasicMaterial({ map: this.T_BLOB, transparent: true, depthWrite: false });

    this.parts = [];
    this.rings = [];
    this.ringTex = (() => {  // 출전 마법진(빛나는 고리 + 안쪽 무늬)
      const c = document.createElement("canvas"); c.width = c.height = 128;
      const g = c.getContext("2d");
      g.strokeStyle = "rgba(255,255,255,0.95)"; g.lineWidth = 6; g.beginPath(); g.arc(64, 64, 56, 0, 6.2832); g.stroke();
      g.lineWidth = 2.5; g.beginPath(); g.arc(64, 64, 44, 0, 6.2832); g.stroke();
      for (let i = 0; i < 6; i++) { const a = i / 6 * 6.2832; g.beginPath(); g.moveTo(64 + Math.cos(a) * 44, 64 + Math.sin(a) * 44); g.lineTo(64 + Math.cos(a + 2.094) * 44, 64 + Math.sin(a + 2.094) * 44); g.stroke(); }
      const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
    })();
    this.ringGeo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
    this.glintT = 0;
    this.focus = null;
    this.views = new Map();
    this.projViews = new Map();
    this.shake = 0;
    this.view = { x: 0, y: 0, w: 1, h: 1 };
    this.applyQuality();
  }

  // ---------- 화질 ----------
  applyQuality() {
    const P = this.quality.preset;
    const dpr = window.devicePixelRatio || 1;
    this.renderer.setPixelRatio(Math.max(0.5, Math.min(dpr, P.pixelRatio)));
    const shadows = P.shadow > 0;
    if (this.renderer.shadowMap.enabled !== shadows || (shadows && this.sun.shadow.mapSize.x !== P.shadow)) {
      this.renderer.shadowMap.enabled = shadows;
      this.sun.castShadow = shadows;
      if (shadows) {
        this.sun.shadow.mapSize.set(P.shadow, P.shadow);
        if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; }
      }
      this.scene.traverse((o) => { if (o.material) for (const m of [].concat(o.material)) m.needsUpdate = true; });
    }
    for (const c of this.clouds) c.visible = P.clouds;
    for (const v of this.views.values()) v.blob.visible = P.blob;
    this.fxScale = P.fx;
    this.cap = P.cap;
    this.resize();
  }

  setViewport(rect, topPad = 0) { this.view = rect; this.topPad = topPad; this.resize(); }
  // 지도 전체(섬 + 본성·탑 꼭대기)가 화면 칸에 다 들어가게 맞춤
  resize() {
    const W = window.innerWidth, H = window.innerHeight;
    this.renderer.setSize(W, H);
    const [bx, by] = BOUNDS, sn = Math.sin(ELEV), cs = Math.cos(ELEV);
    const pts = [[-bx - 1, -by - 1.5, 0], [bx + 1, -by - 1.5, 0], [-bx - 1, by + 1, 0], [bx + 1, by + 1, 0],
      [BASES[1][0], BASES[1][1], BASE.height + 2.5], [BASES[-1][0], BASES[-1][1], BASE.height + 2]];
    let x0 = 1e9, x1 = -1e9, u0 = 1e9, u1 = -1e9;
    for (const [x, y, z] of pts) { const u = y * sn + z * cs; x0 = Math.min(x0, x); x1 = Math.max(x1, x); u0 = Math.min(u0, u); u1 = Math.max(u1, u); }
    const vw = Math.max(1, this.view.w), vh = Math.max(1, this.view.h - (this.topPad || 0));
    const k = Math.max((x1 - x0) / vw, (u1 - u0) / vh);       // 1px당 m
    const cx = (x0 + x1) / 2, cu = (u0 + u1) / 2;
    // 지도는 위쪽 정보 띠(topPad)를 뺀 아래 칸 가운데에 오게
    const bottom = cu - vh * k / 2;
    Object.assign(this.cam, { left: cx - vw * k / 2, right: cx + vw * k / 2, bottom, top: bottom + this.view.h * k });
    this.cam.updateProjectionMatrix();
    this.mPerPx = k;
  }

  // 고른 길 표시: 자기 본성에서 나가는 길 앞부분을 빛나게(기사단 금빛, 해골 군단 분홍빛)
  makeLaneMarks() {
    const marks = { [-1]: {}, [1]: {} };
    this.laneMats = [];
    for (const side of [-1, 1]) {
      const mat = new THREE.MeshBasicMaterial({ color: side < 0 ? 0xffd36b : 0xff9c8a, transparent: true, opacity: 0.6, depthWrite: false });
      this.laneMats.push(mat);
      for (const n of LANE_NAMES) {
        const L = LANES[n], pos = [], idx = [];
        const steps = 24, w = 1.35;
        for (let i = 0; i <= steps; i++) {
          const d = 2.0 + 11.0 * i / steps, sAt = side < 0 ? d : L.length - d;
          const p = L.at(sAt), ww = w * (i > steps - 5 ? (steps - i) / 5 : 1);
          const a = V(p.x - p.dy * ww, p.y + p.dx * ww, 0.25), b = V(p.x + p.dy * ww, p.y - p.dx * ww, 0.25);
          pos.push(a.x, a.y, a.z, b.x, b.y, b.z);
          if (i) { const j = i * 2; idx.push(j - 2, j - 1, j, j - 1, j + 1, j); }
        }
        const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx);
        const m = new THREE.Mesh(g, mat); m.renderOrder = 3; m.visible = false; mat.side = THREE.DoubleSide;
        this.scene.add(m); marks[side][n] = m;
      }
    }
    return marks;
  }
  setLane(n, side = -1) { for (const k in this.laneMarks[side]) this.laneMarks[side][k].visible = k === n; }

  structNode(st) { return this.nodes[(st.kind === "base" ? "base_" : "tower_") + (st.side < 0 ? "blue" : "red") + (st.kind === "tower" ? "_" + st.lane : "")]; }

  toPx(p) {
    const v = p.clone().project(this.cam);
    return { x: this.view.x + (v.x + 1) / 2 * this.view.w, y: this.view.y + (1 - v.y) / 2 * this.view.h };
  }

  // ---------- 효과 ----------
  puff(o) {
    const mat = new THREE.SpriteMaterial({ map: o.tex || this.T_GLOW, color: o.tint ?? 0xffffff, transparent: true, depthWrite: false,
      blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending, opacity: o.a0 ?? 1 });
    const s = new THREE.Sprite(mat);
    s.position.copy(o.p); s.renderOrder = 5;
    this.scene.add(s);
    this.parts.push({ s, v: o.v || new THREE.Vector3(), g: o.g || 0, life: 0, max: o.life || 0.5, s0: o.s0 ?? 0.6, s1: o.s1 ?? 0.1, a0: o.a0 ?? 1 });
  }
  burst(p, n, o) {
    n = Math.max(1, Math.round(n * this.fxScale));
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, sp = (o.speed || 3) * (0.4 + Math.random() * 0.8);
      const v = new THREE.Vector3(Math.cos(a) * sp, (Math.random() * 0.8 + 0.2) * sp * 0.7 + (o.up || 0), Math.sin(a) * sp * 0.6);
      const q = p.clone().add(new THREE.Vector3((Math.random() - 0.5) * (o.spread || 0), (Math.random() - 0.5) * (o.spread || 0) * 0.5, 0));
      this.puff({ ...o, p: q, v, life: (o.life || 0.5) * (0.7 + Math.random() * 0.6) });
    }
  }
  text(p, str, cls, color) {
    const s = this.toPx(p), d = document.createElement("div");
    d.className = "float " + (cls || ""); d.textContent = str;
    if (color) d.style.color = color;
    d.style.left = s.x + (Math.random() - 0.5) * 12 + "px"; d.style.top = s.y + "px";
    d.style.fontSize = Math.max(12, 0.62 / (this.mPerPx || 0.03) * (cls === "counter" ? 1.15 : 1)) + "px";
    this.overlay.appendChild(d);
    setTimeout(() => d.remove(), 950);
  }

  // ---------- 유닛 ----------
  unitView(u) {
    let v = this.views.get(u.id);
    if (v) return v;
    const src = this.models[u.model];
    const obj = SkeletonUtils.clone(src.scene);
    obj.scale.setScalar(UNIT_SCALE);
    obj.rotation.y = Math.atan2(u.fx, -u.fy);
    const mats = [];
    obj.traverse((o) => {
      if (o.isMesh) { o.castShadow = true; o.material = o.material.clone(); o.material.transparent = true; mats.push(o.material); }
    });
    this.scene.add(obj);
    const mixer = new THREE.AnimationMixer(obj);
    const actions = {};
    for (const clip of src.animations) actions[clip.name] = mixer.clipAction(clip);
    const blob = new THREE.Mesh(this.blobGeo, this.blobMat.clone());
    blob.scale.set(1.6, 1, 1.0); blob.visible = this.quality.preset.blob; blob.renderOrder = 1;
    this.scene.add(blob);
    const bar = document.createElement("div"); bar.className = "bar " + (u.side < 0 ? "b" : "r"); bar.innerHTML = "<i></i>";
    this.overlay.appendChild(bar);
    v = { obj, mixer, actions, mats, anim: null, bar, blob, pop: 0 };
    this.views.set(u.id, v);
    return v;
  }
  play(v, name) {
    if (v.anim === name) return;
    const a = v.actions[name]; if (!a) return;
    const once = name === "death" || name === "spawn";
    a.reset(); a.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat); a.clampWhenFinished = once;
    a.timeScale = name === "spawn" ? 2 : 1;
    if (v.anim && v.actions[v.anim]) a.crossFadeFrom(v.actions[v.anim], name === "spawn" ? 0 : 0.12, false);
    a.play();
    v.anim = name;
  }
  removeUnit(id) {
    const v = this.views.get(id); if (!v) return;
    this.scene.remove(v.obj, v.blob); v.blob.material.dispose(); v.bar.remove(); this.views.delete(id);
  }
  clear() {
    for (const id of [...this.views.keys()]) this.removeUnit(id);
    for (const v of this.projViews.values()) this.scene.remove(v.g);
    this.projViews.clear();
    for (const q of this.parts) { this.scene.remove(q.s); q.s.material.dispose(); }
    this.parts = [];
    for (const n of Object.values(this.nodes)) { n.body.visible = true; n.ruin.visible = false; n.flash = 0; n.body.scale.copy(n.scale); }
    for (const r of this.rings) { this.scene.remove(r.m); r.m.material.dispose(); }
    this.rings = [];
    this.focus = null; this.cam.zoom = 1; this.cam.updateProjectionMatrix();
    this.overlay.querySelectorAll(".float").forEach((d) => d.remove());
  }

  makeProjectile(p) {
    const g = new THREE.Group();
    const col = SIDES[p.side].color;
    if (p.kind === "arrow") {
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.8, 5), new THREE.MeshStandardMaterial({ color: 0x7a5230 }));
      shaft.rotation.z = Math.PI / 2;
      const tip = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.18, 6), new THREE.MeshStandardMaterial({ color: 0xcfd6dc }));
      tip.rotation.z = -Math.PI / 2; tip.position.x = 0.45;
      const fl = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.02), new THREE.MeshStandardMaterial({ color: p.side < 0 ? 0x4fb3ff : 0xff6253 }));
      fl.position.x = -0.36;
      const inner = new THREE.Group(); inner.add(shaft, tip, fl);
      g.add(inner); g.userData.inner = inner;
    } else if (p.kind === "orb") {
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.T_GLOW, color: col, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      glow.scale.setScalar(1.3);
      const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.T_GLOW, color: 0xffffff, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      core.scale.setScalar(0.5);
      g.add(glow, core); g.userData.glow = glow;
    } else {
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 10), new THREE.MeshStandardMaterial({ color: 0x2b2b30, roughness: 0.4, metalness: 0.5 }));
      ball.castShadow = true; g.add(ball);
    }
    g.renderOrder = 6;
    this.scene.add(g);
    return { g, last: null };
  }

  // ---------- 사건 처리 ----------
  handle(events, b) {
    for (const e of events) {
      if (e.type === "spawn") {
        const p = V(e.unit.x, e.unit.y, 0.3);
        this.ring(e.unit.x, e.unit.y, SIDES[e.unit.side].color);
        if (e.unit.side > 0) this.burst(p, 14, { tex: this.T_SMOKE, tint: 0x9dff8a, add: true, speed: 1.4, up: 0.6, life: 0.9, s0: 0.9, s1: 1.8, a0: 0.5 });
        else this.burst(p, 10, { tex: this.T_SMOKE, tint: 0xe8dcc8, speed: 1.8, up: 0.4, life: 0.7, s0: 0.7, s1: 1.5, a0: 0.6 });
        Sound.play("deploy");
      } else if (e.type === "hit") {
        const p = V(e.x, e.y, e.z);
        this.burst(p, e.counter ? 14 : 8, { tint: e.counter ? 0xffb347 : 0xfff1b8, add: true, speed: e.counter ? 6 : 4.5, life: 0.3, s0: 0.45, s1: 0.06 });
        this.text(V(e.x, e.y, e.z + 0.9), e.counter ? e.dmg + "!" : e.dmg, e.counter ? "counter" : "", e.side < 0 ? "#ffe27a" : "#ffb08a");
        Sound.play(e.counter ? "counter" : "hit");
      } else if (e.type === "death") {
        this.burst(V(e.unit.x, e.unit.y, 0.6), 10, { tex: this.T_SMOKE, tint: 0xd9d2c5, speed: 1.5, up: 0.3, life: 1.0, s0: 0.8, s1: 1.7, a0: 0.45 });
      } else if (e.type === "structHit") {
        const c = this.structNode(e.struct); c.shake = 0.18; c.flash = Math.min(1, c.flash + 0.5);
        const p = V(e.x, e.y, e.z);
        this.burst(p, 12, { tint: 0xffd27a, add: true, speed: 5.5, life: 0.35, s0: 0.5, s1: 0.06 });
        this.text(V(e.x, e.y, e.z + 0.5), e.dmg, "", "#ffffff");
        this.shake = Math.max(this.shake, 0.015);
        Sound.play("castle");
      } else if (e.type === "structDown") {
        const st = e.struct, c = this.structNode(st), big = st.kind === "base";
        c.body.visible = false; c.ruin.visible = true;
        const p = V(st.x, st.y, big ? 3 : 2);
        this.burst(p, big ? 40 : 24, { tex: this.T_SMOKE, tint: 0xb8ad9c, speed: big ? 4 : 3, up: 0.8, life: 2.0, s0: 1.4, s1: big ? 3.6 : 2.6, a0: 0.75, spread: big ? 3 : 2 });
        this.burst(p, big ? 30 : 16, { tint: 0xffc06a, add: true, speed: 7, life: 0.6, s0: 0.7, s1: 0.1, spread: 2 });
        this.shake = big ? 0.3 : 0.15;
        Sound.play("cannon");
      } else if (e.type === "launch") {
        this.projViews.set(e.proj.id, this.makeProjectile(e.proj));
        if (e.proj.from && e.proj.from.role === null) // 탑·본성이 쏠 때 불빛
          this.burst(V(e.proj.sx, e.proj.sy, e.proj.sz), 5, { tint: 0xffd890, add: true, speed: 2, life: 0.25, s0: 0.7, s1: 0.1 });
        if (e.proj.kind === "orb") Sound.play("magic");
        else if (e.proj.kind === "arrow") Sound.play("arrow");
      } else if (e.type === "cannon") {
        const p = V(e.proj.sx, e.proj.sy, 7.5);
        this.burst(p, 16, { tex: this.T_SMOKE, tint: 0xcfc6b8, speed: 2.5, up: 0.5, life: 1.0, s0: 0.8, s1: 2.0, a0: 0.7 });
        this.burst(p, 10, { tint: 0xffc06a, add: true, speed: 5, life: 0.3, s0: 0.6, s1: 0.1 });
        Sound.play("cannon");
      } else if (e.type === "land") {
        const p = V(e.proj.x, e.proj.y, e.proj.z);
        if (e.proj.kind === "orb") {
          this.burst(p, 16, { tint: SIDES[e.proj.side].color, add: true, speed: 4.5, life: 0.45, s0: 0.8, s1: 0.1 });
          this.puff({ p, tint: SIDES[e.proj.side].color, add: true, life: 0.3, s0: 1.4, s1: 3.6, a0: 0.8 });
        } else if (e.proj.kind === "ball") {
          this.burst(p, 30, { tint: 0xffb347, add: true, speed: 7, life: 0.5, s0: 0.9, s1: 0.1, spread: 1.5 });
          this.burst(p, 24, { tex: this.T_SMOKE, tint: 0x8d8478, speed: 3, up: 0.6, life: 1.4, s0: 1.2, s1: 2.6, a0: 0.7, spread: 2 });
          this.shake = Math.max(this.shake, 0.15);
          Sound.play("cannon");
        }
      }
    }
  }

  ring(x, y, color) {
    const m = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ map: this.ringTex, color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    m.position.copy(V(x, y, 0.3)); m.renderOrder = 4;
    this.scene.add(m); this.rings.push({ m, t: 0 });
  }
  // 끝날 때 무너진 본성 쪽으로 천천히 다가가기
  focusOn(x, y, z) { this.focus = { x, y, z, t: 0 }; }

  // ---------- 매 프레임 ----------
  update(dt, b) {
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i]; r.t += dt;
      const k = r.t / 0.7;
      if (k >= 1) { this.scene.remove(r.m); r.m.material.dispose(); this.rings.splice(i, 1); continue; }
      r.m.scale.setScalar(0.8 + 2.4 * Math.sqrt(k)); r.m.rotation.y += dt * 2; r.m.material.opacity = 1 - k;
    }
    // 강물 반짝임
    this.glintT -= dt;
    if (RIVER.length > 1 && this.glintT <= 0 && this.fxScale > 0.3) {
      this.glintT = 0.12 / this.fxScale;
      const [a, c] = RIVER, t = Math.random();
      const px = a[0] + (c[0] - a[0]) * t + (Math.random() - 0.5) * 2.4, py = a[1] + (c[1] - a[1]) * t + (Math.random() - 0.5) * 2.4;
      if (Math.abs(px) < BOUNDS[0] && Math.abs(py) < BOUNDS[1]) this.puff({ p: V(px, py, 0.15), tint: 0xdff6ff, add: true, life: 0.7, s0: 0.05, s1: 0.45, a0: 0.8 });
    }
    for (const u of b.units) {
      const v = this.unitView(u);
      this.play(v, u.anim);
      v.mixer.update(dt);
      v.obj.position.copy(V(u.x, u.y, 0));
      // 출전할 때 통통 튀며 나타남(찌그러졌다 펴지기)
      if (v.pop < 0.4) {
        v.pop += dt;
        const k = Math.min(1, v.pop / 0.4), sq = Math.sin(k * Math.PI) * 0.18, s0 = UNIT_SCALE * Math.max(0.05, backOut(k));
        v.obj.scale.set(s0 * (1 + sq), s0 * (1 - sq), s0 * (1 + sq));
      }
      // 가는 방향(공격할 땐 상대 쪽)으로 부드럽게 돌기
      const want = Math.atan2(u.fx, -u.fy);
      let d = want - v.obj.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d));
      v.obj.rotation.y += d * Math.min(1, dt * 10);
      if (u.anim === "walk" && v.actions.walk) v.actions.walk.timeScale = Math.min(1.6, ROLE_INFO[u.role].speed / 1.3);
      v.blob.position.copy(V(u.x, u.y, 0.03));
      let a = 1;
      if (u.state === "spawn" && u.anim === "walk") a = Math.min(1, u.stateT / 0.35);
      if (u.state === "death") a = 1 - Math.max(0, Math.min(1, (u.stateT - b.dur[u.model].death - 0.1) / 1.0));
      for (const m of v.mats) { m.opacity = a; m.emissive.setScalar(u.flash * 0.9); }
      v.blob.material.opacity = a;
      if (u.hp < u.maxHp && u.state !== "death") {
        const s = this.toPx(V(u.x, u.y, 3.9));
        v.bar.style.display = "block";
        v.bar.style.transform = `translate(${s.x}px, ${s.y}px)`;
        v.bar.style.width = Math.max(22, 1.7 / (this.mPerPx || 0.03)) + "px";
        v.bar.firstChild.style.width = (u.hp / u.maxHp * 100) + "%";
      } else v.bar.style.display = "none";
    }
    const alive = new Set(b.units.map((u) => u.id));
    for (const id of [...this.views.keys()]) if (!alive.has(id)) this.removeUnit(id);

    const live = new Set(b.projectiles.map((p) => p.id));
    for (const p of b.projectiles) {
      const v = this.projViews.get(p.id); if (!v) continue;
      const pos = V(p.x, p.y, p.z);
      if (v.g.userData.inner && v.last) {
        const d = pos.clone().sub(v.last);
        if (d.lengthSq() > 1e-6) v.g.userData.inner.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), d.normalize());
      }
      v.last = pos.clone();
      v.g.position.copy(pos);
      if (v.g.userData.glow) {
        v.g.userData.glow.scale.setScalar(1.3 + Math.sin(b.time * 30) * 0.15);
        if (Math.random() < this.fxScale) this.puff({ p: pos.clone(), tint: SIDES[p.side].color, add: true, life: 0.35, s0: 0.5, s1: 0.05, a0: 0.8 });
      } else if (p.kind === "ball" && Math.random() < this.fxScale) {
        this.puff({ p: pos.clone(), tex: this.T_SMOKE, tint: 0x9a9184, life: 0.6, s0: 0.5, s1: 1.1, a0: 0.5 });
      }
    }
    for (const [id, v] of this.projViews) if (!live.has(id)) { this.scene.remove(v.g); this.projViews.delete(id); }

    for (let i = this.parts.length - 1; i >= 0; i--) {
      const q = this.parts[i];
      q.life += dt;
      const k = q.life / q.max;
      if (k >= 1) { this.scene.remove(q.s); q.s.material.dispose(); this.parts.splice(i, 1); continue; }
      q.v.y += q.g * dt; q.v.multiplyScalar(Math.pow(0.12, dt));
      q.s.position.addScaledVector(q.v, dt);
      q.s.scale.setScalar(q.s0 + (q.s1 - q.s0) * k);
      q.s.material.opacity = q.a0 * (1 - k * k);
    }
    for (const c of Object.values(this.nodes)) {
      c.shake = Math.max(0, c.shake - dt); c.flash = Math.max(0, c.flash - dt * 8);
      c.body.position.x = c.base.x + (c.shake > 0 ? (Math.random() - 0.5) * 0.12 : 0);
      const sq = c.shake > 0 ? Math.sin(c.shake / 0.18 * Math.PI) * 0.05 : 0;  // 맞으면 살짝 찌그러짐
      c.body.scale.set(c.scale.x * (1 + sq), c.scale.y * (1 - sq), c.scale.z * (1 + sq));
      for (const m of c.mats) m.emissive.setScalar(c.flash * 0.15);
    }
    // 탑 체력 막대
    for (const st of b.structs || []) {
      if (st.kind !== "tower") continue;
      const c = this.structNode(st);
      if (!c.bar) continue;
      if (!st.alive) { c.bar.style.display = "none"; continue; }
      const s = this.toPx(V(st.x, st.y, TOWER.height + 1.2));
      c.bar.style.display = "block";
      c.bar.style.transform = `translate(${s.x}px, ${s.y}px)`;
      c.bar.firstChild.style.width = (st.hp / st.max * 100) + "%";
    }
    for (const m of this.laneMats || []) m.opacity = 0.55 + Math.sin(performance.now() / 300) * 0.2;
    for (const m of this.clouds) {
      m.position.x += m.speed * dt;
      if (m.position.x > 30) { m.position.x = -30; m.position.z = -(-6 + Math.random() * 22); }
    }
    this.shake = Math.max(0, this.shake - dt * 0.5);
    const base = this.camBase.clone();
    if (this.focus) {
      const f = this.focus; f.t += dt;
      const k = smooth(Math.min(1, f.t / 2.2)) * 0.55;
      const u = f.y * Math.sin(ELEV) + f.z * Math.cos(ELEV);
      base.addScaledVector(new THREE.Vector3(1, 0, 0), f.x * k).addScaledVector(this.cam.up, u * k);
      this.cam.zoom = 1 + k * 0.7; this.cam.updateProjectionMatrix();
    }
    this.cam.position.copy(base).add(new THREE.Vector3((Math.random() - 0.5) * this.shake * 2, (Math.random() - 0.5) * this.shake * 2, 0));
  }

  render() {
    const r = this.renderer, W = window.innerWidth, H = window.innerHeight, v = this.view;
    r.setScissorTest(true);
    r.setViewport(0, 0, W, H); r.setScissor(0, 0, W, H); r.clear();
    const y = H - v.y - v.h; // three는 아래쪽이 0
    r.setViewport(v.x, y, v.w, v.h); r.setScissor(v.x, y, v.w, v.h);
    r.render(this.scene, this.cam);
  }
}

export { ROLE_INFO };
