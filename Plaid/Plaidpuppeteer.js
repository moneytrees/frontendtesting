// User can interact with button: tell puppeteer to click on button 
// Ensure continue button exists (ie is the button selector available) 
// Look for selectors of banks (check list of all institutions)
    //await page.click('#plaid-link-iframe-1 .PrivacyInterstitialPane__actions button');
// Tell pupeteer to click on chase bank 
    //await page.click('#plaid-link-iframe-1 .InstitutionSelectPane__institution-list li[data-institution="chase"]');
// Screen shows up with username and pw 
// Ask pupeteer to enter username and pw and click submit 
    //await page.keyboard.type('#plaid-link-container #username', 'user_good', {delay: 3});
    //await page.keyboard.type('#plaid-link-container #password', 'pass_good', {delay: 3});
    //await page.click('#plaid-link-iframe-container .CredentialPane button[type="submit"]');
// Once submit check if received response 
    //const label = await page.$eval( '#plaid-link-iframe-container .ConnectedPane button[type="submit"]', e => e.text());
// Check if continue button 
    //expect(label).toBe('Continue');
    //await page.click('#plaid-link-iframe-container .ConnectedPane button[type="submit"]');

// Once response, you should see: institution property, id, public token 
// Note: add controller.js code from test in backend 

// User can interact with button: tell pupeteer to click on button 
import puppeteer from "puppeteer";
const should = require("should");
const app = require("../../../../server");
const FPORT = process.env.FPORT || 3000;
app.listen(7000, function () {
    console.log("Starting tests... ");
});

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

// config the form url ? 
// const appUrlBase = "http://localhost:3000/test"
// if fails try 
const APP = "http://18.232.212.14/test"

//create a user account - not now 
// define some var for puppeteer
let page; 
let browser; 
// const width = 1920; 
// const height = 1080;

// define how puppeteer should behave 
// beforeAll and afterAll are jest methods

// await puppeteer.launch({ args: ['--disable-http2'] })

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: true,
        // args: ['--disable-http2']
        // slowMo: 80, 
        // args: [`--window-size=${width}, ${height}`]
    });
    page = await browser.newPage();
    // await page.setViewport({width, height});
});

describe("plaidController", () => {
    test("user can press continue to continue to next page", async () => {
        await page.goto(APP);
         await page.waitForSelector('#foo button');
       // jest.setTimeout(30000);
        await page.click("#foo button"); 
        //await delay(4000);
        // await page.waitForSelector('.Button Button--is-plaid-color')
        // .then(() => console.log("Hey there, you did it"));
        // await page.click('#plaid-link-iframe-1 .PrivacyInterstitialPane__actions button');
        // await page.click('#plaid-link-iframe-1 .InstitutionSelectPane__institution-list li[data-institution="chase"]');
        // await page.keyboard.type('#plaid-link-container #username', 'user_good', {delay: 3});
        // await page.keyboard.type('#plaid-link-container #password', 'pass_good', {delay: 3});
        // await page.click('#plaid-link-iframe-container .CredentialPane button[type="submit"]');
        // const label = await page.$eval( '#plaid-link-iframe-container .ConnectedPane button[type="submit"]', e => e.text());
        // expect(label).toBe('Continue');
        // await page.click('#plaid-link-iframe-container .ConnectedPane button[type="submit"]');
    });
});

// describe("plaidController", () => {
//     test("press continue button and message", async () => {
//         await page.waitForSelector('.Button')
//         .then(() => console.log("Hey there, you did it"));
//         // await page.click('#plaid-link-iframe-1 .PrivacyInterstitialPane__actions button');
//         // await page.click('#plaid-link-iframe-1 .InstitutionSelectPane__institution-list li[data-institution="chase"]');
//         // await page.keyboard.type('#plaid-link-container #username', 'user_good', {delay: 3});
//         // await page.keyboard.type('#plaid-link-container #password', 'pass_good', {delay: 3});
//         // await page.click('#plaid-link-iframe-container .CredentialPane button[type="submit"]');
//         // const label = await page.$eval( '#plaid-link-iframe-container .ConnectedPane button[type="submit"]', e => e.text());
//         // expect(label).toBe('Continue');
//         // await page.click('#plaid-link-iframe-container .ConnectedPane button[type="submit"]');
//     });
// });
afterAll(()=> {
    browser.close();
});

    //check that they receive the access token 
    // describe("plaidController", () => {
    //     it("should return an access token", () => {
    //         expect()
    //     });
    // });

