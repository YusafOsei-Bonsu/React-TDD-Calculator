import React from 'react';
import { shallow, mount } from 'enzyme';
import Display from '../containers/Display.jsx';
import Calculator from '../containers/Calculator.jsx';
import Keypad from '../containers/Keypad.jsx'

describe('Calculator Component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Calculator />));

    // Snapshot test for Calc component
    test('should render correctly', () => expect(wrapper).toMatchSnapshot());

    // Checks if the component renders as a div
    test('should render a <div />', () => expect(wrapper.find('div').length).toEqual(1));

    // Checks if the Display component is within the Calculator comp
    test('should render the Display component', () => {
        expect(wrapper.containsMatchingElement(<Display displayValue={wrapper.instance().state.displayValue} />)).toEqual(true);
    });
    
    // Tests if the Display & Keypad component gets rendered in the Calc comp
    test('should render the Display & Keypad components', () => {
        expect(wrapper.containsAllMatchingElements([
            <Display displayValue={ wrapper.instance().state.displayValue } />,
            <Keypad 
            callOperator={wrapper.instance().callOperator} 
            numbers={wrapper.instance().state.numbers}
            operators={wrapper.instance().state.operators}
            setOperator={wrapper.instance().setOperator}
            updateDisplay={wrapper.instance().updateDisplay}
            />
        ])).toEqual(true);
    });
     
});

describe('Mounted Calculator', () => {
    let wrapper;
    
    beforeEach(() => wrapper = mount(<Calculator />));

    // Testing the invocation of 'updateDisplay' when a number key is clicked
    test('should call updateDisplay when a numeric key is clicked', () => {
        const spy = jest.spyOn(wrapper.instance(), 'updateDisplay');
        wrapper.instance().forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('.number-key').first().simulate('click');
        expect(spy).toHaveBeenCalledTimes(1); 
    });

    // Testing the invocation of 'setOperator' when an operator is clicked
    test('should call setOperator when an operator is clicked', () => {
        const spy = jest.spyOn(wrapper.instance(), 'setOperator');
        wrapper.instance().forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('.operator-key').first().simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);     
    });

    // Testing the invocation of 'callOperator' when the submit btn is clicked
    test('calls callOperator when the submit key is clicked', () => {
        const spy = jest.spyOn(wrapper.instance(), 'callOperator');
        wrapper.instance().forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('.submit-key').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });

});
