import { Page, Locator } from '@playwright/test';

export class ContextMenuPage {
  readonly page: Page;
  readonly box: Locator;

  constructor(page: Page) {
    this.page = page;
    this.box = page.locator('#hot-spot');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/context_menu');
  }

  async rightClickBox() {
    await this.box.click({ button: 'right' });
  }
}