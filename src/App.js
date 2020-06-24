import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { HomePage, ToolbarPage, Preview } from "./modules";
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
          path="/toolbarInfo"
          render={() =>
            <ToolbarPage />
          }
        />

        <Route
          from="/preview"
          render={({ history, location }) =>
            // Route to preview content
            <Preview history={history} location={location} />
          }
        />

        <Route
          from="/404"
          render={() =>
            <NotFound />
          }
        />

        <Route
          from="*"
          render={() =>
            <Redirect to="/404" />
          }
        />
      </Switch>
    </div>
  </Router>
);
