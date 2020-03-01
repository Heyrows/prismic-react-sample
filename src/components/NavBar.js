import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <div className="navbar">
    <div className="routes">
      <Link to="/" className="link">
        Home
      </Link>

      <Link to="/previews" className="link">
        Previews
      </Link>

      <Link to="/toolbar" className="link">
        Toolbar
      </Link>

      <Link to="/products" className="link">
        Integration Field
      </Link>
    </div>
    <div className="info">made with love by prismic</div>
  </div>
);
