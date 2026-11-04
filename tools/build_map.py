# 지도 짓기(3갈래 대각선·펼친 3갈래 + 캠페인 지도 shore·twin·bridge·pass·citadel) (롤처럼 본성이 왼쪽 앞·오른쪽 뒤 모서리, 윗길·가운뎃길·아랫길, 가운데 강, 길 사이 숲)
#   python tools/build_map.py preview [diag|wide]  → 미리보기 그림(preview_map_<지도>.png)
#   python tools/build_map.py glb [diag|wide]      → game/models/field_<지도>.glb + game/src/play/map_<지도>.json
#   diag = 롤처럼 대각선(본성이 왼쪽 앞·오른쪽 뒤 모서리), wide = 펼친 3갈래(본성이 왼쪽·오른쪽 가운데, 옆으로 긴 화면에 맞춤)
import sys, os, math, random, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bpy, bmesh, mathutils
from scene_common import *

S = 3.0                       # 육각 타일 확대 배율
HW, RS = 2.0 * S, 1.725 * S   # 타일 가로, 줄 간격
ROAD_W = 1.6                  # 길 반폭
TOWER_AT = 0.36               # 탑 위치: 자기 본성에서 길 길이의 36%
LAYOUT = sys.argv[2] if len(sys.argv) > 2 else "diag"

# 지도마다 다른 꾸밈(11-04 밤: 캠페인 지도 추가)
RIVERS = []          # [(꺾은선, 반폭)]
LAKES = []           # [(x, y, 반지름)]
JUNGLE = "forest"    # forest | low | rocky | none
VILLAGE = False      # 파란 본성 뒤 마을(집·풍차·천막)
MOUNTAINS = False    # 섬 뒤쪽 산줄기
WALLS = False        # 빨간 본성 둘레 성벽
BRIDGES = False      # 길이 강을 건너는 곳에 다리
HILLS = []           # 길 사이 낮은 언덕 자리 [(x, y)]
LABELS = None        # 길 이름(게임 화면)
TREE_P = 0.30        # 낮은 덤불 지도에서 작은 나무 비율
MOOD = None          # 게임 화면 빛·안개(view3d.setMood)

if LAYOUT == "wide":
    # 펼친 3갈래: 본성 왼쪽·오른쪽 가운데, 윗길(뒤)·아랫길(앞)이 바깥으로 휘어 돎
    BX, BY = 17.5, 9.6
    BASE = {-1: (-15.5, 0.0), 1: (15.5, 0.0)}
    LANES = {
        "top": [BASE[-1], (-14.2, 4.6), (-11.0, 7.4), (11.0, 7.4), (14.2, 4.6), BASE[1]],
        "mid": [BASE[-1], BASE[1]],
        "bot": [BASE[-1], (-14.2, -4.6), (-11.0, -7.4), (11.0, -7.4), (14.2, -4.6), BASE[1]],
    }
    RIVER = [(-2.5, 11.5), (2.5, -11.5)]   # 강: 가운데를 세로로
    LOW_JUNGLE = True                      # 길 사이는 낮은 덤불만(뒤쪽 길 병사가 가리지 않게)
elif LAYOUT == "shore":
    # 1장 바닷가 초소: 한 갈래 길(살짝 굽음), 섬이 좁아 병사가 크게 보임. 파란 본성 뒤에 초소 마을
    BX, BY = 17.5, 6.0
    BASE = {-1: (-15.5, -0.6), 1: (15.5, 0.6)}
    LANES = {"mid": [BASE[-1], (-9.0, -2.2), (-3.0, -1.2), (3.0, 1.2), (9.0, 2.2), BASE[1]]}
    RIVER = []
    LOW_JUNGLE = True
    JUNGLE, VILLAGE = "low", True
    TREE_P = 0.12   # 섬이 좁아 길 앞 나무가 병사를 가리지 않게 적게
    LABELS = {"mid": "바닷길"}
    MOOD = {"sun": [1.0, 0.9, 0.82], "sunI": 3.3, "hemiSky": [0.75, 0.82, 1.0], "hemiI": 1.25, "bg": "#16303a"}
