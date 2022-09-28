import pageReducer from "./page";
import todoReducer from "./todos";
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    page: pageReducer,
    todos: todoReducer
});

export default rootReducer;