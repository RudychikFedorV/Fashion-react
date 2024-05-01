import React from "react";
import FavouriteCard from "../favourite-card/FavouriteCard";
import "./favourite.css";
import cat01Img from "./../../img/images/promo-01.jpg";
import cat02Img from "./../../img/images/promo-02.jpg";
import arrowImg from "./../../img/icons/arrow.svg";

const Favourite = () => {
  return (
    <section className="favourite">
      <div className="container">
        <h1 className="favourite-title">Young’s Favourite</h1>
        <div className="favourite-sections">
          <FavouriteCard
            title="Trending on instagram"
            img={cat01Img}
            desc="Explore Now!"
            arrow={arrowImg}
          />
          <FavouriteCard
            title="All Under $40"
            img={cat02Img}
            desc="Explore Now!"
            arrow={arrowImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Favourite;
