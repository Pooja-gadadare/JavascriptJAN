import test, { expect } from "playwright/test";

test.beforeEach (async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
})

test("verify the low to high filter", async({page}) => {
    
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.locator('//*[@id="login-button"]').click();
    await page.selectOption("[class=product_sort_container]","lohi");
   
} );


test("verify the high to low filter", async({page}) => {
    
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.locator('//*[@id="login-button"]').click();
    await page.selectOption("[class=product_sort_container]",{label : 'Price (high to low)'});
   
} );

test("verify the Name (Z to A) filter", async({page}) => {
    
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.locator('//*[@id="login-button"]').click();
    await page.selectOption("[class=product_sort_container]",{index : 1 });
   
} );
