import React, { useState } from "react";
import "./TruckForm.scss";
import Select from "react-select";
import { getTaxRates } from "./taxRates/TaxRates";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setTruckData } from "../../../store/driver/action";
import { useNavigate } from "react-router-dom";
import { MinusIcon } from "../../icons/MinusIcon";
import { PlusIcon } from "../../icons/PlusIcon";

const TruckForm = ({ setStep }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isApportioned, setIsApportioned] = useState(true);
  const [selectedTaxRate, setSelectedTaxRate] = useState(null);
  const taxRates = getTaxRates();
  const [secondDriver, setSecondDriver] = useState(false)
  const apportionedWithOregon = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];

  const leasedOrOwned = [
    { value: true, label: "Leased" },
    { value: false, label: "Owned" },
  ];

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const handleTruckData = (data) => {
    console.log("data", data);
    const distance = 1000;
    let total;
    if (data.registered_weight.id > 27) {
      data.registered_weight.rates.find((element) => {
        if (element.axles === +data.axles) {
          total = distance * element.decimal;
        }
      });
    } else {
      total = distance * data.registered_weight.decimal;
    }
    if (data.is_opportioned.value) {
      console.log("total", total);
    } else if (!data.is_opportioned.value) {
      total += 50;
      console.log("total", total);
    }
    dispatch(setTruckData(data));
    setStep(3);
  };

  return (
    <form onSubmit={handleSubmit(handleTruckData)} className="truck-form">
      <div className="name-of-driver">
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
        <div className="second-driver">
        {
          secondDriver ? 
          <div className="form-input driver-name">
            <label>Name of second driver:</label>
            <input
              {...register("name", {
                required: "is required",
              })}
            />
            {errors.name ? (
              <span className="error-text">{errors.name.message}</span>
            ) : null}
          </div>
          : null
        }
        <div aria-hidden className='add-btn' onClick={()=> setSecondDriver(!secondDriver)}>
          {
            secondDriver ?
             <MinusIcon /> 
             :
             <PlusIcon />
          }
        </div>
        </div>
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
          <label>Unit number#:</label>
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
          <label>VIN number (17 digits):</label>
          <input
            type="number"
            {...register("vin", {
              required: "is required",
              minLength: 11,
            })}
          />
          {errors.vin ? (
            <span className="error-text">{errors.vin.message}</span>
          ) : null}
        </div>
        <div className="form-input">
          <label>License plate number:</label>
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
                options={options}
                onChange={(value) =>{ 
                  onChange(value);
                }}
                value={value}
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
          <label>License plate type <span> (Is your truck apportioned with Oregon?)</span></label>
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
                onChange={(value) => {
                  onChange(value);
                  setSelectedTaxRate(value);
                }}
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
        {selectedTaxRate?.rates ? (
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
            ) : null}
        
        <div className={`form-select form-input ${selectedTaxRate?.rates ? 'new-position' : null} `}>
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
          <label>What is your commodity <span>(What are you hauling)</span>?</label>
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
        <button className="secondary" onClick={() => navigate(-1)}>
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
