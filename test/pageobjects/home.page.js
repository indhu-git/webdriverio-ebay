const Page = require('./page');
const filterModal = require("../pageobjects/components/filter.modal.component");

const interactions = require('./utils/interactions');
/**
 * Home page containing specific selectors and methods for a home page 
 */

class HomePage extends Page{

    get filter(){
        return $(".dialog__body");
    }

    get mainContent(){
        return $("#mainContent")
    }
    get filteredMenu(){
        return $(".b-refine-menu");
    }

    get flashAlert () {
        return $("button#gh-shop-a");
    }

    get cellphonesAndAccessories () {
        return $("=Cell phones & accessories");
    }

    get cellPhonesAndSmartphones () {
        return $("=Cell Phones & Smartphones");
    }

    get headerBanner(){
        return $("header#gh");
    }

    get headerSearchInput(){
        return this.headerBanner.$('#gh-ac-box2 input');
    }

    get headerselectCategory(){
        return this.headerBanner.$('#gh-cat-box select');
    }

    get headerSearchButton(){
        return this.headerBanner.$('#gh-btn');
    }
    
    get searchList(){
        return this.mainContent.$("ul.srp-results li.s-item");
    }

    async openCategory(){
        interactions.eb_Click(this.flashAlert)
    }
    
    async navigateToCellphonesAndAccessories(){
        interactions.eb_Click(this.cellphonesAndAccessories);
    }

    async clickShopByNetworkSeeAll(){
        await this.clickSeeAll("Shop by Network");
    }

    async clickSeeAll(categoryName){
        const seeAll = $(`//span[contains(text(),'${categoryName}')]/..`);
        interactions.eb_Click(seeAll);
    }


    async selectFilter(){
        interactions.eb_Click(this.filter);
        await filterModal.openScreenSize();
        await filterModal.clickCheckBoxOption("5.0 - 5.4 in");
        await filterModal.openPrice();
        await filterModal.setRangeFrom("1000");
        await filterModal.setRangeTo("10000")
        await filterModal.openItemLocation();;
        await filterModal.clickRadioButtonOption("US Only");
        await filterModal.clickApply();
    }

     async getFilterText(){
        const filterText = this.filteredMenu.$(".brm__item--applied");
        return interactions.eb_GetText(filterText);
    }

    async enterSearchText(textToEnter){
        interactions.eb_TypeValue(this.headerSearchInput, textToEnter);
    }

    async selectSeachCategory(textToBeselect){
        await this.headerselectCategory.selectByVisibleText(textToBeselect);
    }
    
    async clickSearchIcon(){
        interactions.eb_Click(this.headerSearchButton);
    }

    async getsearchResultTextByIndex(index){
        const ele = this.mainContent.$("ul.srp-results").$$(function(){
            return this.querySelectorAll("li.s-item")
        })[index];
        return interactions.eb_GetText(ele);
    }

    async navigateToCellPhonesAndSmartphones(){
        interactions.eb_Click(this.cellPhonesAndSmartphones);
    }
}

module.exports = new HomePage();