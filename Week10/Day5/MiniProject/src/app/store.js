import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "../feature/posts/postSlice";
import userReducer from '../feature/users/usersSlice';

export const appReducer = combineReducers({
    postReducer,
    userReducer,
    });

export default configureStore({
    reducer: appReducer,
});