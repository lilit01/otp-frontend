import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeclinedIcon } from "../../icons/DeclinedIcon";
import { SuccessIcon } from "../../icons/SuccessIcon";
import "./AcceptTab.scss";
import Loader from "../../Loader/Loader";

const AcceptTab = ({ setStep }) => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(true);
  const [message, setMessage] = useState("");
  const { truck_data, driver_data, route_data } = useSelector(
    (state) => state.driverData
  );
  const card = useSelector((state) => state.cardData);
  console.log(card,"card");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

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

  useEffect(() => {
    axios
      .post("http://localhost:5000/pay", card.cardDetails)
      .then((res) => {
        console.log(res.data);
        if (res.data.error_type) {
          setSuccess(false);
          setMessage(res.data.message);
        } else {
          setSuccess(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {load ? (
        <div className="loader-section">
          <Loader />
        </div>
      ) : (
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
                <h3 className="title">{message}</h3>
                <DeclinedIcon />
              </div>
              <div className="actions">
                <button className="secondary" onClick={() => setStep(4)}>
                  BACK
                </button>
                <button className="primary" disabled>
                  NEXT
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AcceptTab;
