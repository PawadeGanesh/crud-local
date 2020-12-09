import { combineReducers } from "redux";
import { customerReducer } from "./customerReducer";

const appReducer = combineReducers({ customerReducer });

export default appReducer;
