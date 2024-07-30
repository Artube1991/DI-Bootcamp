import './App.css';
import Car from "./components/Car.js";
const carinf0 = {name: "Ford", model: "Mustang"};

function App() {
  return (
  <Car carModel={carinf0.model}/>
  );
}

export default App;
