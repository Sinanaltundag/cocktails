import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../Context";
import styles from "./Cocktail.module.css"

const Cocktails = () => {
  const { filteredCocktails } = useGlobalContext();
  return (
    <div className={styles.coctailsContainer}>
      {filteredCocktails?.map((cocktail) => {
        return <Cocktail {...cocktail} key={cocktail.id} />;
      })}
    </div>
  );
};

export default Cocktails;
