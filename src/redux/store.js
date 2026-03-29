import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { taskReducer } from "./TaskSlice";

const reducers = combineReducers({
  tasks: taskReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: reducers,
});
