// game/models/*.glb 에서 동작 길이(초)를 읽어 JSON으로 출력
import { readFileSync, readdirSync } from "node:fs";
const dir = new URL("../game/models/", import.meta.url).pathname, out = {};
for (const f of readdirSync(dir).filter((f) => f.endsWith(".glb") && f !== "field.glb")) {
  const b = readFileSync(dir + f), len = b.readUInt32LE(12), j = JSON.parse(b.subarray(20, 20 + len).toString());
  const d = {};
  for (const a of j.animations || []) d[a.name] = Math.max(...a.samplers.map((s) => j.accessors[s.input].max[0]));
  out[f.replace(".glb", "")] = d;
}
console.log(JSON.stringify(out));
