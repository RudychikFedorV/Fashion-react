import React from "react";
import "./vouchers.css";
import vouchersImg from "./../../img/images/vouchers-img.png";
import appStore from "./../../img/icons/app-store.png";
import googlePlay from "./../../img/icons/google-play.png";

const Vouchers = () => {
  return (
    <section className="vouchers">
      <div className="container">
        <div className="vouchers-sections">
          <div className="vouchers-content">
            <h1 className="vouchers-title">DOWNLOAD APP & GET THE VOUCHER!</h1>
            <p className="vouchers-desc">
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </p>
            <div className="vouchers-block">
              <img src={appStore} alt="app-store" />
              <img src={googlePlay} alt="google-play" />
            </div>
          </div>
          <div className="vouchers-img">
            <img src={vouchersImg} alt="Vouchers Img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vouchers;
