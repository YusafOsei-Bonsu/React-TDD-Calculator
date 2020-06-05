import React from 'react';
import Display from './Display.jsx';
import '../styles/Calculator.css';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = { displayValue: '0', numbers: [], operators: [], selectedOperator: '', storedValue: '' }
    }

    callOperator = () => console.log("call operation");

    setOperator = () => console.log("set operation");

    updateDisplay = () => console.log("update display");

    render() {
       const { displayValue } = this.state;

       return (
           <div className="calculator-container">
            <Display displayValue={ displayValue } /> 
           </div>
       );
    }
}

export default Calculator;