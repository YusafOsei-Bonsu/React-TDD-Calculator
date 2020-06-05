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
    test('should render a <div />', () => expect(wrapper.find('div').length).toEqual(1));
    
});
