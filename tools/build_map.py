# 지도 짓기(3갈래 대각선·펼친 3갈래 + 캠페인 지도 shore·twin·bridge·pass·citadel) (롤처럼 본성이 왼쪽 앞·오른쪽 뒤 모서리, 윗길·가운뎃길·아랫길, 가운데 강, 길 사이 숲)
#   python tools/build_map.py preview [diag|wide]  → 미리보기 그림(preview_map_<지도>.png)
#   python tools/build_map.py glb [diag|wide]      → game/models/field_<지도>.glb + game/src/play/map_<지도>.json
#   diag = 롤처럼 대각선(본성이 왼쪽 앞·오른쪽 뒤 모서리), wide = 펼친 3갈래(본성이 왼쪽·오른쪽 가운데, 옆으로 긴 화면에 맞춤)
import sys, os, math, random, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bpy, bmesh, mathutils
from scene_common import *
import scene_common

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
THEME = "grass"      # grass | snow | swamp | beach (11-07: 팔레트 그림·길·물 색이 바뀜)
SEA_Z = -1.8         # 바다 높이(섬은 0, 둘레가 절벽으로 보임)
BEACON = None        # 등대 불빛 자리(x, y, z)
SEA = None           # 게임 바다 색 {deep, shallow, foam}

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
elif LAYOUT == "swamp":
    # 4장 물안개 늪(11-07): 두 갈래 숲길과 같은 길. 웅덩이·갈대·베어 낸 나무, 탁한 풀빛
    BX, BY = 17.5, 9.0
    BASE = {-1: (-15.5, 0.0), 1: (15.5, 0.0)}
    LANES = {
        "top": [BASE[-1], (-13.0, 4.0), (-7.5, 6.6), (7.5, 6.6), (13.0, 4.0), BASE[1]],
        "bot": [BASE[-1], (-13.0, -4.0), (-7.5, -6.6), (7.5, -6.6), (13.0, -4.0), BASE[1]],
    }
    RIVER = []
    LAKES = [(0.0, 0.0, 4.2), (-9.0, 0.3, 1.7), (9.0, -0.3, 1.7), (-3.0, 9.6, 1.6), (4.5, 9.8, 1.3), (-5.0, -9.6, 1.4), (3.0, -9.8, 1.5)]
    RIVERS = [([(-4.4, 1.6), (-7.6, 0.6)], 0.9), ([(4.4, -1.6), (7.6, -0.6)], 0.9)]
    LOW_JUNGLE = True
    JUNGLE, THEME = "swamp", "swamp"
    LABELS = {"top": "윗갈대길", "bot": "아랫갈대길"}
    MOOD = {"sun": [0.86, 0.96, 0.84], "sunI": 2.9, "hemiSky": [0.62, 0.8, 0.68], "hemiI": 1.2, "bg": "#16241c"}
    SEA = {"deep": "#1d3b33", "shallow": "#4f7a5c", "foam": "#d9e8c8"}
elif LAYOUT == "frost":
    # 6장 서리 고개(11-07): 펼친 3갈래와 같은 길. 눈 덮인 땅·언 강·뒤쪽 설산
    BX, BY = 17.5, 9.6
    BASE = {-1: (-15.5, 0.0), 1: (15.5, 0.0)}
    LANES = {
        "top": [BASE[-1], (-14.2, 4.6), (-11.0, 7.4), (11.0, 7.4), (14.2, 4.6), BASE[1]],
        "mid": [BASE[-1], BASE[1]],
        "bot": [BASE[-1], (-14.2, -4.6), (-11.0, -7.4), (11.0, -7.4), (14.2, -4.6), BASE[1]],
    }
    RIVER = [(-2.5, 11.5), (2.5, -11.5)]
    LOW_JUNGLE = True
    JUNGLE, THEME, MOUNTAINS = "low", "snow", True
    TREE_P = 0.24
    MOOD = {"sun": [1.0, 0.95, 0.88], "sunI": 2.3, "hemiSky": [0.7, 0.8, 1.0], "hemiI": 0.95, "bg": "#1c2633"}
    SEA = {"deep": "#20364d", "shallow": "#6f98b5", "foam": "#f2f8ff"}
