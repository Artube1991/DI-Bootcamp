import React from 'react';
import Math from './components/Math';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
    }
    }

handleSubmit = event => {
  let num1 = Number(event.target.num1.value);
  let num2 = Number(event.target.num2.value);
  let sumNew = num1 + num2;
  this.setState({ sum: sumNew })
}

render() {
  return (
    <div className="box" >
      <h1>Add Two Numbers</h1>
    <Math handleSubmit={this.handleSubmit} />
    <h1>{this.state.sum}</h1>
    </div>
  )
}
}


export default App;
