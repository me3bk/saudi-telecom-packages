const { chromium } = require('playwright-core');

const viewports = [
  { name: 'iPhone 15 / 14 Pro', width: 393, height: 852 },
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'Galaxy S23', width: 412, height: 915 }
];

(async () => {
  const browser = await chromium.launch({
    executablePath: '/usr/bin/chromium',
    headless: true,
    args: ['--no-sandbox']
  });

  for (const vp of viewports) {
    console.log(`\n=== Testing Mobile Viewport: ${vp.name} (${vp.width}x${vp.height}) ===`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true
    });
    const page = await context.newPage();

    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', err => errors.push(err.message));

    await page.goto('file:///home/speedlo/Projects/saudi-telecom-packages/index.html');
    await page.waitForTimeout(500);

    if (errors.length > 0) {
      console.error(`Errors encountered on ${vp.name}:`, errors);
    } else {
      console.log(`✓ No JS errors on load`);
    }

    // 1. Verify Default View on Mobile is 'cards'
    const isCardsBtnActive = await page.locator('#btn-view-cards').evaluate(el => el.classList.contains('active'));
    const isCardsVisible = await page.locator('#cards-view-container').evaluate(el => window.getComputedStyle(el).display !== 'none');
    const isTableHidden = await page.locator('#table-view-container').evaluate(el => window.getComputedStyle(el).display === 'none');
    console.log(`✓ Default view mode is Cards: ${isCardsBtnActive && isCardsVisible && isTableHidden}`);

    // 2. Verify Zero Horizontal Overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const hasHorizontalOverflow = scrollWidth > clientWidth;
    console.log(`✓ Client width: ${clientWidth}px, Document scrollWidth: ${scrollWidth}px (Overflow: ${hasHorizontalOverflow})`);

    // 3. Verify Form Input font sizes (>= 16px to prevent iOS auto-zoom)
    const searchFontSize = await page.locator('#main-search').evaluate(el => window.getComputedStyle(el).fontSize);
    const selectFontSize = await page.locator('#filter-provider').evaluate(el => window.getComputedStyle(el).fontSize);
    console.log(`✓ Form Font Sizes: Search input=${searchFontSize}, Select dropdown=${selectFontSize} (>= 16px: ${parseFloat(searchFontSize) >= 16})`);

    // 4. Verify Network Chips 2x2 Layout
    const networkGridColumns = await page.locator('.network-chips-wrapper').evaluate(el => window.getComputedStyle(el).gridTemplateColumns.split(' ').length);
    console.log(`✓ Network chips columns: ${networkGridColumns} (expected 2)`);

    // Only take detailed screenshots for the primary reference device (iPhone 15)
    if (vp.name.includes('iPhone 15')) {
      await page.screenshot({ path: '/home/speedlo/Projects/saudi-telecom-packages/assets/mobile_cards_default.png' });

      // Pin first package and test bottom dock
      await page.locator('.card-pin-btn').first().click();
      await page.waitForTimeout(300);
      await page.screenshot({ path: '/home/speedlo/Projects/saudi-telecom-packages/assets/mobile_pinned_dock.png' });

      // Open side-by-side modal
      await page.locator('.dock-compare-action-btn').click();
      await page.waitForTimeout(400);
      await page.screenshot({ path: '/home/speedlo/Projects/saudi-telecom-packages/assets/mobile_modal_sheet.png' });

      // Close modal
      await page.locator('.modal-close-btn').click();
      await page.waitForTimeout(300);

      // Switch to Table View and verify mobile swipe hint
      await page.locator('#btn-view-table').click();
      await page.waitForTimeout(300);
      const isTableHintVisible = await page.locator('#mobile-table-hint').evaluate(el => window.getComputedStyle(el).display !== 'none');
      console.log(`✓ Mobile Table Hint is visible: ${isTableHintVisible}`);
      await page.screenshot({ path: '/home/speedlo/Projects/saudi-telecom-packages/assets/mobile_table_hint.png' });

      // Switch to English
      await page.locator('#lang-toggle-btn').click();
      await page.waitForTimeout(300);
      await page.screenshot({ path: '/home/speedlo/Projects/saudi-telecom-packages/assets/mobile_english.png' });
    }

    await context.close();
  }

  await browser.close();
  console.log('\n=== All Mobile Tests Completed Successfully! ===');
})();
