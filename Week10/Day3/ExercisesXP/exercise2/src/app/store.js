import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "../features/tasksSlice";

export default configureStore({
  reducer: {
    taskList: tasksReducer,
  },
});