import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../containers/Calculator';
import Display from '../containers/Display';

describe('Calculator Component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Calculator />));

    // Checks if the component renders as a div
    test('should render a <div />', () => expect(wrapper.find('div').length).toEqual(1));

    // Checks if the Display component is within the Calculator comp
    test('should render the Display component', () => expect(wrapper.containsMatchingElement(<Display />)).toEqual(true));
});
