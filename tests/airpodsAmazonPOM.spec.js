const { test, expect } = require('@playwright/test');
const {POManager} = require('../POM/POManager');

test('add 2 AirPods to basket', async ({ page }) => {
  const poManager = new POManager(page);
  const amazonHomePage = poManager.getAmazonHomePage();
  const airPodsPage = poManager.getAirPodsPage();
  const basketPage = poManager.getBasketPage();
  const product = 'AirPods';
 // amazon home Page
  await amazonHomePage.goTo();
  await amazonHomePage.validAirPodSearch(product);
 
  // airpods search page
  await page.locator('.a-link-normal.s-no-outline').first().click();
  
  //airpods page
  await expect(airPodsPage.productTitle).toContainText(product);
  await airPodsPage.add2AirPodsToCart();
 
  //basket page
  await basketPage.goToBasket();
  await expect(basketPage.cartItem).toContainText(product);
  await expect(basketPage.quantityValue).toHaveText('2'); 
  
});


