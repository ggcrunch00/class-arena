// 학급 로그인을 붙일 자리(11-06). 지금은 로그인 없이: 원정 진행은 이 기기에 저장하고, 출제 범위는 학생이 고른 주제.
// 나중에 통합 학급 로그인 모듈(공용 저장소, docs/로그인_붙이기_계획.md)을 붙일 때 이 파일만 바꾸면 되게 모아 둠.
//  - 원정·협동·PvP: 로그인 필요(그때부터) / 연습 대전·둘이서·오늘의 도전: 로그인 없이
export const Account = {
  kind: "local",                 // "class"가 되면 학급 로그인
  who() { return null; },        // 로그인하면 { cls: "학급 이름", num: 번호 }
  // 원정 진행 불러오기·저장(지금은 기기 localStorage → 나중엔 서버 저장 + 기기 사본)
  loadCamp(localLoad) { return localLoad(); },
  saveCamp(p, localSave) { localSave(p); },
  // 원정 출제 범위: 지금은 학생이 고른 주제 그대로 → 나중엔 선생님이 학급에 정해 둔 범위
  campRange(picked) { return picked; },
  canPickCampTopics() { return true },
  // 판이 끝났을 때 기록 요약(지금은 하지 않음 → 나중엔 학급 기록 표로)
  report(/* summary */) {},
};
