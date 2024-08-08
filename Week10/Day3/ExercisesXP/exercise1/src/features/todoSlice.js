import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
    name: "todolist",
    initialState,
    reducers: {
        addTodo: (state) => {
            return [...state, { id: Date.now(), text: action.text, status: "active"}];
          },
        toggleTodo: (state, action) => {
            const newState = [...state];
            const task = newState.findIndex((todo) => todo.id === action.id);
            const todo = { ...state[task] };
      
            if (todo.status === "not active") {
              todo.status = "active";
            } else {
              todo.status = "not active";
            }
      
            newState[task] = todo;
            return newState;
          },
        removeTodo: (state, action) => {
          return state.filter((todo) => todo.id !== action.id);
          
        }
      },
    });
    
  export const {
    addTodo,
    toggleTodo,
    removeTodo
  } = counterSlice.actions;

  export default todoSliceSlice.reducer