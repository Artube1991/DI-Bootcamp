import { useState, useReducer, useRef, createContext } from 'react';
import { v4 as uuid4 } from "uuid";
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
    const tasksNotRemoved = state.tasks.filter((task) => task.id !== action.id);
    return { ...state, tasks: tasksNotRemoved };
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const inputRef = useRef();

  const addTask = () => {
    const value = inputRef.current.valuel
    dispatch({ type: AddTask, payload: value });
    inputRef.current.value = "";
  };

  return (
      <TaskContext.Provider value={{dispatch, state}}>
        <div>
          <h1>Tasks Manager</h1>
          <input placeholder='Add your task here...' ref={inputRef} />
          <button onClick={() => addTask()}>Add Task</button>
          <div>
          <h2>List of tasks</h2>
          <ListTask />
          </div>
        </div>
      </TaskContext.Provider>
  );
}

export default App;
