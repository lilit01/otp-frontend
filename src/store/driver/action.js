import { ADD_DRIVER_DATA, ADD_TRUCK_DATA } from "./type";

export const setTruckData = (value) => {
  return { type: ADD_TRUCK_DATA, value: value };
};

export const setDriverData = (value) => {
  return { type: ADD_DRIVER_DATA, value: value };
};
