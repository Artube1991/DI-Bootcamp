import './App.css';
import AddTodo from './components/AddTodo';
import ToDoItem from './components/TodoItem';
import TodoList from './components/TodoList';

function App() {
  return (
<>
<h1>My Todo List</h1>
<AddTodo/>
<TodoList>
  <ToDoItem/>
</TodoList>
</>
  );
}

export default App;
