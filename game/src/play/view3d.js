// 전장 그리기(three.js 실시간 3D). 전투 규칙(battle.js)의 상태를 받아 그림·효과·소리로 보여 줌.
import * as THREE from "three";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";
import { HEROES, ELEV, UNIT_SCALE, SIDES, ROLE_INFO, SPECIAL, TOWER, BASE } from "./config.js";
import { LANES, LANE_NAMES, BOUNDS, BASES, RIVER, MOOD, SCENE } from "./lanes.js";
import { World } from "./world3d.js";
import { Sound } from "./sound.js";

// 11-07 질감: 단색 풀밭·흙길에 넓은 얼룩과 잔 무늬(월드 좌표 잡음)로 손그림 같은 결을 줌. 길은 더 진하게
const GRAIN = `
  float gHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float gNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(gHash(i), gHash(i + vec2(1, 0)), f.x), mix(gHash(i + vec2(0, 1)), gHash(i + vec2(1, 1)), f.x), f.y); }`;
function addGrain(m, amt) {
  if (m.userData.grain) return; m.userData.grain = true;
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vGW;")
      .replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\nvGW = (modelMatrix * vec4(transformed, 1.0)).xyz;");
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec3 vGW;" + GRAIN)
      .replace("#include <color_fragment>", `#include <color_fragment>
        float gBig = gNoise(vGW.xz * 0.09), gMid = gNoise(vGW.xz * 0.5 + 7.0), gFine = gHash(floor(vGW.xz * 6.0));
        diffuseColor.rgb *= 1.0 + ${amt.toFixed(3)} * ((gBig - 0.5) * 1.6 + (gMid - 0.5) * 0.7 + (gFine - 0.5) * 0.35);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.08, 1.04, 0.86), smoothstep(0.62, 0.8, gBig) * ${amt.toFixed(3)} * 2.5);`);
  };
  m.customProgramCacheKey = () => "grain" + amt;
  m.needsUpdate = true;
}
// 풀포기·들꽃·갈대가 바람에 흔들림(높이에 비례, 자리마다 다른 박자)
const WIND = { value: 0 };
function addSway(m) {
  if (m.userData.sway) return; m.userData.sway = true;
  m.side = THREE.DoubleSide;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uWind = WIND;
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nuniform float uWind;")
      .replace("#include <begin_vertex>", `#include <begin_vertex>
        float ph = 0.0;
        #ifdef USE_INSTANCING
          ph = instanceMatrix[3].x * 0.6 + instanceMatrix[3].z * 0.45;
        #endif
        float hh = max(transformed.y, 0.0);
        transformed.x += sin(uWind * 1.6 + ph) * hh * 0.22;
        transformed.z += cos(uWind * 1.1 + ph * 1.3) * hh * 0.12;`);
  };
  m.customProgramCacheKey = () => "sway";
  m.needsUpdate = true;
}
// 병사 테두리 빛: 진영 색 가장자리 빛(프레넬)으로 배경에서 또렷하게
function addRim(m, color) {
  m.userData.rim = { value: new THREE.Color(color) };
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uRim = m.userData.rim;
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nuniform vec3 uRim;")
      .replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
        vec3 rimV = isOrthographic ? vec3(0.0, 0.0, 1.0) : normalize(vViewPosition);
        totalEmissiveRadiance += uRim * pow(1.0 - clamp(dot(normal, rimV), 0.0, 1.0), 3.4) * 0.5;`);
  };
  m.customProgramCacheKey = () => "rim";
}

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
    this.hemi = new THREE.HemisphereLight(0xa8c4f0, 0x5a6b3a, 1.25);
    scene.add(sun, sun.target, this.hemi);
    this.nodes = {};
    this.laneMarks = { [-1]: {}, [1]: {} };
    this.setField(models.field);

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
    // 병사 발밑 팀 색 고리(11-05): 화질과 상관없이 늘 보여서 어느 편인지 한눈에
    this.T_TEAM = (() => {
      const c = document.createElement("canvas"); c.width = c.height = 64;
      const g = c.getContext("2d"), gr = g.createRadialGradient(32, 32, 14, 32, 32, 31);
      gr.addColorStop(0, "rgba(255,255,255,0)"); gr.addColorStop(0.55, "rgba(255,255,255,0.25)"); gr.addColorStop(0.8, "rgba(255,255,255,0.95)"); gr.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
      const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
    })();
    this.teamMat = { [-1]: new THREE.MeshBasicMaterial({ map: this.T_TEAM, color: 0x5cc4ff, transparent: true, opacity: 0.7, depthWrite: false }),
      [1]: new THREE.MeshBasicMaterial({ map: this.T_TEAM, color: 0xc4bce8, transparent: true, opacity: 0.6, depthWrite: false }) };

    this.parts = [];
    this.rings = [];
    this.wisps = [];   // 해골이 남기는 기억의 빛
    this.T_WISP = radialTex([[0, "rgba(255,255,255,1)"], [0.2, "rgba(190,255,248,0.9)"], [0.5, "rgba(70,224,207,0.35)"], [1, "rgba(70,224,207,0)"]]);
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
    // 기기에서 "동작 줄이기"를 켠 학생은 화면 흔들림 없이(11-07 검토)
    this.calm = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.view = { x: 0, y: 0, w: 1, h: 1 };
    this.applyQuality();
  }

  // ---------- 전장 바꿔 끼우기(지도마다 모형이 다름) ----------
  // 지도(useMap)를 먼저 바꾼 뒤 부름. 본성·탑을 이름으로 찾아 묶고, 고른 길 표시와 빛·안개를 새 지도에 맞춤
  setField(model) {
    const scene = this.scene;
    if (this.field) scene.remove(this.field);
    for (const n of Object.values(this.nodes)) if (n.bar) n.bar.remove();
    for (const side of [-1, 1]) for (const m of Object.values(this.laneMarks[side] || {})) { scene.remove(m); m.geometry.dispose(); }
    const field = this.field = model.scene;
    if (!field.userData.ready) {
      field.userData.ready = true;
      field.traverse((o) => {
        if (!o.isMesh) return;
        o.castShadow = true; o.receiveShadow = true;
        for (const m of [].concat(o.material)) {
          if (m.name === "Dirt") m.color.setRGB(0.5, 0.33, 0.19);
          if (/^(River|Ice|Sea)/.test(m.name) || /^cloud/.test(o.name)) continue;
          if (/^(Tuft|Flower|Reed)/.test(m.name)) { addSway(m); o.castShadow = false; continue; }
          addGrain(m, /^(Dirt|Road)/.test(m.name) ? 0.16 : /^Sand/.test(m.name) ? 0.08 : 0.07);
        }
      });
    }
    scene.add(field);
    this.world = this.world || new World(this.scene, this);
    this.world.build(field);
    // 본성·탑(무너지면 폐허로 바꿔 끼움)
    this.nodes = {};
    for (const side of [-1, 1]) {
      const col = side < 0 ? "blue" : "red";
      for (const name of ["base_" + col, ...LANE_NAMES.map((n) => `tower_${col}_${n}`)]) {
        const body = field.getObjectByName(name), ruin = field.getObjectByName("ruin_" + name);
        ruin.visible = false;
        const mats = [];
        body.traverse((o) => { if (o.isMesh) { if (!o.userData.own) { o.material = o.material.clone(); o.userData.own = true; } mats.push(o.material); } });
        let bar = null;
        if (name.startsWith("tower")) {
          bar = document.createElement("div"); bar.className = "tbar " + (side < 0 ? "b" : "r"); bar.innerHTML = "<i></i>";
          this.overlay.appendChild(bar);
        }
        if (!body.userData.base) { body.userData.base = body.position.clone(); body.userData.scale = body.scale.clone(); }
        this.nodes[name] = { body, ruin, mats, base: body.userData.base, scale: body.userData.scale, shake: 0, flash: 0, bar };
      }
    }
    if (this.laneMats) for (const m of this.laneMats) m.dispose();
    this.laneMarks = this.makeLaneMarks();
    this.setMood(MOOD);
    if (this.view) this.resize();
  }
  // 지도 분위기: 햇빛 색·세기, 하늘빛, 바탕색, 안개(없으면 기본값)
  setMood(m = {}) {
    const c = (a, d) => (a ? new THREE.Color(a[0], a[1], a[2]) : new THREE.Color(d));
    this.sun.color.copy(c(m.sun, 0xfff8ee)); this.sun.intensity = m.sunI ?? 3.4;
    this.hemi.color.copy(c(m.hemiSky, 0xa8c4f0)); this.hemi.intensity = m.hemiI ?? 1.25;
    this.renderer.setClearColor(new THREE.Color(m.bg || "#0d1712"));
    this.scene.fog = m.fog ? new THREE.Fog(new THREE.Color(m.fog), m.fogNear ?? 100, m.fogFar ?? 180) : null;
    if (this.world) this.world.setMood(m);
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
    if (this.world) this.world.setQuality(P);
    for (const v of this.views.values()) v.blob.visible = P.blob;
    this.fxScale = P.fx;
    this.cap = P.cap;
    this.resize();
  }

  // rect: 그리는 칸(이제 화면 전체), topPad·bottomPad: 지도를 맞춰 넣을 때 피할 위·아래 띠(정보 띠·반투명 조작판)
  setViewport(rect, topPad = 0, bottomPad = 0) { this.view = rect; this.topPad = topPad; this.bottomPad = bottomPad; this.resize(); }
  // 지도 전체(섬 + 본성·탑 꼭대기)가 화면 칸에 다 들어가게 맞춤
  resize() {
    const W = window.innerWidth, H = window.innerHeight;
    this.renderer.setSize(W, H);
    const [bx, by] = BOUNDS, sn = Math.sin(ELEV), cs = Math.cos(ELEV);
    const pts = [[-bx - 1, -by - 1.5, 0], [bx + 1, -by - 1.5, 0], [-bx - 1, by + 1, 0], [bx + 1, by + 1, 0],
      [BASES[1][0], BASES[1][1], BASE.height + 2.5], [BASES[-1][0], BASES[-1][1], BASE.height + 2]];
    let x0 = 1e9, x1 = -1e9, u0 = 1e9, u1 = -1e9;
    for (const [x, y, z] of pts) { const u = y * sn + z * cs; x0 = Math.min(x0, x); x1 = Math.max(x1, x); u0 = Math.min(u0, u); u1 = Math.max(u1, u); }
    const bp = this.bottomPad || 0;
    const vw = Math.max(1, this.view.w), vh = Math.max(1, this.view.h - (this.topPad || 0) - bp);
    const k = Math.max((x1 - x0) / vw, (u1 - u0) / vh);       // 1px당 m
    const cx = (x0 + x1) / 2, cu = (u0 + u1) / 2;
    // 지도(길·탑·본성)는 위 정보 띠와 아래 조작판 사이 칸 가운데에. 섬 가장자리·숲은 조작판 밑으로 이어짐
    const bottom = cu - (bp + vh / 2) * k;
    Object.assign(this.cam, { left: cx - vw * k / 2, right: cx + vw * k / 2, bottom, top: bottom + this.view.h * k });
    this.cam.updateProjectionMatrix();
    this.mPerPx = k;
  }

  // 고른 길 표시(11-05 개편): 내 본성에서 적 본성까지 길 전체에 화살표가 흘러감(기사단 금빛, 해골 군단 연보랏빛)
  makeLaneMarks() {
    const marks = { [-1]: {}, [1]: {} };
    this.laneMats = [];
    if (!this.T_CHEV) {
      // 11-07: 크고 굵은 노란 화살표 → 가는 빛줄기 위로 작은 빛 화살촉이 흐르는 모양(덜 요란하고 또렷하게)
      const c = document.createElement("canvas"); c.width = 128; c.height = 64;
      const g = c.getContext("2d");
      const band = g.createLinearGradient(0, 0, 0, 64);
      band.addColorStop(0, "rgba(255,255,255,0)"); band.addColorStop(0.38, "rgba(255,255,255,0.3)"); band.addColorStop(0.5, "rgba(255,255,255,0.75)");
      band.addColorStop(0.62, "rgba(255,255,255,0.3)"); band.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = band; g.fillRect(0, 0, 128, 64);
      g.shadowColor = "rgba(255,255,255,0.9)"; g.shadowBlur = 6; g.fillStyle = "#fff";
      g.beginPath(); g.moveTo(40, 18); g.lineTo(62, 32); g.lineTo(40, 46); g.lineTo(46, 32); g.closePath(); g.fill();
      const t = new THREE.CanvasTexture(c); t.wrapS = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
      this.T_CHEV = t;
    }
    for (const side of [-1, 1]) {
      const mat = new THREE.MeshBasicMaterial({ map: this.T_CHEV, color: side < 0 ? 0xffd88a : 0xd9cffc, transparent: true, opacity: 1, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
      this.laneMats.push(mat);
      for (const n of LANE_NAMES) {
        const L = LANES[n], pos = [], uv = [], idx = [];
        const step = 0.5, w = 0.8, steps = Math.max(2, Math.ceil(L.length / step));
        for (let i = 0; i <= steps; i++) {
          const d = (L.length * i) / steps, sAt = side < 0 ? d : L.length - d;
          const p = L.at(sAt);
          const a = V(p.x - p.dy * w, p.y + p.dx * w, 0.22), b = V(p.x + p.dy * w, p.y - p.dx * w, 0.22);
          pos.push(a.x, a.y, a.z, b.x, b.y, b.z);
          const u = d / 3.2; uv.push(u, 0, u, 1);
          if (i) { const j = i * 2; idx.push(j - 2, j - 1, j, j - 1, j + 1, j); }
        }
        const g = new THREE.BufferGeometry();
        g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
        const m = new THREE.Mesh(g, mat); m.renderOrder = 3; m.visible = false;
        this.scene.add(m); marks[side][n] = m;
      }
    }
    return marks;
  }
  // 섬 밖 넓은 바다를 육각 물 타일로 채우고, 먼 곳에 작은 섬을 띄움(11-05: PC 넓은 화면에서 위쪽이 빈 하늘색으로 보이던 것)
  // 화면을 누른 곳 → 땅 위 좌표(블렌더 좌표 x, y)
  pickGround(cx, cy) {
    const r = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    const ray = new THREE.Raycaster(); ray.setFromCamera(ndc, this.cam);
    const hit = new THREE.Vector3();
    if (!ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hit)) return null;
    return { x: hit.x, y: -hit.z };
  }
  setLane(n, side = -1) { for (const k in this.laneMarks[side]) this.laneMarks[side][k].visible = k === n; }

  structNode(st) { return this.nodes[(st.kind === "base" ? "base_" : "tower_") + (st.side < 0 ? "blue" : "red") + (st.kind === "tower" ? "_" + st.lane : "")]; }

  toPx(p) {
    const v = p.clone().project(this.cam), x = this.view.x + (v.x + 1) / 2 * this.view.w;
    return { x, y: this.view.y + (1 - v.y) / 2 * this.view.h };
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
    // 11-07: 숫자가 겹겹이 쌓여 지저분하던 것 — 화면에 많으면 보통 피해는 생략(상성·건물 피해는 늘 보임)
    this.floatN = this.floatN || 0;
    if (!cls && this.floatN > 10 && Math.random() < 0.75) return;
    const s = this.toPx(p), d = document.createElement("div");
    d.className = "float " + (cls || ""); d.textContent = str;
    if (color) d.style.color = color;
    d.style.left = s.x + (Math.random() - 0.5) * 12 + "px"; d.style.top = s.y + "px";
    d.style.fontSize = Math.max(12, 0.62 / (this.mPerPx || 0.03) * (cls === "counter" ? 1.15 : 1)) + "px";
    this.overlay.appendChild(d);
    this.floatN++; setTimeout(() => { d.remove(); this.floatN--; }, cls === "counter" ? 1150 : 950);
  }

  // ---------- 유닛 ----------
  unitView(u) {
    let v = this.views.get(u.id);
    if (v) return v;
    const src = this.models[u.model];
    const obj = SkeletonUtils.clone(src.scene);
    const sc = UNIT_SCALE * (u.scale || 1);
    obj.scale.setScalar(sc);
    obj.rotation.y = Math.atan2(u.fx, -u.fy);
    const mats = [];
    obj.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true; o.material = o.material.clone(); o.material.transparent = true; if (u.tint) o.material.color.multiply(new THREE.Color(u.tint));
        addRim(o.material, u.side < 0 ? 0x4fb8ff : 0xd07bff); mats.push(o.material);
      }
    });
    this.scene.add(obj);
    const mixer = new THREE.AnimationMixer(obj);
    const actions = {};
    for (const clip of src.animations) actions[clip.name] = mixer.clipAction(clip);
    const blob = new THREE.Mesh(this.blobGeo, this.blobMat.clone());
    blob.scale.set(1.6 * (u.scale || 1), 1, 1.0 * (u.scale || 1)); blob.visible = this.quality.preset.blob; blob.renderOrder = 1;
    this.scene.add(blob);
    const bar = document.createElement("div"); bar.className = "bar " + (u.side < 0 ? "b" : "r") + (u.special ? " big" : ""); bar.innerHTML = "<i></i>";
    this.overlay.appendChild(bar);
    const team = new THREE.Mesh(this.blobGeo, this.teamMat[u.side]);
    team.scale.set(1.3 * (u.scale || 1), 1, 1.3 * (u.scale || 1)); team.renderOrder = 1;
    this.scene.add(team);
    v = { obj, mixer, actions, mats, anim: null, bar, blob, team, pop: 0, sc };
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
  // ---------- 영웅(원정): 우리 본성 곁에 크게 서 있다가 기술을 쓰면 공격 동작 ----------
  setHero(key) {
    if (this.hero) { this.scene.remove(this.hero.obj, this.hero.ring); this.hero.ring.material.dispose(); this.hero = null; }
    const H = key && HEROES[key], src = H && this.models[H.model];
    if (!src) return;
    const obj = SkeletonUtils.clone(src.scene), sc = UNIT_SCALE * 1.5;
    obj.scale.setScalar(sc);
    obj.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    // 본성에서 지도 가운데 쪽으로 조금, 옆으로 조금 비켜 섬(길 출발점과 겹치지 않게)
    const [bx, by] = BASES[-1], dl = Math.hypot(bx, by) || 1, dx = -bx / dl, dy = -by / dl;
    const x = bx + dx * 3.4 - dy * 3.0, y = by + dy * 3.4 + dx * 3.0;
    obj.position.copy(V(x, y, 0)); obj.rotation.y = Math.atan2(dx, -dy);
    const ring = new THREE.Mesh(this.blobGeo, new THREE.MeshBasicMaterial({ map: this.T_TEAM, color: 0xf3d38a, transparent: true, depthWrite: false }));
    ring.scale.set(2.2, 1, 2.2); ring.position.copy(V(x, y, 0.06)); ring.renderOrder = 1;
    this.scene.add(obj, ring);
    const mixer = new THREE.AnimationMixer(obj), actions = {};
    for (const clip of src.animations) actions[clip.name] = mixer.clipAction(clip);
    this.hero = { key, obj, ring, mixer, actions, x, y, anim: null, busy: 0 };
    this.heroPose("cheer");
  }
  heroPose(name) {
    const h = this.hero, a = h && h.actions[name]; if (!a || h.anim === name) return;
    a.reset(); a.setLoop(THREE.LoopRepeat); a.timeScale = name === "cheer" ? 0.35 : 1.1; // 기다릴 땐 천천히 들썩, 기술 땐 힘차게
    if (h.anim && h.actions[h.anim]) a.crossFadeFrom(h.actions[h.anim], 0.15, false);
    a.play(); h.anim = name;
  }
  removeUnit(id) {
    const v = this.views.get(id); if (!v) return;
    this.scene.remove(v.obj, v.blob, v.team); v.blob.material.dispose(); for (const m of v.mats) m.dispose(); v.bar.remove(); this.views.delete(id);
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
    for (const w of this.wisps) { this.scene.remove(w.s); w.s.material.dispose(); }
    this.wisps = [];
    this.focus = null; this.cam.zoom = 1; this.cam.updateProjectionMatrix();
    this.overlay.querySelectorAll(".float").forEach((d) => d.remove());
  }

  // 투사체 모양·재질은 한 번만 만들어 함께 씀(11-07 검토: 발사마다 새로 만들고 버리지 않아 GPU 자원이 쌓이던 것)
  projRes() {
    if (this.pr) return this.pr;
    const std = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, ...o });
    const glow = (c) => new THREE.SpriteMaterial({ map: this.T_GLOW, color: c, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
    this.pr = {
      shaftG: new THREE.CylinderGeometry(0.03, 0.03, 0.8, 5), shaftM: std(0x7a5230),
      tipG: new THREE.ConeGeometry(0.07, 0.18, 6), tipM: std(0xcfd6dc),
      flagG: new THREE.BoxGeometry(0.16, 0.12, 0.02), flagM: { [-1]: std(0x4fb3ff), [1]: std(0xff6253) },
      glowM: { [-1]: glow(SIDES[-1].color), [1]: glow(SIDES[1].color), big: glow(0x46e0cf) }, coreM: glow(0xffffff),
      ballG: new THREE.SphereGeometry(0.45, 12, 10), ballM: std(0x2b2b30, { roughness: 0.4, metalness: 0.5 }),
    };
    return this.pr;
  }
  makeProjectile(p) {
    const g = new THREE.Group(), R = this.projRes();
    if (p.kind === "arrow") {
      const shaft = new THREE.Mesh(R.shaftG, R.shaftM);
      shaft.rotation.z = Math.PI / 2;
      const tip = new THREE.Mesh(R.tipG, R.tipM);
      tip.rotation.z = -Math.PI / 2; tip.position.x = 0.45;
      const fl = new THREE.Mesh(R.flagG, R.flagM[p.side < 0 ? -1 : 1]);
      fl.position.x = -0.36;
      const inner = new THREE.Group(); inner.add(shaft, tip, fl);
      g.add(inner); g.userData.inner = inner;
    } else if (p.kind === "orb") {
      const glow = new THREE.Sprite(p.big ? R.glowM.big : R.glowM[p.side < 0 ? -1 : 1]);
      glow.scale.setScalar(1.3);
      if (p.big) g.scale.setScalar(2.4);
      const core = new THREE.Sprite(R.coreM);
      core.scale.setScalar(0.5);
      g.add(glow, core); g.userData.glow = glow;
    } else {
      const ball = new THREE.Mesh(R.ballG, R.ballM);
      ball.castShadow = true; g.add(ball);
    }
    g.renderOrder = 6;
    this.scene.add(g);
    return { g, last: null };
  }

  // ---------- 사건 처리 ----------
  handle(events, b) {
    for (const e of events) {
      if (e.type === "answer" && e.right && b && b.sides) {
        // 정답: 그 편 본성의 깨침돌에서 청록 빛이 솟음(문제를 풀면 깨침돌이 빛난다는 이야기와 맞춤)
        const base = b.sides[e.side].base, top = V(base.x, base.y, BASE.height + 0.6);
        this.puff({ p: top, tint: 0x46e0cf, add: true, life: 0.7, s0: 1.2, s1: 3.2, a0: 0.9 });
        this.burst(top, 6, { tint: 0x9ffff3, add: true, speed: 1.6, up: 1.2, life: 0.8, s0: 0.35, s1: 0.05 });
      } else if (e.type === "spawn") {
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
        // 이야기: 해골은 무너지면 잃었던 기억이 빛이 되어 날아오르고 편히 쉼 → 청록 빛 덩이가 천천히 솟음
        if (/^skel/.test(e.unit.model)) this.wisps.push({ x: e.unit.x, y: e.unit.y, t: 0, ph: Math.random() * 6.28, s: this.addWisp() });
        else this.burst(V(e.unit.x, e.unit.y, 1.4), 6, { tint: 0xfff1b8, add: true, speed: 1.2, up: 1.5, life: 0.8, s0: 0.35, s1: 0.05 });
      } else if (e.type === "structHit") {
        const c = this.structNode(e.struct); if (c) { c.shake = 0.18; c.flash = Math.min(1, c.flash + 0.5); }
        const p = V(e.x, e.y, e.z);
        this.burst(p, 12, { tint: 0xffd27a, add: true, speed: 5.5, life: 0.35, s0: 0.5, s1: 0.06 });
        this.text(V(e.x, e.y, e.z + 0.5), e.dmg, "", "#ffffff");
        this.shake = Math.max(this.shake, 0.015);
        Sound.play("castle");
      } else if (e.type === "structDown") {
        const st = e.struct, c = this.structNode(st), big = st.kind === "base";
        if (c) { c.body.visible = false; c.ruin.visible = true; }
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
      } else if (e.type === "skill") {
        if (this.hero && e.side < 0) {
          this.hero.busy = 1.4; this.heroPose("attack");
          const hp = V(this.hero.x, this.hero.y, 2.2);
          this.burst(hp, 20, { tint: 0xf3d38a, add: true, speed: 4, up: 2.5, life: 0.7, s0: 0.6, s1: 0.08 });
          this.ring(this.hero.x, this.hero.y, 0xf3d38a);
        }
        // 영웅 기술: 우리 병사마다 빛 고리(방패 함성 청록, 돌격 함성 금빛), 화살비·깨침돌 폭발은 날아가는 것으로 보여 줌
        const tint = e.kind === "guard" ? 0x46e0cf : e.kind === "rally" ? 0xffc65a : e.kind === "blast" ? 0x46e0cf : 0xfff1b8;
        const base = b && b.sides[e.side].base;
        if (base) { const p = V(base.x, base.y, 6.5); this.puff({ p, tint, add: true, life: 0.9, s0: 1.5, s1: 6, a0: 0.9 }); this.burst(p, 18, { tint, add: true, speed: 5, up: 2, life: 0.8, s0: 0.6, s1: 0.08 }); }
        if (e.kind === "guard" || e.kind === "rally") for (const u of (b ? b.units : [])) {
          if (u.side !== e.side || u.state === "death") continue;
          this.ring(u.x, u.y, tint);
          this.burst(V(u.x, u.y, 1.2), 6, { tint, add: true, speed: 2, up: 2.2, life: 0.7, s0: 0.4, s1: 0.06 });
        }
      } else if (e.type === "cannon") {
        const p = V(e.proj.sx, e.proj.sy, 7.5);
        this.burst(p, 16, { tex: this.T_SMOKE, tint: 0xcfc6b8, speed: 2.5, up: 0.5, life: 1.0, s0: 0.8, s1: 2.0, a0: 0.7 });
        this.burst(p, 10, { tint: 0xffc06a, add: true, speed: 5, life: 0.3, s0: 0.6, s1: 0.1 });
        Sound.play("cannon");
      } else if (e.type === "land") {
        const p = V(e.proj.x, e.proj.y, e.proj.z);
        if (e.proj.kind === "orb" && e.proj.big) {
          this.burst(p, 40, { tint: 0x46e0cf, add: true, speed: 8, life: 0.6, s0: 1.0, s1: 0.1, spread: 1.5 });
          this.puff({ p, tint: 0x9ffff3, add: true, life: 0.6, s0: 2, s1: 8, a0: 0.9 });
          this.shake = Math.max(this.shake, 0.2); Sound.play("cannon");
        } else if (e.proj.kind === "orb") {
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

  addWisp() {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.T_WISP, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    s.renderOrder = 7; this.scene.add(s); return s;
  }
  ring(x, y, color) {
    const m = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ map: this.ringTex, color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    m.position.copy(V(x, y, 0.3)); m.renderOrder = 4;
    this.scene.add(m); this.rings.push({ m, t: 0 });
  }
  // 끝날 때 무너진 본성 쪽으로 천천히 다가가기
  focusOn(x, y, z) { this.focus = { x, y, z, t: 0 }; }
  intro() { this.introAt = performance.now(); this.introT = 2.8; }

  // ---------- 매 프레임 ----------
  update(dt, b) {
    if (this.world) this.world.update(dt);
    WIND.value += dt;
    if (this.T_CHEV) this.T_CHEV.offset.x -= dt * 0.9; // 고른 길 화살표가 적 쪽으로 흐름
    for (let i = this.wisps.length - 1; i >= 0; i--) {
      const w = this.wisps[i]; w.t += dt;
      const k = w.t / 2.2;
      if (k >= 1) { this.scene.remove(w.s); w.s.material.dispose(); this.wisps.splice(i, 1); continue; }
      w.s.position.copy(V(w.x + Math.sin(w.ph + w.t * 3) * 0.35 * k, w.y + Math.cos(w.ph + w.t * 3) * 0.25 * k, 1.2 + k * 5.5));
      w.s.scale.setScalar(0.9 + Math.sin(w.t * 9) * 0.12 + (k < 0.15 ? k * 6 : 0));
      w.s.material.opacity = k < 0.15 ? k / 0.15 : 1 - (k - 0.15) / 0.85;
    }
    // 무너져 가는 건물: 체력 60% 아래 연기, 30% 아래 불길(본성·탑이 위험한 게 멀리서도 보이게)
    this.burnT = (this.burnT || 0) - dt;
    if (b && b.structs && this.burnT <= 0 && this.fxScale > 0.2) {
      this.burnT = 0.16 / this.fxScale;
      for (const st of b.structs) {
        if (!st.alive) continue;
        const r = st.hp / st.max; if (r > 0.6) continue;
        const h = (st.kind === "base" ? BASE.height : TOWER.height) * 0.85;
        const p = V(st.x + (Math.random() - 0.5) * 1.2, st.y + (Math.random() - 0.5) * 0.8, h);
        this.puff({ p, tex: this.T_SMOKE, tint: r < 0.3 ? 0x4a4440 : 0x8d8780, life: 1.8, s0: 0.8, s1: 2.6, a0: 0.55, v: new THREE.Vector3(0.25, 1.6, 0) });
        if (r < 0.3) this.puff({ p: p.clone().add(new THREE.Vector3(0, -0.6, 0)), tint: Math.random() < 0.5 ? 0xff8a2a : 0xffc24a, add: true, life: 0.5, s0: 0.9, s1: 0.2, a0: 0.9, v: new THREE.Vector3(0, 1.8, 0) });
      }
    }
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
        const k = Math.min(1, v.pop / 0.4), sq = Math.sin(k * Math.PI) * 0.18, s0 = v.sc * Math.max(0.05, backOut(k));
        v.obj.scale.set(s0 * (1 + sq), s0 * (1 - sq), s0 * (1 + sq));
      }
      // 가는 방향(공격할 땐 상대 쪽)으로 부드럽게 돌기
      const want = Math.atan2(u.fx, -u.fy);
      let d = want - v.obj.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d));
      v.obj.rotation.y += d * Math.min(1, dt * 10);
      if (u.anim === "walk" && v.actions.walk) v.actions.walk.timeScale = Math.min(1.6, (ROLE_INFO[u.role] || SPECIAL[u.role]).speed / 1.3);
      else if (u.anim === "attack" && v.actions.attack) { const R = ROLE_INFO[u.role]; if (R && R.atk) v.actions.attack.timeScale = v.actions.attack.getClip().duration / R.atk; } // 규칙의 공격 주기에 동작을 맞춤
      v.blob.position.copy(V(u.x, u.y, 0.03));
      v.team.position.copy(V(u.x, u.y, 0.05)); v.team.visible = u.state !== "death";
      let a = 1;
      if (u.state === "spawn" && u.anim === "walk") a = Math.min(1, u.stateT / 0.35);
      if (u.state === "death") a = 1 - Math.max(0, Math.min(1, (u.stateT - b.dur[u.model].death - 0.1) / 1.0));
      for (const m of v.mats) { m.opacity = a; m.emissive.setScalar(u.flash * 0.9); }
      v.blob.material.opacity = a;
      if ((u.hp < u.maxHp || u.special) && u.state !== "death") {
        const s = this.toPx(V(u.x, u.y, 3.9 * (u.scale || 1)));
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
      if (!c || !c.bar) continue; // 지도를 바꾸는 사이 앞 판 탑이 남아 있을 때
      if (!st.alive) { c.bar.style.display = "none"; continue; }
      const s = this.toPx(V(st.x, st.y, TOWER.height + 1.2));
      c.bar.style.display = "block";
      c.bar.style.transform = `translate(${s.x}px, ${s.y}px)`;
      c.bar.firstChild.style.width = (st.hp / st.max * 100) + "%";
    }
    for (const m of this.laneMats || []) m.opacity = 0.86 + Math.sin(performance.now() / 300) * 0.14;
    if (this.hero) {
      const h = this.hero;
      h.mixer.update(dt);
      if (h.busy > 0) { h.busy -= dt; if (h.busy <= 0) this.heroPose("cheer"); }
      const ready = b && b.sides && b.canSkill && b.canSkill(-1);
      h.ring.material.opacity = ready ? 0.65 + Math.sin(performance.now() / 180) * 0.35 : 0.45;
      h.ring.material.color.setHex(ready ? 0x46e0cf : 0xf3d38a); // 기술이 다 차면 청록으로 깜빡여 알려 줌
    }
    // 영웅 기술이 이어지는 동안 우리 병사 발밑에 반짝임
    if (b && b.sides) for (const sd of [-1, 1]) {
      const B = b.sides[sd].buff; if (!B || !(B.guard > 0 || B.rally > 0)) continue;
      const tint = B.guard > 0 ? 0x46e0cf : 0xffc65a;
      for (const u of b.units) if (u.side === sd && u.state !== "death" && Math.random() < dt * 4 * this.fxScale)
        this.puff({ p: V(u.x + (Math.random() - 0.5) * 0.6, u.y + (Math.random() - 0.5) * 0.6, 0.2 + Math.random()), tint, add: true, life: 0.6, s0: 0.35, s1: 0.05, a0: 0.9, v: V(0, 0, 1.4) });
    }
    for (const m of this.clouds) {
      m.position.x += m.speed * dt;
      if (m.position.x > 30) { m.position.x = -30; m.position.z = -(-6 + Math.random() * 22); }
    }
    this.shake = Math.max(0, this.shake - dt * 0.5);
    const base = this.camBase.clone();
    if (this.introAt && !this.calm) {
      this.introT = Math.max(0, 2.8 - (performance.now() - this.introAt) / 1000); // 카운트다운(게임이 멈춘 동안)에도 실제 시간으로
      if (this.introT === 0) this.introAt = 0;
      const k = 1 - smooth(1 - this.introT / 2.8), [ex, ey] = BASES[1];   // k: 1 → 0
      const u = ey * Math.sin(ELEV) + 2 * Math.cos(ELEV);
      base.addScaledVector(new THREE.Vector3(1, 0, 0), ex * 0.45 * k).addScaledVector(this.cam.up, u * 0.45 * k);
      this.cam.zoom = 1 + 0.45 * k; this.cam.updateProjectionMatrix();
      if (this.introT === 0) { this.cam.zoom = 1; this.cam.updateProjectionMatrix(); }
    }
    if (this.focus) {
      const f = this.focus; f.t += dt;
      const k = smooth(Math.min(1, f.t / 2.2)) * 0.55;
      const u = f.y * Math.sin(ELEV) + f.z * Math.cos(ELEV);
      base.addScaledVector(new THREE.Vector3(1, 0, 0), f.x * k).addScaledVector(this.cam.up, u * k);
      this.cam.zoom = 1 + k * 0.7; this.cam.updateProjectionMatrix();
    }
    const sh = this.calm ? 0 : this.shake;
    this.cam.position.copy(base).add(new THREE.Vector3((Math.random() - 0.5) * sh * 2, (Math.random() - 0.5) * sh * 2, 0));
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
