import React from "react";
import "./shopping.css";

const Shopping = () => {
  return (
    <section className="shopping">
      <div className="container">
        <h1 className="shopping-title">
          JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
        </h1>
        <p className="shopping-desc">
          Type your email down below and be young wild generation
        </p>
        <div className="shopping-input">
          <input type="email" placeholder="Add your email here" />
          <button className="shopping-button">SEND</button>
        </div>
      </div>
    </section>
  );
};

export default Shopping;
