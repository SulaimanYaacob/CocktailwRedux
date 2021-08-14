import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCocktails } from "../store/singleCocktailDetails/actions";
import { Link, useParams } from "react-router-dom";

const SingleCocktail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.sCocktailReducer);

  useEffect(() => {
    dispatch(fetchSingleCocktails(id));
  }, [id]);

  if (state.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {state.details.map((details) => {
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
        } = details;

        return (
          <section key={details.idDrink}>
            <Link to="/"> Back Home </Link>
            <h2>{name}</h2>
            <div className="drink">
              <img src={image} alt={name}></img>
              <div className="drink-info">
                <p>
                  <span className="drink-data">name :</span> {name}
                </p>
                <p>
                  <span className="drink-data">category :</span> {category}
                </p>
                <p>
                  <span className="drink-data">info :</span> {info}
                </p>
                <p>
                  <span className="drink-data">glass :</span> {glass}
                </p>
                <p>
                  <span className="drink-data">instructons :</span>{" "}
                  {instructions}
                </p>
              </div>
            </div>
          </section>
        );
      })}{" "}
    </>
  );
};

export default SingleCocktail;
