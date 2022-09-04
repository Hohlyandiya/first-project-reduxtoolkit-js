import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";
import toolkitSlice from "./toolkitSlice";

const rootReducers = combineReducers({
    toolkitReducer: toolkitReducer,
    toolkitSlice: toolkitSlice
})

export const store = configureStore({
    reducer: rootReducers
})