elif LAYOUT == "isle":
    # 8장 잊힌 등대섬(11-07): 대각선과 같은 길. 섬 둘레가 모래톱, 뒤쪽 바위섬에 등대
    BX, BY = 21.0, 12.0
    BASE = {-1: (-18.0, -9.5), 1: (18.0, 9.5)}
    LANES = {
        "top": [BASE[-1], (-18.6, -5.0), (-18.6, 7.2), (-16.2, 9.9), (14.0, 10.1), BASE[1]],
        "mid": [BASE[-1], BASE[1]],
        "bot": [BASE[-1], (-14.0, -10.1), (16.2, -9.9), (18.6, -7.2), (18.6, 5.0), BASE[1]],
    }
    RIVER = []
    LAKES = [(-6.0, 4.0, 2.2), (6.0, -4.0, 2.2)]
    LOW_JUNGLE = False
    THEME = "beach"
    BEACON = (-4.0, 12.8)
    MOOD = {"sun": [1.0, 0.78, 0.6], "sunI": 3.1, "hemiSky": [0.85, 0.7, 0.85], "hemiI": 1.2, "bg": "#2a1f33"}
    SEA = {"deep": "#26305a", "shallow": "#5f86a8", "foam": "#fbe9dc"}
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


def theme_atlas(theme):
    """팔레트 그림의 풀·잎 색(초록 계열)을 테마 색으로 바꾼 사본(assets_mod/hexagons_<테마>.png)"""
    import numpy as np
    out = ROOT + "/assets_mod/hexagons_" + theme + ".png"
    img = bpy.data.images.load(ROOT + "/assets_mod/hexagons_medieval.png")
    w, h = img.size
    px = np.array(img.pixels[:]).reshape(h, w, 4)
    r, g, b = px[..., 0], px[..., 1], px[..., 2]
    green = (g > r * 1.08) & (g > b * 0.95)
    lum = (0.3 * r + 0.59 * g + 0.11 * b)[..., None]
    if theme == "snow":
        tgt = np.concatenate([0.56 + lum * 0.3, 0.63 + lum * 0.28, 0.76 + lum * 0.14], -1).clip(0, 1)
    else:   # swamp: 누런 이끼·검푸른 물풀빛
        tgt = np.concatenate([lum * 0.95 + 0.06, lum * 1.05 + 0.08, lum * 0.55 + 0.04], -1).clip(0, 1)
    px[..., :3] = np.where(green[..., None], tgt, px[..., :3])
    img.pixels[:] = px.ravel()
    img.filepath_raw = out; img.file_format = "PNG"; img.save()
    bpy.data.images.remove(img)
    return out

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


def tree(root):
    out = [root]
    for c in root.children:
        out += tree(c)
    return out

# ---------- 섬 모양(11-07): 타일 격자, 섬 안팎, 강이 섬 끝에서 떨어지는 폭포 ----------
GRID = {(i, j): hexpos(i, j) for j in range(-9, 10) for i in range(-10, 10)}
ISLAND = {k for k, (x, y) in GRID.items() if abs(x) <= BX + 1 and abs(y) <= BY + 1.5}
FALLS = []      # [(x, y, 바깥 방향 dx, dy, 반폭)]


def nbrs(i, j):
    d = [(1, 0), (-1, 0), (0, 1), (0, -1)] + ([(1, 1), (1, -1)] if j % 2 else [(-1, 1), (-1, -1)])
    return [(i + a, j + b) for a, b in d]


def tile_of(p):
    j0 = round(p[1] / RS)
    best = None
    for j in (j0 - 1, j0, j0 + 1):
        i0 = round((p[0] - (HW / 2 if j % 2 else 0)) / HW)
        for i in (i0 - 1, i0, i0 + 1):
            x, y = hexpos(i, j)
            d = (x - p[0]) ** 2 + (y - p[1]) ** 2
            if best is None or d < best[0]:
                best = (d, (i, j))
    return best[1]


def on_island(p):
    return tile_of(p) in ISLAND


