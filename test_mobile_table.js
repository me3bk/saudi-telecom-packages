const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: '/usr/bin/chromium',
    headless: true,
    args: ['--no-sandbox']
  });

  const iPhone = {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    viewport: { width: 393, height: 852 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true
  };

  const context = await browser.newContext(iPhone);
  const page = await context.newPage();

  await page.goto('file:///home/speedlo/Projects/saudi-telecom-packages/index.html');
  await page.waitForTimeout(500);

  // Switch to table
  await page.locator('#btn-view-table').click();
  await page.waitForTimeout(300);

  // Scroll to table
  await page.locator('#mobile-table-hint').scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: '/home/speedlo/Projects/saudi-telecom-packages/assets/mobile_table_scrolled.png' });

  await browser.close();
})();
