import React from 'react';
import { shallow } from 'enzyme';
import App from '../containers/App';
import Calculator from '../containers/Calculator'

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  // Checks if the App component exists
  test('should render a <div />', () => expect(wrapper.find('div').length).toEqual(1));

  // Checks if the Calculator component exists inside the App component
  test('should render the Calculator component', () => expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true));
  
});