def clip_river(pts, half):
    """섬 밖으로 나가는 강은 섬 끝에서 자르고(조금 내밀어) 그 자리를 폭포로 기록"""
    dense = []
    for k in range(len(pts) - 1):
        a, b = pts[k], pts[k + 1]
        n = max(1, int(math.dist(a, b) / 0.2))
        for t in range(n):
            dense.append(((a[0] + (b[0] - a[0]) * t / n, a[1] + (b[1] - a[1]) * t / n), k))
    dense.append((pts[-1], len(pts) - 2))
    flags = [on_island(p) for p, _ in dense]
    if all(flags) or not any(flags):
        return pts
    first = flags.index(True); last = len(flags) - 1 - flags[::-1].index(True)
    out = []

    def ext(idx, nb):
        p, q = dense[idx][0], dense[nb][0]
        dx, dy = q[0] - p[0], q[1] - p[1]; L = math.hypot(dx, dy) or 1
        dx, dy = dx / L, dy / L
        e = (p[0] + dx * 0.35, p[1] + dy * 0.35)
        FALLS.append((round(e[0], 3), round(e[1], 3), round(dx, 3), round(dy, 3), half))
        return e
    start = ext(first, first - 1) if first > 0 else dense[0][0]
    end = ext(last, last + 1) if last < len(dense) - 1 else dense[-1][0]
    ka, kb = dense[first][1], dense[last][1]
    out = [start] + [pts[k] for k in range(ka + 1, kb + 1)] + [end]
    return out


def cover_river(pts, half):
    """강폭 전체 밑에 땅 타일이 있게(강 한쪽이 바다 위로 걸쳐 떠 보이지 않게) 섬을 조금 넓힘"""
    orig = set(ISLAND)
    for k in range(len(pts) - 1):
        a, b = pts[k], pts[k + 1]
        L = math.dist(a, b) or 1; n = max(1, int(L / 0.4))
        tx, ty = (b[0] - a[0]) / L, (b[1] - a[1]) / L
        for t in range(n + 1):
            c = (a[0] + (b[0] - a[0]) * t / n, a[1] + (b[1] - a[1]) * t / n)
            if tile_of(c) not in orig:
                continue
            for u in (-1, -0.5, 0.5, 1):
                q = (c[0] - ty * half * 1.15 * u, c[1] + tx * half * 1.15 * u)
                key = tile_of(q)
                if key in GRID and abs(GRID[key][0]) <= BX + 1 + HW * 0.6 and abs(GRID[key][1]) <= BY + 1.5 + RS * 0.6:
                    ISLAND.add(key)


def stretch(pts):
    """강 양끝을 바다 쪽으로 길게 늘림(섬 밖에서 끝나야 폭포 자리를 찾음). 섬 안에서 끝나는 강(늪 물길)은 그대로"""
    pts = list(pts)
    for i0, i1 in ((0, 1), (-1, -2)):
        a, b = pts[i0], pts[i1]
        if abs(a[0]) > BX - 2 or abs(a[1]) > BY - 1:   # 섬 가장자리 가까이에서 끝나는 강만
            L = math.dist(a, b) or 1
            pts[i0] = (a[0] + (a[0] - b[0]) / L * 12, a[1] + (a[1] - b[1]) / L * 12)
    return pts


for k in range(len(RIVERS)):
    pts, half = RIVERS[k]
    pts = stretch(pts)
    cover_river(pts, half)
    RIVERS[k] = (clip_river(pts, half), half)


_mesh_alt = {}


def tile_mat(obj_root, m):
    """타일 재질 바꾸기(같은 재질끼리는 메쉬를 함께 써서 게임에서 한 번에 그림)"""
    for o in tree(obj_root):
        if o.type == 'MESH':
            key = (o.data.name, m.name)
            if key not in _mesh_alt:
                d = o.data.copy(); d.name = "hex_sand"; d.materials.clear(); d.materials.append(m)
                _mesh_alt[key] = d
            o.data = _mesh_alt[key]; o.name = "hex_sand"


