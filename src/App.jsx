import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cocktails from "./components/Cocktails";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Cocktails />
          </Route>
          <Route path="/cocktail/:id">
            <SingleCocktail />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
