import React from 'react';
import { shallow } from 'enzyme';
import Display from '../containers/Display';

describe('Display Component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Display displayValue={''} />));

    // Snapshot test for Display comp
    test('should render correctly', () => expect(wrapper).toMatchSnapshot());

    // Checks if the Display component exists
    test('should render a <div />', () => expect(wrapper.find('div').length).toEqual(1));

    // Checks the rendering of the displayValue
    test('renders the value of displayValue', () => {
        wrapper.setProps({ displayValue: 'test' });
        expect(wrapper.text()).toEqual('test');
    });
    
});
