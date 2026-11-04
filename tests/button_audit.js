// 화면의 id 달린 단추(button·a·체크칸·선택칸)마다 클릭/변경 동작이 붙어 있는지 검사(동작 없는 단추 찾기)
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
  await page.goto('http://127.0.0.1:8130/play.html');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.evaluate(() => { window.__arena.showCamp(); window.__arena.showCamp(); }); // 원정 지도 칸은 처음 열 때 동작을 붙임
  const cdp = await page.context().newCDPSession(page);
  const ids = await page.$$eval('button[id], input[id], select[id]', (els) => els.map((e) => e.id));
  const missing = [];
  for (const id of ids) {
    const { result } = await cdp.send('Runtime.evaluate', { expression: `document.getElementById(${JSON.stringify(id)})` });
    const { listeners } = await cdp.send('DOMDebugger.getEventListeners', { objectId: result.objectId });
    if (!listeners.some((l) => ['click', 'change', 'input'].includes(l.type))) missing.push(id);
  }
  console.log(`id 단추 ${ids.length}개, 동작 없는 것: ${missing.length ? missing.join(', ') : '없음'}`);
  await browser.close();
  process.exit(missing.length ? 1 : 0);
})();
