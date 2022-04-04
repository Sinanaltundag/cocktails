import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cocktail.module.css";

const Cocktail = ({ id, title, img, info, glass }) => {
  return (
    <div className={styles.cocktailCard}>
      <img src={img} alt="" />
      <div className={styles.body}>
        <h3>{title}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>Details</Link>
      </div>
    </div>
  );
};

export default Cocktail;
