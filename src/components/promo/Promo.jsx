import React from "react";
import Btn from "../ui/Btn";
import promoImg from "./../../img/images/header-img.jpg";
import "./promo.css";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__txt">
            <div className="promo__title">
              <span className="highlight">
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className="highlight highlight--yellow">
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </div>
            <div className="promo__desc">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo__btn-wrapper">
              <Btn />
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="Promo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
