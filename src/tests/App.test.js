import React from 'react';
import { shallow } from 'enzyme';
import App from '../containers/App';
import Calculator from '../containers/Calculator'

describe('App Component', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  // Takes a screenshot of the component (snapshot testing)
  test('should render correctly', () => expect(wrapper).toMatchSnapshot());

  // Checks if the App component exists
  test('should render a <div />', () => expect(wrapper.find('div').length).toEqual(1));

  // Checks if the Calculator component exists inside the App component
  test('should render the Calculator component', () => expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true));
  
});
