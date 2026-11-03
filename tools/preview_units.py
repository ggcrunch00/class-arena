# 병사 8종을 한 줄로 세워 미리보기(무기가 제대로 붙었는지 확인용)
import sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bpy
from scene_common import *
from units import UNITS, build_unit, set_action
sc = reset(); sc.cycles.samples = 16
lights()
camera((0, 0, 1.4), 1600, 400, 18.0)
sc.render.film_transparent = False
bpy.ops.mesh.primitive_plane_add(size=60)
keys = list(UNITS)
for i, k in enumerate(keys):
    rig = build_unit(k)
    rig.location = (-7.9 + i * 2.25, 0, 0)
    a = set_action(rig, UNITS[k]["anims"]["attack"])
sc.frame_set(8)
sc.render.filepath = ROOT + "/preview_units.png"
bpy.ops.render.render(write_still=True)
