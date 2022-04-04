import React from "react";
import { useGlobalContext } from "../Context";
import styles from "./Main.module.css"

const Search = () => {
  const { searchWord, setSearchWord } = useGlobalContext();
  return (
    <div className={styles.searchBar}>
      <label htmlFor="search">Search Your Favorite Cocktail</label>
      <br />
      <input
        type="text"
        id="search"
        onChange={(e) => setSearchWord(e.target.value)}
        value={searchWord}
      />
    </div>
  );
};

export default Search;
