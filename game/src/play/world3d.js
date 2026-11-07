// 섬 바깥 세상(11-07): 물결치는 바다(해안 거품·얕은 물빛), 섬 끝 폭포, 흐르는 강물, 떠가는 구름, 갈매기, 돛단배, 등대 불빛.
// 지도 모형(field)에서 땅 타일 자리를 읽어 해안선을 그리고, 지도 정보(SCENE: 바다 높이·색, 폭포, 등대)를 씀.
import * as THREE from "three";
import { BOUNDS, SCENE } from "./lanes.js";

const V = (x, y, z) => new THREE.Vector3(x, z, -y); // 블렌더 좌표 → three
const BOX = { x0: -84, y0: -64, w: 168, h: 168 };    // 해안 지도 그림이 덮는 바다 범위(블렌더 좌표)
const SEA_DEFAULT = { deep: "#16466b", shallow: "#3f9fb8", foam: "#f4fbff" };

const NOISE = /* glsl */ `
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }`;

function seaMaterial(mask) {
  return new THREE.ShaderMaterial({
    fog: true,
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
      uTime: { value: 0 }, uMask: { value: mask }, uBox: { value: new THREE.Vector4(BOX.x0, BOX.y0, BOX.w, BOX.h) },
      uDeep: { value: new THREE.Color() }, uShallow: { value: new THREE.Color() }, uFoam: { value: new THREE.Color() },
    }]),
    vertexShader: /* glsl */ `
      varying vec2 vP;
      #include <fog_pars_vertex>
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vP = vec2(wp.x, -wp.z);
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: /* glsl */ `
      uniform float uTime; uniform sampler2D uMask; uniform vec4 uBox;
      uniform vec3 uDeep, uShallow, uFoam;
      varying vec2 vP;
      #include <fog_pars_fragment>
      ${NOISE}
      void main() {
        vec2 uv = (vP - uBox.xy) / uBox.zw;
        vec3 m = texture2D(uMask, uv).rgb;          // r: 가까운 해안(좁게 번짐), g: 얕은 물(넓게 번짐)
        float n = noise(vP * 0.07 + vec2(uTime * 0.03, uTime * 0.01));
        float n2 = noise(vP * 0.35 - vec2(uTime * 0.12, -uTime * 0.05));
        vec3 col = mix(uDeep, uShallow, pow(smoothstep(0.0, 0.85, m.g), 1.4));
        col *= 0.93 + 0.14 * n;
        // 물결: 짧은 하얀 물마루가 드문드문, 천천히 흐름(바다가 판판해 보이지 않게)
        vec2 wd = vP * vec2(0.55, 0.9) + vec2(n * 3.0, uTime * 0.18);
        float crest = 1.0 - smoothstep(0.0, 0.07, abs(fract(wd.y * 0.5 + sin(wd.x * 0.35) * 0.35) - 0.5));
        crest *= smoothstep(0.7, 0.86, noise(vP * 0.22 + vec2(uTime * 0.05, 0.0))) * (1.0 - smoothstep(0.2, 0.6, m.r));
        col *= 1.0 + crest * 0.06; // 물마루는 하얀 줄 대신 아주 옅은 밝기 차이로(눈송이처럼 산만하던 것)
        // 해안 거품: 땅 바로 둘레 + 섬 쪽으로 밀려오는 물결 띠 두어 줄
        float shore = smoothstep(0.5, 0.72, m.r);
        float band = smoothstep(0.75, 1.0, sin(m.r * 20.0 - uTime * 1.5 + n * 3.0)) * smoothstep(0.18, 0.4, m.r) * (1.0 - shore);
        float foam = clamp(shore + band * 0.6, 0.0, 1.0) * mix(0.55, 1.0, smoothstep(0.3, 0.6, n2));
        col = mix(col, uFoam, foam);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,
  });
}

