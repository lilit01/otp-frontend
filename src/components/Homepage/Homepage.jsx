import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDriverData } from "../../store/driver/action";
import LiveChat from '../LiveChat/LiveChat'
import "./Homepage.scss";
import WelcomeSection from "./WelcomeSection/WelcomeSection";

const Homepage = () => {
  const [openChat, setOpenChat] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleDriverData = (data) => {
    dispatch(setDriverData(data));
    navigate("/permit");
  };

  return (
    <div className="homepage-container">
      <div className="landing-section">
      <div className="container">
        <form
          onSubmit={handleSubmit(handleDriverData)}
          className="temporary-permit-form"
        >
          <div className="form-header">
            <h3 className="form-title">ISSUE A TEMPORARY PERMIT</h3>
            <p className="form-desc">(Temporary permits valid for 10 days)</p>
          </div>
          <div className="form-content">
            <div className="inputs">
              <div className="input-group">
                <label htmlFor="usdot">USDOT/MC/CCD number#:</label>
                <input
                  type="number"
                  {...register("usdot", {
                    required: "is required",
                  })}
                  id="usdot"
                />
                {errors.usdot ? (
                  <span className="error-text">{errors.usdot.message}</span>
                ) : null}
              </div>
              <div className="input-group">
                <label htmlFor="start-date">Permit starting date:</label>
                <input
                  type="date"
                  {...register("start_date", {
                    required: "is required",
                  })}
                  id="start-date"
                />
                {errors.start_date ? (
                  <span className="error-text">
                    {errors.start_date.message}
                  </span>
                ) : null}
              </div>
              <div className="input-group">
                <label htmlFor="lb-name">Company name:</label>
                <input
                  {...register("business_name", {
                    required: "is required",
                  })}
                  id="lb-name"
                />
                {errors.business_name ? (
                  <span className="error-text">
                    {errors.business_name.message}
                  </span>
                ) : null}
              </div>
              <div className="input-group">
                <label htmlFor="email">Valid email address:</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "is required",
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  id="email"
                />
                {errors.email ? (
                  <span className="error-text">{errors.email.message}</span>
                ) : null}
              </div>
              <div className="input-group">
                <label htmlFor="phone-num">Phone number:</label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "is required",
                    pattern:
                      /^(\+1\s)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                  })}
                  id="phone-num"
                />
                {errors.phone ? (
                  <span className="error-text">{errors.phone.message}</span>
                ) : null}
              </div>
            </div>
            <button type="submit" className="primary">
              SEND
            </button>
          </div>
          <div className="form-background" />
        </form>
      </div>
      </div>
      <WelcomeSection />
      <LiveChat openChat={openChat} setOpenChat={setOpenChat}/>
    </div>
  );
};

export default Homepage;
