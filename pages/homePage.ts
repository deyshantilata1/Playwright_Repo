import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }

  async clickDynamicLoading() {
    await this.page.click('text=Dynamic Loading');
  }

  async clickDynamicContent() {
    await this.page.click('text=Dynamic Content');
  }
}