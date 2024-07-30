import './App.css';
import Car from "./components/Car.js";
// import ClickMe from './components/Events.js';
// import Form from './components/Events.js';
import Button from './components/Events.js';
import Phone from './components/Phone.js';
// import Color from './components/Color.js';
const carinf0 = {name: "Ford", model: "Mustang"};

function App() {
  return (
    <>
  <Car carModel={carinf0.model}/>
  {/* <ClickMe/> */}
  {/* <Form /> */}
  <Button />
  <Phone/>
  {/* <Color /> */}
  </>
  );
}

export default App;
