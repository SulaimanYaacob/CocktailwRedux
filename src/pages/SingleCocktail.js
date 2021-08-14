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
  }, [id, dispatch]);

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
        } = details;

        return (
          <section key={details.idDrink}>
            <Link to="/"> Back Home </Link>
            <h2>{name}</h2>
            <div>
              <img src={image} alt={name}></img>
              <div>
                <p>
                  <span>name :</span> {name}
                </p>
                <p>
                  <span>category :</span> {category}
                </p>
                <p>
                  <span>info :</span> {info}
                </p>
                <p>
                  <span>glass :</span> {glass}
                </p>
                <p>
                  <span>instructons :</span> {instructions}
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
