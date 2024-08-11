import { useState, useReducer, useRef, createContext } from 'react';
import { v4 ad uuid4 } from "uuid";
import ListTask from './components/ListTask';
import './App.css';

export const TaskContext = createContext();

export const initialState = {
  tasks: [],
};

export const AddTask = "AddTask";
export const TaskRemove = "TaskRemove";

export const taskReducer = (state, action) => {
  if (action.type === AddTask) {
    const newTasks = [...state.tasks];
    newTasks.push({ id: uuid4(), name: action.payload, active: true});
    return { ...state, tasks: newTasks };
  } else if (action.type === TaskRemove) {
    
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
