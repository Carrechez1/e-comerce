import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <h1 className="header__logo">E-commerce</h1>
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Login
            </NavLink>
          </li>
          <li className="header__">
            <NavLink
              to="/purchases"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Purchase
            </NavLink>
          </li>
          <li className="header__">
            <h2>Cart</h2>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
