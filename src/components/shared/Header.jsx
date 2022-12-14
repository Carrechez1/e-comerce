import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../css/header.css";

const Header = () => {
  const navigate = useNavigate();

  let handleClick = () => {};

  return (
    <header className="header-nav">
      <div onClick={(handleClick = () => navigate("/"))} className="logo">
        <h3>E-commerce</h3>
      </div>

      <div className="bx bx-menu" id="menu-icon"></div>

      <ul className="navbar">
        <li>
          <a href="#shop" className="links">
            Shop
          </a>
        </li>
        <li>
          <a href="#about" className="links">
            About
          </a>
        </li>
        <li>
          <a href="#faq" className="links">
            Faq
          </a>
        </li>
        <li>
          <a href="#contact" className="links">
            Contact
          </a>
        </li>
      </ul>

      <div className="icons">
        <a href="">
          <i className="bx bx-search-alt-2"></i>
        </a>
        <a className="a-btn" onClick={(handleClick = () => navigate("/login"))}>
          <i className="bx bx-user"></i>
        </a>
        <a className="a-btn" onClick={(handleClick = () => navigate("/cart"))}>
          <i className="bx bx-shopping-bag"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
