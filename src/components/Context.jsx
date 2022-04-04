import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [searchWord, setSearchWord] = useState("")
  useEffect(() => {
    fetchApi();
  }, []);
useEffect(() => {
}, [searchWord])

  const fetchApi = async () => {
    const res = await axios.get(URL);
    const { drinks } = res.data;
    const newCocktails = drinks.map((item) => {
      const {  idDrink,
         strDrink,
         strAlcoholic,
         strGlass,
         strDrinkThumb } = item;
      return {
        id: idDrink,
        title: strDrink,
        info: strAlcoholic,
        glass: strGlass,
        img: strDrinkThumb,
      };
    });
    setCocktails(newCocktails);
  };
  const filteredCocktails=cocktails.filter(item =>item.title.toLowerCase().includes(searchWord.toLowerCase()));
  console.log(cocktails);
  console.log(filteredCocktails);
  console.log(searchWord)

  return <AppContext.Provider value={{cocktails,searchWord, setSearchWord,filteredCocktails}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
