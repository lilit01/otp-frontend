import { driverState } from "./state";
import {
  ADD_DRIVER_DATA,
  ADD_ROUTE_DATA,
  ADD_ROUTE_TYPE,
  ADD_TRUCK_DATA,
} from "./type";

export const driverReducer = (state = driverState, action) => {
  switch (action.type) {
    case ADD_TRUCK_DATA:
      state.truck_data = {
        ...state.truck_data,
        year: action.value.year,
        make: action.value.make,
        vin: action.value.vin,
        unit: action.value.unit,
        plate_number: action.value.plate_number,
        plate_issue_state: action.value.plate_issue_state,
        is_opportioned: action.value.is_opportioned.value,
        registered_weight: action.value.registered_weight,
        axles: action.value.axles,
        commodity: action.value.commodity,
        is_leased: action.value.is_leased.value,
        leasing_company: action.value.leasing_company,
      };
      state.driver_data = { ...state.driver_data, name: action.value.name };
      console.log("state.truck_data ", state.truck_data);
      console.log("state.driver_data ", state.driver_data);
      break;
    case ADD_DRIVER_DATA:
      state.driver_data = action.value;
      break;
    case ADD_ROUTE_DATA:
      state.route_data = {
        ...state.route_data,
        entrance_point: action.value.data.entrance_point,
        exit_point: action.value.data.exit_point,
        trip_type: action.value.data.trip_type,
        trip_method: action.value.data.trip_method,
        total_amount: action.value.amount,
        miles: action.value.miles,
      };
      console.log("state.route_data ", state.route_data);
      break;
    case ADD_ROUTE_TYPE:
      state.route_data = { ...state.route_data, type: action.value };
      break;
    default:
      break;
  }
  return { ...state };
};
