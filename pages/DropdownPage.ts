// pages/DropdownPage.ts

import { Page, Locator, expect } from '@playwright/test';

export class DropdownPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly dropdown: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.locator('h3');
    this.dropdown = page.locator('#dropdown');
  }

  // Navigate to dropdown page
  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/dropdown');
  }

  // Verify page heading
  async verifyPageLoaded() {
    await expect(this.heading).toHaveText('Dropdown List');
  }

  // Select dropdown option by visible text
  async selectOption(option: string) {
    await this.dropdown.selectOption({ label: option });
  }

  // Verify selected option
  async verifySelectedOption(option: string) {
    await expect(this.dropdown).toHaveValue(
      option === 'Option 1' ? '1' : '2'
    );
  }
}