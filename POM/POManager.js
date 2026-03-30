const {AmazonHome} = require('./AmazonHomepage');
const {AirPodsPage} = require('./airPodsPage');
const {BasketPage} = require('./basketPage');

class POManager {
 constructor(page){
  this.page = page; 
  this.amazonHomePage = new AmazonHome(this.page);
  this.airPodsPage = new AirPodsPage(this.page);
  this.basketPage = new BasketPage(this.page);
 }

 getAmazonHomePage()
 {
  return this.amazonHomePage;
 }
 
 getAirPodsPage()
 {
   return this.airPodsPage;
 }
 
 getBasketPage()
 {
  return this.basketPage;
 }

}

module.exports={POManager};