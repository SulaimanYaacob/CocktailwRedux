import Axios from "axios";

export const fetchSingleCocktails = (id) => async (dispatch, getState) => {
  dispatch({ type: "FETCH_SINGLE_COCKTAILS_REQUEST" });

  try {
    const response = await Axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    console.log(response.data.drinks);

    dispatch({
      type: "FETCH_SINGLE_COCKTAILS_SUCCESS",
      payload: response.data.drinks,
    });
  } catch (error) {
    dispatch({ type: "FETCH_SINGLE_COCKTAILS_FAILURE", error: error });
  }
};
