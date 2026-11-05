// 원정 흐름 점검: 처음 이야기 → 군도 지도 → 스테이지 이야기 → 전투(지도 바꿔 끼우기) → 결과 → 이야기 계속.
// 사용: SHOT=폴더 node tests/campaign_test.js [w h]
const { chromium } = require('playwright');
(async () => {
  const [w = 1366, h = 768] = process.argv.slice(2).map(Number);
  const out = process.env.SHOT || '/tmp';
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  await page.goto('http://127.0.0.1:8130/play.html');
  await page.waitForFunction(() => window.__arena, null, { timeout: 120000 });
  await page.evaluate(() => window.__arena.setCamp({}));
  await page.click('#campBtn', { force: true });
  await page.waitForSelector('#storyScreen:not([hidden])');
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${out}/c1_story_world.png` });
  // 대사는 글자가 한 자씩 나와서 첫 누름은 "한 번에 보이기" → 이야기가 끝날 때까지 누름
  for (let i = 0; i < 20 && await page.isVisible('#storyScreen'); i++) { await page.click('#sBox', { force: true }); await page.waitForTimeout(60); }
  await page.waitForSelector('#campScreen:not([hidden])');
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${out}/c2_camp.png` });
  await page.click('#cStages .cstage .go', { force: true });
  await page.waitForSelector('#sCard:not([hidden])');
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${out}/c3_card.png` });
  await page.click('#storyScreen', { force: true });
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${out}/c4_line.png` });
  await page.click('#sSkip', { force: true });
  await page.waitForFunction(() => window.__arena.mode === 'play', null, { timeout: 120000 });
  await page.waitForTimeout(1500);
  const info = await page.evaluate(() => ({ lanes: [...document.querySelectorAll('.seat .lanes button')].filter((b) => !b.hidden).length, lanesRow: !document.querySelector('.seat .lanes').hidden, cards: [...document.querySelectorAll('.seat .card')].filter((b) => !b.hidden).length, mine: !document.querySelector('.seat .mine').hidden }));
  console.log('1-1 조작판', JSON.stringify(info));
  for (let i = 0; i < 6; i++) { await page.evaluate(() => window.__arena.answerRight()); await page.waitForTimeout(150); }
  await page.evaluate(() => { window.__arena.deploy('shield'); window.__arena.deploy('archer'); });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${out}/c5_battle_shore.png` });
  // 이기게 만들기 → 결과 → 이야기 계속 → 군도 지도
  await page.evaluate(() => window.__arena.battle.finish(-1, 'base'));
  await page.waitForSelector('#resultScreen:not([hidden])', { timeout: 240000 });
  await page.screenshot({ path: `${out}/c6_result.png` });
  const stars = await page.evaluate(() => window.__arena.camp.stars['1-1']);
  console.log('1-1 별', stars);
  await page.click('#nextBtn', { force: true });
  await page.waitForSelector('#storyScreen:not([hidden])');
  await page.click('#sSkip', { force: true });
  await page.waitForSelector('#campScreen:not([hidden])');
  const open12 = await page.evaluate(() => !document.querySelectorAll('#cStages .cstage')[1].classList.contains('locked'));
  console.log('1-2 열림', open12);
  // 다른 장 지도 바꿔 끼우기 + 거인
  for (const id of ['2-2', '3-1', '5-2']) {
    await page.evaluate((id) => window.__arena.stage(id), id);
    await page.waitForFunction(() => window.__arena.mode === 'play' && window.__arena.G && window.__arena.G.battle, null, { timeout: 120000 });
    await page.waitForTimeout(1200);
    if (id === '5-2') await page.evaluate(() => { const b = window.__arena.battle; b.spawnFree(1, 'giant', 'mid'); b.spawnFree(1, 'rusher', 'top'); });
    for (let i = 0; i < 8; i++) { await page.evaluate(() => window.__arena.answerRight()); await page.waitForTimeout(120); }
    await page.evaluate(() => { window.__arena.deploy('shield', null); window.__arena.deploy('rusher', null); });
    await page.evaluate(() => window.__arena.G.runner.hooks.boss(window.__arena.G.stage.boss || 'moro', '시험 말풍선: 윗길로만 오네요?'));
    await page.waitForTimeout(3000);
    const lanes = await page.evaluate(() => [...document.querySelectorAll('.seat .lanes button')].filter((b) => !b.hidden).map((b) => b.textContent.trim()));
    console.log(id, '길', lanes.join(','));
    await page.screenshot({ path: `${out}/c7_battle_${id}.png` });
  }
  console.log(errors.length ? 'ERRORS: ' + errors.join(' | ') : '페이지 오류 없음');
  await browser.close();
  process.exit(errors.length ? 1 : 0);
})();
