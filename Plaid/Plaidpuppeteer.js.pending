// User can interact with button: tell pupeteer to click on button 
import faker from "faker";
import puppeteer from "puppeteer";

// config the form url ? 

// create a fake user account 

// define some var for puppeteer

// define how puppeteer should behave 
beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 80, 
        args: [`--window-size=${width}, ${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({width, height});
});
afterAll(()=> {
    browser.close();
});