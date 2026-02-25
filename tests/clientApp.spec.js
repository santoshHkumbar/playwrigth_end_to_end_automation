const { test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');

test('client app login', async ({ page }) => {
    const username = page.locator('#userEmail')
    const password = page.locator('#userPassword')
    const login = page.locator('#login')
    const product = page.locator('.card-body')
    const productname = 'ZARA COAT 3'
    const cart = page.locator("[routerlink*='cart']")

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await username.fill('santosh01@gmail.com')
    await password.fill('Santosh@123')
    await login.click();
    await page.waitForLoadState('networkidle');
    const alltext = await page.locator('.card-body b').allTextContents();
    console.log(alltext)
    const count = await product.count();
    for (let i = 0; i < count; i++) {
        if (await product.nth(i).locator('b').textContent() === productname) {
            //add to cart 
            await product.nth(i).locator('text= Add To Cart').click();
            break;
        }
    }
    //cart 
    await cart.click();
    //wait for cart to load 
    await page.locator('div li').first().waitFor();
    //cart verfications
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    //click on the checkout 
    await page.locator('text=Checkout').click();




    // Type country
    await page.locator('[placeholder="Select Country"]').pressSequentially('ind');

    // Wait for at least one suggestion button
    const dropdown = page.locator('.ta-results button');
    await dropdown.first().waitFor();

    // Loop through suggestions
    const counts = await dropdown.count();

    for (let i = 0; i < counts; i++) {
        const text = await dropdown.nth(i).textContent();
        if (text.trim() === 'India') {
            await dropdown.nth(i).click();
            break;
        }
    }



    //Personal Information
    await page.locator('[class*="text-validated"]').first().clear();
    await page.locator('[class*="text-validated"]').first().fill('4542 9931 9292 2293')
    await page.locator('[class="input txt"]').first().fill('555')
    await page.locator('[name="coupon"]').clear();
    await page.locator('[name="coupon"]').fill('rahulshettyacademy')
    await page.locator('[type="submit"]').click();


    //click on the place order
    await page.locator('.action__submit ').click();

    //thank you page
    const confirm = await page.locator('.hero-primary').textContent();
    expect(confirm).toContain(' Thankyou for the order. ');

    //order id
    const orderid = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    console.log(orderid);


    //click on orders pages
    await page.locator('button[routerlink="/dashboard/myorders"]').click();

    //wait for orders page to load
    await page.locator('tbody ').waitFor();

    //get all the rows for table
    const row =await page.locator('tbody tr');

    for (let i = 0; i < await row.count(); i++) {
        const rowid = await row.nth(i).locator('th').textContent();
        if (orderid.includes(rowid)) {
            await row.nth(i).locator('button').first().click();
            break;
        }
    }
    //verfty that order details are correct
    const orderiddetails = await page.locator('.col-text').textContent();
    expect(orderid.includes(orderiddetails)).toBeTruthy();







});