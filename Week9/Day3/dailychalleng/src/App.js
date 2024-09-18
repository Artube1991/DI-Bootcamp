import './App.css';
import FormComponent from './components/FormComponent';

const handleChange = (event) => {
  event.preventDefault();
  let data = event.target.getElementsByClassName('data');
  for (const item of data) {
    console.log(item.value)
  }
};

function App() {
  return (
    <div className="App">
      <FormComponent handlesubmit={handleChange}/>
    </div>
  );
}

export default App;
