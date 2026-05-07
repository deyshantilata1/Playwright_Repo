const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { SecurePage } = require('../pages/securePage');

test.describe('Login Tests', () => {

  test('valid login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const securePage = new SecurePage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await securePage.verifyLoginSuccess();
  });

  test('invalid login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('wrong', 'wrong');

    await expect(loginPage.flashMessage())
      .toContainText('Your username is invalid!');
  });

});