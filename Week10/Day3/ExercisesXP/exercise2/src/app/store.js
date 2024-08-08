import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "../features/todoSlice";

export default configureStore({
  reducer: {
    taskList: tasksReducer,
  },
});