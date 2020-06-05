import React from 'react';
import { shallow } from 'enzyme';
import Display from '../containers/Display.jsx';
import Calculator from '../containers/Calculator.jsx';
import Keypad from '../components/Keypad.jsx'

describe('Calculator Component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Calculator />));

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
