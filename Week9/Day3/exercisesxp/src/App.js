import './App.css';
import React, { useState } from 'react';

const [count, setCount] = useState(0);

class BuggyCounter extends React.Component {

  render() {
    return(
      <>
      <h1>Simulation 1</h1>
      <div onClick={(e) => setCount(count + 1)}>{count}</div>
      </>
    )
  }
}

function App() {

  return (
    <div className="App">

    </div>
  );
}

export default App;
