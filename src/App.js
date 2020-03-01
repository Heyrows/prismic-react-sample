import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HomePage, Toolbar } from "./modules";
import { NavBar, NotFound } from "./components";

/*
** Main app component
*/
export const App = () => (
  <Router>
    <NavBar />
    <div className="content">
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

        <Route
          from="/toolbar"
          render={() =>
            <Toolbar />
          }
        />
      </Switch>
    </div>
  </Router>
);
