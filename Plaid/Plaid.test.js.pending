// Ensuring plaid renders 
// Button for plaid renders on screen upon load 
// User can interact with button: tell pupeteer to click on button 
// Ensure continue button exists (ie is the button selector available) 
// Look for selectors of banks (check list of all institutions)
// Tell pupeteer to click on chase bank 
// Screen shows up with username and pw 
// Ask pupeteer to enter username and pw and click submit 
// Once submit check if received response 
// Check if continue button 
// Once response, you should see: institution property, id, public token 
// Note: add controller.js code from test in backend 

const puppeteer = require('puppeteer');
const should = require('should');
const request = require('supertest');
const app = require('../../../server');
const FPORT = process.env.FPORT || 3000;
app.listen(7000, function () {
    console.log("Starting tests... ");
});
