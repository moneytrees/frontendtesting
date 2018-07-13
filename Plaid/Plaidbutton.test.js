// Ensuring plaid renders 
// Button for plaid renders on screen upon load 
// User can interact with button: tell puppeteer to click on button 
// Ensure continue button exists (ie is the button selector available) 
// Look for selectors of banks (check list of all institutions)
// Tell pupeteer to click on chase bank 
// Screen shows up with username and pw 
// Ask pupeteer to enter username and pw and click submit 
// Once submit check if received response 
// Check if continue button 
// Once response, you should see: institution property, id, public token 
// Note: add controller.js code from test in backend 

import React from 'react';
import { shallow, mount,render } from 'enzyme';
import ItemCreator from '../../components/ItemCreator';

import Enzyme from 'enzyme';
// adapter for enzyme
import Adapter from 'enzyme-adapter-react-16';

//configure to use necessary adapter
Enzyme.configure({ adapter: new Adapter() });

//STATUS: FAILED
//button for plaid renders upon loading with no errors
describe('ItemCreator Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow( < ItemCreator /> ).find('#foo button').exists())
    });
});





