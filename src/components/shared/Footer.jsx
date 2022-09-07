import React from "react";
import "../../css/footer.css";

const Footer = () => {
  return (
    <div className="footer__cont">
      <section className="contact" id="contact">
        <div className="main-contact">
          <div className="contact-content">
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
          </div>
          <div className="contact-content">
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
            <li>
              <a href="#">Store policy</a>
            </li>
            <li>
              <a href="#">Payment methods</a>
            </li>
          </div>
          <div className="contact-content">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Telf: 00-000-00</a>
            </li>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer">
          <p>© Academlo 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
