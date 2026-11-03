// 전장 그리기(three.js 실시간 3D). 전투 규칙(battle.js)의 상태를 받아 그림·효과·소리로 보여 줌.
import * as THREE from "three";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";
import { ELEV, VIEW_WIDTH, VIEW_TARGET, LANE, UNIT_SCALE, SIDES, ROLE_INFO } from "./config.js";
import { Sound } from "./sound.js";

const FACE = 65 * Math.PI / 180;
// 블렌더 좌표(x 오른쪽, y 뒤쪽, z 위) → three 좌표
const V = (x, y, z) => new THREE.Vector3(x, z, -y);

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
    const target = V(VIEW_TARGET.x, VIEW_TARGET.y, VIEW_TARGET.z);
    const dir = V(0, Math.cos(ELEV), -Math.sin(ELEV));
    this.cam.position.copy(target).addScaledVector(dir, -120);
    this.cam.up.copy(V(0, Math.sin(ELEV), Math.cos(ELEV)));
    this.cam.lookAt(target);
    this.camBase = this.cam.position.clone();

    const sun = this.sun = new THREE.DirectionalLight(0xfff8ee, 3.4);
    sun.position.copy(target).addScaledVector(V(0.485, 0.621, -0.616).normalize(), -40);
    sun.target.position.copy(target);
    Object.assign(sun.shadow.camera, { left: -22, right: 22, top: 20, bottom: -20, near: 1, far: 100 });
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
    this.castles = {};
    for (const side of [-1, 1]) {
      const col = side < 0 ? "blue" : "red";
      const body = field.getObjectByName("castle_" + col), ruin = field.getObjectByName("ruin_" + col);
      ruin.visible = false;
      const mats = [];
      body.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); mats.push(o.material); } });
      this.castles[side] = { body, ruin, mats, base: body.position.clone(), shake: 0, flash: 0 };
    }

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

  setViewport(rect) { this.view = rect; this.resize(); }
  resize() {
    const W = window.innerWidth, H = window.innerHeight;
    this.renderer.setSize(W, H);
    const halfW = VIEW_WIDTH / 2, halfH = halfW * this.view.h / Math.max(1, this.view.w);
    Object.assign(this.cam, { left: -halfW, right: halfW, top: halfH, bottom: -halfH });
    this.cam.updateProjectionMatrix();
  }

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
    d.style.fontSize = Math.max(13, this.view.w / 2880 * 54 * (cls === "counter" ? 1.15 : 1)) + "px";
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
    obj.rotation.y = FACE * (u.side < 0 ? 1 : -1);
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
    v = { obj, mixer, actions, mats, anim: null, bar, blob };
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
    for (const s of [-1, 1]) { this.castles[s].body.visible = true; this.castles[s].ruin.visible = false; }
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
      } else if (e.type === "castleHit") {
        const c = this.castles[e.side]; c.shake = 0.18; c.flash = Math.min(1, c.flash + 0.5);
        const p = V(e.x, e.y, e.z);
        this.burst(p, 12, { tint: 0xffd27a, add: true, speed: 5.5, life: 0.35, s0: 0.5, s1: 0.06 });
        this.text(V(e.x, e.y, e.z + 0.5), e.dmg, "", "#ffffff");
        this.shake = Math.max(this.shake, 0.05);
        Sound.play("castle");
      } else if (e.type === "end" && e.winner) {
        const lose = -e.winner, c = this.castles[lose];
        if (b.sides[lose].castle <= 0) {
          c.body.visible = false; c.ruin.visible = true;
          const p = V(lose * LANE.castleX, 0.9, 3);
          this.burst(p, 40, { tex: this.T_SMOKE, tint: 0xb8ad9c, speed: 4, up: 0.8, life: 2.2, s0: 1.6, s1: 3.6, a0: 0.75, spread: 3 });
          this.burst(p, 30, { tint: 0xffc06a, add: true, speed: 8, life: 0.7, s0: 0.7, s1: 0.1, spread: 2.5 });
          this.shake = 0.25;
        }
      } else if (e.type === "launch") {
        this.projViews.set(e.proj.id, this.makeProjectile(e.proj));
        if (e.proj.kind === "orb") Sound.play("magic");
        else if (e.proj.kind === "arrow") Sound.play("arrow");
      } else if (e.type === "cannon") {
        const p = V(e.side * LANE.castleX, 0.9, 7.5);
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

  // ---------- 매 프레임 ----------
  update(dt, b) {
    for (const u of b.units) {
      const v = this.unitView(u);
      this.play(v, u.anim);
      v.mixer.update(dt);
      v.obj.position.copy(V(u.x, u.y, 0));
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
        v.bar.style.width = Math.max(26, this.view.w / 2880 * 90) + "px";
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
    for (const s of [-1, 1]) {
      const c = this.castles[s];
      c.shake = Math.max(0, c.shake - dt); c.flash = Math.max(0, c.flash - dt * 8);
      c.body.position.x = c.base.x + (c.shake > 0 ? (Math.random() - 0.5) * 0.12 : 0);
      for (const m of c.mats) m.emissive.setScalar(c.flash * 0.15);
    }
    for (const m of this.clouds) {
      m.position.x += m.speed * dt;
      if (m.position.x > 30) { m.position.x = -30; m.position.z = -(-6 + Math.random() * 22); }
    }
    this.shake = Math.max(0, this.shake - dt * 0.5);
    this.cam.position.copy(this.camBase).add(new THREE.Vector3((Math.random() - 0.5) * this.shake * 2, (Math.random() - 0.5) * this.shake * 2, 0));
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
