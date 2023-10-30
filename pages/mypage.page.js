const { expect } = require('@playwright/test');
const { Page } = require('./page');

exports.MyPage = class MyPage extends Page {

    dropdown = '//*[@id="block-select"]';
    dropdownOptions = '//*[@id="block-select"]//option[@value]';
    infoBlock = '//*[@class="mypage-box"]/h3';
    infoBlockCloseBtn = '.icon-close';
    dropdownValues = new Array;

    constructor(page) {
        super(page);
        this.page = page;
    }

    async chooseOption(option) {
        await this.getDropdown().selectOption(this.dropdownValues[option]);
    }

    async setDropdownOptions() {
        for (const value of await this.getDropdownOptions().all()) {
            this.dropdownValues.push(await value.getAttribute('value'));
        }
    }

    getDropdownOptions() {
        return this.page.locator(this.dropdownOptions);
    }

    getDropdown() {
        return this.page.locator(this.dropdown);
    }

    async closeBlock() {
        await this.page.locator(this.infoBlockCloseBtn).click();
    }

    getInfoBlock() {
        return this.page.locator(this.infoBlock);
    }
}