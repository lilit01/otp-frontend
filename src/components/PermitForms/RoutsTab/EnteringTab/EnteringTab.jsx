import React, { useEffect, useRef, useState } from "react";
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
import axios from "axios";
import AutocompleteInput from "../autocompleteInput/AutocompleteInput";
import { v4 as uuidv4 } from "uuid";

const EnteringTab = () => {
  const dispatch = useDispatch();
  const { truck_data } = useSelector((state) => state.driverData);
  const [showFWY, setShowFWY] = useState(false);
  const [showDistance, setShowDistance] = useState(false);
  const [calcualePrice, setCalcualePrice] = useState(false);
  const [miles, setMiles] = useState(0);
  const [amount, setAmount] = useState(0);
  const borderPoints = getBorderPoints();
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const [locations, setLocations] = useState([]);
  const [inputs, setInputs] = useState([]);

  const handleAddInput = () => {
    const newInput = {
      id: uuidv4(),
      value: "",
    };
    setInputs([...inputs, newInput]);
  };

  const handleRemoveInput = (id) => {
    const newInputs = inputs.filter((input) => input.id !== id);
    setInputs(newInputs);
  };

  const handlePlaceSelected = (place, id) => {
    const newInputs = inputs.map((input) => {
      if (input.id === id) {
        return {
          ...input,
          value: place.formatted_address,
        };
      }
      return input;
    });
    setInputs(newInputs);
  };

  const [dataForMap, setDataForMap] = useState({
    entrance: "",
    locations: [],
  });

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
    dispatch(setRouteData({ data, miles, amount, locations }));
  };

  const calculateAmount = () => {
    setCalcualePrice(!calcualePrice);
    const weight = JSON.parse(truck_data.registered_weight);
    let newAmount;
    console.log("1", newAmount);
    if (weight.id > 27) {
      weight.rates.find((element) => {
        if (element.axles === +truck_data.axles) {
          newAmount = miles * element.decimal;
          console.log("2", newAmount);
        }
      });
      newAmount += 50;
      console.log("3", newAmount);
    } else {
      newAmount = miles * weight.decimal;
    }
    if (truck_data.is_opportioned) {
      console.log("total without 50", newAmount);
    } else {
      newAmount += 50;
      console.log("4", newAmount);
    }
    newAmount += 69;
    console.log("final", newAmount);

    setAmount(newAmount.toFixed(2));
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {}
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      console.log("11111", autoCompleteRef.current.getPlace());
      const place = await autoCompleteRef.current.getPlace();
      setLocations((prevValue) => [...prevValue, place.formatted_address]);
    });
  }, []);

  const checkDistance = () => {
    const inp = inputs.map((input) => input.value);
    setShowDistance(true);
    setDataForMap((prevState) => ({
      ...prevState,
      locations: locations.concat(inp),
    }));
  };

  useEffect(() => {
    if (dataForMap.locations.length !== 0) {
      console.log(dataForMap.locations.join("|"));
      axios
        .get(
          `http://localhost:5000/getMap?origins=${
            dataForMap.entrance.value
          }&destinations=${dataForMap.locations.join("|")}`
        )
        .then((response) => {
          console.log(response);
          const distance = Math.round(response.data.replace(/\D+/g, "") / 1.609);
          setMiles(distance);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [dataForMap]);

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
          name="entrance_point"
          control={control}
          defaultValue={null}
          render={({ field: { onChange, value } }) => (
            <Select
              className="basic-single select"
              classNamePrefix="select"
              isSearchable={false}
              placeholder={"Select One"}
              onChange={(value) => {
                onChange(value);
                setDataForMap({ ...dataForMap, entrance: value });
              }}
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
                // {...register("trip_method", {
                //   required: "is required",
                // })}
                type={"radio"}
                value="delivery"
              />
              <span>Delivery</span>
            </label>
            <label>
              <input
                // {...register("trip_method", {
                //   required: "is required",
                // })}
                type={"radio"}
                value="pickUp"
              />
              <span>Pick Up</span>
            </label>
          </div>
          <div className="form-group" key={0}>
            <input ref={inputRef} type="text" placeholder="City or ZIP code" />
            <button className="add-btn" onClick={handleAddInput}>
              <PlusIcon />
            </button>
            <button className="add-btn">
              <RemoveIcon />
            </button>
          </div>
          <span className="error-text"></span>
        </div>
        {inputs.map((input) => (
          <div className="form-input" key={input.id}>
            <label>1 Location in Oregon:</label>
            <div className="trip-radios">
              <label>
                <input
                  // {...register("trip_method", {
                  //   required: "is required",
                  // })}
                  type={"radio"}
                  value="delivery"
                />
                <span>Delivery</span>
              </label>
              <label>
                <input
                  // {...register("trip_method", {
                  //   required: "is required",
                  // })}
                  type={"radio"}
                  value="pickUp"
                />
                <span>Pick Up</span>
              </label>
            </div>
            <span className="error-text"></span>
            <div className="form-group">
              <AutocompleteInput
                id={input.id}
                value={input.value}
                onPlaceSelected={(place) =>
                  handlePlaceSelected(place, input.id)
                }
              />
              <button className="add-btn" onClick={handleAddInput}>
                <PlusIcon />
              </button>
              <button
                className="add-btn"
                onClick={() => {
                  handleRemoveInput(input.id);
                }}
              >
                <RemoveIcon />
              </button>
            </div>
          </div>
        ))}
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
            <button className="calculate-btn primary" onClick={calculateAmount}>
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
          <button className="distance-btn" onClick={checkDistance}>
            Your distance <DistanceIcon />
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
                  onChange={(value) => {
                    onChange(value);
                    const exiting = [...dataForMap.locations, value.value];
                    setDataForMap((prevState) => ({
                      ...prevState,
                      locations: exiting,
                    }));
                  }}
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
