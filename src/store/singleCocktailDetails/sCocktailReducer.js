const initState = {
  details: [],
  loading: false,
  error: null,
};
const sCocktailReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_COCKTAILS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SINGLE_COCKTAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        details: action.payload,
      };
    case "FETCH_SINGLE_COCKTAILS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default sCocktailReducer;