elif LAYOUT == "twin":
    # 2장 두 갈래 숲길: 가운데 호수를 끼고 윗길·아랫길
    BX, BY = 17.5, 9.0
    BASE = {-1: (-15.5, 0.0), 1: (15.5, 0.0)}
    LANES = {
        "top": [BASE[-1], (-13.0, 4.0), (-7.5, 6.6), (7.5, 6.6), (13.0, 4.0), BASE[1]],
        "bot": [BASE[-1], (-13.0, -4.0), (-7.5, -6.6), (7.5, -6.6), (13.0, -4.0), BASE[1]],
    }
    RIVER = []
    LAKES = [(0.0, 0.0, 4.6)]
    LOW_JUNGLE = True
    JUNGLE, VILLAGE = "forest", False
    LABELS = {"top": "윗숲길", "bot": "아랫숲길"}
    MOOD = {"sun": [1.0, 0.86, 0.62], "sunI": 3.5, "hemiSky": [0.95, 0.85, 0.7], "hemiI": 1.15, "bg": "#1d2a16"}
elif LAYOUT == "bridge":
    # 3장 강 건너 다리: 큰 강을 세 다리로 건너는 3갈래
    BX, BY = 17.5, 9.6
    BASE = {-1: (-15.5, 0.0), 1: (15.5, 0.0)}
    LANES = {
        "top": [BASE[-1], (-13.6, 4.8), (-10.0, 7.2), (10.0, 7.2), (13.6, 4.8), BASE[1]],
        "mid": [BASE[-1], (-6.0, 0.0), (6.0, 0.0), BASE[1]],
        "bot": [BASE[-1], (-13.6, -4.8), (-10.0, -7.2), (10.0, -7.2), (13.6, -4.8), BASE[1]],
    }
    RIVER = []
    RIVERS = [([(-1.2, 12.5), (1.0, 3.0), (-1.0, -3.0), (1.2, -12.5)], 2.7)]
    LOW_JUNGLE = True
    JUNGLE, BRIDGES = "low", True
    MOOD = {"sun": [0.92, 0.96, 1.0], "sunI": 3.2, "hemiSky": [0.7, 0.85, 1.0], "hemiI": 1.35, "bg": "#122a33"}
elif LAYOUT == "pass":
    # 4장 산길 요새: 가운뎃길은 짧고 곧음, 윗길·아랫길은 굽이굽이 긴 산길
    BX, BY = 17.5, 9.6
    BASE = {-1: (-15.5, 0.0), 1: (15.5, 0.0)}
    LANES = {
        "top": [BASE[-1], (-13.5, 3.6), (-9.5, 7.6), (-5.5, 4.6), (0.0, 7.8), (5.5, 4.6), (9.5, 7.6), (13.5, 3.6), BASE[1]],
        "mid": [BASE[-1], BASE[1]],
        "bot": [BASE[-1], (-13.5, -3.6), (-9.5, -7.6), (-5.5, -4.6), (0.0, -7.8), (5.5, -4.6), (9.5, -7.6), (13.5, -3.6), BASE[1]],
    }
    RIVER = []
    LOW_JUNGLE = True
    JUNGLE, MOUNTAINS = "rocky", True
    HILLS = [(-9.5, 3.2), (0.0, 3.6), (9.5, 3.2), (-9.5, -3.4), (0.0, -3.8), (9.5, -3.4)]
    LABELS = {"top": "윗산길", "mid": "지름길", "bot": "아랫산길"}
    MOOD = {"sun": [1.0, 0.72, 0.5], "sunI": 3.3, "hemiSky": [0.85, 0.65, 0.75], "hemiI": 1.1, "bg": "#2a1a22"}
elif LAYOUT == "citadel":
    # 5장 안개 성채: 빨간 본성이 성벽에 둘러싸이고, 세 길이 성문으로 모임. 잿빛 안개
    BX, BY = 17.5, 9.6
    BASE = {-1: (-15.5, 0.0), 1: (14.5, 0.0)}
    LANES = {
        "top": [BASE[-1], (-13.0, 5.0), (-6.0, 7.6), (6.0, 7.6), (11.0, 3.4), BASE[1]],
        "mid": [BASE[-1], (-4.0, 1.4), (4.0, -1.4), BASE[1]],
        "bot": [BASE[-1], (-13.0, -5.0), (-6.0, -7.6), (6.0, -7.6), (11.0, -3.4), BASE[1]],
    }
    RIVER = []
    LOW_JUNGLE = True
    JUNGLE, WALLS = "rocky", True
    MOOD = {"sun": [0.82, 0.85, 0.92], "sunI": 2.6, "hemiSky": [0.7, 0.72, 0.8], "hemiI": 1.2, "bg": "#1b1e24",
            "fog": "#9aa3b0", "fogNear": 95, "fogFar": 175}
