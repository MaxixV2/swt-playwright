const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');
const { LoginPage } = require('../pages/login.page');

const userCredentials = require('../data/testdata.json');

test.describe('login with valid credentials', async () => {
    test('should log in with valid credentials', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        await homePage.goto();
        await homePage.clickSignInBtn();
        await loginPage.login(userCredentials.login, userCredentials.password);
        await expect(page).toHaveURL('/');
        await expect(homePage.getLoggedAsLabel()).toBeVisible();
    })
})

