// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  // Expect a title "to contain" a substring.
//  await expect(page).toHaveTitle(/standard_user/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  page.pause();
  await expect(page.locator('#user-name')).toBeVisible();
    // podemos usar cualquier atributo y valor del atrituto
    //await page.click('id=user-name')
    //using CSS
 await page.locator('#user-name').fill('standard_user');
 //using xpath
 await page.locator("//input[@id='user-name']").fill('standard_user');
 // await expect(page.locator('#user-name')).toContainText('standard_user');
  await page.locator('#password').fill('secret_sauce');
   //using text
  await page.getByText('Login').click();
  await page.locator('text=LOGIN').click();
  await page.locator("input:has-text('LOGIN')").click();
  await page.getByText('Sauce Labs Backpack').click();
  // Click the get started link.
  // Click the get started link.
//  await page.getByRole('link', { name: 'Get started' }).click();
//  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
 // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
