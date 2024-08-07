import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
};

export const todoSlice = ({
    name: "todolist",
    initialState,
    reducers: {
        adding: (state) => {
            return [...state, { id: Date.now(), text: action.text, status: "active"}];
          },
          // counter/decrement
          decrement: (state) => {
            state.count -= 1;
          },
          // counter/reset
          reset: (state) => {
            state.count = 0;
          },
          incrementByNum: (state, action) => {
            console.log(action);
            state.count += action.payload;
    }
}
})