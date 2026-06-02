import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { DynamicLoadingPage } from '../pages/dynamicLoadingPage';

test('Dynamic Loading Test (Example 1 & 2)', async ({ page }) => {

  const home = new HomePage(page);
  const dynamic = new DynamicLoadingPage(page);

  // Step 1: Open homepage
  await home.goto();

  // Step 2: Navigate to Dynamic Loading page
  await home.clickDynamicLoading();
  await expect(page).toHaveURL(/dynamic_loading/);

  // -------------------------
  // Example 1
  // -------------------------
  await dynamic.openExample1();

  await expect(page).toHaveURL(/dynamic_loading\/1/);

  await dynamic.startLoading();

  await dynamic.waitForLoadingToFinish();

  await expect(dynamic.helloText).toBeVisible();
  await expect(dynamic.helloText).toHaveText('Hello World!');

  // Navigate back safely
  await page.goBack();

  // -------------------------
  // Example 2
  // -------------------------
  await dynamic.openExample2();

  await expect(page).toHaveURL(/dynamic_loading\/2/);

  await dynamic.startLoading();

  await dynamic.waitForLoadingToFinish();

  await expect(dynamic.helloText).toBeVisible();
  await expect(dynamic.helloText).toHaveText('Hello World!');
});