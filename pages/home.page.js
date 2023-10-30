const { expect } = require('@playwright/test');
const { Page } = require('./page');

exports.HomePage = class HomePage extends Page {

    signInBtn = '.login';
    loggedAsLabel = '#loggedas';
    booksLinksArray = '//*[contains(@href,"packtpub.com/product")][@class]';
    myPageLink = 'a[href="/my/page"]';

    constructor(page) {
        super(page);
        this.page = page;
    }

    async goto() {
        //await this.page.goto("/");
        await super.openUrl('/');
    }

    async clickSignInBtn() {
        await this.page.locator(this.signInBtn).click();
        await expect(this.page).toHaveURL('/login');
    }

    async removeAd() {
        await this.getAd().click();
    }

    async goToMyPage() {
        await this.getMyPageLink().click();
    }

    getAd() {
        return this.page.frameLocator('iframe[name="aswift_2"]').frameLocator('iframe[name="ad_iframe"]').getByLabel('Close ad');
    }

    getLoggedAsLabel() {
        return this.page.locator(this.loggedAsLabel);
    }

    getBooksLinks() {
        return this.page.locator(this.booksLinksArray);
    }

    getMyPageLink() {
        return this.page.locator(this.myPageLink);
    }
}