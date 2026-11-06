// 링크 공유 미리보기(1200×630): 타이틀 화면
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto('http://127.0.0.1:8130/play.html#diag');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.addStyleTag({ content: '.titleact, .lastset { display: none !important; } .go.big { animation: none !important; }' });
  await page.waitForTimeout(30000);
  await page.screenshot({ path: process.argv[2], timeout: 120000 });
  await browser.close();
})();
