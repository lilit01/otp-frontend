import { cardState } from "./state";
import { SET_CARD } from "./type";

export const cardReducer = (state = cardState, action) => {
  switch (action.type) {
    case SET_CARD:
      state.cardDetails = action.value;
      break;
    default:
      break;
  }
  return { ...state };
};
