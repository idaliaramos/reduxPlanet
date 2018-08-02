//add function to combine all reducers
import { combineReducers } from "redux";
import planetReducer from "./Planets/planetReducer";
//import reducers
const rootReducer = combineReducers({
  //put in all of your individual reducers
  planetInfo: planetReducer
});

export default rootReducer;
