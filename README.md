# 🎭 Playwright End-to-End Automation

![Playwright](https://img.shields.io/badge/Playwright-v1.58.2-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CI](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)

A comprehensive **end-to-end test automation** project built with [Playwright](https://playwright.dev/), covering real-world UI interaction scenarios including login flows, shopping cart workflows, dropdowns, radio buttons, checkboxes, and multi-tab (child window) handling.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Suites](#test-suites)
- [Configuration](#configuration)
- [CI/CD Pipeline](#cicd-pipeline)
- [Technologies Used](#technologies-used)

---

## 🌟 Overview

This project demonstrates end-to-end browser automation using **Playwright** with JavaScript. It covers:

- ✅ User **login and authentication** flows
- ✅ **Shopping cart** add & checkout automation
- ✅ **Country dropdown** and auto-suggest handling
- ✅ **Form filling** with card details and coupon codes
- ✅ **Radio buttons**, **checkboxes**, and **dropdown** interactions
- ✅ **Child window / multi-tab** handling
- ✅ **Network idle** and smart wait strategies
- ✅ **CI/CD integration** with GitHub Actions

---

## 📁 Project Structure

```
playwright-automation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml        # GitHub Actions CI/CD workflow
│
├── tests/
│   ├── clientApp.spec.js         # E2E tests - Login, Cart & Checkout flow
│   └── uibasictext.spec.js       # UI interaction tests (dropdowns, checkboxes, child windows)
│
├── playwright-report/            # Auto-generated HTML test reports
├── test-results/                 # Raw test result artifacts
├── playwright.config.js          # Playwright global configuration
├── package.json                  # Project dependencies and metadata
├── .gitignore                    # Git ignored files
└── README.md                     # Project documentation
```

---

## ✅ Prerequisites

Ensure the following are installed on your machine:

| Tool       | Version       | Download |
|------------|---------------|----------|
| Node.js    | 18+ (LTS)     | [nodejs.org](https://nodejs.org/) |
| npm        | 8+            | Bundled with Node.js |
| Git        | Latest        | [git-scm.com](https://git-scm.com/) |

---

## ⚙️ Installation

**1. Clone the repository:**
```bash
git clone https://github.com/santoshHkumbar/playwrigth_end_to_end_automation.git
cd playwrigth_end_to_end_automation
```

**2. Install project dependencies:**
```bash
npm install
```

**3. Install Playwright browsers:**
```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run all tests
```bash
npx playwright test
```

### Run a specific test file
```bash
npx playwright test tests/clientApp.spec.js
npx playwright test tests/uibasictext.spec.js
```

### Run tests in headed mode (visible browser)
```bash
npx playwright test --headed
```

### Run tests in a specific browser
```bash
npx playwright test --browser=chromium
npx playwright test --browser=firefox
npx playwright test --browser=webkit
```

### View the HTML test report
```bash
npx playwright show-report
```

### Debug mode (step through tests)
```bash
npx playwright test --debug
```

---

## 🧪 Test Suites

### 1. `clientApp.spec.js` — E2E Shopping Flow

| Test | Description |
|------|-------------|
| `client app login` | Logs into the client app, finds a specific product (`ZARA COAT 3`), adds it to cart, verifies its presence, and completes the checkout with country selection, card details, CVV, and coupon code. |

**Flow:**
```
Login ► Browse Products ► Add to Cart ► Checkout ► Select Country ► Fill Payment ► Submit
```

---

### 2. `uibasictext.spec.js` — UI Interaction Tests

| Test | Status | Description |
|------|--------|-------------|
| `first browser context test` | ⏭ Skipped | Basic browser context creation and Google navigation |
| `page context test` | ⏭ Skipped | Page title assertion for Kapiva website |
| `new website context test` | ⏭ Skipped | Login page practice with text input, error validation, and card content listing |
| `dropdown and radio button context test` | ⏭ Skipped | Select dropdowns, radio buttons, checkboxes, and blink text attribute assertions |
| `child windows cases` | ✅ Active | Multi-tab handling — clicks a link that opens a new tab, extracts email domain text, and fills the username field dynamically |

---

## 🔧 Configuration

The Playwright configuration is defined in `playwright.config.js`:

| Setting | Value | Description |
|---------|-------|-------------|
| `testDir` | `./tests` | Directory where test files are located |
| `timeout` | `30,000ms` | Maximum time a test is allowed to run |
| `expect.timeout` | `5,000ms` | Timeout for assertion checks |
| `reporter` | `html` | Generates an HTML test report |
| `browserName` | `chromium` | Runs on Chromium by default |
| `headless` | `true` | Tests run in headless mode (no visible browser) |

---

## 🚀 CI/CD Pipeline

This project uses **GitHub Actions** for continuous integration. The pipeline is triggered automatically on:

- **Push** to `main` or `master` branch
- **Pull Requests** targeting `main` or `master`

### Pipeline Steps:

```yaml
1. Checkout code
2. Set up Node.js (LTS)
3. Install npm dependencies (npm ci)
4. Install Playwright browsers with system dependencies
5. Run all Playwright tests
6. Upload HTML test report as artifact (retained for 30 days)
```

**View workflow:** [`.github/workflows/playwright.yml`](.github/workflows/playwright.yml)

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| [Playwright](https://playwright.dev/) | Browser automation & testing framework |
| [Node.js](https://nodejs.org/) | JavaScript runtime |
| [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Primary scripting language |
| [GitHub Actions](https://github.com/features/actions) | CI/CD automation |
| [Chromium](https://www.chromium.org/) | Default test browser |

---

## 👤 Author

**Santosh H Kumbar**  
🔗 GitHub: [@santoshHkumbar](https://github.com/santoshHkumbar)

---

## 📄 License

This project is licensed under the **ISC License**.

---

> 💡 **Tip:** Run `npx playwright show-report` after test execution to open the interactive HTML report with screenshots, traces, and step-by-step logs.