else:
    # 대각선: 롤처럼 본성이 왼쪽 앞·오른쪽 뒤 모서리
    BX, BY = 21.0, 12.0
    BASE = {-1: (-18.0, -9.5), 1: (18.0, 9.5)}
    LANES = {
        "top": [BASE[-1], (-18.6, -5.0), (-18.6, 7.2), (-16.2, 9.9), (14.0, 10.1), BASE[1]],
        "mid": [BASE[-1], BASE[1]],
        "bot": [BASE[-1], (-14.0, -10.1), (16.2, -9.9), (18.6, -7.2), (18.6, 5.0), BASE[1]],
    }
    RIVER = [(-23.0, 13.2), (23.0, -13.2)]  # 강: 반대 대각선
    LOW_JUNGLE = False
if RIVER:
    RIVERS = [(RIVER, 1.7)] + RIVERS

def seg_dist(p, a, b):
    ax, ay = a; bx, by = b; px, py = p
    dx, dy = bx - ax, by - ay
    t = max(0, min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)))
    return math.hypot(px - ax - t * dx, py - ay - t * dy)


def poly_dist(p, pts):
    return min(seg_dist(p, pts[i], pts[i + 1]) for i in range(len(pts) - 1))


def lane_len(pts):
    return sum(math.dist(pts[i], pts[i + 1]) for i in range(len(pts) - 1))


def lane_point(pts, s):
    for i in range(len(pts) - 1):
        L = math.dist(pts[i], pts[i + 1])
        if s <= L or i == len(pts) - 2:
            k = min(1, s / L)
            return (pts[i][0] + (pts[i + 1][0] - pts[i][0]) * k, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * k)
        s -= L


def towers():
    out = {}
    for name, pts in LANES.items():
        L = lane_len(pts)
        out[name] = {-1: lane_point(pts, L * TOWER_AT), 1: lane_point(pts, L * (1 - TOWER_AT))}
    return out


def hexpos(i, j):
    return (i * HW + (HW / 2 if j % 2 else 0.0), j * RS)


def ribbon(pts, half, z, mat, name, rough=0.0, seed=1):
    """꺾은선을 따라 띠(길·강). 구간마다 사각형 + 꺾이는 곳마다 원을 겹쳐서, 안쪽이 접히지 않게 함."""
    rnd = random.Random(seed)
    bm = bmesh.new()
    cnt = [0]

    def zz():  # 겹친 조각이 같은 높이면 검게 그려지므로 아주 조금씩 높임
        cnt[0] += 1
        return z + cnt[0] * 0.0007

    def quad(a, b, ha, hb):
        tx, ty = b[0] - a[0], b[1] - a[1]
        ln = math.hypot(tx, ty) or 1
        nx, ny = -ty / ln, tx / ln
        h = zz()
        v = [bm.verts.new((a[0] - nx * ha, a[1] - ny * ha, h)), bm.verts.new((b[0] - nx * hb, b[1] - ny * hb, h)),
             bm.verts.new((b[0] + nx * hb, b[1] + ny * hb, h)), bm.verts.new((a[0] + nx * ha, a[1] + ny * ha, h))]
        bm.faces.new(v)

    def disc(c, r):
        n = 16
        h = zz()
        ring = [bm.verts.new((c[0] + math.cos(i / n * 6.2832) * r, c[1] + math.sin(i / n * 6.2832) * r, h)) for i in range(n)]
        bm.faces.new(ring)

    for i in range(len(pts) - 1):
        a, b = pts[i], pts[i + 1]
        n = max(1, int(math.dist(a, b) / 1.2))
        ws = [half + (rnd.uniform(-rough, rough) if rough else 0) for _ in range(n + 1)]
        for k in range(n):
            p0 = (a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n)
            p1 = (a[0] + (b[0] - a[0]) * (k + 1) / n, a[1] + (b[1] - a[1]) * (k + 1) / n)
            quad(p0, p1, ws[k], ws[k + 1])
    for p in pts:
        disc(p, half)
    for f in bm.faces:
        f.normal_update()
        if f.normal.z < 0:
            f.normal_flip()
    me = bpy.data.meshes.new(name); bm.to_mesh(me)
    ob = bpy.data.objects.new(name, me); bpy.context.scene.collection.objects.link(ob)
    me.materials.append(mat)
    return ob


