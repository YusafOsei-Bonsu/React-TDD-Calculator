import React from 'react';
import { shallow } from 'enzyme';
import Keypad from '../components/Keypad.jsx';

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
    test('should render 3 <div />s', () => expect(wrapper.find('div').length).toEqual(3));

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
    
});
