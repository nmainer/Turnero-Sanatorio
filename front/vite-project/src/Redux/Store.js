import {configureStore} from "@reduxjs/toolkit";
import useReducer from "./Reducer";

const store = configureStore({
    reducer: useReducer
});

export default store;