def mat(name, col, rough=0.9, alpha=1.0):
    m = bpy.data.materials.new(name)
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*col, 1)
    b.inputs["Roughness"].default_value = rough
    if alpha < 1:
        b.inputs["Alpha"].default_value = alpha
    return m


def build_ground():
    for j in range(-6, 7):
        for i in range(-7, 7):
            x, y = hexpos(i, j)
            inside = abs(x) <= BX + 1 and abs(y) <= BY + 1.5
            if inside:
                place("tiles/base/hex_grass.gltf", (x, y, 0), 0, S)
            elif abs(x) <= BX + 8 and abs(y) <= BY + 6:
                place("tiles/base/hex_water.gltf", (x, y, -0.15), 0, S)
    bpy.ops.mesh.primitive_plane_add(size=300, location=(0, 0, -1.2))
    bpy.context.active_object.data.materials.append(mat("Sea", (0.16, 0.55, 0.72), 0.35))
    water = mat("River", (0.2, 0.55, 0.78), 0.25)
    for k, (pts, half) in enumerate(RIVERS):
        ribbon(pts, half, 0.02, water, "River%d" % k, 0.15, 5 + k)
    for k, (cx, cy, r) in enumerate(LAKES):
        ribbon([(cx - 0.01, cy), (cx + 0.01, cy)], r, 0.02, water, "Lake%d" % k, 0.0, 30 + k)
    dirt = mat("Dirt", (0.5, 0.33, 0.19))
    for k, (n, pts) in enumerate(LANES.items()):
        ribbon(pts, ROAD_W, 0.05 + k * 0.06, dirt, "Road_" + n, 0.12, 10 + k)


def build_jungle():
    rnd = random.Random(21)
    N = "decoration/nature/"
    big = ["trees_A_large.gltf", "trees_B_large.gltf", "trees_A_medium.gltf", "trees_B_medium.gltf"]
    small = ["tree_single_A.gltf", "tree_single_B.gltf", "trees_A_small.gltf", "trees_B_small.gltf"]
    rocks = ["rock_single_A.gltf", "rock_single_B.gltf", "rock_single_C.gltf", "rock_single_D.gltf"]
    for k in range(900 if not LOW_JUNGLE else 1400):
        p = (rnd.uniform(-BX, BX), rnd.uniform(-BY, BY))
        dl = min(poly_dist(p, pts) for pts in LANES.values())
        dr = min([poly_dist(p, pts) - half + 1.7 for pts, half in RIVERS] + [math.dist(p, (cx, cy)) - r0 + 1.7 for cx, cy, r0 in LAKES] + [99])
        db = min(math.dist(p, b) for b in BASE.values())
        if dl < ROAD_W + (0.7 if LOW_JUNGLE else 1.8) or dr < 2.4 or db < 5:
            continue
        r = rnd.random()
        if JUNGLE == "rocky":   # 바위·베어 낸 나무·작은 덤불
            if r < 0.16:
                place(N + rnd.choice(rocks + ["rock_single_E.gltf"]), (*p, 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.35, 0.65))
            elif r < 0.22:
                place(N + rnd.choice(["trees_A_cut.gltf", "trees_B_cut.gltf", "tree_single_A_cut.gltf"]), (*p, 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.35, 0.5))
            elif r < 0.30:
                place(N + rnd.choice(small), (*p, 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.28, 0.4))
            continue
        if JUNGLE == "forest" and dl > ROAD_W + 1.6 and r < 0.20:   # 숲: 길에서 조금 떨어진 곳은 작은 나무 무리
            place(N + rnd.choice(small), (*p, 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.4, 0.55))
            continue
        if LOW_JUNGLE:   # 낮은 덤불·바위만(길 앞쪽은 더 듬성듬성)
            front = p[1] < min(min(q[1] for q in pts) for pts in LANES.values()) - 0.5
            if r < TREE_P * (0.5 if front else 1):
                place(N + rnd.choice(small), (*p, 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.3, 0.45))
            elif r < TREE_P + 0.10:
                place(N + rnd.choice(rocks), (*p, 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.3, 0.55))
            continue
        if r < 0.08 and dl > 4.5:
            place(N + rnd.choice(big), (*p, 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.6, 0.75))
        elif r < 0.22:
            place(N + rnd.choice(small), (*p, 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.6, 0.85))
        elif r < 0.27:
            place(N + rnd.choice(rocks), (*p, 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.4, 0.7))
    # 섬 둘레 바깥쪽 숲(뒤쪽은 산)
    for k in range(40):
        x = rnd.uniform(-BX - 2, BX + 2)
        place(N + rnd.choice(["hills_A_trees.gltf", "hills_B_trees.gltf", "hills_C_trees.gltf", "trees_A_large.gltf"]),
              (x, BY + rnd.uniform(1.5, 3.5), 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.7, 0.9))
    # 강가 수초
    for pts, half in RIVERS:
        for k in range(18):
            i = rnd.randrange(len(pts) - 1); t = rnd.random(); a, b = pts[i], pts[i + 1]
            q = (a[0] + (b[0] - a[0]) * t + rnd.uniform(-1, 1), a[1] + (b[1] - a[1]) * t + rnd.uniform(-1, 1))
            if min(poly_dist(q, l) for l in LANES.values()) < ROAD_W + 0.8:
                continue
            place(N + rnd.choice(["waterlily_A.gltf", "waterlily_B.gltf", "waterplant_A.gltf"]), (*q, 0.03), rnd.uniform(0, 6.28), S * 0.6)
    for cx, cy, r0 in LAKES:
        for k in range(14):
            a = rnd.uniform(0, 6.28); d = rnd.uniform(0.3, 0.85) * r0
            place(N + rnd.choice(["waterlily_A.gltf", "waterlily_B.gltf", "waterplant_B.gltf"]), (cx + math.cos(a) * d, cy + math.sin(a) * d, 0.03), rnd.uniform(0, 6.28), S * 0.6)
    build_extras(rnd)


