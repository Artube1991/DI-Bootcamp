import './App.css';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Color from './components/ColorsChange';

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num: 0};
  }
  
  handleClick = () => {
    let count = this.state.num;
    let setCount = count + 1;
    this.setState({ num: setCount })
  }

  render() {
    if (this.state.num > 4) {
      throw new Error("I crashed!")
    };
    return(
      <>
      <h3 onClick={this.handleClick}>{this.state.num}</h3>
      </>
    )
  }
};


function App() {
  return (
    <>
    <h1>Simulation 1</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <br />
        <BuggyCounter />
        </ErrorBoundary>
    <h1>Simulation 2</h1>
      <ErrorBoundary>
        <BuggyCounter />
        </ErrorBoundary>
        <br />
      <ErrorBoundary>
        <BuggyCounter />
        </ErrorBoundary>
    <h1>Sinmulation 3</h1>
    <BuggyCounter />
    <h1>Exercise 2</h1>
    <Color />
      </>
  );
};


export default App;
