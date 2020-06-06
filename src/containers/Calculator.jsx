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

    callOperator = () => console.log("call operation");

    setOperator = () => console.log("set operation");

    updateDisplay = () => console.log("update display");

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