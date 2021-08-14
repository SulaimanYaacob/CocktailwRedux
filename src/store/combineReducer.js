import { combineReducers } from "redux";
import postsReducer from "./reducer";
import sCocktailReducer from "./singleCocktailDetails/sCocktailReducer";

const rootReducer = combineReducers({
  postsReducer,
  sCocktailReducer,
});

export default rootReducer;
