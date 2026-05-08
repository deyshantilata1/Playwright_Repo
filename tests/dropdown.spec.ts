// tests/dropdown.spec.ts

import { test } from '@playwright/test';
import { DropdownPage } from '../pages/DropdownPage';

test.describe('Dropdown Functionality', () => {

  test('Select Option 1 from dropdown', async ({ page }) => {

    const dropdownPage = new DropdownPage(page);

    // Navigate to page
    await dropdownPage.goto();

    // Verify page loaded
    await dropdownPage.verifyPageLoaded();

    // Select Option 1
    await dropdownPage.selectOption('Option 1');

    // Verify selected option
    await dropdownPage.verifySelectedOption('Option 1');
  });

  test('Select Option 2 from dropdown', async ({ page }) => {

    const dropdownPage = new DropdownPage(page);

    // Navigate to page
    await dropdownPage.goto();

    // Select Option 2
    await dropdownPage.selectOption('Option 2');

    // Verify selected option
    await dropdownPage.verifySelectedOption('Option 2');
  });

});