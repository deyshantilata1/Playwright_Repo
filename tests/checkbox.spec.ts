// tests/checkbox.spec.ts

import { test } from '@playwright/test';
import { CheckboxPage } from '../pages/CheckboxPage';

test.describe('Checkbox Functionality', () => {

  test('Verify checkbox selection and unselection', async ({ page }) => {

    const checkboxPage = new CheckboxPage(page);

    // Navigate to page
    await checkboxPage.goto();

    // Verify page loaded
    await checkboxPage.verifyPageLoaded();

    // Check Checkbox 1
    await checkboxPage.checkCheckbox1();

    // Verify Checkbox 1 is checked
    await checkboxPage.verifyCheckbox1Checked();

    // Uncheck Checkbox 2
    await checkboxPage.uncheckCheckbox2();

    // Verify Checkbox 2 is unchecked
    await checkboxPage.verifyCheckbox2Unchecked();
  });

});