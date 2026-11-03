# 전장(배경) 짓기. 육각 타일을 3배로 키워 깔고, 가운데 줄에 길, 양 끝에 성.
#   python tools/build_world.py preview   → 작은 미리보기
#   python tools/build_world.py bake      → 배경·성·폐허 그림 굽기
#   python tools/build_world.py glb       → 실시간 3D(A안)용 전장 모형 내보내기
import sys, os, math, random, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bpy
from scene_common import *

S = 3.0                 # 타일 확대 배율
HW = 2.0 * S            # 타일 가로(평평한 면 사이)
RS = 1.725 * S          # 줄 간격
CASTLE_X = 13.5
OUT = ROOT + "/game/assets"


def hexpos(i, j):
    return (i * HW + (HW / 2 if j % 2 else 0.0), j * RS, 0.0)


def build_ground():
    rnd = random.Random(7)
    for j in range(-3, 7):
        for i in range(-5, 6):
            x, y, z = hexpos(i, j)
            if j == -3:
                place("tiles/base/hex_water.gltf", (x, y, -0.15), 0, S)
            else:
                place("tiles/base/hex_grass.gltf", (x, y, 0), 0, S)
    # 바다(타일 바깥을 채우는 큰 물 판)
    bpy.ops.mesh.primitive_plane_add(size=400, location=(0, -60, -1.2))
    sea = bpy.context.active_object
    m = bpy.data.materials.new("Sea"); m.use_nodes = True
    bsdf = m.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = (0.16, 0.55, 0.72, 1)
    bsdf.inputs["Roughness"].default_value = 0.35
    sea.data.materials.append(m)


def build_road():
    """유닛이 걷는 넓은 흙길(가장자리를 살짝 울퉁불퉁하게)."""
    import bmesh
    rnd = random.Random(3)
    bm = bmesh.new()
    n = 120
    x0, x1 = -CASTLE_X - 2, CASTLE_X + 2
    top, bot = [], []
    for k in range(n + 1):
        x = x0 + (x1 - x0) * k / n
        w = 2.0 + 0.18 * math.sin(x * 0.9) + rnd.uniform(-0.08, 0.08)
        top.append(bm.verts.new((x, w + 0.25, 0.012)))
        bot.append(bm.verts.new((x, -w + 0.25, 0.012)))
    for k in range(n):
        bm.faces.new((bot[k], bot[k + 1], top[k + 1], top[k]))
    me = bpy.data.meshes.new("Road"); bm.to_mesh(me)
    ob = bpy.data.objects.new("Road", me); bpy.context.scene.collection.objects.link(ob)
    m = bpy.data.materials.new("Dirt")
    nt = m.node_tree
    bsdf = nt.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = (0.5, 0.33, 0.19, 1)  # 실시간 3D(A안)는 이 한 가지 색만 씀
    bsdf.inputs["Roughness"].default_value = 0.95
    # 구운 그림(B안)용: 얼룩진 흙 + 바퀴 자국
    coord = nt.nodes.new("ShaderNodeTexCoord")
    noise = nt.nodes.new("ShaderNodeTexNoise"); noise.inputs["Scale"].default_value = 1.6; noise.inputs["Detail"].default_value = 6
    ramp = nt.nodes.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].position = 0.35; ramp.color_ramp.elements[0].color = (0.42, 0.27, 0.15, 1)
    ramp.color_ramp.elements[1].position = 0.7; ramp.color_ramp.elements[1].color = (0.62, 0.43, 0.25, 1)
    sep = nt.nodes.new("ShaderNodeSeparateXYZ")
    rut = nt.nodes.new("ShaderNodeMath"); rut.operation = 'PINGPONG'; rut.inputs[1].default_value = 0.55
    rut2 = nt.nodes.new("ShaderNodeMapRange"); rut2.inputs[1].default_value = 0.0; rut2.inputs[2].default_value = 0.12
    rut2.inputs[3].default_value = 0.72; rut2.inputs[4].default_value = 1.0
    mix = nt.nodes.new("ShaderNodeMix"); mix.data_type = 'RGBA'; mix.blend_type = 'MULTIPLY'; mix.inputs["Factor"].default_value = 1.0
    bump = nt.nodes.new("ShaderNodeBump"); bump.inputs["Strength"].default_value = 0.35
    nt.links.new(coord.outputs["Object"], noise.inputs["Vector"])
    nt.links.new(noise.outputs["Fac"], ramp.inputs["Fac"])
    nt.links.new(coord.outputs["Object"], sep.inputs[0])
    nt.links.new(sep.outputs["Y"], rut.inputs[0])
    nt.links.new(rut.outputs[0], rut2.inputs[0])
    nt.links.new(ramp.outputs["Color"], mix.inputs[6])
    nt.links.new(rut2.outputs[0], mix.inputs[7])
    nt.links.new(ramp.outputs["Color"], bsdf.inputs["Base Color"])  # 줄무늬(바퀴 자국)는 판자처럼 보여서 뺌
    nt.links.new(noise.outputs["Fac"], bump.inputs["Height"])
    nt.links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    me.materials.append(m)
    # 길 위 잔돌
    for k in range(60):
        place("decoration/nature/rock_single_" + rnd.choice("ABCDE") + ".gltf",
              (rnd.uniform(x0 + 2, x1 - 2), 0.25 + rnd.uniform(-1.8, 1.8), 0), rnd.uniform(0, 6.28), rnd.uniform(0.15, 0.28))
    # 길 가장자리 자갈
    for k in range(70):
        x = rnd.uniform(x0 + 2, x1 - 2); side = rnd.choice((-1, 1))
        place("decoration/nature/rock_single_" + rnd.choice("ABCDE") + ".gltf", (x, 0.25 + side * rnd.uniform(2.0, 2.4), 0), rnd.uniform(0, 6.28), rnd.uniform(0.35, 0.6))


