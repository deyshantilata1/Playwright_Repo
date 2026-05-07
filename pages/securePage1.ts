import { Page, expect } from '@playwright/test';

export class SecurePage1 {
  constructor(private page: Page) {}

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/secure/);
    await expect(this.page.locator('#flash'))
      .toContainText('You logged into a secure area!');
  }

  async logout() {
    await this.page.getByRole('link', { name: 'Logout' }).click();
  }

  async verifyLoggedOut() {
    await expect(this.page).toHaveURL(/login/);
    await expect(this.page.locator('#flash'))
      .toContainText('You logged out of the secure area!');
  }
}