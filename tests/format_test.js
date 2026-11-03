// 객관식·OX 화면 점검: 고르기만 형식으로 시작 → 문제 화면 찍기 → 틀린 답 → 결과의 다시 풀기
const { chromium } = require('playwright');
(async () => {
  const out = process.argv[2];
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 1024, height: 768 } });
  const logs = [];
  page.on('pageerror', (e) => logs.push('PAGEERROR: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text()); });
  await page.goto('http://127.0.0.1:8130/play.html#wide');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.screenshot({ path: out + '/f0_start.png' });
  await page.evaluate(() => window.__arena.start('gugu', 'recruit', 'pick'));
  const seen = {};
  for (let i = 0; i < 12 && Object.keys(seen).length < 2; i++) {
    const t = await page.evaluate(() => window.__arena.q.type);
    if (!seen[t]) { seen[t] = 1; await page.waitForTimeout(300); await page.screenshot({ path: out + `/f_${t}.png` }); }
    await page.evaluate(() => window.__arena.answerRight());
    await page.waitForTimeout(150);
  }
  // 키보드로 고르기(1번 단추)
  await page.keyboard.press('1');
  await page.waitForTimeout(400);
  await page.screenshot({ path: out + '/f_after_key.png' });
  await page.evaluate(() => { const b = window.__arena.battle; b.damageStruct(b.sides[1].base, 99999); });
  await page.waitForFunction(() => window.__arena.mode === 'result', null, { timeout: 60000 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: out + '/f_result.png' });
  console.log('seen', Object.keys(seen).join(','), logs.join('\n'));
  await browser.close();
})();
