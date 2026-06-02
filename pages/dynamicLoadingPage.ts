import { Page, Locator } from '@playwright/test';

export class DynamicLoadingPage {

  readonly page: Page;
  readonly startButton: Locator;
  readonly loadingSpinner: Locator;
  readonly helloText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.startButton = page.locator('#start button');
    this.loadingSpinner = page.locator('#loading');
    this.helloText = page.locator('#finish h4');
  }

  async openExample1() {
    await this.page.click('text=Example 1: Element on page that is hidden');
  }

  async openExample2() {
    await this.page.click('text=Example 2: Element rendered after the fact');
  }

  async startLoading() {
    await this.startButton.click();
  }

  async waitForLoadingToFinish() {
    await this.loadingSpinner.waitFor({ state: 'hidden' });
  }
}