// 화질: 사용자가 직접 고르거나(설정 메뉴), 자동으로 기기에 맞춤.
// 자동: 전투 시작 후 5초 동안 재서 단계를 정하고, 그 뒤 10초 평균이 24fps 아래면 한 단계 내림(자동으로 올리지는 않음).
import { QUALITY, QUALITY_ORDER } from "./config.js";

const KEY = "classArena.quality";
const FPS_KEY = "classArena.showFps";

function load(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch { return d; } }
function save(k, v) { try { localStorage.setItem(k, v); } catch { /* 저장 안 되는 브라우저면 이번 판에만 */ } }

export class Quality {
  constructor() {
    this.choice = load(KEY, "auto");                 // "auto" 또는 단계 이름
    if (this.choice !== "auto" && !QUALITY[this.choice]) this.choice = "auto";
    this.level = this.choice === "auto" ? "high" : this.choice;
    this.showFps = load(FPS_KEY, "0") === "1";
    this.listeners = [];
    this.reset();
  }
  get preset() { return QUALITY[this.level]; }
  onChange(fn) { this.listeners.push(fn); }
  emit(why) { for (const fn of this.listeners) fn(this.level, why); }

  reset() { this.frames = 0; this.acc = 0; this.phase = "warmup"; this.fps = 60; }

  choose(choice) {
    this.choice = choice; save(KEY, choice);
    if (choice !== "auto") { this.level = choice; this.emit("user"); }
    this.reset();
  }
  setShowFps(on) { this.showFps = on; save(FPS_KEY, on ? "1" : "0"); }

  // 매 프레임 호출. measuring=false면(메뉴·결과 화면) 재지 않음
  tick(dt, measuring) {
    this.fps += ((dt > 0 ? 1 / dt : 60) - this.fps) * 0.05;
    if (!measuring || this.choice !== "auto") return;
    this.frames++; this.acc += dt;
    if (this.phase === "warmup" && this.acc >= 1) { this.phase = "first"; this.frames = 0; this.acc = 0; }
    else if (this.phase === "first" && this.acc >= 5) {
      const f = this.frames / this.acc;
      const lv = f >= 45 ? "high" : f >= 30 ? "mid" : f >= 20 ? "low" : "lowest";
      this.phase = "watch"; this.frames = 0; this.acc = 0;
      if (lv !== this.level) { this.level = lv; this.emit("auto-first"); }
    } else if (this.phase === "watch" && this.acc >= 10) {
      const f = this.frames / this.acc;
      this.frames = 0; this.acc = 0;
      const i = QUALITY_ORDER.indexOf(this.level);
      if (f < 24 && i < QUALITY_ORDER.length - 1) { this.level = QUALITY_ORDER[i + 1]; this.emit("auto-down"); }
    }
  }
}
