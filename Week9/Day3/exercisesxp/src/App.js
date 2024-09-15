import './App.css';
import React, { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num: 0};
  }

  handleClick = () => {
    let count = this.state.num;
    let setCount = count + 1;
    this.setState({ num: setCount })
    if (setCount >= 5) {
      throw new Error("I crashed!")
    };
  };

  render() {
    return(
      <>
      <h1>Simulation 1</h1>
      <ErrorBoundary>
      <div onClick={this.handleClick}>{this.state.num}</div>
      </ErrorBoundary>
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <BuggyCounter />
    </div>
  );
};


export default App;
