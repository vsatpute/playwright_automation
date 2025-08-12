import { test, expect } from '@playwright/test';

test.describe('Test Automation Practice Site', {tag: '@regression'},() => {
  
  test('Verify Header links on Automation Practice site',  async ({ page }) => {
    await page.goto("https://www.automationexercise.com/");
    await page.getByRole('link', { name: ' Home' }).click();
    await expect(page.getByRole('link', { name: ' Products' })).toBeVisible();
    await expect(page.getByRole('link', { name: ' Cart' })).toBeVisible();
    await expect(page.getByRole('link', { name: ' Signup / Login' })).toBeVisible();
});
 
});
