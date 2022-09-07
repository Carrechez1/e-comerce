import React from "react";
import "../../css/cart.css";
const ProductCartInfo = () => {
  return (
    <article className="cart__container">
      <header>
        <h4 className="cart__category">Samsung</h4>
        <h3 className="cart__name">Samsung Galaxy S22</h3>
      </header>
      <i className=" cart__trash bx bxs-trash-alt"></i>
      <span className="cart__quantity">1</span>
      <div>
        <span className="cart__totalLabel">Total:</span>
        <p className="cart__totalNumber">850</p>
      </div>
      <header>
        <h4 className="cart__category">Samsung</h4>
        <h3 className="cart__name">Samsung Galaxy S22</h3>
      </header>
      <i className=" cart__trash bx bxs-trash-alt"></i>
      <span className="cart__quantity">1</span>
      <div>
        <span className="cart__totalLabel">Total:</span>
        <p className="cart__totalNumber">850</p>
      </div>
    </article>
  );
};

export default ProductCartInfo;
