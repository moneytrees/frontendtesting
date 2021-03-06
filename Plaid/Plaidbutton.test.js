// Ensuring plaid button renders upon screen load 

// created mock localStorage 
// class LocalStorageMock {
//     constructor() {
//       this.store = {};
//     }
  
//     clear() {
//       this.store = {};
//     }
  
//     getItem(key) {
//       return this.store[key] || null;
//     }
  
//     setItem(key, value) {
//       this.store[key] = value.toString();
//     }
  
//     removeItem(key) {
//       delete this.store[key];
//     }
//   };
  
//   global.localStorage = new LocalStorageMock;

import React from 'react';
import { shallow, mount,render } from 'enzyme';
import ItemCreator from '../../components/Plaid/ItemCreator';

import Enzyme from 'enzyme';
// adapter for enzyme
import Adapter from 'enzyme-adapter-react-16';

//configure to use necessary adapter
Enzyme.configure({ adapter: new Adapter() });

//STATUS: FAILED
//button for plaid renders upon loading with no errors
describe('ItemCreator Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow( < ItemCreator /> ).find('#foo').exists())
    });
});






