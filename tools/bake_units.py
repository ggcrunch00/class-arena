# 유닛 동작을 프레임 그림으로 굽고, 잘라서(빈 곳 제거) 한 장(아틀라스)에 모은다.
#   python tools/bake_units.py knight
import sys, os, math, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bpy, mathutils
from scene_common import *
from units import UNITS, build_unit, set_action, UNIT_SCALE

FR = 360            # 프레임 한 칸 크기(px)
TZ = 1.35           # 카메라가 바라보는 높이
NFR = {"walk": 16, "attack": 16, "death": 16, "cheer": 20, "spawn": 16}
LOOP = {"walk": True, "attack": True, "cheer": True, "death": False, "spawn": False}
OUT = ROOT + "/game/assets"
TMP = ROOT + "/tmp_frames"

key = sys.argv[-1]
sc = reset()
sc.cycles.samples = 24
lights()
camera((0, 0, TZ), FR, FR, FR / PPU)
shadow_catcher(30, 0.0)
rig = build_unit(key)
from bpy_extras.object_utils import world_to_camera_view
bpy.context.view_layer.update()
a = world_to_camera_view(sc, sc.camera, mathutils.Vector((0, 0, 0)))
anchor = (a.x * FR, (1 - a.y) * FR)
os.makedirs(TMP + "/" + key, exist_ok=True)
info = {"anchor": anchor, "anims": {}}
for anim, act_name in UNITS[key]["anims"].items():
    act = set_action(rig, act_name)
    s, e = act.frame_range
    n = NFR[anim]
    files = []
    for k in range(n):
        t = s + (e - s) * (k / n if LOOP[anim] else k / (n - 1))
        f = int(math.floor(t)); sub = t - f
        sc.frame_set(f, subframe=sub)
        fp = "%s/%s/%s_%02d.png" % (TMP, key, anim, k)
        sc.render.filepath = fp
        bpy.ops.render.render(write_still=True)
        files.append(fp)
    info["anims"][anim] = {"files": files, "dur": (e - s) / 24.0, "loop": LOOP[anim]}
json.dump(info, open("%s/%s/info.json" % (TMP, key), "w"))
print("DONE", key, anchor)
