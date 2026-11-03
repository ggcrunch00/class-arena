#!/bin/bash
# 무료 그림 자료(KayKit, CC0)와 블렌더(bpy)를 받는다. 저장소 맨 위에서 실행: bash tools/get_assets.sh
set -e
mkdir -p assets_src && cd assets_src
for r in KayKit-Character-Pack-Adventures-1.0 KayKit-Character-Pack-Skeletons-1.0 KayKit-Medieval-Hexagon-Pack-1.0; do
  [ -d "$r" ] || git clone --depth 1 "https://github.com/KayKit-Game-Assets/$r.git"
done
cd ..
[ -d venv ] || (python3 -m venv venv && ./venv/bin/pip install -q bpy)
npm install
