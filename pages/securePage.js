const { expect } = require('@playwright/test');

class SecurePage {
  constructor(page) {
    this.page = page;
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/secure/);
    await expect(this.page.locator('#flash'))
      .toContainText('You logged into a secure area!');
  }

  async logout() {
    await this.page.getByRole('link', { name: 'Logout' }).click();
  }
}

module.exports = { SecurePage };