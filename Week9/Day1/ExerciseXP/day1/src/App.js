import logo from './logo.svg';
import './App.css';
import myelement from './MyElement.js';
import sum from "./Sum.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello World!
        </h1>
      {myelement}
      <p>React is {sum} times better with JSX</p>
      </header>
    </div>
  );
}

export default App;
