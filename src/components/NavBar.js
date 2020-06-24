import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <div className="navbar">
    <div className="navbar__routes">
      <Link to="/" className="navbar__routes__link">
        Home
      </Link>

      <Link to="/toolbarInfo" className="navbar__routes__link">
        Toolbar & Previews
      </Link>

      <Link to="/products" className="navbar__routes__link">
        Integration Field
      </Link>
    </div>
    <div className="navbar__info">made with love by prismic</div>
  </div>
);
