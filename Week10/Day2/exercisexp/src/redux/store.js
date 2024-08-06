import { configureStore } from "@reduxjs/toolkit";

import { todorReducer } from "./reducer";

const store = configureStore({
  reducer: {
    todorReducer,
  },
});

export default store;
