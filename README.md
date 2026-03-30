# Playwright Automation Framework (UI and API)

## Overview

This project demonstrates a test automation framework built with Playwright. It includes both UI automation using TypeScript and API testing using JavaScript.

The tests cover typical e-commerce scenarios such as adding products to a cart through the UI and through API requests, and then verifying the results in the UI.

---

## Tech Stack

* Playwright
* TypeScript (UI tests and page objects)
* JavaScript (API test)
* Node.js

---

## Framework Design

The UI tests are built using the Page Object Model (POM). This separates page interactions from test logic.

Page objects contain:

* locators
* actions

Test files contain:

* assertions
* test flow

This structure helps keep the code easier to maintain and reuse.

---

## Test Scenarios

### Amazon AirPods UI Test

File: `airpodsAmazonPOM.spec.ts`

Flow:

* Navigate to Amazon
* Search for AirPods
* Open the first product
* Verify the product title
* Add 2 items to the basket
* Open the basket
* Verify the product and quantity

---

### GloGang API and UI Test

File: `apiAddSocksToCart.spec.js`

Flow:

* Open product page
* Add item to cart via UI
* Retrieve cart cookie
* Send API request to add item to cart
* Check response status
* Handle optional popup
* Verify item appears in cart

---

## API and UI Integration

This project combines API and UI testing in a single flow.

The API is used to modify the application state directly, while the UI is used to verify what the user would see.

This approach improves speed and reduces flakiness compared to relying only on UI tests.

---

## Running the Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test airpodsAmazonPOM.spec.ts
```

---

## Project Structure

```
tests/
  airpodsAmazonPOM.spec.ts
  apiAddSocksToCart.spec.js

POMts/
  POManager.ts
  AirPodsPage.ts
  BasketPage.ts
  AmazonHomepage.ts
```

---

## Future Improvements

* Convert API test to TypeScript
* Add CI integration
* Improve selector stability
* Add reporting

---

## Author

This project was created as part of learning test automation with Playwright, focusing on building maintainable and structured tests.
