import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { DynamicContentPage } from '../pages/dynamicContentPage';

test('Dynamic Content Change Verification', async ({ page }) => {

  const home = new HomePage(page);
  const dynamicContent = new DynamicContentPage(page);

  // Step 1: Open homepage
  await home.goto();

  // Step 2: Click Dynamic Content
  await home.clickDynamicContent();
  await expect(page).toHaveURL(/dynamic_content/);

  // Step 3: Capture initial content
  const initialTexts = await dynamicContent.getAllTexts();

  // Step 4: Click "click here" to refresh content
  await dynamicContent.refreshContent();

  // Step 5: Capture new content
  const newTexts = await dynamicContent.getAllTexts();

  // Step 6: Compare content
  const isChanged = JSON.stringify(initialTexts) !== JSON.stringify(newTexts);

  console.log('Content changed:', isChanged);

  // Assertion
  expect(isChanged).toBeTruthy();

  // Step 7: Navigate back to homepage if changed
  if (isChanged) {
    await page.goto('https://the-internet.herokuapp.com/');
  }
});