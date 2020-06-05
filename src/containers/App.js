import React from 'react';
import '../styles/App.css';
import Calculator from './Calculator';

class App extends React.Component {
  render() {
    return (
    <div className="app-container">
      <Calculator /> 
    </div>
    );
  }
}

export default App;
