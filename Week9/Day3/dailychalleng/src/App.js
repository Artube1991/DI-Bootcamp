import './App.css';

const handleChange = (event) => {
  event.preventDefault();
  let data = event.target.getElementsByClassName('data');
  for (item of data) {
    console.log(item.value)
  }
};

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
