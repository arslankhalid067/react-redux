import { combineReducers } from "redux";
import CounterReducer from "./counter";
import LoggedReducer from "./isLogged";
const allReducers = combineReducers({
  counter: CounterReducer,
  isLogged: LoggedReducer
});
export default allReducers;