def build_ground():
    rnd = random.Random(77)
    for (i, j) in ISLAND:
        place("tiles/base/hex_grass.gltf", (*GRID[(i, j)], 0), 0, S)
    # 섬 둘레: 낮은 단(모래톱·풀 언덕)과 물가 바위 — 네모난 섬 모양을 깨고 절벽 아래를 꾸밈
    ring = {n for k in ISLAND for n in nbrs(*k) if n not in ISLAND and n in GRID}
    sand = mat("Sand", (0.92, 0.8, 0.56), 0.95) if THEME == "beach" else None
    for k in sorted(ring):
        x, y = GRID[k]
        if any(math.dist((x, y), (f[0], f[1])) < 6.5 for f in FALLS):
            continue   # 폭포 떨어지는 자리는 비워 둠
        r = rnd.random()
        if r < (0.8 if THEME == "beach" else 0.42):
            t = place("tiles/base/hex_grass.gltf", (x, y, -0.95 if THEME != "beach" else -1.15), 0, S)
            if sand:
                tile_mat(t, sand); t.name = "P_hex_sand"
            elif rnd.random() < 0.5:
                N = "decoration/nature/"
                place(N + rnd.choice(["rock_single_A.gltf", "rock_single_B.gltf", "tree_single_A.gltf", "trees_B_small.gltf"]),
                      (x + rnd.uniform(-1.5, 1.5), y + rnd.uniform(-1.5, 1.5), -0.95), rnd.uniform(0, 6.28), S * rnd.uniform(0.35, 0.55))
        elif r < 0.75:
            place("decoration/nature/" + rnd.choice(["rock_single_C.gltf", "rock_single_D.gltf", "rock_single_E.gltf"]),
                  (x + rnd.uniform(-1.5, 1.5), y + rnd.uniform(-1.5, 1.5), SEA_Z - 0.3), rnd.uniform(0, 6.28), S * rnd.uniform(0.5, 0.9))
    build_islets(rnd)
    if sys.argv[1] == "preview":   # 게임에서는 바다를 셰이더로 그림(물결·해안 거품)
        bpy.ops.mesh.primitive_plane_add(size=300, location=(0, 0, SEA_Z))
        bpy.context.active_object.data.materials.append(mat("Sea", (0.16, 0.45, 0.62), 0.35))
    wcol = {"snow": (0.62, 0.8, 0.92), "swamp": (0.16, 0.28, 0.2)}.get(THEME, (0.2, 0.55, 0.78))
    water = mat("Ice" if THEME == "snow" else "River", wcol, 0.12 if THEME == "snow" else 0.25)
    for k, (pts, half) in enumerate(RIVERS):
        ribbon(pts, half, 0.02, water, "River%d" % k, 0.15, 5 + k)
    for k, (cx, cy, r) in enumerate(LAKES):
        ribbon([(cx - 0.01, cy), (cx + 0.01, cy)], r, 0.02, water, "Lake%d" % k, 0.0, 30 + k)
    road = {"snow": ("Road_snow", (0.5, 0.44, 0.4)), "swamp": ("Road_swamp", (0.36, 0.28, 0.17)), "beach": ("Dirt", (0.5, 0.33, 0.19))}.get(THEME, ("Dirt", (0.5, 0.33, 0.19)))
    dirt = mat(road[0], road[1])
    for k, (n, pts) in enumerate(LANES.items()):
        ribbon(pts, ROAD_W, 0.05 + k * 0.06, dirt, "Road_" + n, 0.12, 10 + k)


