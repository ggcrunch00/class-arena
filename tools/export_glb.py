# A안(실시간 3D)용 모형 내보내기: 전장 한 덩어리 + 유닛 4종(필요한 동작만)
#   python tools/export_glb.py
import sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bpy
from scene_common import *
import build_world as BW
from units import UNITS, build_unit

OUT = ROOT + "/game/models"
os.makedirs(OUT, exist_ok=True)


def join(objs, name):
    """여러 물체를 모양 그대로 하나로 합친다(그리기 횟수를 줄여 가볍게)."""
    bpy.ops.object.select_all(action='DESELECT')
    real = []
    for o in objs:
        if o.type != 'MESH':
            continue
        c = o.copy(); c.data = o.data.copy()
        bpy.context.scene.collection.objects.link(c)
        c.parent = None
        c.matrix_world = o.matrix_world.copy()
        real.append(c)
    for c in real:
        c.select_set(True)
    bpy.context.view_layer.objects.active = real[0]
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    bpy.ops.object.join()
    ob = bpy.context.view_layer.objects.active
    ob.name = name
    return ob


def tree(root):
    out = [root]
    for c in root.children:
        out += tree(c)
    return out


def export_world():
    reset()
    BW.build_ground(); BW.build_road(); BW.build_deco()
    bpy.context.view_layer.update()
    static = [o for o in bpy.data.objects if o.type == 'MESH' and not o.hide_render]
    parts = {"castle_blue": tree(BW.build_castle(-1)), "castle_red": tree(BW.build_castle(1))}
    before = set(bpy.data.objects)
    BW.build_ruin(-1); parts["ruin_blue"] = [o for o in bpy.data.objects if o not in before]
    before = set(bpy.data.objects)
    BW.build_ruin(1); parts["ruin_red"] = [o for o in bpy.data.objects if o not in before]
    bpy.context.view_layer.update()
    keep = [join(static, "field")]
    for n, objs in parts.items():
        keep.append(join([o for o in objs if o.type == 'MESH' and not o.hide_render], n))
    for o in list(bpy.data.objects):
        if o not in keep:
            bpy.data.objects.remove(o, do_unlink=True)
    bpy.ops.export_scene.gltf(filepath=OUT + "/field.glb", export_format='GLB', export_animations=False,
                              export_cameras=False, export_lights=False)
    print("WORLD", os.path.getsize(OUT + "/field.glb") // 1024, "KB",
          sum(len(o.data.vertices) for o in keep), "verts")


def merge_unit(rig):
    """병사 조각(몸통·팔·투구·무기…)을 한 덩어리로 합쳐 그리기 횟수를 줄인다.
    뼈에 붙어 있던 조각(투구·무기)은 그 뼈를 100% 따라가는 피부로 바꾼 뒤 합친다."""
    bpy.context.view_layer.update()
    rig.data.pose_position = 'REST'
    bpy.context.view_layer.update()
    parts = [o for o in bpy.data.objects if o.type == 'MESH' and o.parent is rig]
    for o in parts:
        if o.parent_type == 'BONE':
            bone = o.parent_bone
            mw = o.matrix_world.copy()
            o.parent = None
            o.matrix_world = mw
            o.parent = rig; o.parent_type = 'OBJECT'
            o.matrix_parent_inverse = rig.matrix_world.inverted()
            for vg in list(o.vertex_groups):
                o.vertex_groups.remove(vg)
            vg = o.vertex_groups.new(name=bone)
            vg.add(list(range(len(o.data.vertices))), 1.0, 'REPLACE')
            if not any(m.type == 'ARMATURE' for m in o.modifiers):
                m = o.modifiers.new("Armature", 'ARMATURE'); m.object = rig
    bpy.ops.object.select_all(action='DESELECT')
    for o in parts:
        o.select_set(True)
    body = [o for o in parts if o.name.endswith("_Body")]
    bpy.context.view_layer.objects.active = body[0] if body else parts[0]
    bpy.ops.object.join()
    rig.data.pose_position = 'POSE'
    merged = bpy.context.view_layer.objects.active
    merged.name = "Body"
    return merged, len(parts)


def export_unit(key):
    reset()
    rig = build_unit(key)
    rig.rotation_euler = (0, 0, 0)
    rig.scale = (1, 1, 1)
    merged, n = merge_unit(rig)
    print("MERGED", key, n, "parts ->", len(merged.material_slots), "materials")
    want = set(UNITS[key]["anims"].values())
    for a in list(bpy.data.actions):
        if a.name not in want:
            bpy.data.actions.remove(a)
    rig.animation_data.action = None
    # 동작 이름을 게임에서 쓰는 이름(walk, attack…)으로 바꿔 둔다
    for k, v in UNITS[key]["anims"].items():
        bpy.data.actions[v].name = k
    bpy.ops.export_scene.gltf(filepath=OUT + "/" + key + ".glb", export_format='GLB', export_animations=True,
                              export_animation_mode='ACTIONS', export_cameras=False, export_lights=False)
    print("UNIT", key, os.path.getsize(OUT + "/" + key + ".glb") // 1024, "KB")


if __name__ == "__main__":
    import sys as _s
    if "units" not in _s.argv:
        export_world()
    for k in UNITS:
        export_unit(k)
