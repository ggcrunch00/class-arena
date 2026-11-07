// 길 모양(블렌더 tools/build_map.py 가 만든 map.json)을 게임에서 쓰기 좋게 바꿈. 지도마다 길이 1~3개(top·mid·bot 가운데 일부).
// 길 위 위치는 s(파란 본성에서부터 걸어간 거리, m)로 나타냄. 파란 병사는 s가 늘어나는 쪽, 빨간 병사는 줄어드는 쪽으로 감.
import MAP_DIAG from "./map_diag.json" with { type: "json" };
import MAP_WIDE from "./map_wide.json" with { type: "json" };
import MAP_SHORE from "./map_shore.json" with { type: "json" };
import MAP_TWIN from "./map_twin.json" with { type: "json" };
import MAP_BRIDGE from "./map_bridge.json" with { type: "json" };
import MAP_PASS from "./map_pass.json" with { type: "json" };
import MAP_CITADEL from "./map_citadel.json" with { type: "json" };
import MAP_SWAMP from "./map_swamp.json" with { type: "json" };
import MAP_FROST from "./map_frost.json" with { type: "json" };
import MAP_ISLE from "./map_isle.json" with { type: "json" };

// free: 자유 대전에서 고를 수 있는지(캠페인 지도는 그 장을 깨면 열림)
export const MAPS = {
  // 11-06 선생님 확정: 자유 대전 기본 지도는 대각선. 펼친 3갈래는 원정 6장·8장에 쓰고, 6장을 마치면 자유 대전에도 열림
  diag: { name: "대각선", desc: "모서리에서 모서리로 세 갈래", data: MAP_DIAG, free: true },
  wide: { name: "펼친 3갈래", desc: "옆으로 넓게, 병사가 크게", data: MAP_WIDE, chapter: 6 }, // 원정 6장 서리 고개를 깨면 열림
  shore: { name: "바닷가 초소", desc: "한 갈래 길", data: MAP_SHORE, chapter: 1 },
  twin: { name: "두 갈래 숲길", desc: "호수를 낀 두 길", data: MAP_TWIN, chapter: 2 },
  bridge: { name: "강 건너 다리", desc: "다리 셋, 3갈래", data: MAP_BRIDGE, chapter: 3 },
  pass: { name: "산길 요새", desc: "짧은 지름길과 굽은 산길", data: MAP_PASS, chapter: 5 },
  citadel: { name: "안개 성채", desc: "성벽으로 모이는 세 길", data: MAP_CITADEL, chapter: 7 },
  // 11-07: 이야기에 맞춘 지도(길은 두 갈래·펼친 3갈래·대각선과 같고 땅·물·꾸밈이 다름)
  swamp: { name: "물안개 늪", desc: "웅덩이 사이 두 갈래", data: MAP_SWAMP, chapter: 4 },
  frost: { name: "서리 고개", desc: "눈 덮인 3갈래, 언 강", data: MAP_FROST, chapter: 6 },
  isle: { name: "잊힌 등대섬", desc: "모래톱 섬, 대각선 세 갈래", data: MAP_ISLE, chapter: 8 },
};

const ALL_LANES = ["top", "mid", "bot"];
const DEFAULT_LABEL = { top: "윗길", mid: "가운뎃길", bot: "아랫길" };
export const LANE_NAMES = ["top", "mid", "bot"]; // 지금 지도의 길(useMap이 바꿈)
export const LANE_LABEL = { ...DEFAULT_LABEL };

class Lane {
  constructor(name, pts) {
    this.name = name;
    this.pts = pts;
    this.cum = [0];
    for (let i = 1; i < pts.length; i++) this.cum.push(this.cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    this.length = this.cum[this.cum.length - 1];
  }
  // s 위치의 좌표(x, y)와 진행 방향(dx, dy: 파란 → 빨간 쪽)
  at(s) {
    s = Math.max(0, Math.min(this.length, s));
    let i = 1;
    while (i < this.cum.length - 1 && this.cum[i] < s) i++;
    const a = this.pts[i - 1], b = this.pts[i], seg = this.cum[i] - this.cum[i - 1] || 1;
    const k = (s - this.cum[i - 1]) / seg;
    return { x: a[0] + (b[0] - a[0]) * k, y: a[1] + (b[1] - a[1]) * k, dx: (b[0] - a[0]) / seg, dy: (b[1] - a[1]) / seg };
  }
  // 좌표에서 가장 가까운 s
  project(x, y) {
    let best = 0, bestD = 1e9;
    for (let i = 1; i < this.pts.length; i++) {
      const a = this.pts[i - 1], b = this.pts[i], dx = b[0] - a[0], dy = b[1] - a[1], L2 = dx * dx + dy * dy;
      const t = Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / L2));
      const d = Math.hypot(x - a[0] - t * dx, y - a[1] - t * dy);
      if (d < bestD) { bestD = d; best = this.cum[i - 1] + t * Math.sqrt(L2); }
    }
    return best;
  }
}

// 아래 값들은 useMap()으로 채움(게임 시작 전에 한 번 부름)
export const LANES = {};
export const BASES = {};
export const TOWERS = {};
export const BOUNDS = [0, 0];
export const RIVER = [];
export let MAP_KEY = "diag";
export const MOOD = {};
// 지금 지도의 바다·폭포·등대(view3d가 씀)
export const SCENE = { theme: "grass", seaZ: -1.8, sea: null, falls: [], beacon: null };

export function useMap(key) {
  if (!MAPS[key]) key = "diag";
  MAP_KEY = key;
  const M = MAPS[key].data;
  LANE_NAMES.length = 0;
  for (const n of ALL_LANES) if (M.lanes[n]) LANE_NAMES.push(n);
  for (const k of Object.keys(LANES)) delete LANES[k];
  for (const k of Object.keys(TOWERS)) delete TOWERS[k];
  for (const n of LANE_NAMES) LANES[n] = new Lane(n, M.lanes[n]);
  // 길 이름: 지도에 이름이 있으면 그것, 길이 하나면 "길", 둘이면 윗길·아랫길
  Object.assign(LANE_LABEL, DEFAULT_LABEL, LANE_NAMES.length === 1 ? { [LANE_NAMES[0]]: "길" } : {}, M.labels || {});
  for (const k of Object.keys(MOOD)) delete MOOD[k];
  Object.assign(MOOD, M.mood || {});
  BASES[-1] = M.bases["-1"]; BASES[1] = M.bases["1"];
  for (const n of LANE_NAMES) TOWERS[n] = { [-1]: M.towers[n]["-1"], [1]: M.towers[n]["1"] };
  BOUNDS[0] = M.bounds[0]; BOUNDS[1] = M.bounds[1];
  RIVER.length = 0; for (const p of M.river) RIVER.push(p);
  Object.assign(SCENE, { theme: M.theme || "grass", seaZ: M.seaZ ?? -1.8, sea: M.sea || null, falls: M.falls || [], beacon: M.beacon || null });
  return key;
}
useMap("diag");
