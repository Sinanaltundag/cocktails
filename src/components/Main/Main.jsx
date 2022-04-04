import React from "react";
import Cocktails from "../Cocktail/Cocktails";
import Search from "./Search";
import styles from "./Main.module.css"

const Main = () => {
  return (
    <div>
    <Search />

      <div className={styles.container}>
        <h1>Cocktails</h1>
        <Cocktails/>
      </div>
    </div>
  );
};

export default Main;
