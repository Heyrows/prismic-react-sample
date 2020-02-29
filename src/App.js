import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HomePage } from "./modules";
import { NotFound } from "./components/NotFound";

/*
** Main app component
*/
export const App = () => (
  <Router>
    <Switch>
      <Route
        exact path="/"
        render={() =>
          <HomePage />
        }
      />

      <Route
        from="/404"
        render={() =>
          <NotFound />
        }
      />
    </Switch>
  </Router>
);
