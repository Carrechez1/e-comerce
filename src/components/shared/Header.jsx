import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../../css/header.css'

const Header = () => {

  const navigate = useNavigate();

  let handleClick = () => {};

  return (
    <header className="header-nav">
        <a href="#" className="logo">E-commerce</a>

        <div className="bx bx-menu" id="menu-icon"></div>

        <ul className="navbar">
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#faq">Faq</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div className="icons">
            <a href=""><i className='bx bx-search-alt-2'></i></a>
            <a className='a-btn' onClick={handleClick = () => navigate('/login') }><i className='bx bx-user'></i></a>
            <a className='a-btn' onClick={handleClick = () => navigate('/purchases') }><i className='bx bx-shopping-bag'></i></a>
        </div>
    </header>
  );
};

export default Header;
