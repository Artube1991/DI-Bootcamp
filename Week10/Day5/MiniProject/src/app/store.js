import { configureStore } from "@reduxjs/toolkit";
import { thunk } from 'redux-thunk';
import postReducer from "../feature/posts/postSlice";
// import userReducer from '../feature/users/usersSlice';

export const store = configureStore({
    reducer: {
        postReducer,
        // userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk),
});

export default store;