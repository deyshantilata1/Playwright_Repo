import { test, expect } from '@playwright/test';
import { DynamicControlsPage } from '../pages/dynamicControlsPage';

test('Dynamic Controls Page Test', async ({ page }) => {

  const dynamic = new DynamicControlsPage(page);

  await dynamic.gotoHomePage();
  await dynamic.openDynamicControls();

  // Remove checkbox
  await dynamic.removeCheckbox();
  await expect(dynamic.message).toHaveText("It's gone!");

  // Add checkbox
  await dynamic.addCheckbox();
  await expect(dynamic.message).toHaveText("It's back!");

  // Enable input field
  await dynamic.enableInput();
  await expect(dynamic.inputField).toBeEnabled();

  // Enter text
  await dynamic.inputField.fill('Playwright');

  // Disable input field
  await dynamic.disableInput();
  await expect(dynamic.inputField).toBeDisabled();

});