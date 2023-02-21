import { combineReducers } from "redux";
import { driverReducer } from "./driver/reducer";

export const reducers = combineReducers({
  driverData: driverReducer,
});
