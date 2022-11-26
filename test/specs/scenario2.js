const homePage = require("../pageobjects/home.page");


describe('Access a Product via Search', () => {

    before(async ()=> {
        browser.url('./');
    });

    it('Go to www.ebay.com and Type any search string in the search bar. For example: MacBook.', async () => {
        await homePage.enterSearchText("Macbook");
    });

    it('Change the Search category. For example: Computers/Tablets & Networking and click Search.', async ()=>{
        await homePage.selectSeachCategory("Computers/Tablets & Networking");
        await homePage.clickSearchIcon();
    });

    it('Verify that the page loads completely.', () => {
        browser.waitUntil(() => browser.getUrl() === `${url}`,{
            timeout: 30000, timeoutMsg: 'Page is not loaded completely'
        });
    });

    it('Verify that the first result name matches with the search string.', async ()=>{
        expect(await homePage.getsearchResultTextByIndex(0)).toContain("Macbook")
    });
});