def build_extras(rnd):
    """지도마다 다른 꾸밈: 마을, 산, 다리, 언덕, 성벽"""
    N = "decoration/nature/"
    if VILLAGE:   # 파란 본성 뒤 초소 마을
        bx, by = BASE[-1]
        for (dx, dy, m, rot, sc) in [(-0.5, 4.2, "buildings/blue/building_windmill_blue.gltf", 0.3, 2.0), (2.2, 3.6, "buildings/blue/building_home_A_blue.gltf", 0.2, 2.0),
                                      (-0.4, -4.2, "buildings/blue/building_home_B_blue.gltf", -0.4, 2.0), (2.6, -3.8, "decoration/props/tent.gltf", 0.5, 2.4),
                                      (4.4, -3.4, "decoration/props/crate_A_big.gltf", 0.2, 2.0), (4.0, 3.4, "decoration/props/barrel.gltf", 0, 2.2),
                                      (5.0, 3.0, "decoration/props/weaponrack.gltf", 0.9, 2.2)]:
            place(m, (bx + dx, by + dy, 0), rot, sc)
    if MOUNTAINS:   # 뒤쪽(화면 위)과 양옆 끝에만 높은 산(앞쪽 길을 가리지 않게)
        for k in range(16):
            x = -BX + k * (2 * BX / 15) + rnd.uniform(-0.8, 0.8)
            place(N + rnd.choice(["mountain_A.gltf", "mountain_B.gltf", "mountain_C.gltf", "mountain_A_grass.gltf", "mountain_B_grass_trees.gltf"]),
                  (x, BY + rnd.uniform(0.8, 2.2), 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.75, 0.95))
    for (x, y) in HILLS:   # 길 사이 낮은 언덕(굽은 산길을 만든 바위산 느낌)
        place(N + rnd.choice(["hills_A.gltf", "hills_B.gltf", "hills_C.gltf"]), (x, y, 0), rnd.uniform(0, 6.28), S * 0.75)
    if BRIDGES:   # 길이 강을 건너는 곳마다 다리
        for pts, half in RIVERS:
            for lane in LANES.values():
                best = None
                L = lane_len(lane); n = int(L / 0.25)
                for i in range(n + 1):
                    p = lane_point(lane, i * L / n)
                    d = poly_dist(p, pts)
                    if best is None or d < best[0]:
                        best = (d, p, i * L / n)
                if best[0] < half:
                    p, sp = best[1], best[2]
                    q = lane_point(lane, min(L, sp + 0.5))
                    ang = math.atan2(q[1] - p[1], q[0] - p[0])
                    place("buildings/neutral/building_bridge_A.gltf", (p[0], p[1], -0.45), ang - math.pi / 2, 2.9)  # 다리 위가 길 높이와 비슷하게 낮춤
    if WALLS:   # 빨간 본성 둘레 성벽(길이 들어오는 곳은 성문)
        bx, by = BASE[1]
        R = 4.9; n = 15
        for k in range(n):   # 오른쪽 반원(-125°~125°)만: 왼쪽은 세 길이 들어오는 성문 자리
            a = math.radians(-125 + 250 * k / (n - 1))
            x, y = bx + math.cos(a) * R, by + math.sin(a) * R
            if x > BX + 1.5:
                continue
            near_lane = min(poly_dist((x, y), l) for l in LANES.values())
            if near_lane < ROAD_W + 0.3:
                continue
            place("buildings/neutral/wall_straight.gltf", (x, y, 0), a + math.pi / 2, 1.6)


