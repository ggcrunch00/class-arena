// 배경 음악 점검: 시작 후 소리 크기(RMS)를 재서 실제로 소리가 나는지 확인
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
  const page = await browser.newPage({ viewport: { width: 1024, height: 768 } });
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  await page.addInitScript(() => {
    // 모든 소리를 분석기로도 보내 크기를 잴 수 있게
    const AC = window.AudioContext;
    window.AudioContext = function () { const c = new AC(); window.__an = c.createAnalyser(); window.__an.fftSize = 2048;
      const orig = c.destination; Object.defineProperty(c, 'destination', { get: () => window.__an }); window.__an.connect(orig); return c; };
  });
  await page.goto('http://127.0.0.1:8130/play.html#diag');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.click('.mcard[data-m="cpu"]', { force: true }); await page.waitForTimeout(300); await page.click('#startBtn', { force: true });
  await page.waitForTimeout(3000);
  const rms = await page.evaluate(async () => {
    const a = window.__an, buf = new Float32Array(a.fftSize); let best = 0;
    for (let i = 0; i < 20; i++) { a.getFloatTimeDomainData(buf); let s = 0; for (const v of buf) s += v * v; best = Math.max(best, Math.sqrt(s / buf.length)); await new Promise((r) => setTimeout(r, 100)); }
    return best;
  });
  console.log('music RMS', rms.toFixed(4), 'errors', errs.length ? errs : 'none');
  await browser.close();
})();
