import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import board from "./board";

const rootReducer = combineReducers({ board });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
