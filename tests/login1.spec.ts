import { test } from '@playwright/test';
import { LoginPage1 } from '../pages/loginPage1';
import { SecurePage1 } from '../pages/securePage1';

test.describe('Login Flow', () => {

  test('login and logout flow', async ({ page }) => {
    const loginPage1 = new LoginPage1(page);
    const securePage1 = new SecurePage1(page);

    await loginPage1.goto();
    await loginPage1.login('tomsmith', 'SuperSecretPassword!');

    await securePage1.verifyLoginSuccess();

    await securePage1.logout();

    await loginPage1.verifyLoginPage();
  });

});