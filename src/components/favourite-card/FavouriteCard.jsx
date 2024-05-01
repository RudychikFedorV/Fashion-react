import React from "react";
import styles from "./FavouriteCard.module.css";

const FavouriteCard = ({ title, img, desc, arrow }) => {
  return (
    <div className={styles.favouriteCard}>
      <a href="#!" className={styles.favouriteCard__link}></a>
      <img
        className={styles.favouriteCard__img}
        src={img}
        alt="Favourite Card"
      />
      <div className={styles.favouriteCard__section}>
        <div className={styles.favouriteCard__txt}>
          <div className={styles.favouriteCard__title}>{title}</div>
          <div className={styles.favouriteCard__desc}>{desc}</div>
        </div>
        <div className={styles.favouriteCard__icon}>
          <img src={arrow} alt="arrowImg" />
        </div>
      </div>
    </div>
  );
};

export default FavouriteCard;
