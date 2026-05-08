// pages/CheckboxPage.ts

import { Page, Locator, expect } from '@playwright/test';

export class CheckboxPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.locator('h3');
    this.checkbox1 = page.locator('input[type="checkbox"]').nth(0);
    this.checkbox2 = page.locator('input[type="checkbox"]').nth(1);
  }

  // Navigate to checkbox page
  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
  }

  // Verify page heading
  async verifyPageLoaded() {
    await expect(this.heading).toHaveText('Checkboxes');
  }

  // Select Checkbox 1
  async checkCheckbox1() {
    await this.checkbox1.check();
  }

  // Unselect Checkbox 2
  async uncheckCheckbox2() {
    await this.checkbox2.uncheck();
  }

  // Verify Checkbox 1 is checked
  async verifyCheckbox1Checked() {
    await expect(this.checkbox1).toBeChecked();
  }

  // Verify Checkbox 2 is unchecked
  async verifyCheckbox2Unchecked() {
    await expect(this.checkbox2).not.toBeChecked();
  }
}