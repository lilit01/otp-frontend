import { SET_CARD } from "./type";

export const addCard = (value) => {
  return { type: SET_CARD, value: value };
};
