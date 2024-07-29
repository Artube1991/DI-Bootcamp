import logo from './logo.svg';
import './App.css';
import myelement from './MyElement.js';
import sum from "./Sum.js";
import Animals from "./UserFavoriteAnimals.js";

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

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
      <div>
      {/* <User userName={user.firstName}> */}
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <Animals favAnimals={user.favAnimals}/>
      </div>
      </header>
    </div>
  );
}

export default App;