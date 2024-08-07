import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/todoSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    usersReducer,
  },
});