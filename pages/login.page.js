const { Page } = require("./page");

exports.LoginPage = class LoginPage extends Page {

    loginInput = '#username';
    passwordInput = '#password';
    loginBtn = '#login-submit';
    flashError = '#flash_error';

    constructor(page) {
        super(page);
        this.page = page;
    }

    async loginInputFill(username) {
        await this.page.locator(this.loginInput).fill(username);
    }

    async passwordInputFill(pass) {
        await this.page.locator(this.passwordInput).fill(pass);
    }

    async clickLoginBtn() {
        await this.page.locator(this.loginBtn).click();
    }

    async login(username, pass) {
        await this.loginInputFill(username);
        await this.passwordInputFill(pass);
        await this.clickLoginBtn();
    }

    getFlashError() {
        return this.page.locator(this.flashError);
    }
}