import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/pizza-logo.png";

export const Logo = () => {
  return (
    <Link to="/">
      <div className="header__logo">
        <img src={logo} alt="Pizza logo" />
        <div>
          <h1>React Pizza V2</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
