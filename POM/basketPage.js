const { expect } = require('@playwright/test');

class BasketPage {

    constructor(page){
        this.correctBasketPage = page.getByRole('link', { name: 'items in shopping basket' });
        this.cartItem = page.getByRole('listitem').filter({ hasText: 'AirPods' });
        this.quantityValue = page.getByText('2', { exact: true }).nth(1);
    }
  async goToBasket(){
      await this.correctBasketPage.click();
      
  }

}

module.exports = {BasketPage};