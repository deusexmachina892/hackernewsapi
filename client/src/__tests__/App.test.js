import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';



/**
 * Factory function to create a ShallowWrapper for the App Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial State
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  return shallow(<App {...props}/>)
}

/**
 * 
 * @param {*} wrapper 
 * @param {*} val 
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

it('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).not.toBe(0);
  console.log(appComponent.length);
});
