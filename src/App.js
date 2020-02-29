import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HomePage } from "./modules";

/*
** Main app component
*/
export const App = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        render={() =>
          <HomePage />
        }
      />
    </Switch>
  </Router>
);
