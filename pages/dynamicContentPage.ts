import { Page, Locator } from '@playwright/test';

export class DynamicContentPage {
  readonly page: Page;
  readonly contentTexts: Locator;
  readonly clickHereLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contentTexts = page.locator('#content .large-10'); // text blocks
    this.clickHereLink = page.locator('a:has-text("click here")');
  }

  async getAllTexts() {
    return await this.contentTexts.allTextContents();
  }

  async refreshContent() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.clickHereLink.click()
    ]);
  }
}