import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Cocktail.module.css"

const SingleCocktail = () => {
  const [singleCocktail, setSingleCocktail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchSingle = async () => {
      const single = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const { drinks } = single.data;
      console.log(drinks);
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = drinks[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      };
      setSingleCocktail(newCocktail);
    };
    fetchSingle();
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Loading</div>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      singleCocktail;

    return (
      <div>
        <section className={styles.singleCard}>
        <div className={styles.header}>
          <Link to="/" className="">
            BACK HOME
          </Link>
          <h2 className="section-title">{name}</h2></div>
          <div className="drink">
            <img src={image} alt={name}></img>
            <div className="drink-info">
              <p>
                <span className="drink-data">Name :</span> {name}
              </p>
              <p>
                <span className="drink-data">Category :</span> {category}
              </p>
              <p>
                <span className="drink-data">Info :</span> {info}
              </p>
              <p>
                <span className="drink-data">Glass :</span> {glass}
              </p>
              <p>
                <span className="drink-data">Instructons :</span> {instructions}
              </p>
              <p>
                <span className="drink-data">Ingredients :</span>
                {ingredients?.map((item, index) => {
                  return item ? <sub key={index}> {item}</sub> : null;
                })}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default SingleCocktail;
