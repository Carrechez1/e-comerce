import React from "react";
import { NavLink } from "react-router-dom";
import '../../css/header.css'

const Header = () => {
  return (
    <header>
        <a href="#" class="logo">E-commerce</a>

        <div class="bx bx-menu" id="menu-icon"></div>

        <ul class="navbar">
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#faq">Faq</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div class="icons">
            <a href=""><i class='bx bx-search-alt-2'></i></a>
            <a href=""><i class='bx bx-user'></i></a>
            <a href=""><i class='bx bx-shopping-bag'></i></a>
        </div>
    </header>
  );
};

export default Header;