function fallMaterial(col, frozen) {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: { uTime: { value: 0 }, uCol: { value: new THREE.Color(col) }, uFlow: { value: frozen ? 0 : 1 } },
    vertexShader: /* glsl */ `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform float uTime, uFlow; uniform vec3 uCol; varying vec2 vUv;
      ${NOISE}
      void main() {
        float s = noise(vec2(vUv.x * 14.0, vUv.y * 2.5 - uTime * 2.4 * uFlow));
        float s2 = noise(vec2(vUv.x * 30.0 + 7.0, vUv.y * 5.0 - uTime * 3.4 * uFlow));
        vec3 col = mix(uCol, vec3(1.0), smoothstep(0.45, 0.9, s * 0.6 + s2 * 0.5) * 0.85 + vUv.y * 0.25);
        float a = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x) * (0.88 + 0.12 * s);
        gl_FragColor = vec4(col, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
}

function glowTex(stops, size = 64) {
  const c = document.createElement("canvas"); c.width = c.height = size;
  const g = c.getContext("2d"), r = size / 2, gr = g.createRadialGradient(r, r, 0, r, r, r);
  for (const [o, col] of stops) gr.addColorStop(o, col);
  g.fillStyle = gr; g.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export class World {
  constructor(scene, view) {
    this.scene = scene; this.view = view;
    this.t = 0; this.objs = []; this.anim = [];
    this.T_PUFF = glowTex([[0, "rgba(255,255,255,0.95)"], [0.5, "rgba(255,255,255,0.45)"], [1, "rgba(255,255,255,0)"]]);
    this.T_WARM = glowTex([[0, "rgba(255,250,220,1)"], [0.25, "rgba(255,214,120,0.8)"], [1, "rgba(255,180,80,0)"]], 128);
  }

  clear() {
    // 지도를 바꿀 때 이 지도에서 만든 모양·재질을 모두 해제(바다 재질과 공용 그림은 다음 지도에서도 씀)
    const geos = new Set(), mats = new Set();
    for (const o of this.objs) {
      this.scene.remove(o);
      o.traverse((c) => { if (c.geometry) geos.add(c.geometry); for (const m of [].concat(c.material || [])) mats.add(m); });
    }
    for (const g of geos) g.dispose();
    for (const m of mats) if (m !== this.seaMat) m.dispose();
    this.objs = []; this.anim = []; this.rivers = []; this.clouds = [];
  }
  add(o) { this.scene.add(o); this.objs.push(o); return o; }

  build(field) {
    this.clear();
    this.field = field;
    field.updateMatrixWorld(true);
    const tiles = [], M = new THREE.Matrix4(), p = new THREE.Vector3();
    field.traverse((o) => {
      if (!o.isMesh) return;
      if (/^hex_water/.test(o.name)) { o.visible = false; return; } // 예전 지도의 물 타일은 감춤(바다는 셰이더로)
      if (/^(Sea|Plane)/.test(o.name)) { o.visible = false; return; }
      if (/^cloud/.test(o.name)) {
        o.castShadow = false; o.receiveShadow = false; this.clouds.push(o);
        if (!o.userData.soft) { o.userData.soft = true; o.material = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0xc9d6e6, emissiveIntensity: 0.55, transparent: true, opacity: 0.88, fog: false }); }
        return;
      }
      if (!/^hex_(grass|sand)/.test(o.name)) return;
      if (o.isInstancedMesh) for (let k = 0; k < o.count; k++) { o.getMatrixAt(k, M); M.premultiply(o.matrixWorld); p.setFromMatrixPosition(M); tiles.push([p.x, -p.z]); }
      else { o.getWorldPosition(p); tiles.push([p.x, -p.z]); }
    });
    // 흐르는 강물(강·호수 재질에 물결 반짝임). 언 강(Ice)은 그대로
    field.traverse((o) => {
      if (!o.isMesh) return;
      for (const m of [].concat(o.material)) if (m.name === "River" && !m.userData.flow) this.flowify(m);
    });
    for (const c of this.clouds) if (c.isInstancedMesh) {
      c.userData.base = []; for (let k = 0; k < c.count; k++) { const m = new THREE.Matrix4(); c.getMatrixAt(k, m); c.userData.base.push(m); }
    } else c.userData.base0 = c.position.clone();
    this.makeSea(tiles);
    this.makeFalls();
    this.makeLife();
    this.setMood(this.view.mood || {});
    this.setQuality(this.view.quality.preset);
  }

  // 땅 타일 자리로 해안 그림(가까운 해안: 조금 번진 것, 얕은 물: 많이 번진 것)
  shoreMask(tiles) {
    const N = 512, k = N / BOX.w, R = 3.46 * k;
    const a = document.createElement("canvas"); a.width = a.height = N;
    const g = a.getContext("2d"); g.fillStyle = "#000"; g.fillRect(0, 0, N, N); g.fillStyle = "#fff";
    for (const [x, y] of tiles) {
      const cx = (x - BOX.x0) * k, cy = (1 - (y - BOX.y0) / BOX.h) * N;
      g.beginPath();
      for (let i = 0; i < 6; i++) { const t = Math.PI / 6 + i * Math.PI / 3; g.lineTo(cx + Math.cos(t) * R, cy + Math.sin(t) * R); }
      g.closePath(); g.fill();
    }
    // 번지게: 작게 줄였다가 부드럽게 키우기(어느 기기에서나 되는 흐림)
    const blur = (src, n) => {
      const s = document.createElement("canvas"); s.width = s.height = n;
      const sg = s.getContext("2d"); sg.imageSmoothingEnabled = true; sg.drawImage(src, 0, 0, n, n);
      const o = document.createElement("canvas"); o.width = o.height = N;
      const og = o.getContext("2d"); og.imageSmoothingEnabled = true; og.imageSmoothingQuality = "high"; og.drawImage(s, 0, 0, N, N);
      return og.getImageData(0, 0, N, N).data;
    };
    const near = blur(a, 96), far = blur(a, 22), out = document.createElement("canvas"); out.width = out.height = N;
    const og = out.getContext("2d"), img = og.createImageData(N, N);
    for (let i = 0; i < N * N * 4; i += 4) {
      img.data[i] = Math.min(255, near[i] * 1.5); img.data[i + 1] = Math.min(255, far[i] * 1.5); img.data[i + 2] = 0; img.data[i + 3] = 255;
    }
    og.putImageData(img, 0, 0);
    const t = new THREE.CanvasTexture(out); t.minFilter = THREE.LinearFilter; t.generateMipmaps = false;
    return t;
  }

  makeSea(tiles) {
    if (this.mask) this.mask.dispose();
    this.mask = this.shoreMask(tiles);
    this.seaMat = this.seaMat || seaMaterial(this.mask);
    this.seaMat.uniforms.uMask.value = this.mask;
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(900, 900).rotateX(-Math.PI / 2), this.seaMat);
    sea.position.y = SCENE.seaZ; sea.renderOrder = -1;
    this.add(sea);
  }

  // 강이 섬 끝에서 바다로 떨어지는 폭포 + 아래 물보라
  makeFalls() {
    const frozen = SCENE.theme === "snow";
    const col = frozen ? "#cfe9f7" : SCENE.theme === "swamp" ? "#5d7d62" : "#5fb4dc";
    for (const [x, y, dx, dy, half] of SCENE.falls || []) {
      const W = half * 1.9, rows = 10, top = 0.05, bot = SCENE.seaZ - 0.05;
      const px = -dy, py = dx, pos = [], uv = [], idx = [];
      for (let r = 0; r <= rows; r++) {
        const t = r / rows, out = 0.05 + 1.25 * Math.pow(t, 1.7), z = top + (bot - top) * t;
        for (let c = 0; c <= 1; c++) {
          const u = c - 0.5, q = V(x + dx * out + px * u * W, y + dy * out + py * u * W, z);
          pos.push(q.x, q.y, q.z); uv.push(c, t);
        }
        if (r < rows) { const i = r * 2; idx.push(i, i + 1, i + 2, i + 1, i + 3, i + 2); }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
      const mat = fallMaterial(col, frozen), m = this.add(new THREE.Mesh(g, mat));
      this.anim.push((t) => { mat.uniforms.uTime.value = t; });
      if (frozen) continue;
      // 물보라: 아래에서 부풀었다 사라지는 하얀 김
      const base = V(x + dx * 1.4, y + dy * 1.4, SCENE.seaZ + 0.2);
      for (let i = 0; i < 4; i++) {
        const sm = new THREE.SpriteMaterial({ map: this.T_PUFF, transparent: true, depthWrite: false, opacity: 0.6 });
        const s = this.add(new THREE.Sprite(sm)); const ph = i / 4;
        this.anim.push((t) => {
          const k = (t * 0.6 + ph) % 1;
          s.position.copy(base).add(V(px * (i - 1.5) * W * 0.3, py * (i - 1.5) * W * 0.3, k * 0.9));
          s.scale.setScalar(1.2 + k * 2.2); sm.opacity = 0.55 * (1 - k);
        });
      }
    }
  }

  // 강·호수 재질에 흐르는 물결 반짝임(빛 계산은 그대로)
  flowify(m) {
    m.userData.flow = { value: 0 };
    m.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = m.userData.flow;
      sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec2 vWP;")
        .replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xz;");
      sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec2 vWP;\nuniform float uTime;\n" + NOISE)
        .replace("#include <color_fragment>", `#include <color_fragment>
          float rn = noise(vWP * 0.9 + vec2(uTime * 0.35, uTime * 0.2)) * noise(vWP * 0.45 - vec2(uTime * 0.15, -uTime * 0.25));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.85, 0.95, 1.0), smoothstep(0.32, 0.6, rn) * ${SCENE.theme === "swamp" ? "0.18" : "0.5"});`);
    };
    m.needsUpdate = true;
    this.anim.push((t) => { m.userData.flow.value = t; });
  }

  // 갈매기·돛단배·등대 불빛
  makeLife() {
    const [BX, BY] = BOUNDS, z0 = SCENE.seaZ;
    // 갈매기: 두 날개(세모)를 퍼덕이며 바다 위를 맴돎
    const wingGeo = new THREE.BufferGeometry();
    wingGeo.setAttribute("position", new THREE.Float32BufferAttribute([0, 0, -0.18, 0, 0, 0.18, 0.9, 0.05, 0.02], 3));
    wingGeo.computeVertexNormals(); wingGeo.userData = { shared: true };
    const wingMat = new THREE.MeshBasicMaterial({ color: 0xf6f3ea, side: THREE.DoubleSide });
    const gulls = [[-BX - 7, BY + 6], [BX + 8, BY + 3], [-BX - 4, -BY + 2], [BX + 5, BY + 12], [-6, BY + 10]];
    gulls.forEach(([cx, cy], i) => {
      const g = new THREE.Group(), L = new THREE.Mesh(wingGeo, wingMat), R = new THREE.Mesh(wingGeo, wingMat);
      R.rotation.y = Math.PI; g.add(L, R); g.scale.setScalar(1.3); this.add(g); g.userData.life = true;
      const r = 4 + (i % 3) * 2.2, h = 7 + (i % 2) * 2.5, sp = 0.25 + (i % 3) * 0.07, ph = i * 1.7;
      this.anim.push((t) => {
        const a = t * sp + ph; g.position.copy(V(cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.6, h + Math.sin(a * 2) * 0.4));
        g.rotation.y = -a + Math.PI; const f = Math.sin(t * 7 + ph) * 0.55;
        L.rotation.z = f; R.rotation.z = -f;
      });
    });
    // 돛단배: 나무 배 + 돛, 섬 둘레 먼바다를 천천히 돎(살짝 출렁)
    const hullShape = new THREE.Shape();
    hullShape.moveTo(-1.3, -0.45); hullShape.lineTo(0.9, -0.45); hullShape.lineTo(1.5, 0); hullShape.lineTo(0.9, 0.45); hullShape.lineTo(-1.3, 0.45); hullShape.closePath();
    const hullGeo = new THREE.ExtrudeGeometry(hullShape, { depth: 0.45, bevelEnabled: false }).rotateX(-Math.PI / 2).translate(0, -0.15, 0);
    hullGeo.userData = { shared: true };
    const hullMat = new THREE.MeshStandardMaterial({ color: 0x8a5a33, roughness: 0.85 });
    const sailGeo = new THREE.BufferGeometry();
    sailGeo.setAttribute("position", new THREE.Float32BufferAttribute([0, 0.5, 0, 0, 2.3, 0, 1.1, 0.55, 0], 3)); sailGeo.computeVertexNormals(); sailGeo.userData = { shared: true };
    const mastGeo = new THREE.CylinderGeometry(0.05, 0.05, 2.4, 5).translate(0, 1.2, 0); mastGeo.userData = { shared: true };
    const boats = [[BX + 8, BY - 1, 0.05, 0xf2ead8], [-BX - 8, 2, -0.045, 0xe9d8b8], [BX * 0.45, BY + 8, 0.04, 0xf2ead8]];
    boats.forEach(([cx, cy, sp, sc], i) => {
      const b = new THREE.Group();
      const hull = new THREE.Mesh(hullGeo, hullMat), mast = new THREE.Mesh(mastGeo, hullMat);
      const sail = new THREE.Mesh(sailGeo, new THREE.MeshStandardMaterial({ color: sc, side: THREE.DoubleSide, roughness: 0.9 }));
      mast.position.x = -0.1; sail.position.x = -0.05; b.add(hull, mast, sail); b.scale.setScalar(1.4);
      for (const c of b.children) { c.castShadow = true; }
      this.add(b); b.userData.life = true;
      const r = 2.5 + i * 0.8;
      this.anim.push((t) => {
        const a = t * sp + i * 2.1;
        b.position.copy(V(cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.5, z0 + 0.05 + Math.sin(t * 1.3 + i) * 0.06));
        b.rotation.y = -a - Math.sign(sp) * Math.PI / 2 + (sp < 0 ? Math.PI : 0);
        b.rotation.z = Math.sin(t * 1.1 + i) * 0.05;
      });
    });
    // 날씨: 서리 고개는 눈송이, 늪은 반딧불(섬 위를 천천히 떠다님)
    const wx = { snow: { n: 220, col: 0xffffff, size: 4, fall: 1.6, sway: 0.6, add: false }, swamp: { n: 70, col: 0xd8ff7a, size: 5, fall: 0, sway: 0.5, add: true } }[SCENE.theme];
    if (wx) {
      const pos = new Float32Array(wx.n * 3), seed = new Float32Array(wx.n);
      for (let i = 0; i < wx.n; i++) {
        const q = V((Math.random() * 2 - 1) * (BX + 6), (Math.random() * 2 - 1) * (BY + 4), Math.random() * (wx.fall ? 14 : 2.5) + 0.3);
        pos.set([q.x, q.y, q.z], i * 3); seed[i] = Math.random() * 6.28;
      }
      const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ color: wx.col, size: wx.size, sizeAttenuation: false, transparent: true, opacity: wx.add ? 0.9 : 0.85, depthWrite: false,
        map: this.T_PUFF, blending: wx.add ? THREE.AdditiveBlending : THREE.NormalBlending });
      const pts = this.add(new THREE.Points(g, mat)); pts.userData.life = true; pts.frustumCulled = false;
      let last = 0;
      this.anim.push((t) => {
        const dt = Math.min(0.1, t - last); last = t;
        for (let i = 0; i < wx.n; i++) {
          const k = i * 3, sd = seed[i];
          pos[k] += Math.sin(t * 0.7 + sd) * wx.sway * dt; pos[k + 2] += Math.cos(t * 0.5 + sd) * wx.sway * dt;
          if (wx.fall) { pos[k + 1] -= wx.fall * dt * (0.7 + (sd % 1) * 0.6); if (pos[k + 1] < 0) pos[k + 1] = 14; }
          else pos[k + 1] = 0.6 + Math.sin(t * 0.8 + sd * 3) * 0.5 + (sd % 1.5);
        }
        g.attributes.position.needsUpdate = true;
        if (!wx.fall) mat.opacity = 0.6 + Math.sin(t * 2.3) * 0.25;
      });
    }
    // 등대 불빛: 따뜻한 빛 덩이 + 천천히 도는 빛줄기
    if (SCENE.beacon) {
      const [x, y, z] = SCENE.beacon;
      const gm = new THREE.SpriteMaterial({ map: this.T_WARM, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
      const glow = this.add(new THREE.Sprite(gm)); glow.position.copy(V(x, y, z));
      const beamGeo = new THREE.ConeGeometry(2.2, 26, 16, 1, true).translate(0, -13, 0).rotateZ(Math.PI / 2);
      const beamMat = new THREE.MeshBasicMaterial({ color: 0xffe2a0, transparent: true, opacity: 0.16, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
      const beam = this.add(new THREE.Mesh(beamGeo, beamMat)); beam.position.copy(V(x, y, z));
      this.anim.push((t) => { glow.scale.setScalar(5 + Math.sin(t * 2.2) * 0.8); beam.rotation.y = t * 0.6; });
    }
  }

  setMood(m = {}) {
    if (!this.seaMat) return;
    const c = { ...SEA_DEFAULT, ...(SCENE.sea || {}), ...(m.sea || {}) };
    this.seaMat.uniforms.uDeep.value.set(c.deep); this.seaMat.uniforms.uShallow.value.set(c.shallow); this.seaMat.uniforms.uFoam.value.set(c.foam);
  }

  setQuality(P) { for (const o of this.objs) if (o.userData.life) o.visible = P.fx >= 0.4; }

  update(dt) {
    this.t += dt;
    const t = this.t;
    if (this.seaMat) this.seaMat.uniforms.uTime.value = t;
    for (const f of this.anim) f(t);
    // 구름: 제자리에서 천천히 오가며 떠 있음
    const m = new THREE.Matrix4();
    this.clouds.forEach((c, i) => {
      if (c.isInstancedMesh && c.userData.base) {
        c.userData.base.forEach((b, k) => { m.makeTranslation(Math.sin(t * 0.05 + k * 1.3) * 3, Math.sin(t * 0.3 + k) * 0.15, 0).multiply(b); c.setMatrixAt(k, m); });
        c.instanceMatrix.needsUpdate = true;
      } else if (c.userData.base0) c.position.x = c.userData.base0.x + Math.sin(t * 0.05 + i) * 3;
    });
  }
}
