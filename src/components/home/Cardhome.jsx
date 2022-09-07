import React from "react";
import { useNavigate } from "react-router-dom";

const Cardhome = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <article onClick={handleClick} className="card-home__container">
      <header className="card-home__header">
        <img className="card-home__img" src={product.productImgs[0]} alt="" />
        {/* <img className="card-home__img-2" src={product.productImgs[2]} alt="" /> */}
      </header>
      <div className="card-home__body">
        <h3 className="card-home__name">{product.title}</h3>
        <section className="card-home__price">
          <h4 className="card-home__pricetitle">Price</h4>
          <span className="card-home__priceinfo">{`$ ${product.price}`}</span>
        </section>
        <button className="card-home__btn">
          <i className="bx bxs-cart"></i>
        </button>
      </div>
    </article>
  );
};

export default Cardhome;
