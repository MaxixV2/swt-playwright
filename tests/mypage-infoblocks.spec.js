import { test, expect } from '@playwright/test';
const { MyPage } = require('../pages/mypage.page');
const { HomePage } = require('../pages/home.page');
const { LoginPage } = require('../pages/login.page');

const userCredentials = require('../data/testdata.json');

test.describe('my page info blocks', async () => {
    test.beforeEach('login', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        await homePage.goto();
        await homePage.clickSignInBtn();
        await loginPage.login(userCredentials.login, userCredentials.password);
    });

    test('should add and remove info blocks on my page', async ({ page }) => {
        const homePage = new HomePage(page);
        const myPage = new MyPage(page);
        await homePage.goToMyPage();
        if (await homePage.getAd().isVisible()) {
            await homePage.removeAd();
        }
        await myPage.setDropdownOptions();
        for (let i = 0; i < myPage.dropdownValues.length; i++) {
            await myPage.chooseOption(i);
            await expect(myPage.getInfoBlock()).toBeVisible();
            await myPage.closeBlock();
            await expect(myPage.getInfoBlock()).not.toBeVisible();
        }

    });
})

