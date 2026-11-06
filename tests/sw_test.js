// 서비스 워커 점검: 등록 → 게임 열기 → 오프라인으로 다시 열기
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const ctx = await browser.newContext({ viewport: { width: 1024, height: 768 } });
  const page = await ctx.newPage();
  const errs = []; page.on('pageerror', (e) => errs.push(e.message));
  await page.goto('http://localhost:8130/play.html#diag');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  // localhost는 https가 아니어서 게임이 등록하지 않으므로 점검용으로 직접 등록
  const st = await page.evaluate(async () => { const r = await navigator.serviceWorker.register('sw.js'); await navigator.serviceWorker.ready; return r.active ? r.active.state : 'none'; });
  await page.reload(); // 이번 열기에서 모형 파일들이 저장됨
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.waitForTimeout(2000);
  const cached = await page.evaluate(async () => { const c = await caches.open('class-arena-v1'); return (await c.keys()).length; });
  await ctx.setOffline(true);
  await page.reload();
  let offlineOk = false;
  try { await page.waitForFunction(() => window.__arena, null, { timeout: 60000 }); offlineOk = true; } catch {}
  console.log(JSON.stringify({ sw: st, cachedFiles: cached, offlineOk, errors: errs }));
  await browser.close();
})();
