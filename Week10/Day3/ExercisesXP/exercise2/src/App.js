import AddTask from './components/AddTask';
import TasksList from './components/TasksList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Your Tasks List</h1>
      <h2>Add a new task here ↓ </h2>
      <AddTask />
      <TasksList />
    </div>
  );
}

export default App;