def build_islets(rnd):
    """바다 위 작은 섬 무리(멀리 보이는 군도). 지도마다 같은 자리(씨앗 고정)"""
    N = "decoration/nature/"
    spots = []
    tries = 0
    while len(spots) < 10 and tries < 400:
        tries += 1
        x, y = rnd.uniform(-BX - 30, BX + 30), rnd.uniform(-BY - 16, BY + 30)
        if abs(x) < BX + 11 and abs(y) < BY + 10:
            continue
        if any(math.dist((x, y), q) < 13 for q in spots):
            continue
        spots.append((x, y))
    deco = {"snow": ["mountain_A.gltf", "mountain_B.gltf", "trees_A_medium.gltf", "rock_single_E.gltf"],
            "swamp": ["trees_B_medium.gltf", "waterplant_C.gltf", "tree_single_B_cut.gltf", "hills_B_trees.gltf"],
            "beach": ["rock_single_E.gltf", "trees_A_small.gltf", "hills_A.gltf", "rock_single_C.gltf"]}.get(THEME,
            ["hills_A_trees.gltf", "hills_C_trees.gltf", "trees_A_large.gltf", "mountain_C_grass_trees.gltf"])
    for n, (x, y) in enumerate(spots):
        k0 = tile_of((x, y)); cells = [k0] + rnd.sample(nbrs(*k0), rnd.randint(0, 2))
        for c in cells:
            if c not in GRID:
                continue
            cx, cy = GRID[c]
            place("tiles/base/hex_grass.gltf", (cx, cy, -1.05), 0, S)
            if rnd.random() < 0.85:
                place(N + rnd.choice(deco), (cx + rnd.uniform(-0.8, 0.8), cy + rnd.uniform(-0.8, 0.8), -1.05), rnd.uniform(0, 6.28), S * rnd.uniform(0.6, 0.85))
        if n % 4 == 1 and THEME in ("grass", "beach"):   # 몇 섬에는 작은 집·풍차(사람 사는 군도)
            cx, cy = GRID[k0]
            place(rnd.choice(["buildings/blue/building_home_A_blue.gltf", "buildings/blue/building_windmill_blue.gltf", "buildings/blue/building_well_blue.gltf"]),
                  (cx + 1.2, cy - 1.0, -1.05), rnd.uniform(0, 6.28), 2.0)
    if BEACON:   # 등대섬: 섬 뒤쪽(윗길 너머)에 등대(탑 받침 + 탑), 둘레 바위
        bx, by = BEACON
        place("buildings/yellow/building_tower_B_yellow.gltf", (bx, by, 0), 0, 1.9)   # 노란 지붕: 적 탑(빨강)과 헷갈리지 않게
        for q in range(5):
            place(N + "rock_single_" + "ABCDE"[q] + ".gltf", (bx + math.cos(q * 1.3 + 0.4) * 2.6, by + math.sin(q * 1.3 + 0.4) * 2.0, 0), q, S * 0.42)
        globals()["BEACON"] = (bx, by, 5.6)
    # 하늘에 뜬 구름(섬 바깥 바다 위만: 길을 가리지 않게)
    for k in range(7):
        side = k % 4
        x = rnd.uniform(-BX - 26, BX + 26) if side < 2 else (rnd.choice([-1, 1]) * rnd.uniform(BX + 8, BX + 22))
        y = (BY + rnd.uniform(6, 20)) if side < 2 else rnd.uniform(-BY, BY + 10)
        c = place(N + rnd.choice(["cloud_big.gltf", "cloud_small.gltf"]), (x, y, rnd.uniform(9, 13)), rnd.uniform(0, 6.28), S * rnd.uniform(0.9, 1.4))
        c.name = "P_cloud_%d" % k


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
        db = min([math.dist(p, b) for b in BASE.values()] + ([math.dist(p, BEACON[:2]) + 1.5] if BEACON else []))
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
        if JUNGLE == "swamp":   # 늪: 갈대·수초 무리, 베어 낸 나무, 드문 작은 나무
            if r < 0.16:
                place(N + rnd.choice(["waterplant_A.gltf", "waterplant_B.gltf", "waterplant_C.gltf"]), (*p, 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.55, 0.8))
            elif r < 0.21:
                place(N + rnd.choice(["trees_A_cut.gltf", "trees_B_cut.gltf", "tree_single_B_cut.gltf"]), (*p, 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.4, 0.55))
            elif r < 0.27:
                place(N + rnd.choice(["tree_single_B.gltf", "trees_B_small.gltf"]), (*p, 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.35, 0.5))
            elif r < 0.31:
                place(N + rnd.choice(rocks), (*p, 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.3, 0.5))
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


_proto = {}


