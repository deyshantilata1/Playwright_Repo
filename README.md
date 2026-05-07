# Playwright Test Project

End-to-end tests using [Playwright Test](https://playwright.dev/), demonstrating the Page Object Model pattern against [the-internet.herokuapp.com](https://the-internet.herokuapp.com).

## Project Structure

```
.
├── pages/                # Page Object Models
│   ├── loginPage.js      # JS variant
│   ├── loginPage1.ts     # TS variant
│   ├── securePage.js
│   └── securePage1.ts
├── tests/                # Test specs
│   ├── example.spec.js   # playwright.dev sample
│   ├── login.spec.js     # JS login flow
│   └── login1.spec.ts    # TS login flow
├── playwright.config.js  # Browsers, baseURL, headed mode
├── tsconfig.json
└── package.json
```

## Setup

```bash
npm install
npm run install:browsers   # one-time: download Chromium, Firefox, WebKit
```

## Running Tests

| Command | Purpose |
|---|---|
| `npm test` | Run all tests across Chromium, Firefox, and WebKit |
| `npm run test:chromium` | Chromium only |
| `npm run test:firefox` | Firefox only |
| `npm run test:webkit` | WebKit only |
| `npm run test:headed` | Force headed mode |
| `npm run test:ui` | Interactive UI mode (recommended for development) |
| `npm run test:debug` | Step through tests with the Playwright Inspector |
| `npm run report` | Open the HTML report from the last run |

Run a single spec:

```bash
npx playwright test tests/login.spec.js
```

Run a single test by title:

```bash
npx playwright test -g "valid login"
```

## Configuration

See `playwright.config.js`:

- **`baseURL`**: `https://the-internet.herokuapp.com`
- **`headless`**: `false` — browsers are visible by default
- **Projects**: Chromium, Firefox, WebKit

## Writing Tests

Page Objects live in `pages/` and encapsulate selectors and actions. Specs in `tests/` import them and exercise user flows. Example:

```js
const { LoginPage } = require('../pages/loginPage');

test('valid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
});
```

Both `.js` and `.ts` specs are picked up automatically.
