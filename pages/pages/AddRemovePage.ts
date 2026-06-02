// pages/AddRemovePage.ts

import { Page, Locator, expect } from '@playwright/test';

export class AddRemovePage {
  readonly page: Page;
  readonly addElementButton: Locator;
  readonly deleteButton: Locator;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.locator('h3');
    this.addElementButton = page.locator('button:has-text("Add Element")');
    this.deleteButton = page.locator('button:has-text("Delete")');
  }

  // Navigate to page
  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
  }

  // Verify heading
  async verifyPageLoaded() {
    await expect(this.heading).toHaveText('Add/Remove Elements');
  }

  // Add element
  async addElement() {
    await this.addElementButton.click();
  }

  // Verify delete button count
  async verifyDeleteButtonCount(count: number) {
    await expect(this.deleteButton).toHaveCount(count);
  }

  // Remove element
  async removeElement() {
    await this.deleteButton.click();
  }
}