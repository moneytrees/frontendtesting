// User can interact with button: tell pupeteer to click on button 
import puppeteer from "puppeteer";

// config the form url ? 
const appUrlBase = "http://localhost:3000/test"

//create a user account - not now 

// define some var for puppeteer
let page; 
let browser; 

// define how puppeteer should behave 
// beforeAll and afterAll are jest methods
beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: true,
        // slowMo: 80, 
        // args: [`--window-size=${width}, ${height}`]
    });
    page = await browser.newPage();
    // await page.setViewport({width, height});
});
afterAll(()=> {
    browser.close();
});

describe("plaidController", () => {
    test("user can press continue to continue to next page", async () => {
        await page.goto(appUrlBase);
        await page.waitForSelector('#link-btn');
    });
});