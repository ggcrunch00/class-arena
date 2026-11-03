# 블렌더 장면 공통 도구: 카메라·조명·자료 불러오기
# 모든 그림(배경·성·유닛)을 같은 카메라 방향, 같은 햇빛으로 구워서 스타일을 맞춘다.
import bpy, math, mathutils, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HEX = ROOT + "/assets_src/KayKit-Medieval-Hexagon-Pack-1.0/addons/kaykit_medieval_hexagon_pack/Assets/gltf/"
ADV = ROOT + "/assets_src/KayKit-Character-Pack-Adventures-1.0/addons/kaykit_character_pack_adventures/"
SKL = ROOT + "/assets_src/KayKit-Character-Pack-Skeletons-1.0/addons/kaykit_character_pack_skeletons/"

# ---- 카메라 약속 (게임 코드 config.js 와 같은 값) ----
ELEV = 32.0          # 카메라가 내려다보는 각도(도)
PPU = 90.0           # 1m(블렌더 1칸)가 그림에서 몇 픽셀인지
W, H = 2880, 1620    # 배경 그림 크기
TARGET = (0.0, 4.08, 0.0)  # 배경 카메라가 바라보는 점

SUN_ROT = (math.radians(52), 0.0, math.radians(-38))  # 햇빛 방향(왼쪽 앞 위에서)


def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    sc = bpy.context.scene
    sc.render.engine = 'CYCLES'
    sc.cycles.device = 'CPU'
    sc.cycles.use_denoising = True
    sc.render.film_transparent = True
    sc.view_settings.view_transform = 'AgX'
    sc.view_settings.look = 'AgX - Punchy'
    sc.view_settings.exposure = 0.3
    sc.render.image_settings.file_format = 'PNG'
    sc.render.image_settings.color_mode = 'RGBA'
    sc.cycles.max_bounces = 3
    sc.cycles.adaptive_threshold = 0.03
    sc.render.use_persistent_data = True
    sc.cycles.transparent_max_bounces = 4
    return sc


def lights(sun_strength=3.2, sky_strength=0.9):
    sc = bpy.context.scene
    sun_data = bpy.data.lights.new("Sun", 'SUN')
    sun_data.energy = sun_strength
    sun_data.angle = math.radians(4)
    sun_data.color = (1.0, 0.97, 0.93)
    sun = bpy.data.objects.new("Sun", sun_data)
    sun.rotation_euler = SUN_ROT
    sc.collection.objects.link(sun)
    # 하늘빛(그늘이 너무 까맣지 않게, 살짝 푸른 빛)
    world = bpy.data.worlds.new("World")
    world.use_nodes = True
    bg = world.node_tree.nodes["Background"]
    bg.inputs[0].default_value = (0.62, 0.74, 0.95, 1.0)
    bg.inputs[1].default_value = sky_strength
    sc.world = world


def camera(target, width_px, height_px, ortho_units):
    """정사영 카메라. target을 화면 가운데에 둔다."""
    sc = bpy.context.scene
    cam_data = bpy.data.cameras.new("Cam")
    cam_data.type = 'ORTHO'
    cam_data.ortho_scale = ortho_units
    cam_data.clip_start = 0.1
    cam_data.clip_end = 400
    cam = bpy.data.objects.new("Cam", cam_data)
    e = math.radians(ELEV)
    d = mathutils.Vector((0, math.cos(e), -math.sin(e)))  # 바라보는 방향
    t = mathutils.Vector(target)
    cam.location = t - d * 120
    cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
    sc.collection.objects.link(cam)
    sc.camera = cam
    sc.render.resolution_x = width_px
    sc.render.resolution_y = height_px
    sc.render.resolution_percentage = 100
    return cam


def shadow_catcher(size=60, z=0.0):
    bpy.ops.mesh.primitive_plane_add(size=size, location=(0, 0, z))
    p = bpy.context.active_object
    p.name = "ShadowCatcher"
    p.is_shadow_catcher = True
    return p


_cache = {}
MOD_TEX = ROOT + "/assets_mod/hexagons_medieval.png"


def fix_textures():
    """풀색을 바꾼 팔레트 그림으로 갈아 끼운다."""
    mod = bpy.data.images.load(MOD_TEX, check_existing=True)
    for img in list(bpy.data.images):
        if "hexagons_medieval" in img.name and img is not mod:
            img.user_remap(mod)
            bpy.data.images.remove(img)


def place(rel, loc=(0, 0, 0), rot=0.0, scale=1.0, base=HEX):
    """KayKit 모형 하나를 놓는다. 같은 모형은 한 번만 불러오고 복제한다."""
    path = base + rel
    if path not in _cache:
        before = set(bpy.data.objects)
        bpy.ops.import_scene.gltf(filepath=path)
        fix_textures()
        new = [o for o in bpy.data.objects if o not in before]
        tops = [o for o in new if o.parent is None]
        # 원본은 화면 밖에 숨겨 두고 복제만 쓴다
        holder = bpy.data.objects.new("SRC_" + os.path.basename(rel), None)
        bpy.context.scene.collection.objects.link(holder)
        for o in tops:
            o.parent = holder
        holder.hide_render = True
        for o in new:
            o.hide_render = True
        _cache[path] = holder
    holder = _cache[path]
    root = bpy.data.objects.new("P_" + os.path.basename(rel), None)
    bpy.context.scene.collection.objects.link(root)

    def dup(src, parent):
        c = src.copy()  # 메쉬 데이터는 공유(가벼움)
        c.hide_render = False
        bpy.context.scene.collection.objects.link(c)
        c.parent = parent
        c.matrix_parent_inverse = src.matrix_parent_inverse.copy()
        for ch in src.children:
            dup(ch, c)
    for ch in holder.children:
        dup(ch, root)
    root.location = loc
    root.rotation_euler = (0, 0, rot)
    root.scale = (scale, scale, scale)
    return root
