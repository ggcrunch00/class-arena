// GLB 줄이기: 같은 모형은 한 번만 저장하고 여러 번 그리기(EXT_mesh_gpu_instancing),
// 좌표를 작은 정수로 저장(KHR_mesh_quantization — 해독 프로그램 없이 three가 바로 읽음), 중복·안 쓰는 것 지우기.
//   node tools/compress_glb.mjs 입력.glb 출력.glb
import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { dedup, flatten, instance, prune, quantize, resample, weld } from "@gltf-transform/functions";
import { statSync } from "node:fs";

const [inp, out] = process.argv.slice(2);
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(inp);
const isField = /field_/.test(inp);
const steps = [dedup(), weld()];
if (isField) steps.push(flatten(), instance({ min: 2 }));
else steps.push(resample({ tolerance: 1e-4 })); // 동작: 거의 안 바뀌는 키프레임 지우기
steps.push(quantize({ quantizePosition: 14, quantizeNormal: 10, quantizeTexcoord: 12 }), dedup(), prune());
await doc.transform(...steps);
await io.write(out, doc);
const root = doc.getRoot();
console.log(`${out}: ${(statSync(inp).size / 1024).toFixed(0)}KB → ${(statSync(out).size / 1024).toFixed(0)}KB, 메쉬 ${root.listMeshes().length}개, 노드 ${root.listNodes().length}개`);
