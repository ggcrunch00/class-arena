# 캠페인 새 인물 「안개 군주 모로」 얼굴 그림(256×256) — KayKit Rogue(두건 없는 모습)를 잿빛·보랏빛으로 물들임
#   venv/bin/python tools/bake_moro.py → game/assets/portraits/moro.png
import sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bpy
from scene_common import *
from units import set_action, UNIT_SCALE
sc = reset(); sc.cycles.samples = 48
lights(sun_strength=3.0, sky_strength=1.0)
camera((0, 0, 1.75 * UNIT_SCALE), 256, 256, 2.2 * UNIT_SCALE)
before = set(bpy.data.objects)
bpy.ops.import_scene.gltf(filepath=ADV + "Characters/gltf/Mage.glb")
new = [o for o in bpy.data.objects if o not in before]
rig = [o for o in new if o.type == 'ARMATURE'][0]
for o in new:
    if o.type == 'MESH' and o.parent_bone in ("handslot.r", "handslot.l") and o.name != "2H_Staff":
        bpy.data.objects.remove(o, do_unlink=True)
# 옷·모자를 잿빛 보라로(피부는 조금 창백하게): 텍스처 색에 곱하기
for m in bpy.data.materials:
    if not m.use_nodes:
        continue
    nt = m.node_tree; b = nt.nodes.get("Principled BSDF")
    if not b or not b.inputs["Base Color"].links:
        continue
    src = b.inputs["Base Color"].links[0].from_socket
    mix = nt.nodes.new("ShaderNodeMix"); mix.data_type = 'RGBA'; mix.blend_type = 'MULTIPLY'
    mix.inputs["Factor"].default_value = 1.0
    nt.links.new(src, mix.inputs[6]); mix.inputs[7].default_value = (0.62, 0.6, 0.72, 1)
    hsv = nt.nodes.new("ShaderNodeHueSaturation"); hsv.inputs["Saturation"].default_value = 0.45; hsv.inputs["Value"].default_value = 0.95
    nt.links.new(mix.outputs[2], hsv.inputs["Color"]); nt.links.new(hsv.outputs["Color"], b.inputs["Base Color"])
rig.rotation_mode = 'XYZ'; rig.rotation_euler = (0, 0, math.radians(-28)); rig.scale = (UNIT_SCALE,) * 3
ad = rig.animation_data_create()
for t in list(ad.nla_tracks): ad.nla_tracks.remove(t)
set_action(rig, "Idle")
sc.frame_set(10)
sc.render.filepath = ROOT + "/game/assets/portraits/moro.png"
bpy.ops.render.render(write_still=True)
print("PORTRAIT moro")
