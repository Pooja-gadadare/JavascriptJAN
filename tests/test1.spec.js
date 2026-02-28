// js = .spec.js , ts = .spec.ts

import test, {expect} from "playwright/test";



//page - Fixture 
//hooks - before each , aftereach, beforeall , afterall

test.beforeEach( async({page}) => {
    await page.goto("https://www.saucedemo.com");
} )

test("verify user is able to login into application", async({page}) =>{
   
   await page.getByPlaceholder("Username").fill("standard_user");
   await page.getByPlaceholder("Password").fill("secret_sauce");
   await page.locator('//*[@id="login-button"]').click();
});

test("verify user able to see error in case of invalid creds", async({page}) =>{
 
   await page.getByPlaceholder("Username").fill("standard_userjnjn");
   await page.getByPlaceholder("Password").fill("secret_sauce1234");
   await page.locator('//*[@id="login-button"]').click();
   let expectedError = "Epic sadface: Username and password do not match any user in this service";
   expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText(expectedError);
});

test("verify user is able to see error in case of empty creds", async({page}) =>{
  
   await page.getByPlaceholder("Username").fill("");
   await page.getByPlaceholder("Password").fill("");
   await page.locator('//*[@id="login-button"]').click();
     let expectedError = "Epic sadface: Username is required";
    expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText(expectedError);  
});