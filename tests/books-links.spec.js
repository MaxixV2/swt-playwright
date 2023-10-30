const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');

const purchaseLinksArray = require('../testdata.json');

test.describe('books links', () => {
    test('should redirect to books packtpub.com purchase pages', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        let i = 0;
        for (const link of await homePage.getBooksLinks().all()) {
            await link.click();
            if (await homePage.getAd().isVisible()) {
                await homePage.removeAd();
            }
            await expect(page).toHaveURL(purchaseLinksArray['packtub links'][i]);
            await page.goBack();
            i++;
        }
    })
})

