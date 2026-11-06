// 시작 화면(뒤에서 컴퓨터끼리 전투) 찍기
const { chromium } = require('playwright');
(async () => {
  const [out, w = '1024', h = '768'] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: +w, height: +h } });
  page.on('pageerror', (e) => console.log('PAGEERROR: ' + e.message));
  await page.goto('http://127.0.0.1:8130/play.html#diag');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.waitForTimeout(25000);
  await page.screenshot({ path: out, timeout: 120000 });
  await browser.close();
})();