def proto(name, kind, col):
    """풀포기·들꽃 원형 메쉬(한 번만 만들고 여러 번 놓음 → 게임에서 한 번에 그림)"""
    if name in _proto:
        return _proto[name]
    bm = bmesh.new()
    if kind == "tuft":   # 가는 잎 다섯 장이 둥글게 퍼진 풀포기
        for k in range(7):
            a = k / 7 * 6.2832 + 0.3; h = 0.36 + 0.14 * (k % 3) / 2
            dx, dy = math.cos(a), math.sin(a)
            v = [bm.verts.new((-dy * 0.09, dx * 0.09, 0)), bm.verts.new((dy * 0.09, -dx * 0.09, 0)), bm.verts.new((dx * 0.26, dy * 0.26, h))]
            bm.faces.new(v)
    elif kind == "reed":  # 키 큰 갈대(늪)
        for k in range(4):
            a = k / 4 * 6.2832; h = 0.9 + 0.2 * (k % 2)
            dx, dy = math.cos(a), math.sin(a)
            v = [bm.verts.new((-dy * 0.04, dx * 0.04, 0)), bm.verts.new((dy * 0.04, -dx * 0.04, 0)), bm.verts.new((dx * 0.12, dy * 0.12, h))]
            bm.faces.new(v)
    else:                # 들꽃: 줄기 + 꽃잎 네 장(납작한 마름모)
        v = [bm.verts.new((-0.015, 0, 0)), bm.verts.new((0.015, 0, 0)), bm.verts.new((0, 0.01, 0.3))]; bm.faces.new(v)
        for k in range(4):
            a = k / 4 * 6.2832; dx, dy = math.cos(a) * 0.09, math.sin(a) * 0.09
            v = [bm.verts.new((0, 0, 0.3)), bm.verts.new((dx * 0.6 - dy * 0.4, dy * 0.6 + dx * 0.4, 0.31)), bm.verts.new((dx, dy, 0.32)), bm.verts.new((dx * 0.6 + dy * 0.4, dy * 0.6 - dx * 0.4, 0.31))]
            bm.faces.new(v)
    for f in bm.faces:
        f.normal_update()
    me = bpy.data.meshes.new(name); bm.to_mesh(me); bm.free()
    me.materials.append(mat(name, col, 0.95))
    _proto[name] = me
    return me


def build_tufts(rnd):
    """섬 풀밭에 풀포기·들꽃(11-07: 넓은 단색 풀밭이 밋밋하던 것). 길·물·본성·탑 둘레는 비움. 게임에서 바람에 흔들림"""
    # 색은 선형값(화면에선 더 밝게 보임): 바닥 풀빛보다 조금 짙게
    kinds = {"grass": [("Tuft_A", "tuft", (0.07, 0.2, 0.025), 420), ("Tuft_B", "tuft", (0.13, 0.27, 0.035), 300), ("Flower_W", "flower", (0.85, 0.82, 0.72), 70),
                       ("Flower_Y", "flower", (0.95, 0.55, 0.04), 70), ("Flower_P", "flower", (0.8, 0.2, 0.35), 50)],
             "swamp": [("Tuft_S", "tuft", (0.09, 0.14, 0.035), 380), ("Reed", "reed", (0.2, 0.2, 0.06), 260), ("Flower_W", "flower", (0.8, 0.8, 0.7), 30)],
             "snow": [("Tuft_F", "tuft", (0.35, 0.42, 0.45), 160)],
             "beach": [("Tuft_A", "tuft", (0.08, 0.21, 0.03), 360), ("Tuft_B", "tuft", (0.15, 0.28, 0.04), 260), ("Flower_Y", "flower", (0.95, 0.55, 0.04), 60),
                       ("Flower_P", "flower", (0.8, 0.2, 0.35), 60)]}[THEME]
    towers_xy = [p for v in towers().values() for p in v.values()]
    keys = sorted(ISLAND)
    for name, kind, col, n in kinds:
        me = proto(name, kind, col)
        placed = tries = 0
        while placed < n and tries < n * 8:
            tries += 1
            cx, cy = GRID[rnd.choice(keys)]
            p = (cx + rnd.uniform(-3, 3), cy + rnd.uniform(-3, 3))
            if not on_island(p) or abs(p[0]) > BX + 1.5 or abs(p[1]) > BY + 2.5:
                continue
            if min(poly_dist(p, pts) for pts in LANES.values()) < ROAD_W + 0.35:
                continue
            if any(poly_dist(p, pts) < h + 0.3 for pts, h in RIVERS) or any(math.dist(p, (x, y)) < r0 + 0.3 for x, y, r0 in LAKES):
                if kind != "reed":
                    continue
            elif kind == "reed" and rnd.random() < 0.6:
                continue   # 갈대는 물가에 많이
            if min(math.dist(p, b) for b in BASE.values()) < 3.2 or min(math.dist(p, t) for t in towers_xy) < 1.4:
                continue
            ob = bpy.data.objects.new(name, me); bpy.context.scene.collection.objects.link(ob)
            sc = rnd.uniform(0.8, 1.35); ob.location = (*p, 0.0); ob.rotation_euler = (0, 0, rnd.uniform(0, 6.28)); ob.scale = (sc, sc, sc * rnd.uniform(0.85, 1.2))
            placed += 1


