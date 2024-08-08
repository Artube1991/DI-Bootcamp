import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
    name: "todolist",
    initialState,
    reducers: {
        addingTodo: (state, action) => {
            console.log(action);
            state.push({ id: Date.now(), text: action.payload, status: "active"});
          },
        toggleTodo: (state, action) => {
          console.log(action);
            const task = state.find((todo) => todo.id === action.payload);
      
            if (task.status === "not active") {
              task.status = "active";
            } else {
              task.status = "not active";
            }
      
          },
        removeTodo: (state, action) => {
          console.log(action);
          return state.filter((todo) => todo.id !== action.payload);
          
        }
      },
    });
    
  export const {
    addingTodo,
    toggleTodo,
    removeTodo
  } = todoSlice.actions;

  export default todoSlice.reducer;