def build_deco():
    rnd = random.Random(11)
    N = "decoration/nature/"
    P = "decoration/props/"
    # 뒤쪽 산과 숲 (화면 위쪽을 가득 채움)
    backs = ["mountain_A_grass_trees.gltf", "mountain_B_grass_trees.gltf", "mountain_C_grass_trees.gltf",
             "hills_A_trees.gltf", "hills_B_trees.gltf", "hills_C_trees.gltf"]
    for j in (5, 6):
        for i in range(-5, 6):
            x, y, _ = hexpos(i, j)
            place(N + rnd.choice(backs[:3] if j == 6 else backs), (x + rnd.uniform(-1, 1), y + rnd.uniform(-1, 1), 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.9, 1.15))
    trees = ["trees_A_large.gltf", "trees_B_large.gltf", "trees_A_medium.gltf", "trees_B_medium.gltf"]
    for j in (3, 4):
        for i in range(-5, 6):
            x, y, _ = hexpos(i, j)
            for k in range(2):
                place(N + rnd.choice(trees), (x + rnd.uniform(-2, 2), y + rnd.uniform(-1.5, 1.5), 0), rnd.uniform(0, 6.28), S * rnd.uniform(1.0, 1.3))
    # 길 바로 뒤 줄(1~2): 듬성듬성 나무·바위, 성 옆엔 진영 소품
    for j in (1, 2):
        for i in range(-5, 6):
            x, y, _ = hexpos(i, j)
            if abs(x) > 12:
                continue
            if rnd.random() < 0.55:
                place(N + rnd.choice(["tree_single_A.gltf", "tree_single_B.gltf", "trees_A_small.gltf", "trees_B_small.gltf"]),
                      (x + rnd.uniform(-2, 2), max(y + rnd.uniform(-1, 1), 4.0), 0), rnd.uniform(0, 6.28), S * rnd.uniform(1.0, 1.4))
            if rnd.random() < 0.5:
                place(N + rnd.choice(["rock_single_A.gltf", "rock_single_B.gltf", "rock_single_C.gltf"]),
                      (x + rnd.uniform(-2, 2), max(y + rnd.uniform(-1, 1), 3.5), 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.8, 1.2))
    # 진영 소품 (성 뒤·옆)
    for side, col in ((-1, "blue"), (1, "red")):
        cx = side * CASTLE_X
        place(P + "tent.gltf", (cx - side * 7.5, 6.5, 0), side * 0.4, S * 0.9)
        place(P + "weaponrack.gltf", (cx - side * 9.5, 7.0, 0), 0.3, S * 1.1)
        place(P + "crate_A_big.gltf", (cx - side * 4.6, 6.2, 0), 0.5, S * 0.9)
        place(P + "barrel.gltf", (cx - side * 5.4, 5.0, 0), 0, S * 1.0)
    # 앞쪽 줄(-1, -2): 낮은 것만 (배경이 유닛보다 뒤에 그려지므로 키 큰 것은 금지)
    for j in (-1, -2):
        for i in range(-5, 6):
            x, y, _ = hexpos(i, j)
            if rnd.random() < 0.45:
                place(N + rnd.choice(["rock_single_D.gltf", "rock_single_E.gltf", "rock_single_A.gltf"]),
                      (x + rnd.uniform(-2, 2), min(y + rnd.uniform(-1, 1), -4.0), 0), rnd.uniform(0, 6.28), S * rnd.uniform(0.5, 0.8))
            if rnd.random() < 0.35:
                place(N + rnd.choice(["trees_A_small.gltf", "trees_B_small.gltf"]),
                      (x + rnd.uniform(-2, 2), min(y + rnd.uniform(-1, 1), -6.5), 0), rnd.uniform(0, 6.28), S * 0.7)
    for i in range(-5, 6):
        x, y, _ = hexpos(i, -3)
        if rnd.random() < 0.5:
            place(N + rnd.choice(["waterlily_A.gltf", "waterlily_B.gltf", "waterplant_A.gltf"]), (x + rnd.uniform(-2, 2), y, -0.15), rnd.uniform(0, 6.28), S)


