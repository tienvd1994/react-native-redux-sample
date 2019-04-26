import { combineReducers } from "redux";
import peopleReducer from "./peopleReducer";

// Combine all the reducers
const rootReducer = combineReducers({
    peopleReducer
})

export default rootReducer;
