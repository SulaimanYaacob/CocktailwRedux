import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../store/actions";
import { Link } from "react-router-dom";
import "../style.css";

const onSubmitForm = (e) => {
  e.preventDefault();
};

const Cocktails = () => {
  const dispatch = useDispatch(); // ! can be only used insde component
  const state = useSelector((state) => state.postsReducer); // access store
  // const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchCocktails());

    // dispatch(triggerDefault());
    // dispatch({ type: "stupid" });
  }, [dispatch]);

  if (state.loading) {
    return <h1>Loading...</h1>;
  }

  return state.items.map((el) => {
    return (
      <div key={el.idDrink} className="cocktail-container">
        <img src={el.strDrinkThumb} alt={el.strDrink} />
        <form onSubmit={onSubmitForm}>
          <Link to={`/cocktail/${el.idDrink}`}>Details</Link>
        </form>
      </div>
    );
  });
};

export default Cocktails;
