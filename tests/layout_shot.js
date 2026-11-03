// 화면 배치만 빠르게 찍기(전투 진행 없이). 사용: node tests/layout_shot.js <out.png> <w> <h> <cpu|duo> [format]
const { chromium } = require('playwright');
(async () => {
  const [out, w, h, m = 'cpu', fmt = 'input'] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: +w, height: +h } });
  page.on('pageerror', (e) => console.log('PAGEERROR: ' + e.message));
  await page.goto('http://127.0.0.1:8130/play.html#wide');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.evaluate(([m, f]) => window.__arena.start('mixed', 'recruit', f, m), [m, fmt]);
  await page.waitForTimeout(1500);
  const over = await page.evaluate(() => [...document.querySelectorAll('.seat')].map((s) => s.scrollHeight - s.clientHeight));
  console.log('overflow px per seat', JSON.stringify(over));
  await page.screenshot({ path: out });
  await browser.close();
})();
