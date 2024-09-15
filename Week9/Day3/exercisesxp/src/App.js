import './App.css';
import React, { useState } from 'react';

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num: 0};
  }

  handleClick = () => {
    let count = this.state.num;
    let setCount = count + 1;
    this.setState({ num: setCount });
  };

  render() {
    return(
      <>
      <h1>Simulation 1</h1>
      <div onClick={this.handleClick}>{this.state.num}</div>
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
