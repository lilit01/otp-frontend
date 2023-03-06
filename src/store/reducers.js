import { combineReducers } from "redux";
import { driverReducer } from "./driver/reducer";
import { cardReducer } from "./payment/reducer";
import { showReduser } from "./show/reducer";

export const reducers = combineReducers({
  driverData: driverReducer,
  showData: showReduser,
  cardData: cardReducer,
});
