// @ts-check
import { test, expect } from '@playwright/test';

test('Exercise 1', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example');
  await page.getByRole('textbox', { name: 'Support for testing on remote devices' }).check();
  await page.getByRole('textbox', { name: 'Re-using existing JavaScript code for testing' }).check();
  await page.getByRole('textbox', { name: 'Running tests in background and/or in parallel in multiple browsers' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thank you, TestCafe!')).toBeVisible();
});
