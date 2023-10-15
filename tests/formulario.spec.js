// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://admin-demo.moosocial.com/admin/home/login?admin_redirect_url=aHR0cDovL2FkbWluLWRlbW8ubW9vc29jaWFsLmNvbS9hZG1pbi9ob21l');
  page.pause
  await page.locator("//input[@id='UserEmail']").clear()
  await page.locator("//input[@id='UserEmail']").click();
  await page.locator("//input[@id='UserEmail']").fill('LORENZO')
  await page.locator("//input[@id='UserEmail']").press('Control+a')
  await page.locator("//input[@id='UserPassword']").click();
});
//