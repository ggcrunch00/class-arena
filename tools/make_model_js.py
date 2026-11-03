# game/models/*.glb 를 배포 페이지에서 읽을 수 있게 base64 .js 로 바꾼다(.glb는 배포 페이지에 못 올림)
import base64, glob, os
for p in glob.glob(os.path.join(os.path.dirname(__file__), "..", "game", "models", "*.glb")):
    if p.endswith(".raw.glb"):
        continue
    n = os.path.splitext(os.path.basename(p))[0]
    b = base64.b64encode(open(p, "rb").read()).decode()
    open(p[:-4] + ".js", "w").write('window.GLB=window.GLB||{};window.GLB["%s"]="%s";\n' % (n, b))
    print(n, len(b) // 1024, "KB")
