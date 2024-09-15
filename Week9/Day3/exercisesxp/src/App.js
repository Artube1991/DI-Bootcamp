import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
        <h1>Simulation 1</h1>
        <div onClick={(e) => setCount(count + 1)}>{count}</div>
    </div>
  );
}

export default App;
