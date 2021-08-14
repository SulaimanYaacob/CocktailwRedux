import { applyMiddleware, createStore } from "redux";
import postsReducer from "./reducer";
import sCocktailReducer from "./singleCocktailDetails/sCocktailReducer";
import rootReducer from "./combineReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
