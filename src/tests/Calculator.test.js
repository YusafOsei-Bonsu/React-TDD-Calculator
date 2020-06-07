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

// Tests for the updateDisplay method
describe('updateDisplay method', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Calculator />));
    
    // Tests the updating of the displayValue
    test('updates displayValue', () => {
      wrapper.instance().updateDisplay('5');
      expect(wrapper.state('displayValue')).toEqual('5');
    });
    
    // Tests the concatenation of the value to be displayed
    test('concatenates displayValue', () => {
      wrapper.instance().updateDisplay('5');
      wrapper.instance().updateDisplay('0');
      expect(wrapper.state('displayValue')).toEqual('50');
    });
    
    // Testing the change (in displayValue) from 0 to 5
    test('removes leading "0" from displayValue', () => {
      wrapper.instance().updateDisplay('0');
      expect(wrapper.state('displayValue')).toEqual('0');
      wrapper.instance().updateDisplay('5');
      expect(wrapper.state('displayValue')).toEqual('5');
    });
    
    // Testing the prevention of entering multiple zeroes
    test('prevents multiple leading "0"s from displayValue', () => {
      wrapper.instance().updateDisplay('0');
      wrapper.instance().updateDisplay('0');
      expect(wrapper.state('displayValue')).toEqual('0');
    });
    
    // Testing the removal of the displayValue's last character
    test('removes last char of displayValue', () => {
      wrapper.instance().updateDisplay('5');
      wrapper.instance().updateDisplay('0');
      wrapper.instance().updateDisplay('ce');
      expect(wrapper.state('displayValue')).toEqual('5');
    });
    
    // Testing the prevention of entering multiple '.'s
    test('prevents multiple instances of "." in displayValue', () => {
      wrapper.instance().updateDisplay('.');
      wrapper.instance().updateDisplay('.');
      expect(wrapper.state('displayValue')).toEqual('.');
    });
    
    // Testing the setting of displayValue to 0 if it's an empty string
    test('will set displayValue to "0" if displayValue is equal to an empty string', () => {
      wrapper.instance().updateDisplay('ce');
      expect(wrapper.state('displayValue')).toEqual('0');
    });   
});

// Tests for the setOperator method
describe('setOperator method', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Calculator />));

  // Test if the selected operator changes from a '+' to a '/' upon button press
  test('should update the value of selectedOperator', () => {
    wrapper.instance().setOperator('+');
    expect(wrapper.state('selectedOperator')).toEqual('+');
    wrapper.instance().setOperator('/');
    expect(wrapper.state('selectedOperator')).toEqual('/');
  });

  // Tests if the displayValue is updated with the value of the storedValue
  test('should update displayValue with the value of the storedValue', () => {
    wrapper.setState({ displayValue: '5' });
    wrapper.instance().setOperator('+');
    expect(wrapper.state('storedValue')).toEqual('5');
  });
  
  // Tests if the displayValue is set to 0 after pressing an operator (i.e. '+')
  test('should update the value of displayValue to 0', () => {
    wrapper.setState({ displayValue: '5' });
    wrapper.instance().setOperator('+');
    expect(wrapper.state('displayValue')).toEqual('0');
  });

  // Testing the scenario where the selectedOperator isn't empty; therefore, storedValue isn't updated
  test('selectedOperator is not an empty string, does not update storedValue', () => {
    wrapper.setState({ displayValue: '5' });
    wrapper.instance().setOperator('+');
    expect(wrapper.state('storedValue')).toEqual('5');
    wrapper.instance().setOperator('-');
    expect(wrapper.state('storedValue')).toEqual('5');
  });
  
});

// Tests for the callOperator method
describe('callOperator', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Calculator />));

  // Tests the calculator's addition computation
  test('should update displayValue to the sum of storedValue and displayValue', () => {
    wrapper.setState({ storedValue: '3' });
    wrapper.setState({ displayValue: '2' });
    wrapper.setState({ selectedOperator: '+' });
    wrapper.instance().callOperator();
    expect(wrapper.state('displayValue')).toEqual('5');
  });
  
    // // Tests the calculator's subtraction computation 
  test('should update displayValue to the difference of storedValue and displayValue', () => {
    wrapper.setState({ storedValue: '3' });
    wrapper.setState({ displayValue: '2' });
    wrapper.setState({ selectedOperator: '-' });
    wrapper.instance().callOperator();
    expect(wrapper.state('displayValue')).toEqual('1');
  });

    // Tests the calculator's multiplication computation
  test('should update display to the product of storedValue and displayValue', () => {
    wrapper.setState({ storedValue: '3' });
    wrapper.setState({ displayValue: '2' });
    wrapper.setState({ selectedOperator: 'x' });
    wrapper.instance().callOperator();
    expect(wrapper.state('displayValue')).toEqual('6');
  });
  
    // // Tests the calculator's division computation
  test('should update displayValue to the quotient of storedValue and displayValue', () => {
    wrapper.setState({ storedValue: '3' });
    wrapper.setState({ displayValue: '2' });
    wrapper.setState({ selectedOperator: '/' });
    wrapper.instance().callOperator();
    expect(wrapper.state('displayValue')).toEqual('1.5');
  });

});
