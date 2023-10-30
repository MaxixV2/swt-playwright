const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');
const { LoginPage } = require('../pages/login.page');
const { faker } = require('@faker-js/faker');

const randomLogin = faker.internet.userName();
const randomPassword = faker.internet.password();
const userCredentials = require('../data/testdata.json');

test.describe('login with invalid credentials', async () => {
    test('should display an error using invalid login', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        await homePage.goto();
        await homePage.clickSignInBtn();
        await loginPage.login(randomLogin, userCredentials.password);
        await expect(loginPage.getFlashError()).toBeVisible();
    })

    test('should display an error using invalid password', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        await homePage.goto();
        await homePage.clickSignInBtn();
        await loginPage.login(userCredentials.login, randomPassword);
        await expect(loginPage.getFlashError()).toBeVisible();
    })
})
