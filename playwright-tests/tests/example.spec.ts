import { test, expect } from '@playwright/test';

test.describe('Playwright website', () => {

  test('should have correct page title', async ({ page }) => {
    
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);

  });

});