def build_castle(side):
    col = "blue" if side < 0 else "red"
    return place("buildings/" + col + "/building_castle_" + col + ".gltf", (side * CASTLE_X, 0.9, 0), 0, 2.1)


def build_ruin(side):
    root = place("buildings/neutral/building_destroyed.gltf", (side * CASTLE_X, 0.6, 0), side * 0.5, 4.2)
    place("decoration/props/crate_B_small.gltf", (side * CASTLE_X - 2.5, -1.4, 0), 0.7, 2.5)
    place("decoration/nature/rock_single_C.gltf", (side * CASTLE_X + 2.2, -1.0, 0), 1.2, 2.5)
    return root


def objs_under(root):
    out = []
    def rec(o):
        out.append(o)
        for c in o.children:
            rec(c)
    rec(root)
    return out


def bbox_px(objs):
    """물체들이 배경 그림에서 차지하는 픽셀 영역(여유 포함)."""
    from bpy_extras.object_utils import world_to_camera_view
    sc = bpy.context.scene
    bpy.context.view_layer.update()
    xs, ys = [], []
    for o in objs:
        if o.type != 'MESH':
            continue
        for c in o.bound_box:
            p = world_to_camera_view(sc, sc.camera, o.matrix_world @ mathutils.Vector(c))
            xs.append(p.x); ys.append(p.y)
    pad = 0.03
    return max(min(xs) - pad, 0), min(max(xs) + pad * 2.2, 1), max(min(ys) - pad, 0), min(max(ys) + pad, 1)


def setup(samples):
    sc = reset()
    sc.cycles.samples = samples
    lights()
    camera(TARGET, W, H, W / PPU)
    return sc


if __name__ == "__main__":
    mode = sys.argv[-1]
    os.makedirs(OUT, exist_ok=True)
    if mode == "preview":
        sc = setup(16)
        build_ground(); build_road(); build_deco()
        castles = [build_castle(-1), build_castle(1)]
        from units import build_unit
        for k, (key, x) in enumerate((("knight", -6), ("mage", -8), ("skel_warrior", 6), ("skel_mage", 8))):
            rig = build_unit(key)
            rig.location = (x, 0.5 * (k % 2), 0)
        sc.render.resolution_percentage = 33
        sc.render.film_transparent = False
        sc.render.filepath = ROOT + "/preview_world.png"
        bpy.ops.render.render(write_still=True)
    elif mode == "bake":
        meta = {}
        sc = setup(40)
        build_ground(); build_road(); build_deco()
        sc.render.film_transparent = False
        sc.render.filepath = OUT + "/bg.png"
        bpy.ops.render.render(write_still=True)
        # 성·폐허는 배경 위치 그대로 잘라서 따로 굽는다(같은 카메라 → 정확히 겹침)
        world_objs = [o for o in bpy.data.objects if o.type not in ('CAMERA', 'LIGHT')]
        for o in world_objs:
            o.hide_render = True
        catcher = shadow_catcher(200, 0.0)
        sc.render.film_transparent = True
        sc.cycles.samples = 32
        for name, fn, side in (("castle_blue", build_castle, -1), ("castle_red", build_castle, 1),
                               ("ruin_blue", build_ruin, -1), ("ruin_red", build_ruin, 1)):
            root = fn(side)
            objs = objs_under(root)
            # 폐허는 소품까지 포함
            if name.startswith("ruin"):
                objs = [o for o in bpy.data.objects if o.hide_render is False and o.type == 'MESH' and o.name != "ShadowCatcher"]
            x0, x1, y0, y1 = bbox_px(objs)
            sc.render.use_border = True
            sc.render.use_crop_to_border = True
            sc.render.border_min_x, sc.render.border_max_x = x0, x1
            sc.render.border_min_y, sc.render.border_max_y = y0, y1
            sc.render.filepath = OUT + "/" + name + ".png"
            bpy.ops.render.render(write_still=True)
            # 그림 왼쪽 위 모서리가 배경의 어느 픽셀인지 기록
            meta[name] = {"x": round(x0 * W), "y": round((1 - y1) * H)}
            for o in objs_under(root) if not name.startswith("ruin") else objs:
                o.hide_render = True
        sc.render.use_border = False
        json.dump(meta, open(OUT + "/world_meta.json", "w"), indent=1)
        print("META", meta)
