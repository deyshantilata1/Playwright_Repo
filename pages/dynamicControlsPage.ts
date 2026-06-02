import { Page, Locator } from '@playwright/test';

export class DynamicControlsPage {

  readonly page: Page;
  readonly checkbox: Locator;
  readonly removeAddButton: Locator;
  readonly enableDisableButton: Locator;
  readonly message: Locator;
  readonly inputField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkbox = page.locator('#checkbox');
    this.removeAddButton = page.locator('#checkbox-example button');
    this.enableDisableButton = page.locator('#input-example button');
    this.message = page.locator('#message');
    this.inputField = page.locator('input[type="text"]');
  }

  async gotoHomePage() {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }

  async openDynamicControls() {
    await this.page.click('text=Dynamic Controls');
  }

  async removeCheckbox() {
    await this.removeAddButton.click();
  }

  async addCheckbox() {
    await this.removeAddButton.click();
  }

  async enableInput() {
    await this.enableDisableButton.click();
  }

  async disableInput() {
    await this.enableDisableButton.click();
  }
}