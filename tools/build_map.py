# 3갈래 대각선 지도 짓기 (롤처럼 본성이 왼쪽 앞·오른쪽 뒤 모서리, 윗길·가운뎃길·아랫길, 가운데 강, 길 사이 숲)
#   python tools/build_map.py preview   → 미리보기 그림(preview_map.png)
#   python tools/build_map.py glb       → game/models/field.glb + game/src/play/map.json
import sys, os, math, random, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bpy, bmesh, mathutils
from scene_common import *

S = 3.0                       # 육각 타일 확대 배율
HW, RS = 2.0 * S, 1.725 * S   # 타일 가로, 줄 간격
BX, BY = 21.0, 12.0           # 섬(풀밭) 반폭·반깊이
BASE = {-1: (-18.0, -9.5), 1: (18.0, 9.5)}
ROAD_W = 1.6                  # 길 반폭
TOWER_AT = 0.36               # 탑 위치: 자기 본성에서 길 길이의 36%

# 길: 파란 본성 → 빨간 본성 방향의 꺾은선
LANES = {
    "top": [BASE[-1], (-18.6, -5.0), (-18.6, 7.2), (-16.2, 9.9), (14.0, 10.1), BASE[1]],
    "mid": [BASE[-1], BASE[1]],
    "bot": [BASE[-1], (-14.0, -10.1), (16.2, -9.9), (18.6, -7.2), (18.6, 5.0), BASE[1]],
}
RIVER = [(-23.0, 13.2), (23.0, -13.2)]  # 강: 반대 대각선


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
    for j in range(-5, 6):
        for i in range(-6, 6):
            x, y = hexpos(i, j)
            inside = abs(x) <= BX + 1 and abs(y) <= BY + 1.5
            if inside:
                place("tiles/base/hex_grass.gltf", (x, y, 0), 0, S)
            elif abs(x) <= BX + 8 and abs(y) <= BY + 6:
                place("tiles/base/hex_water.gltf", (x, y, -0.15), 0, S)
    bpy.ops.mesh.primitive_plane_add(size=300, location=(0, 0, -1.2))
    bpy.context.active_object.data.materials.append(mat("Sea", (0.16, 0.55, 0.72), 0.35))
    ribbon(RIVER, 1.7, 0.02, mat("River", (0.2, 0.55, 0.78), 0.25), "River", 0.15, 5)
    dirt = mat("Dirt", (0.5, 0.33, 0.19))
    for k, (n, pts) in enumerate(LANES.items()):
        ribbon(pts, ROAD_W, 0.05 + k * 0.06, dirt, "Road_" + n, 0.12, 10 + k)


def build_jungle():
    rnd = random.Random(21)
    N = "decoration/nature/"
    big = ["trees_A_large.gltf", "trees_B_large.gltf", "trees_A_medium.gltf", "trees_B_medium.gltf"]
    small = ["tree_single_A.gltf", "tree_single_B.gltf", "trees_A_small.gltf", "trees_B_small.gltf"]
    rocks = ["rock_single_A.gltf", "rock_single_B.gltf", "rock_single_C.gltf", "rock_single_D.gltf"]
    for k in range(900):
        p = (rnd.uniform(-BX, BX), rnd.uniform(-BY, BY))
        dl = min(poly_dist(p, pts) for pts in LANES.values())
        dr = seg_dist(p, *RIVER)
        db = min(math.dist(p, b) for b in BASE.values())
        if dl < ROAD_W + 1.8 or dr < 2.4 or db < 5:
            continue
        r = rnd.random()
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
    for k in range(18):
        t = rnd.random(); a, b = RIVER
        place(N + rnd.choice(["waterlily_A.gltf", "waterlily_B.gltf", "waterplant_A.gltf"]),
              (a[0] + (b[0] - a[0]) * t + rnd.uniform(-1, 1), a[1] + (b[1] - a[1]) * t + rnd.uniform(-1, 1), 0.03), rnd.uniform(0, 6.28), S * 0.6)


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
    mode = sys.argv[-1]
    sc = reset()
    lights()
    build_ground(); build_jungle()
    structs = build_structures()
    if mode == "preview":
        for k, r in structs.items():
            if k.startswith("ruin"):
                for o in tree(r): o.hide_render = True
        e = math.radians(ELEV)
        camera((0, 1.5, 0), 1600, 760, 47)
        sc.cycles.samples = 16
        sc.render.film_transparent = False
        sc.render.filepath = ROOT + "/preview_map.png"
        bpy.ops.render.render(write_still=True)
    elif mode == "glb":
        from export_glb import join
        static = [o for o in bpy.data.objects if o.type == 'MESH' and not o.hide_render]
        parts = {k: [o for o in tree(r) if o.type == 'MESH' and not o.hide_render] for k, r in structs.items()}
        part_set = set(o for v in parts.values() for o in v)
        keep = [join([o for o in static if o not in part_set], "field")]
        for k, objs in parts.items():
            keep.append(join(objs, k))
        for o in list(bpy.data.objects):
            if o not in keep:
                bpy.data.objects.remove(o, do_unlink=True)
        bpy.ops.export_scene.gltf(filepath=ROOT + "/game/models/field.glb", export_format='GLB', export_animations=False,
                                  export_cameras=False, export_lights=False)
        meta = {"lanes": {k: [list(p) for p in v] for k, v in LANES.items()},
                "towers": {k: {str(s): list(p) for s, p in v.items()} for k, v in towers().items()},
                "bases": {str(s): list(p) for s, p in BASE.items()}, "bounds": [BX, BY], "river": [list(p) for p in RIVER]}
        json.dump(meta, open(ROOT + "/game/src/play/map.json", "w"), indent=1)
        print("MAP", os.path.getsize(ROOT + "/game/models/field.glb") // 1024, "KB", sum(len(o.data.vertices) for o in keep), "verts")
