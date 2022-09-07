import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import getConfig from "../../utils/getConfig";

const Cardhome = ({ product, getAllProductsCart }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddCart = (e) => {
    e.stopPropagation();
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`;
    const obj = {
      id: product.id,
      cuantity: 1,
    };
    axios
      .post(URL, obj, getConfig())
      .then(() => getAllProductsCart())
      .catch((err) => console.log(err));
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
        <button onClick={handleAddCart} className="card-home__btn">
          <i className="bx bxs-cart"></i>
        </button>
      </div>
    </article>
  );
};

export default Cardhome;
