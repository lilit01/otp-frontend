import React, { useState } from "react";
import "./EnteringTab.scss";
import Select from "react-select";
import { PlusIcon } from "../../../icons/PlusIcon";
import { RemoveIcon } from "../../../icons/RemoveIcon";
import { DistanceIcon } from "../../../icons/DistanceIcon";
import { MinusIcon } from "../../../icons/MinusIcon";
import { CalculatorIcon } from "../../../icons/CalculatorIcon";
import { getBorderPoints } from "../borderPoints/BorderPoints";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setRouteData } from "../../../../store/driver/action";

const EnteringTab = () => {
  const dispatch = useDispatch();
  const { truck_data } = useSelector((state) => state.driverData);
  const [showFWY, setShowFWY] = useState(false);
  const [showDistance, setShowDistance] = useState(false);
  const [calcualePrice, setCalcualePrice] = useState(false);
  const [miles, setMiles] = useState(1000);
  const [amount, setAmount] = useState(0);
  const borderPoints = getBorderPoints();
  const groupedOptions = borderPoints.map((group) => ({
    label: group.label,
    options: group.options.map((option) => ({
      label: option.label,
      value: option.value,
    })),
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const handleRouteData = (data) => {
    dispatch(setRouteData({ data, miles, amount }));
  };

  const calculateAmount = () => {
    setCalcualePrice(!calcualePrice);
    let newAmount;
    if (truck_data.registered_weight.id > 27) {
      truck_data.registered_weight.rates.find((element) => {
        if (element.axles === +truck_data.axles) {
          newAmount = miles * element.decimal;
        }
      });
    } else {
      newAmount = miles * truck_data.registered_weight.decimal;
    }
    if (truck_data.is_opportioned) {
      console.log("total without 50", newAmount);
    } else {
      newAmount += 50;
    }
    setAmount(newAmount);
  };

  return (
    <form onSubmit={handleSubmit(handleRouteData)} className="entering-tab">
      <h3 className="title">Entering Oregon</h3>
      <div className="trip-radios">
        <label>
          <input
            value="round Trip"
            {...register("trip_type", {
              required: "is required",
            })}
            type={"radio"}
          />
          <span>Round Trip</span>
        </label>
        <label>
          <input
            value="one way trip"
            {...register("trip_type", {
              required: "is required",
            })}
            type={"radio"}
          />
          <span>One Way Trip</span>
        </label>
      </div>
      <div className="form-select form-input">
        <label>Entrance point:</label>
        <Controller
          name="exit_point"
          control={control}
          defaultValue={null}
          render={({ field: { onChange, value } }) => (
            <Select
              className="basic-single select"
              classNamePrefix="select"
              isSearchable={false}
              placeholder={"Select One"}
              onChange={(value) => onChange(value)}
              value={value}
              options={groupedOptions}
              formatGroupLabel={(data) => data.label}
            />
          )}
        />
        <span className="error-text"></span>
      </div>
      <div className="steps-area">
        <h3 className="title">Stops</h3>
        <div className="form-input">
          <label>1 Location in Oregon:</label>
          <div className="trip-radios">
            <label>
              <input
                {...register("trip_method", {
                  required: "is required",
                })}
                type={"radio"}
                value="delivery"
              />
              <span>Delivery</span>
            </label>
            <label>
              <input
                {...register("trip_method", {
                  required: "is required",
                })}
                type={"radio"}
                value="pickUp"
              />
              <span>Pick Up</span>
            </label>
          </div>
          <div className="form-group">
            <input placeholder="CIty or zip code" />
            <button className="add-btn">
              <PlusIcon />
            </button>
            <button className="add-btn">
              <RemoveIcon />
            </button>
          </div>
          <span className="error-text"></span>
        </div>
      </div>
      <div
        className={`fwy-and-distance  ${
          showFWY && showDistance
            ? "show"
            : !showFWY && showDistance
            ? "show-d"
            : showFWY && !showDistance
            ? "show-f"
            : ""
        }`}
      >
        {showDistance ? (
          <div className="colculate">
            <button
              className="calculate-btn primary"
              onClick={calculateAmount}
            >
              CALCULATE <CalculatorIcon />
            </button>
            {calcualePrice ? (
              <div className="miles-price">
                <div className="miles">
                  <span className="title">Total Miles: </span>
                  <span className="total">{miles} mi</span>
                </div>
                <p className="price">${amount}</p>
              </div>
            ) : null}
          </div>
        ) : null}
        <div className="distance-area">
          <button
            className="distance-btn"
            onClick={() => setShowDistance(true)}
          >
            Your distance <DistanceIcon />{" "}
          </button>
          {showDistance ? (
            <div className="distance">
              <p className="title"> Total miles</p>
              <p className="miles">{miles} MI</p>
            </div>
          ) : null}
        </div>
        <div className="fwy-point">
          <div className={`form-select form-input `}>
            <Controller
              name="exit_point"
              control={control}
              defaultValue={null}
              render={({ field: { onChange, value } }) => (
                <Select
                  className="basic-single select"
                  classNamePrefix="select"
                  isSearchable={false}
                  placeholder={"Select One"}
                  onChange={(value) => onChange(value)}
                  value={value}
                  options={groupedOptions}
                  formatGroupLabel={(data) => data.label}
                />
              )}
            />
            <span className="error-text"></span>
          </div>
          <span className="name">
            {!showFWY ? "Add" : "Remove"} Exit/FWY Point
          </span>
          <button className="add-btn" onClick={() => setShowFWY(!showFWY)}>
            {!showFWY ? <PlusIcon /> : <MinusIcon />}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EnteringTab;
