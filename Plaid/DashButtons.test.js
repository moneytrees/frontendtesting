// check if plaid buttons on dashboards render 
// Ensuring plaid renders 
// Button for plaid renders on screen upon load 


import React from 'react';
import { shallow, mount,render } from 'enzyme';
import PlaidButtons from '../../components/Plaid/PlaidButtons';

import Enzyme from 'enzyme';
// adapter for enzyme
import Adapter from 'enzyme-adapter-react-16';

//configure to use necessary adapter
Enzyme.configure({ adapter: new Adapter() });

//STATUS: Passed
//button for accounts plaid renders upon loading with no errors
describe('PlaidButton', () => {
    it('should render without throwing an error', () => {
        expect(shallow( < PlaidButtons /> ).find('#get-accounts-btn').exists())
    });
//button for transactions renders without errors
    it('should render without throwing an error', () => {
        expect(shallow( < PlaidButtons /> ).find('#get-transactions-btn').exists())
    });
});







