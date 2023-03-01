import { showState } from "./state";
import {
  SET_SHOW,
} from "./type";

export const showReduser = (state = showState, action) => {
  switch (action.type) {
    case SET_SHOW:
      state.show = action.value;
      break;
    default:
      break;
  }
  return { ...state };
};
