import React from "react";
import Card from "../card/Card";
import "./arrivals.css";
import cat01Img from './../../img/categories/cat-01.jpg';
import cat02Img from './../../img/categories/cat-02.jpg';
import cat03Img from './../../img/categories/cat-03.jpg';

const Arrivalsm = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <h2 className="arrivals-title">NEW ARRIVALS</h2>
        <div className="arrivals-cards">
            <Card title="Hoodies & Sweetshirt" img={cat01Img} />
            <Card title="Coats & Parkas" img={cat02Img}/>
            <Card title="Tees & T-Shirt" img={cat03Img}/>
        </div>
      </div>
    </section>
  );
};

export default Arrivalsm;
