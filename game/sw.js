// 서비스 워커: 한 번 받은 게임 파일을 기기에 저장해 두 번째부터 빠르게(인터넷이 끊겨도) 열리게 함.
// 화면 파일(html)과 게임 코드는 "인터넷 먼저", 큰 모형·그림은 "저장본 먼저 + 뒤에서 새것 받기".
// GitHub Pages 같은 배포 주소에서만 켜짐(main.js 에서 등록).
const CACHE = "class-arena-v5"; // 11-06: 새 원정 지도·장면 삽화 8장, 준비 창·원정 화면 개편
const CORE = ["./", "./play.html", "./guide.html", "./css/play.css", "./js/play_bundle.js", "./manifest.webmanifest", "./icons/icon-192.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const isPage = req.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith("play_bundle.js") || url.pathname.endsWith(".css");
  if (isPage) {
    // 인터넷 먼저(고친 내용이 바로 보이게), 끊기면 저장본
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); return res; })
      .catch(() => caches.match(req).then((r) => r || caches.match("./play.html"))));
    return;
  }
  // 저장본 먼저 + 뒤에서 새것 받아 두기(다음에 열 때 반영)
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const hit = await c.match(req);
    const net = fetch(req).then((res) => { if (res.ok || res.type === "opaque") c.put(req, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  }));
});
