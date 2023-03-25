describe('Watches Page', () => {
    it('should show banner container', async () => {
        await browser.url('https://by.ebay.com/b/Xiaomi/bn_21838783');
        const banner = await $("div[class='title-banner__right-image']")
        await expect(banner).toBeDisplayed()
    });

    it('rightBannerTitle', async () => {
        const bannerName = await $(".title-banner__title")
        await expect(bannerName).toHaveText('Xiaomi')
    });
    //HomeTask WebDriverIO Commands/Basic
    it('Value to the search field', async () => {
        const serchingField = await $(".gh-tb")
        const searchButton = await $(".btn-prim")
        await serchingField.setValue("Apple")
        await searchButton.click(searchButton.waitForDisplayed());
        const headerOfPage = await $(".srp-controls__count-heading")
        await expect(headerOfPage).toHaveTextContaining("Apple")
    });

    it('Update search field value', async () => {
        const serchingField = await $(".gh-tb")
        const searchButton = await $(".btn-prim")
        await serchingField.addValue(" ipad")
        
        await searchButton.click(searchButton.waitForDisplayed())
        const headerOfPage = await $(".srp-controls__count-heading")
        await expect(headerOfPage).toHaveTextContaining("Apple ipad")
    });
    it('Existing categories on the Page', async () => {
        const categories = await $(".gh-o")
        const categoriesButton = await $("#gh-shop-a")
        console.log(await categories.isDisplayed());
        console.log(await categories.isExisting());
        await categoriesButton.click(categoriesButton.waitForDisplayed());
        console.log(await categories.isDisplayed());
        console.log(await categories.isExisting());
        await categoriesButton.click(categoriesButton.waitForDisplayed());
        console.log(await categories.isDisplayed());
        console.log(await categories.isExisting());
    });

    it('Wait for Discount header display', async () => {
        const dayDiscountButton = await $("a[data-sp='m570.l3188']")
        await dayDiscountButton.click(dayDiscountButton.waitForDisplayed());
        const pageHeader = await $("ebayui-dne-banner-text")
        await pageHeader.waitForDisplayed({ 

            timeout: 3000,
      
            reverse: true,
      
            timeoutMsg: 'Desired element did not disappear',
      
            interval: 300
      
          })
          await expect(browser).toHaveUrl('https://www.ebay.com/globaldeals')
    });

});