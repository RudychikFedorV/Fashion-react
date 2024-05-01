import React from "react";
import "./payday.css";
import Btn from "../ui/Btn";
import paydayImg from "./../../img/images/promo-img.jpg";

const Payday = () => {
  return (
    <section className="payday">
      <div className="container">
        <div className="payday-sections">
          <div className="payday-img">
            <img src={paydayImg} alt="paydayImg" />
          </div>
          <div className="payday-txt">
            <div className="payday-title">
              <span className="payday-span">
                <span>PAYDAY</span>
              </span>
              SALE NOW
            </div>
            <p className="payday-desc">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <p className="payday-text">1 June - 10 June 2021</p>
            <p className="payday-info">*Terms & Conditions apply</p>
            <Btn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payday;
