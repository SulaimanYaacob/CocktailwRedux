import Axios from "axios";

// ? Action Crteator => Function that return action
// ? Action => Pnkect with type  + payload
// ? Dispatch (thunk) => Function accepts action & trigger reducer function

// Action with thunk middleware
export const fetchCocktails = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_COCKTAILS_REQUEST" });
  try {
    const response = await Axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
    );

    dispatch({
      type: "FETCH_COCKTAILS_SUCCESS",
      payload: response.data.drinks,
    });
  } catch (error) {
    dispatch({ type: "FETCH_COCKTAILS_FAILURE", error: error });
  }
};

// pure action creator
// export const triggerDefault = () => {
//   console.log("run custom action");
//   return { type: "default" };
// };