def build_structures():
    """본성·탑과 무너진 모습(게임에서 바꿔 끼움). 이름으로 찾음."""
    out = {}
    for side, col in ((-1, "blue"), (1, "red")):
        bx, by = BASE[side]
        out["base_" + col] = place("buildings/" + col + "/building_castle_" + col + ".gltf", (bx, by, 0), 0, 1.8)
        out["ruin_base_" + col] = place("buildings/neutral/building_destroyed.gltf", (bx, by, 0), side * 0.5, 3.4)
        for lane, pos in towers().items():
            tx, ty = pos[side]
            out[f"tower_{col}_{lane}"] = place("buildings/" + col + "/building_tower_A_" + col + ".gltf", (tx, ty, 0), 0, 2.0)
            out[f"ruin_tower_{col}_{lane}"] = place("buildings/neutral/building_destroyed.gltf", (tx, ty, 0), 0.7, 2.0)
    return out


def tree(root):
    out = [root]
    for c in root.children:
        out += tree(c)
    return out


if __name__ == "__main__":
    mode = sys.argv[1]
    sc = reset()
    lights()
    build_ground(); build_jungle()
    structs = build_structures()
    if mode == "preview":
        for k, r in structs.items():
            if k.startswith("ruin"):
                for o in tree(r): o.hide_render = True
        e = math.radians(ELEV)
        camera((0, 1.5 if LAYOUT == "diag" else 1.0, 0), 1600, 760, 47 if LAYOUT == "diag" else 39)
        sc.cycles.samples = 16
        sc.render.film_transparent = False
        sc.render.filepath = ROOT + "/preview_map_" + LAYOUT + ".png"
        bpy.ops.render.render(write_still=True)
    elif mode == "glb":
        from export_glb import join
        static = [o for o in bpy.data.objects if o.type == 'MESH' and not o.hide_render]
        parts = {k: [o for o in tree(r) if o.type == 'MESH' and not o.hide_render] for k, r in structs.items()}
        part_set = set(o for v in parts.values() for o in v)
        # 건물(본성·탑·폐허)만 하나씩 합치고, 나머지(타일·나무·바위)는 그대로 둠
        # → tools/compress_glb.mjs 가 같은 모형을 한 번만 저장하고 여러 번 그리게(인스턴싱) 바꿈
        keep = []
        for k, objs in parts.items():
            keep.append(join(objs, k))
        part_roots = set(structs.values())
        for o in list(bpy.data.objects):
            if o in keep:
                continue
            if o.hide_render or o.name.startswith("SRC_") or o in part_set or o in part_roots or o.type in ('CAMERA', 'LIGHT'):
                bpy.data.objects.remove(o, do_unlink=True)
        static = [o for o in bpy.data.objects if o.type == 'MESH' and o not in keep]
        keep += static
        bpy.ops.export_scene.gltf(filepath=ROOT + "/game/models/field_" + LAYOUT + ".raw.glb", export_format='GLB', export_animations=False,
                                  export_cameras=False, export_lights=False)
        meta = {"lanes": {k: [list(p) for p in v] for k, v in LANES.items()},
                "towers": {k: {str(s): list(p) for s, p in v.items()} for k, v in towers().items()},
                "bases": {str(s): list(p) for s, p in BASE.items()}, "bounds": [BX, BY], "river": [list(RIVERS[0][0][0]), list(RIVERS[0][0][-1])] if RIVERS else [],
                "labels": LABELS, "mood": MOOD}
        json.dump(meta, open(ROOT + "/game/src/play/map_" + LAYOUT + ".json", "w"), indent=1)
        print("MAP", LAYOUT, os.path.getsize(ROOT + "/game/models/field_" + LAYOUT + ".raw.glb") // 1024, "KB (압축 전)")