def build_camps(rnd):
    """양쪽 본성 둘레 야영지(11-07): 기사단은 천막·파란 깃발·무기대·과녁, 해골 군단은 부서진 공사장·빨간 깃발·투석기 탄·잘린 나무"""
    P = "decoration/props/"
    kits = {-1: [P + "tent.gltf", P + "flag_blue.gltf", P + "weaponrack.gltf", P + "target.gltf", P + "barrel.gltf", P + "crate_A_big.gltf",
                 P + "bucket_arrows.gltf", P + "flag_blue.gltf", P + "sack.gltf", P + "crate_long_A.gltf"],
            1: ["buildings/neutral/building_scaffolding.gltf", P + "flag_red.gltf", "buildings/neutral/projectile_catapult.gltf", P + "crate_open.gltf",
                "decoration/nature/trees_A_cut.gltf", P + "flag_red.gltf", P + "resource_stone.gltf", P + "pallet.gltf", "decoration/nature/rock_single_D.gltf", P + "wheelbarrow.gltf"]}
    scale = {"tent.gltf": 2.2, "building_scaffolding.gltf": 1.6, "target.gltf": 2.2, "weaponrack.gltf": 2.2, "trees_A_cut.gltf": S * 0.45, "rock_single_D.gltf": S * 0.45}
    for side, kit in kits.items():
        bx, by = BASE[side]
        n = 0
        for tries in range(400):
            if n >= len(kit):
                break
            a = rnd.uniform(0, 6.283); d = rnd.uniform(3.3, 6.2)
            p = (bx + math.cos(a) * d, by + math.sin(a) * d)
            if not on_island(p) or abs(p[0]) > BX + 2 or abs(p[1]) > BY + 2:
                continue
            if min(poly_dist(p, pts) for pts in LANES.values()) < ROAD_W + 0.9:
                continue
            if any(poly_dist(p, pts) < h + 0.8 for pts, h in RIVERS) or any(math.dist(p, (cx, cy)) < r0 + 0.8 for cx, cy, r0 in LAKES):
                continue
            m = kit[n]; name = m.split("/")[-1]
            place(m, (*p, 0), rnd.uniform(0, 6.28), scale.get(name, 2.0))
            n += 1


def build_extras(rnd):
    """지도마다 다른 꾸밈: 마을, 산, 다리, 언덕, 성벽"""
    N = "decoration/nature/"
    build_camps(rnd)
    build_tufts(rnd)
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



if __name__ == "__main__":
    mode = sys.argv[1]
    sc = reset()
    if THEME in ("snow", "swamp"):
        scene_common.MOD_TEX = theme_atlas(THEME)
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
                "labels": LABELS, "mood": MOOD, "theme": THEME, "seaZ": SEA_Z, "sea": SEA, "falls": FALLS,
                "beacon": list(BEACON) if BEACON and len(BEACON) == 3 else None}
        json.dump(meta, open(ROOT + "/game/src/play/map_" + LAYOUT + ".json", "w"), indent=1)
        print("MAP", LAYOUT, os.path.getsize(ROOT + "/game/models/field_" + LAYOUT + ".raw.glb") // 1024, "KB (압축 전)")
