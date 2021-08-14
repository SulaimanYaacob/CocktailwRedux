const initState = {
  items: [],
  loading: false,
  error: null,
};
const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_COCKTAILS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_COCKTAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_COCKTAILS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default postsReducer;
