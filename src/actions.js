import Axios from "axios";

export const fetchCocktails = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_COCKTAILS_REQUEST" });
  try {
    const response = await Axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    );

    console.log(response.data.drinks);

    dispatch({
      type: "FETCH_COCKTAILS_SUCCESS",
      payload: response.data.drinks,
    });
  } catch (error) {
    dispatch({ type: "FETCH_COCKTAILS_FAILURE", error: error });
  }
};
