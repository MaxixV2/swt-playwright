exports.Page = class Page {

    constructor(page) {
        this.page = page;
    }

    async openUrl(url) {
        await this.page.goto(url == undefined ? '/' : url);
        await this.page.waitForLoadState('load');
    }
}