import { combineReducers } from "redux";
import { driverReducer } from "./driver/reducer";
import { showReduser } from "./show/reducer";

export const reducers = combineReducers({
  driverData: driverReducer,
  showData: showReduser,
});
