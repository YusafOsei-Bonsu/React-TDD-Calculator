import React from 'react';
import { shallow } from 'enzyme';
import Keypad from '../containers/Keypad.jsx';

describe('Keypad Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Keypad 
                callOperator={jest.fn()}
                numbers={[]}
                operators={[]}
                setOperator={jest.fn()}
                updateDisplay={jest.fn()}
            />
        );
    });

    // Checks if the keypad comp renders
    test('should render 4 <div />s', () => expect(wrapper.find('div').length).toEqual(4));

    // Testing the rendering of numeric values of the keypad
    test('renders the values of numbers', () => {
        wrapper.setProps({numbers: ['0', '1', '2']});
        expect(wrapper.find('.numbers-container').text()).toEqual('012');
    });

    // Checks if the operators get rendered
    test('renders the values of operators', () => {
        wrapper.setProps({operators: ['+', '-', '*', '/']});
        expect(wrapper.find('.operators-container').text()).toEqual('+>->*>/>');
    });

    // Checks the rendering of each Key instance for every number, operator and the Submit button
    test('should render an instance of the Key component for each index of numbers, operators, and the submit Key', () => {
        const numbers = ['0', '1'];
        const operators = ['+', '-'];
        const submit = 1;
        const keyTotal = numbers.length + operators.length + submit;
        wrapper.setProps({ numbers, operators });
        expect(wrapper.find('Key').length).toEqual(keyTotal);
    });
});
