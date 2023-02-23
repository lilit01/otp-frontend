import React, { useState } from "react";
import "./TruckForm.scss";
import Select from "react-select";
import { getTaxRates } from "./taxRates/TaxRates";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setTruckData } from "../../../store/driver/action";
import { getUsStates } from "./usStates/UsStates";
import { getCanadaProvinces } from "./canada/CanadaProvinces";

const TruckForm = ({ setStep }) => {
  const dispatch = useDispatch();
  const [isApportioned, setIsApportioned] = useState(true);
  const taxRates = getTaxRates();
  const [selectedTab, setSelectedTab] = useState("tabs");

  const apportionedWithOregon = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];

  const leasedOrOwned = [
    { value: true, label: "Leased" },
    { value: false, label: "Owned" },
  ];

  const stateOptions = [
    {
      label: "United States",
      options: getUsStates(),
    },
    {
      label: "Canada",
      options: getCanadaProvinces(),
    },
  ];
  const groupedOptions = stateOptions.map((group) => ({
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

  const goBack = () => {
    if (selectedTab === "tabs") {
      setStep(1);
    } else {
      setSelectedTab("tabs");
    }
  };

  const handleTruckData = (data) => {
    dispatch(setTruckData(data));
    setStep(3);
  };

  return (
    <form onSubmit={handleSubmit(handleTruckData)} className="truck-form">
      <div className="form-input driver-name">
        <label>Name of driver:</label>
        <input
          {...register("name", {
            required: "is required",
          })}
        />
        {errors.name ? (
          <span className="error-text">{errors.name.message}</span>
        ) : null}
      </div>
      <p className="form-name">Truck Info</p>
      <div className="truck-info-form">
        <div className="small-inputs">
          <div className="form-input">
            <label>Year:</label>
            <input
              type="number"
              {...register("year", {
                required: "is required",
              })}
            />
            {errors.year ? (
              <span className="error-text">{errors.year.message}</span>
            ) : null}
          </div>
          <div className="form-input">
            <label>Make:</label>
            <input
              {...register("make", {
                required: "is required",
              })}
            />
            {errors.make ? (
              <span className="error-text">{errors.make.message}</span>
            ) : null}
          </div>
        </div>
        <div className="form-input">
          <label>Unit#:</label>
          <input
            type="number"
            {...register("unit", {
              required: "is required",
            })}
          />
          {errors.unit ? (
            <span className="error-text">{errors.unit.message}</span>
          ) : null}
        </div>
        <div className="form-input">
          <label>Full VIN#:</label>
          <input
            type="number"
            {...register("vin", {
              required: "is required",
              minLength: 17,
            })}
          />
          {errors.vin ? (
            <span className="error-text">{errors.vin.message}</span>
          ) : null}
        </div>
        <div className="form-input">
          <label>License plate Number:</label>
          <input
            {...register("plate_number", {
              required: "required",
            })}
          />
          {errors.plate_number ? (
            <span className="error-text">{errors.plate_number.message}</span>
          ) : null}
        </div>
        <div className="form-select form-input">
          <label>License plate Issue state:</label>
          <Controller
            name="plate_issue_state"
            control={control}
            defaultValue={null}
            rules={{ required: "is required" }}
            render={({ field: { onChange, value } }) => (
              <Select
                className="basic-single select"
                classNamePrefix="select"
                isSearchable={false}
                placeholder={"Select One"}
                onChange={(value) => onChange(value)}
                options={groupedOptions}
                formatGroupLabel={(data) => data.label}
              />
            )}
          />
          {errors.plate_issue_state ? (
            <span className="error-text">
              {errors.plate_issue_state.message}
            </span>
          ) : null}
        </div>
        <div className="form-select form-input">
          <label>Is your truck apportioned with Oregon?</label>
          <div className="form-group">
            <Controller
              name="is_opportioned"
              control={control}
              defaultValue={null}
              rules={{ required: "is required" }}
              render={({ field: { onChange, value } }) => (
                <Select
                  className="basic-single select"
                  classNamePrefix="select"
                  isSearchable={false}
                  placeholder={"Select One"}
                  options={apportionedWithOregon}
                  onChange={(value) => {
                    onChange(value);
                    setIsApportioned(value.value);
                  }}
                  value={value}
                />
              )}
            />
            {errors.is_opportioned ? (
              <span className="error-text">
                {errors.is_opportioned.message}
              </span>
            ) : null}
            {!isApportioned ? <div className="money-box">50$</div> : null}
          </div>
        </div>
        <div className="form-select form-input">
          <label>What is your registered weight with Oregon?</label>
          <Controller
            name="registered_weight"
            control={control}
            defaultValue={null}
            rules={{ required: "is required" }}
            render={({ field: { onChange, value } }) => (
              <Select
                className="basic-single select"
                classNamePrefix="select"
                isSearchable={false}
                placeholder={"Select One"}
                options={taxRates}
                onChange={(value) => onChange(value)}
                value={value}
              />
            )}
          />
          {errors.registered_weight ? (
            <span className="error-text">
              {errors.registered_weight.message}
            </span>
          ) : null}
        </div>
        <div className="form-input">
          <label>How many axles do you have?</label>
          <input
            {...register("axles", {
              required: "is required",
            })}
          />
          {errors.axles ? (
            <span className="error-text">{errors.axles.message}</span>
          ) : null}
        </div>
        <div className="form-select form-input new-position">
          <label>Truck is purchased by the company or leased?</label>
          <Controller
            name="is_leased"
            control={control}
            defaultValue={null}
            rules={{ required: "is required" }}
            render={({ field: { onChange, value } }) => (
              <Select
                className="basic-single select"
                classNamePrefix="select"
                isSearchable={false}
                placeholder={"Select One"}
                options={leasedOrOwned}
                onChange={(value) => onChange(value)}
                value={value}
              />
            )}
          />
          {errors.is_leased ? (
            <span className="error-text">{errors.is_leased.message}</span>
          ) : null}
        </div>
        <div className="form-input">
          <label>What is your Commodity?</label>
          <input
            {...register("commodity", {
              required: "is required",
            })}
          />
          {errors.commodity ? (
            <span className="error-text">{errors.commodity.message}</span>
          ) : null}
        </div>
      </div>
      <div className="actions">
        <button className="secondary" onClick={goBack}>
          BACK
        </button>
        <button className="primary" type="submit">
          NEXT
        </button>
      </div>
    </form>
  );
};

export default TruckForm;
