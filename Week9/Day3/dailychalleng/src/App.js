import './App.css';
import FormComponent from './components/FormComponent';
import { useState } from 'react';

const handleChange = (event) => {
  event.preventDefault();
  let data = event.target.getElementsByClassName('data');
  console.log(data.firstName.value);
  // for (const item of data) {
  //   console.log(item.value)
  // }
};

function App() {

  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [age, setAge] = useState(``);
  const [gender, setGender] = useState(``);
  const [destination, setDestination] = useState(``);
  const [dietary, setDietary] = useState([]);

  return (
    <div className="App">
      <FormComponent handlesubmit={handleChange}/>
    </div>
  );
}

export default App;
