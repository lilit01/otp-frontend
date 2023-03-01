import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AcceptIcon } from "../../icons/AcceptIcon";
import { CalendarIcon } from "../../icons/CalendarIcon";
import { LockIcon } from "../../icons/LockIcon";
import { PaymentIcon } from "../../icons/PaymentIcon";
import { RemoveIcon } from "../../icons/RemoveIcon";
import "./PaymentForm.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PaymentForm = ({ setStep }) => {
  const [selectedTab, setSelectedTab] = useState("tabs");
  const { route_data, driver_data } = useSelector((state) => state.driverData);
  const [dateString, setDateString] = useState("");
  const [cardDetails, setCardDetails] = useState({
    email: driver_data.email,
    amount: route_data.total_amount,
    card_number: "",
    exp_month: "",
    exp_year: "",
    card_cvc: "",
    usdot: driver_data.usdot,
  });

  const goBack = () => {
    if (selectedTab === "tabs") {
      setStep(3);
    } else {
      setSelectedTab("tabs");
    }
  };

  const handlePayment = async () => {
    console.log(cardDetails);
    await axios
      .post("http://localhost:5000/pay", cardDetails)
      .then((res) => {
        console.log(res.data);
        if (res.data.error_type) {
          alert(res.data.message);
        } else {
          setStep(5);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="payment-from">
      <div className="price">
        <span>${route_data.total_amount}</span>
      </div>
      <div className="payment">
        <div className="payment-input-area">
          <PaymentIcon />
          <input
            placeholder="Card Number"
            onChange={(e) =>
              setCardDetails({ ...cardDetails, card_number: e.target.value })
            }
          />
          {cardDetails.card_number.length === 16 ? (
            <div className="accepted-icon">
              <AcceptIcon />
            </div>
          ) : cardDetails.card_number.length &&
            cardDetails.card_number.length !== 16 ? (
            <RemoveIcon />
          ) : null}
          {/* <RemoveIcon /> */}
        </div>
        <div className="payment-input-area">
          <CalendarIcon />
          <DatePicker
            selected={cardDetails.date}
            onChange={(date) => {
              const options = { month: "2-digit", year: "2-digit" };
              setDateString(date.toLocaleDateString("en-US", options));
              setCardDetails({
                ...cardDetails,
                exp_month: date
                  .toLocaleDateString("en-US", options)
                  .split("/")[0],
                exp_year: date
                  .toLocaleDateString("en-US", options)
                  .split("/")[1],
              });
            }}
            value={dateString}
            dateFormat="MM/yy"
            showMonthYearPicker
          />
          {/* <input
            placeholder="MM/YY"
            onChange={(e) =>
              setCardDetails({ ...cardDetails, date: e.target.value })
            }
          /> */}
          {cardDetails.date !== "" ? (
            <div className="accepted-icon">
              <AcceptIcon />
            </div>
          ) : // :
          // cardDetails.date === "gago" ?
          // <RemoveIcon />
          null}
        </div>
        <div className="payment-input-area">
          <LockIcon />
          <input
            placeholder="CVC"
            onChange={(e) =>
              setCardDetails({ ...cardDetails, card_cvc: e.target.value })
            }
          />
          {cardDetails.cvc !== "" ? (
            <div className="accepted-icon">
              <AcceptIcon />
            </div>
          ) : // :
          // cardDetails.cvc === "gago" ?
          //   <RemoveIcon />
          null}
        </div>
      </div>
      <div className="actions">
        <button className="secondary" onClick={goBack}>
          BACK
        </button>
        <button className="primary" onClick={handlePayment}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
