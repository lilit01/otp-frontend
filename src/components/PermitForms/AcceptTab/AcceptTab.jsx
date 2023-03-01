import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeclinedIcon } from "../../icons/DeclinedIcon";
import { SuccessIcon } from "../../icons/SuccessIcon";
import "./AcceptTab.scss";

const AcceptTab = ({ setStep }) => {
  const navigate = useNavigate();
  const [success] = useState(true);
  const { truck_data, driver_data, route_data } = useSelector(
    (state) => state.driverData
  );

  const addAllData = async () => {
    const data = [truck_data, driver_data, route_data];
    await axios
      .post(`${process.env.REACT_APP_API_URL}/addNewDriver`, data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="accept-tab">
      {success ? (
        <div className="successed">
          <div className="content">
            <h3 className="title">
              Your payment has been successfully received.
            </h3>
            <SuccessIcon />
            <h3 className="check-email">Please check your email.</h3>
          </div>
          <button className="primary" onClick={() => addAllData()}>
            FINISH
          </button>
        </div>
      ) : (
        <div className="declined">
          <div className="content">
            <h3 className="title">
              Your payment has been successfully received.
            </h3>
            <DeclinedIcon />
          </div>
          <div className="actions">
            <button className="secondary">BACK</button>
            <button className="primary" disabled>
              NEXT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcceptTab;
