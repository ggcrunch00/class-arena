# 구운 유닛 프레임을 잘라서(빈 곳 제거) 아틀라스 한 장에 모으고, 게임이 읽을 data.js를 만든다.
#   python3 tools/pack_units.py
import json, os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TMP = ROOT + "/tmp_frames"
OUT = ROOT + "/game/assets"
ATLAS_W = 2048
SCALE = 0.7  # 태블릿 화면에선 원본보다 작게 보이므로 70%로 줄여 저장(메모리 절약)
UNITS = ["knight", "mage", "skel_warrior", "skel_mage"]

FADE = 56  # 프레임 끝에서 그림자가 칼같이 잘리지 않게 가장자리를 흐리게
_mask = None


def edge_fade(im):
    global _mask
    if _mask is None or _mask.size != im.size:
        w, h = im.size
        _mask = Image.new("L", (w, h))
        px = _mask.load()
        for y in range(h):
            for x in range(w):
                d = min(x, y, w - 1 - x, h - 1 - y)
                px[x, y] = 255 if d >= FADE else int(255 * (d / FADE) ** 1.5)
    from PIL import ImageChops
    r, g, b, a = im.split()
    # 하늘빛이 가려져 생긴 아주 옅은 그늘(알파 30 아래)은 지우고 진짜 그림자만 남긴다
    a = a.point(lambda v: 0 if v <= 30 else min(255, round((v - 30) * 255 / 225)))
    return Image.merge("RGBA", (r, g, b, ImageChops.multiply(a, _mask)))


data = {"units": {}, "world": json.load(open(OUT + "/world_meta.json"))}
for key in UNITS:
    info = json.load(open("%s/%s/info.json" % (TMP, key)))
    ax, ay = info["anchor"]
    frames = []  # (anim, idx, img, ox, oy)
    for anim, a in info["anims"].items():
        for i, fp in enumerate(a["files"]):
            im = edge_fade(Image.open(fp).convert("RGBA"))
            bb = im.getchannel("A").point(lambda v: 255 if v > 4 else 0).getbbox()
            if bb is None:
                bb = (0, 0, 1, 1)
            crop = im.crop(bb)
            crop = crop.resize((max(1, round(crop.width * SCALE)), max(1, round(crop.height * SCALE))), Image.LANCZOS)
            frames.append((anim, i, crop, bb[0] - ax, bb[1] - ay))
    # 선반 쌓기: 키 큰 것부터 한 줄씩
    order = sorted(range(len(frames)), key=lambda k: -frames[k][2].height)
    x = y = shelf = 0
    pos = {}
    for k in order:
        im = frames[k][2]
        if x + im.width + 2 > ATLAS_W:
            x = 0; y += shelf + 2; shelf = 0
        pos[k] = (x, y)
        x += im.width + 2
        shelf = max(shelf, im.height)
    H = y + shelf
    atlas = Image.new("RGBA", (ATLAS_W, H), (0, 0, 0, 0))
    meta = {"anims": {}, "size": [ATLAS_W, H], "scale": SCALE}
    for k, (anim, i, im, ox, oy) in enumerate(frames):
        px, py = pos[k]
        atlas.paste(im, (px, py))
        meta["anims"].setdefault(anim, {"dur": info["anims"][anim]["dur"], "loop": info["anims"][anim]["loop"], "f": []})
        meta["anims"][anim]["f"].append([px, py, im.width, im.height, round(ox), round(oy)])
    atlas.save(OUT + "/" + key + ".webp", "WEBP", quality=88, method=4)
    data["units"][key] = meta
    print(key, "atlas", ATLAS_W, "x", H, os.path.getsize(OUT + "/" + key + ".webp") // 1024, "KB")

for name in ["bg"] + list(data["world"].keys()):
    im = Image.open(OUT + "/" + name + ".png")
    if name != "bg":  # 성·폐허: 옅은 그늘만 지움(가장자리를 흐리면 첨탑 끝이 흐려짐)
        r, g, b, a = im.convert("RGBA").split()
        a = a.point(lambda v: 0 if v <= 30 else min(255, round((v - 30) * 255 / 225)))
        im = Image.merge("RGBA", (r, g, b, a))
    q = 86 if name == "bg" else 90
    im.save(OUT + "/" + name + ".webp", "WEBP", quality=q, method=6)
    data["world"].setdefault(name, {})
    data["world"][name]["w"], data["world"][name]["h"] = im.size
    print(name, im.size, os.path.getsize(OUT + "/" + name + ".webp") // 1024, "KB")

open(OUT + "/data.js", "w").write("// 자동 생성(tools/pack_units.py) — 직접 고치지 마세요\nwindow.GAME_DATA = " + json.dumps(data, separators=(",", ":")) + ";\n")
