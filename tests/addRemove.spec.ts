// tests/addRemove.spec.ts

import { test } from '@playwright/test';
import { AddRemovePage } from '../pages/AddRemovePage';

test.describe('Add Remove Elements', () => {

  test('Verify add and remove element functionality', async ({ page }) => {

    const addRemovePage = new AddRemovePage(page);

    // Redirect to page
    await addRemovePage.goto();

    // Verify page loaded
    await addRemovePage.verifyPageLoaded();

    // Add element
    await addRemovePage.addElement();

    // Verify delete button added
    await addRemovePage.verifyDeleteButtonCount(1);

    // Remove element
    await addRemovePage.removeElement();

    // Verify delete button removed
    await addRemovePage.verifyDeleteButtonCount(0);
  });

});