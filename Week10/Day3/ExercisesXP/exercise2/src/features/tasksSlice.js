import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const tasksSlice = createSlice({
    name: "taskList",
    initialState,
    reducers: {
        addingTask: (state, action) => {
            console.log(action);
            state.push({ id: Date.now(), text: action.payload.t, date: action.payload.d, status: "✔"});
          },
        toggleTask: (state, action) => {
          console.log(action);
            const note = state.find((task) => task.id === action.payload);
      
            if (note.status === "X") {
              note.status = "✔";
            } else {
              note.status = "X";
            }
      
          },
        removeTask: (state, action) => {
          console.log(action);
          return state.filter((todo) => todo.id !== action.payload);
          
        }
      },
    });
    
  export const {
    addingTask,
    toggleTask,
    removeTask
  } = tasksSlice.actions;

  export default tasksSlice.reducer;