// 실제 흐름 그대로(컴퓨터 상대 포함) 잠깐 돌려 보고, 설정에서 화질 '낮음'을 골라 본다.
const { chromium } = require('playwright');
(async () => {
  const [out, w = '1024', h = '768'] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: +w, height: +h } });
  const logs = [];
  page.on('console', (m) => { if (['error', 'warning'].includes(m.type())) logs.push(m.type() + ': ' + m.text()); });
  page.on('pageerror', (e) => logs.push('PAGEERROR: ' + e.message));
  await page.goto('http://127.0.0.1:8130/play.html');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.evaluate(() => window.__arena.start('mixed', 'knight'));
  // 게임 시간 70초 앞으로(학생 흉내: 4초마다 정답, 골드 되면 출전)
  await page.evaluate(() => {
    const A = window.__arena, b = A.battle, roles = ['shield', 'archer', 'rusher', 'mage'];
    let t = 0, k = 0, cpu = null;
    // 컴퓨터도 같이 돌리기 위해 내부 ai를 찾는 대신 전투만 앞으로 돌리고, 나머지는 실제 루프에 맡김
    for (let i = 0; i < 700; i++) {
      t += 0.1;
      if (i % 40 === 0) A.answerRight();
      if (i % 50 === 25) A.deploy(roles[k++ % 4]);
      b.update(0.1);
    }
  });
  await page.waitForTimeout(8000);
  const s = await page.evaluate(() => { const b = window.__arena.battle; return { t: b.time.toFixed(0), units: b.units.map((u) => u.side + ':' + u.role).join(' '), hp: [b.sides[-1].castle, b.sides[1].castle], cpu: b.sides[1].stats }; });
  console.log(JSON.stringify(s));
  await page.screenshot({ path: out + '/l1_battle.png' });
  await page.click('#pauseBtn'); await page.click('#setBtn2');
  await page.screenshot({ path: out + '/l2_settings.png' });
  await page.click('#qualOpts .opt:nth-child(4)'); // 낮음
  await page.click('#setClose'); await page.click('#resumeBtn');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: out + '/l3_low.png' });
  console.log('quality', await page.evaluate(() => window.__arena.quality.level));
  console.log(logs.slice(0, 15).join('\n'));
  await browser.close();
})();
