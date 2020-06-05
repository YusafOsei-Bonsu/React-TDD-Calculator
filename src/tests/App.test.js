import React from 'react';
import { shallow } from 'enzyme';
import App from '../containers/App.js';

describe('App', () => {
  test('should render a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  })
  
})
