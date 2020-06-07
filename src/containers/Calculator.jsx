import React from 'react';
import Display from './Display.jsx';
import Keypad from '../containers/Keypad.jsx';
import '../styles/Calculator.css';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            displayValue: '0', 
            numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', 'ce'], 
            operators: ['/', 'x', '-', '+'], 
            selectedOperator: '', 
            storedValue: '' }
    }

    // computes calculation
    callOperator = () => {
        let { displayValue, selectedOperator, storedValue } = this.state;

        // Temp storage for updating state storedValue
        const updateStoredValue = displayValue;

        // parse strings as integers
        displayValue = parseInt(displayValue, 10);
        storedValue = parseInt(storedValue, 10);

        switch (selectedOperator) {
            // If the operator is a '+', compute an addition
            case '+':
                displayValue += storedValue;
                break;
            case '-':
                displayValue = storedValue - displayValue;
                break;
            case 'x':
                displayValue *= storedValue;
                break;
            default:
                // set displayValue to 0 if no case is satisfied
                displayValue = 0;
        }

        // converts displayValue into a string
        displayValue = displayValue.toString();
        // reset selectedOperator
        selectedOperator = '';
        // Check for 'Nan' or 'Infinity', if true set displayValue to '0'
        if (displayValue === 'NaN' || displayValue === 'Infinity') displayValue = '0';

        this.setState({ displayValue, selectedOperator, storedValue: updateStoredValue });
    }

    setOperator = value => {
        let { displayValue, selectedOperator, storedValue } = this.state;

        if (selectedOperator === '') {
            // update storedValue to the value of displayValue
            storedValue = displayValue; 
            // reset displayValue to 0
            displayValue = '0'; 
            // update selectedOperator to the given value
            selectedOperator = value; 
        } else {
            // if selectedOperator isn't empty, set it to the given value
            selectedOperator = value;
        }

        this.setState({ displayValue, selectedOperator, storedValue });
    }

    updateDisplay = value => {
        let { displayValue } = this.state;

        // Prevents multiple '.'
        if (value === '.' && displayValue.includes('.')) value = '';

        if (value === "ce") {
            // Deletes the last character in displayValue
            displayValue = displayValue.substr(0, displayValue.length - 1);
            // set displayValue to 0 if it's an empty string
            if (displayValue === '') displayValue = '0';
        } else {
            // Replace displayValue with 'value' if displayValue is '0'. Otherwise, concatenate 'displayValue' and 'value'.
            displayValue === '0' ? displayValue = value : displayValue += value;
        }
        
        // Update the displayValue in the state
        this.setState({ displayValue })
    }

    render() {
       const { displayValue, numbers, operators} = this.state;

       return (
           <div className="calculator-container">
            <Display displayValue={ displayValue } />
            <Keypad 
                callOperator={ this.callOperator }
                numbers={ numbers }
                operators={ operators }
                setOperator={ this.setOperator }
                updateDisplay={ this.updateDisplay }
            />
           </div>
       );
    }
}

export default Calculator;