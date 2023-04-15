import { configureStore,combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Reducer } from "./reducers";


const rootreducer = combineReducers({user:Reducer});
const store = configureStore({reducer:rootreducer,middleware:[thunk,logger]});

export default store