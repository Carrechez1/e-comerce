import React from "react";
import { useNavigate } from "react-router-dom";
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
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#faq">Faq</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="icons">
        <span onClick={(handleClick = () => navigate("/login"))}>
          <i className="bx bx-user"></i>
        </span>
        <a href="">
          <i className="bx bx-shopping-bag"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
