import { test, expect } from '@playwright/test';

test('add 2 AirPods to basket', async ({ page }) => {
  await page.goto('https://www.amazon.de/?&tag=googdeaen-21&ref=pd_sl_7qhccgoot7_e&adgrpid=154228170936&hvpone=&hvptwo=&hvadid=675212901583&hvpos=&hvnetw=g&hvrand=113983762822001701&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9043396&hvtargid=kwd-10573980&hydadcr=10627_2211717&language=en_GB&gad_source=1');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.de' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.de' }).fill('air pods');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  // airpods search page
  await page.locator('.a-link-normal.s-no-outline').first().click();
  //airpods page
  await expect(page.locator('#productTitle')).toContainText('AirPods');
  await page.locator('#a-autoid-2-announce').click();
  await page.getByRole('option', { name: '2' }).click();
  await page.getByRole('button', { name: 'Add to basket', exact: true }).click();
  const noThanksButton = page.getByRole('button', { name: /no, thank you/i });
  if (await noThanksButton.isVisible().catch(() => false)) {
    await noThanksButton.click();
  }
  //cart page
  await page.getByRole('link', { name: 'items in shopping basket' }).click();
  await expect(page.getByRole('listitem').filter({ hasText: 'Apple AirPods 4 Wireless Headphones, Bluetooth Headphones, Perso... Opens in a' })).toContainText('AirPods');
  await expect(page.getByText('2', { exact: true }).nth(1)).toHaveText('2');
  
});