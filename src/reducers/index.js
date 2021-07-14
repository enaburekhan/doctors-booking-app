import { combineReducers } from "redux";


const rootReducer = combineReducers({
  doctors: doctorsReducer,    
});

export default rootReducer;