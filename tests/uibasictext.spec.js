const { test, expect } = require('@playwright/test');
const { promises } = require('node:dns');
const { text } = require('node:stream/consumers');
test.skip('first browser context test', async ({ browser }) => {

    // Create new browser context
    const context = await browser.newContext();

    // Create new page inside that context
    const page = await context.newPage();

    await page.goto("https://www.google.com/");

});



test.skip('page context test', async ({ page }) => {
    await page.goto("https://kapiva.in/")
    //asseration useing title
    console.log(await page.title())
    await expect(page).toHaveTitle("Kapiva - Buy Modern Ayurvedic Products Online for Complete Nutrition")
})


test.skip('new website  context test', async ({ page }) => {
    const username = page.locator('#username')
    const sign = page.locator("[value='Sign In']")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    //asseration useing title
    console.log(await page.title())
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await username.fill("rahulshetty");
    await page.locator('#password').fill("Learning@830$3mK2");
    await sign.click();
    console.log(await page.locator('[style*="block;"]').textContent());
    await expect(page.locator('[style*="block;"]')).toContainText('username/password.')
    //this is for clear the texrt field
    await username.fill('')
    await username.fill('rahulshettyacademy');
    await sign.click();
    //this is for newtwork load complete for ui
    await page.waitForLoadState('networkidle');
    //or 
    await page.locator(".card-body a").waitFor();
    //gte first index for the card box 
    await page.locator(".card-body a").first().waitFor();
    console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());
    //if wait all the all text in card 

    console.log(await page.locator(".card-body a").allTextContents());



})


test.skip('dropdown and radio button  context test', async ({ page }) => {
    const username = page.locator('#username')
    const sign = page.locator("[value='Sign In']")
    const dropdown = page.locator('select.form-control')
    const blinktext = page.locator("[href*='document']")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    //asseration useing title
    console.log(await page.title())
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await username.fill("rahulshetty");
    console.log(await username.fill("rahulshetty").input)
    await page.locator('#password').fill("Learning@830$3mK2");

    //dropdown  useing select tag
    console.log(await dropdown.selectOption('teach'));

    //radio button
    await page.locator('.checkmark').nth(1).check();
    await page.locator('#okayBtn').click();

    // Assert the checked state
    expect(await page.locator('.checkmark').nth(1)).toBeChecked();
    console.log(await page.locator('.checkmark').nth(1).isChecked())







    //checkbox  box
    await page.locator('#terms').click();
    expect(await page.locator('#terms')).toBeChecked();
    console.log(await page.locator('#terms').isChecked())

    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();


    //blink text  asseratio
    await expect(blinktext).toHaveAttribute('class', 'blinkingText');



    await page.pause()








    //await sign.click();




})



test.only('child windows cases', async ({ browser }) => {



    // Create new browser context
    const context = await browser.newContext();

    // Create new page inside that context
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    const blinktext = page.locator("[href*='document']")
    const username = page.locator('#username')
    //asseration useing title
    console.log(await page.title())
    // Correct Promise usage
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),  // wait for new tab
        blinktext.click(),             // click that opens it
    ]);

    const text = await newPage.locator('.red').textContent();
    const arrytext = text.split('@');
    const domain = arrytext[1].split(" ")[0];
    console.log(domain);
    await page.locator('#username').fill(domain); //or use the type 
    console.log(page.locator('#username').inputValue());

})