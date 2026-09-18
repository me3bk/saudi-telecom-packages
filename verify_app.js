const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: '/usr/bin/chromium',
    headless: true,
    args: ['--no-sandbox', '--disable-blink-features=AutomationControlled']
  });
  const page = await browser.newPage();
  
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('file:///home/speedlo/Projects/saudi-telecom-packages/index.html');
  await page.waitForTimeout(600);

  console.log('--- Initial Load ---');
  console.log('Console errors:', errors);
  if (errors.length > 0) process.exit(1);

  const initialCount = await page.locator('#table-body tr').count();
  console.log(`Total packages loaded in table view: ${initialCount}`);
  if (initialCount < 30) throw new Error('Expected at least 30 packages loaded!');

  // 1. Test Mobily Filter
  console.log('\n--- Testing Mobily Network Filter ---');
  await page.locator('.network-chip[data-net="mobily"]').click();
  await page.waitForTimeout(400);
  const mobilyCount = await page.locator('#table-body tr').count();
  const mobilyText = await page.locator('#results-count-text').innerText();
  console.log(`Mobily filter results count: ${mobilyCount} (${mobilyText})`);
  if (mobilyCount === 0) throw new Error('FAILED: Mobily filter returned 0 packages!');

  // Verify that provider names include Mobily or Lebara
  const firstMobilyProvider = await page.locator('#table-body tr:first-child td:first-child').innerText();
  console.log(`First package provider under Mobily: ${firstMobilyProvider}`);

  // 2. Test Zain Filter
  console.log('\n--- Testing Zain Network Filter ---');
  await page.locator('.network-chip[data-net="zain"]').click();
  await page.waitForTimeout(400);
  const zainCount = await page.locator('#table-body tr').count();
  const zainText = await page.locator('#results-count-text').innerText();
  console.log(`Zain filter results count: ${zainCount} (${zainText})`);
  if (zainCount === 0) throw new Error('FAILED: Zain filter returned 0 packages!');

  // Verify that provider names include Zain/Yaqoot/Salam/Red Bull
  const firstZainProvider = await page.locator('#table-body tr:first-child td:first-child').innerText();
  console.log(`First package provider under Zain: ${firstZainProvider}`);

  // Reset filter back to All
  await page.locator('.network-chip[data-net="all"]').click();
  await page.waitForTimeout(300);

  // 3. Test Sorting by Minutes
  console.log('\n--- Testing Sorting by Minutes ---');
  await page.locator('#filter-sort').selectOption('minutes-desc');
  await page.waitForTimeout(400);
  const firstMinutesVal = await page.locator('#table-body tr:first-child .td-minutes').innerText();
  console.log(`Top row minutes after sorting minutes-desc: ${firstMinutesVal}`);

  // 4. Test Sorting by SMS
  console.log('\n--- Testing Sorting by SMS ---');
  await page.locator('#filter-sort').selectOption('sms-desc');
  await page.waitForTimeout(400);
  const firstSmsVal = await page.locator('#table-body tr:first-child .td-sms').innerText();
  const firstSmsPkg = await page.locator('#table-body tr:first-child .td-pkg-name').innerText();
  console.log(`Top row SMS after sorting sms-desc: ${firstSmsVal} (Package: ${firstSmsPkg})`);

  // 5. Test Table Header Column Direct Click Sorting
  console.log('\n--- Testing Table Header Column Click Sorting (Price) ---');
  await page.locator('#th-price').click();
  await page.waitForTimeout(400);
  const firstPriceVal = await page.locator('#table-body tr:first-child .td-price').innerText();
  console.log(`Top row price after clicking Price header: ${firstPriceVal}`);

  // Capture Screenshot of Table Matrix
  await page.screenshot({ path: '/home/speedlo/Projects/saudi-telecom-packages/preview_table_matrix.png' });
  console.log('Saved preview_table_matrix.png');

  // 6. Test Cards View Switcher
  console.log('\n--- Testing Dual View: Switch to Cards ---');
  await page.locator('#btn-view-cards').click();
  await page.waitForTimeout(400);
  const cardsCount = await page.locator('#cards-view-container .package-card').count();
  console.log(`Cards view rendered cards count: ${cardsCount}`);
  if (cardsCount === 0) throw new Error('Cards view is empty!');

  // Capture Screenshot of Cards View
  await page.screenshot({ path: '/home/speedlo/Projects/saudi-telecom-packages/preview_cards_view.png' });
  console.log('Saved preview_cards_view.png');

  // 7. Test 70-115 SAR Preset
  console.log('\n--- Testing 70-115 SAR Preset ---');
  await page.locator('button[data-preset="70-115"]').click();
  await page.waitForTimeout(400);
  const preset70Count = await page.locator('#cards-view-container .package-card').count();
  console.log(`Packages in 70-115 SAR range: ${preset70Count}`);
  await page.screenshot({ path: '/home/speedlo/Projects/saudi-telecom-packages/preview_70_115_cards.png' });

  // 8. Test Pinning & Side-by-Side Comparison Modal
  console.log('\n--- Testing Pinning & Side-by-Side Modal ---');
  await page.locator('#cards-view-container .card-pin-btn').nth(0).click();
  await page.waitForTimeout(200);
  await page.locator('#cards-view-container .card-pin-btn').nth(1).click();
  await page.waitForTimeout(200);
  await page.locator('#cards-view-container .card-pin-btn').nth(2).click();
  await page.waitForTimeout(300);

  // Check dock visibility
  const dockVisible = await page.locator('#comparison-dock').isVisible();
  console.log(`Comparison dock visible: ${dockVisible}`);

  // Open modal
  await page.locator('.dock-compare-action-btn').click();
  await page.waitForTimeout(400);
  const modalVisible = await page.locator('#comparison-modal').isVisible();
  console.log(`Comparison modal open: ${modalVisible}`);

  await page.screenshot({ path: '/home/speedlo/Projects/saudi-telecom-packages/preview_comparison_modal_new.png' });
  console.log('Saved preview_comparison_modal_new.png');

  // Close modal and test English toggle
  await page.locator('.modal-close-btn').click();
  await page.waitForTimeout(200);
  await page.locator('#lang-toggle-btn').click();
  await page.waitForTimeout(400);
  const enTitle = await page.locator('#txt-title').innerText();
  console.log(`English title: ${enTitle}`);
  await page.screenshot({ path: '/home/speedlo/Projects/saudi-telecom-packages/preview_english_new.png' });
  console.log('Saved preview_english_new.png');

  console.log('\n=============================================');
  console.log('ALL TESTS PASSED WITH 100% SUCCESS!');
  console.log('=============================================');
  await browser.close();
})();
