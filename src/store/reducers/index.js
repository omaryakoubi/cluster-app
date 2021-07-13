import { combineReducers } from "redux";
import stepReducer from "./stepReducer";
import termsAndConditionsReducer from "./termsAndConditionsReducer";

const rootReducer = combineReducers({ stepReducer, termsAndConditionsReducer });

export default rootReducer;
