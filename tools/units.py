# 유닛(캐릭터) 설정: 어떤 모형, 어떤 무기, 어떤 동작을 쓸지
import bpy, math, mathutils
from scene_common import ADV, SKL

UNITS = {
    "knight": {"file": ADV + "Characters/gltf/Knight.glb", "keep": ["1H_Sword", "Badge_Shield"], "face": 1,
               "anims": {"walk": "Walking_A", "attack": "1H_Melee_Attack_Chop", "death": "Death_A", "cheer": "Cheer"}},
    "mage": {"file": ADV + "Characters/gltf/Mage.glb", "keep": ["2H_Staff"], "face": 1,
             "anims": {"walk": "Walking_A", "attack": "Spellcast_Shoot", "death": "Death_A", "cheer": "Cheer"}},
    "skel_warrior": {"file": SKL + "Characters/gltf/Skeleton_Warrior.glb", "face": -1,
                     "attach": [("Skeleton_Blade", "handslot.r", (0, -0.0787, 0), (0, 0, -0.7071, -0.7071)),
                                ("Skeleton_Shield_Small_A", "handslot.l", (0, -0.095, 0.1559), (0.7071, -0.7071, 0, 0))],
                     "anims": {"walk": "Walking_D_Skeletons", "attack": "1H_Melee_Attack_Chop", "death": "Death_C_Skeletons",
                               "cheer": "Cheer", "spawn": "Spawn_Ground_Skeletons"}},
    "skel_mage": {"file": SKL + "Characters/gltf/Skeleton_Mage.glb", "face": -1,
                  "attach": [("Skeleton_Staff", "handslot.r", (0, -0.112, 0), (0, 0, -0.7071, -0.7071))],
                  "anims": {"walk": "Walking_D_Skeletons", "attack": "Spellcast_Shoot", "death": "Death_C_Skeletons",
                            "cheer": "Cheer", "spawn": "Spawn_Ground_Skeletons"}},
}
UNIT_SCALE = 1.35  # 성·나무보다 캐릭터를 조금 크게(태블릿에서 잘 보이게)
FACE_DEG = 65  # 옆을 보되 카메라 쪽으로 25도 돌려 얼굴이 보이게


def build_unit(key):
    u = UNITS[key]
    before = set(bpy.data.objects)
    bpy.ops.import_scene.gltf(filepath=u["file"])
    new = [o for o in bpy.data.objects if o not in before]
    rig = [o for o in new if o.type == 'ARMATURE'][0]
    for o in new:
        if o.type != 'MESH':
            continue
        is_body = o.parent is rig and not o.parent_bone
        if o.name.startswith("Icosphere") or (not is_body and o.parent_bone and o.name not in u.get("keep", [])
                                             and o.parent_bone in ("handslot.r", "handslot.l")):
            bpy.data.objects.remove(o, do_unlink=True)
    for name, bone, loc, q in u.get("attach", []):
        b4 = set(bpy.data.objects)
        bpy.ops.import_scene.gltf(filepath=SKL + "Assets/gltf/" + name + ".gltf")
        w = [o for o in bpy.data.objects if o not in b4 and o.type == 'MESH'][0]
        for o in [o for o in bpy.data.objects if o not in b4 and o is not w]:
            bpy.data.objects.remove(o, do_unlink=True)
        w.parent = rig
        w.parent_type = 'BONE'
        w.parent_bone = bone
        w.matrix_parent_inverse = mathutils.Matrix.Identity(4)
        w.rotation_mode = 'QUATERNION'
        w.location = loc
        w.rotation_quaternion = q
        w.scale = (1, 1, 1)
    rig.rotation_mode = 'XYZ'
    rig.rotation_euler = (0, 0, math.radians(FACE_DEG * u["face"]))
    rig.scale = (UNIT_SCALE,) * 3
    ad = rig.animation_data_create()
    for t in list(ad.nla_tracks):
        ad.nla_tracks.remove(t)
    set_action(rig, u["anims"]["walk"])
    return rig


def set_action(rig, name):
    act = bpy.data.actions[name]
    ad = rig.animation_data
    ad.action = act
    try:
        if ad.action_slot is None and len(act.slots):
            ad.action_slot = act.slots[0]
    except AttributeError:
        pass
    return act
