import React from 'react';
import Math from './components/Math';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    }

handleSubmit = event => {
  let num1 = Number(event.target.num1.value);
  let num2 = Number(event.target.num2.value);
  let sum = num1 + num2;
  return sum
}

render() {
  return (
    <div className="box" >
      <Math handleSubmit={this.handleSubmit} />
    </div>
  )
}
}


export default App;
