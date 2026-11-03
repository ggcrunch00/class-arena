# 출전 버튼용 병사 얼굴 그림(256×256, 배경 투명) — B안 굽기 도구 재활용
import sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bpy
from scene_common import *
from units import UNITS, build_unit, set_action, UNIT_SCALE
OUT = ROOT + "/game/assets/portraits"
os.makedirs(OUT, exist_ok=True)
for k in UNITS:
    sc = reset(); sc.cycles.samples = 32
    lights(sun_strength=3.6, sky_strength=1.1)
    camera((0, 0, 1.75 * UNIT_SCALE), 256, 256, 2.2 * UNIT_SCALE)
    rig = build_unit(k)
    rig.rotation_euler = (0, 0, math.radians(28 * UNITS[k]["face"]))
    set_action(rig, UNITS[k]["anims"]["walk"])
    sc.frame_set(0)
    sc.render.filepath = OUT + "/" + k + ".png"
    bpy.ops.render.render(write_still=True)
    print("PORTRAIT", k)
