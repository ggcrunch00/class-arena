// 3갈래 길 모양(블렌더 tools/build_map.py 가 만든 map.json)을 게임에서 쓰기 좋게 바꿈.
// 길 위 위치는 s(파란 본성에서부터 걸어간 거리, m)로 나타냄. 파란 병사는 s가 늘어나는 쪽, 빨간 병사는 줄어드는 쪽으로 감.
import MAP from "./map.json" with { type: "json" };

export const LANE_NAMES = ["top", "mid", "bot"];
export const LANE_LABEL = { top: "윗길", mid: "가운뎃길", bot: "아랫길" };

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

export const LANES = {};
for (const n of LANE_NAMES) LANES[n] = new Lane(n, MAP.lanes[n]);
export const BASES = { [-1]: MAP.bases["-1"], [1]: MAP.bases["1"] };
export const TOWERS = {};
for (const n of LANE_NAMES) TOWERS[n] = { [-1]: MAP.towers[n]["-1"], [1]: MAP.towers[n]["1"] };
export const BOUNDS = MAP.bounds;
export { MAP };
