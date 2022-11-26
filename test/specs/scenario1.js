const homePage = require("../pageobjects/home.page");


describe('Access a Product via category after applying multiple filters', () => {

    before(async ()=> {
        browser.url('./');
    });

    it('Go to www.ebay.com and Navigate to Search by category > Electronics > Cell Phones & accessories', async () => {
        await homePage.openCategory();
        await homePage.navigateToCellphonesAndAccessories();
    });

    it('After the page loads, click Cell Phones & Smartphones in the left hand side navigation section.', async ()=>{
        await homePage.navigateToCellPhonesAndSmartphones();
    });

    it('Now, click - See All (appears under “Shop by brand” or “Shop by Network”).', async ()=>{
        await homePage.clickShopByNetworkSeeAll();
    });

    it('Add 3 filters - screen size, Price and Item location appearing in the pop-up and click apply.”).', async ()=>{
        await homePage.selectFilter();
    });

    it('Verify that the filter tags are applied.', async ()=>{
        expect(await homePage.getFilterText()).toEqual("3 filters applied")
    });

});


