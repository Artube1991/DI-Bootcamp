import './App.css';
import Car from "./components/Car.js";
// import ClickMe from './components/Events.js';
import Form from './components/Events.js';
const carinf0 = {name: "Ford", model: "Mustang"};

function App() {
  return (
    <>
  <Car carModel={carinf0.model}/>
  {/* <ClickMe/> */}
  <Form />
  </>
  );
}

export default App;
