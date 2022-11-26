
const interactions = require('../utils/interactions');


class FilterModal{
    get leftPanel(){
        return $(".x-overlay__wrapper--left");
    }

    get rightPanel(){
        return $(".x-overlay__wrapper--right");
    }

    get footer(){
        return $(".x-overlay-footer");
    }
    
    get optionList(){
        return $(".x-overlay-sub-panel__aspect-options-list");
    }

    get price(){
        return this.leftPanel.$("span=Price");
    }

    get screenSize(){
        return this.leftPanel.$("span=Screen Size");
    }

    get itemLocation(){
        return this.leftPanel.$("span=Item Location");
    }
    
    async openPrice(){
        
    }

    async openScreenSize(){
        interactions.eb_Click(this.screenSize)
    }

    async openItemLocation(){
        interactions.eb_Click(this.itemLocation);
    }

    async clickCheckBoxOption(option){
       const opt = this.rightPanel.$(".//span[text()='"+option+"']/../..//span[contains(@class,'x-refine__multi-select-')]")
       interactions.eb_Click(opt);      
    }

    async clickRadioButtonOption(option){
        const opt = this.rightPanel.$(".//span[text()='"+option+"']/../..//input[contains(@class,'radio__control')]")
        interactions.eb_Click_ExistElement(opt);       
    }

    async setRangeFrom(rangeFrom){
        const rangeFromInputBox = this.rightPanel.$(".x-textrange__input--from");
        interactions.eb_TypeValue(rangeFromInputBox, rangeFrom);
    }

    async setRangeTo(rangeTo){
        const rangeToInputBox = this.rightPanel.$(".x-textrange__input--to");
        interactions.eb_TypeValue(rangeToInputBox, rangeTo);
    }

    async clickApply(){
        const apply = this.footer.$(".x-overlay-footer__apply");
       interactions.eb_Click(apply);
    }
}

module.exports = new FilterModal();
