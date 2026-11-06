// 둘이서(한 기기) 점검: 두 자리 모두 정답·출전 → 전투 → 결과
const { chromium } = require('playwright');
(async () => {
  const [out, w = '1024', h = '768'] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: +w, height: +h } });
  const logs = [];
  page.on('pageerror', (e) => { logs.push('PAGEERROR: ' + e.message); console.log('PAGEERROR: ' + e.message + ' ' + (e.stack || '').split('\n')[1]); });
  page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text()); });
  await page.goto('http://127.0.0.1:8130/play.html#diag');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.click('.mcard[data-m="duo"]', { force: true });
  await page.waitForTimeout(300);
  await page.screenshot({ path: out + '/d0_start.png' });
  await page.click('#startBtn');
  await page.waitForFunction(() => window.__arena.battle && window.__arena.mode === 'play', null, { timeout: 120000 });
  const info = await page.evaluate(async () => {
    const A = window.__arena, roles = ['shield', 'archer', 'rusher', 'mage'], lanes = ['top', 'mid', 'bot'];
    for (let i = 0; i < 260; i++) {
      if (i % 3 === 0) { A.answerRight(0); A.answerRight(1); }
      if (i % 11 === 0) { A.deploy(roles[i % 4], lanes[i % 3], 0); A.deploy(roles[(i + 1) % 4], lanes[(i + 1) % 3], 1); }
      A.battle.update(0.1); A.view.update(0.1, A.battle);
      await new Promise((r) => setTimeout(r, 4));
    }
    const b = A.battle;
    return { seats: A.seats.length, units: b.units.map((u) => u.side).reduce((a, s) => (a[s] = (a[s] || 0) + 1, a), {}), hp: [b.sides[-1].base.hp, b.sides[1].base.hp] };
  });
  console.log('DUO', JSON.stringify(info));
  await page.waitForTimeout(2500);
  await page.screenshot({ path: out + '/d1_battle.png' });
  await page.evaluate(() => { const b = window.__arena.battle; b.damageStruct(b.sides[-1].base, 99999); });
  await page.waitForFunction(() => window.__arena.mode === 'result', null, { timeout: 240000 });
  await page.waitForTimeout(600);
  await page.screenshot({ path: out + '/d2_result.png' });
  console.log(logs.join('\n'));
  await browser.close();
})();
