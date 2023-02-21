import { driverState } from "./state";
import { ADD_DRIVER_DATA, ADD_TRUCK_DATA } from "./type";

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
        registered_weight: action.value.registered_weight.label,
        axles: action.value.axles,
        commodity: action.value.commodity,
        is_leased: action.value.is_leased.value,
        leasing_company: action.value.leasing_company,
      };
      state.driver_data = { ...state.driver_data, name: action.value.name };
      console.log("truck", state.truck_data);
      console.log("driver", state.driver_data);
      break;
    case ADD_DRIVER_DATA:
      state.driver_data = action.value;
      break;
    default:
      break;
  }
  return { ...state };
};