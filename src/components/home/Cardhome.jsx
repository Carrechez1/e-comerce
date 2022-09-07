import React from "react";
import { useNavigate } from "react-router-dom";

const Cardhome = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  // console.log(product.title);
  return (
    <article onClick={handleClick} className="card__container">
      <header className="card__header">
        <img className="card__img" src={product.productImgs[0]} alt="" />
      </header>
      <div className="card__body">
        <h3 className="card__name">{product.title}</h3>
        <section className="card__price">
          <h4 className="card__pricetitle">price</h4>
          <span className="card__priceinfo">{product.price}</span>
        </section>
        <button className="card__btn">
          <i className="bx bxs-cart"></i>
        </button>
      </div>
    </article>
  );
};

export default Cardhome;
