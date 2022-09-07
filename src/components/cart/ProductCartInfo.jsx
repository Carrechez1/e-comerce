import axios from "axios";
import React from "react";
import "../../css/cart.css";
import getConfig from "../../utils/getConfig";
const ProductCartInfo = ({ product, getAllProductsCart }) => {
  console.log(product);
  const handleDeleteProduct = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`;
    axios
      .delete(URL, getConfig())
      .then(() => getAllProductsCart())
      .catch((err) => console.log(err));
  };
  return (
    <article className="cart__container">
      <header>
        <h4 className="cart__category">{product.brand}</h4>
        <h3 className="cart__name">{product.title}</h3>
      </header>
      <div onClick={handleDeleteProduct}>
        <i className=" cart__trash bx bxs-trash-alt"></i>
      </div>

      <span className="cart__quantity">{product.productsInCart.quantity}</span>
      <div>
        <span className="cart__totalLabel">Total:</span>
        <p className="cart__totalNumber">product.price</p>
      </div>
    </article>
  );
};

export default ProductCartInfo;
