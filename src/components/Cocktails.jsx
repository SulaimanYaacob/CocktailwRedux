import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../actions";
import "../style.css";

const Cocktails = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state); // access store

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  const renderCocktails = () => {
    if (state.loading) {
      return <h1>Loading...</h1>;
    }

    return state.items.map((el) => {
      return (
        <div key={el.idDrink} className="cocktail-container">
          <img
            src={el.strDrinkThumb}
            alt={el.strDrink}
            className="cocktail-img"
          />
        </div>
      );
    });
  };

  return <div>{renderCocktails()}</div>;
};

export default Cocktails;
