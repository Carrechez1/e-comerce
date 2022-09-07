import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCartInfo from "../cart/ProductCartInfo";
import getConfig from "../../utils/getConfig";
const Cart = () => {
  /************************** */
  const [cartProducts, setCartProducts] = useState();

  /************************** */
  const getAllProductsCart = () => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
    axios
      .get(URL, getConfig())
      .then((res) => setCartProducts(res.data.data.cart.products))
      .catch((err) => setCartProducts());
  };
  console.log(cartProducts);
  useEffect(() => {
    getAllProductsCart();
  }, []);
  const handleChecout = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/purchases`;
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    };
    axios
      .post(URL, obj, getConfig())
      .then((res) => {
        console.log(res.data);
        getAllProductsCart();
      })
      .catch((err) => console.log(err));
  };
  console.log(cartProducts);
  return (
    <section className="cart">
      <h2 className="cart__title">Cart</h2>
      <div className="cart__containerItem">
        {cartProducts?.map((product) => (
          <ProductCartInfo
            key={product.id}
            product={product}
            getAllProductsCart={getAllProductsCart}
          />
        ))}
      </div>
      <hr className="cart__hr" />
      <footer className="cart__footer">
        <span className="cart__totalGlobalLabel">Total:</span>
        <p className="cart__totalGlobalLabelValue">1350</p>
        <button onClick={handleChecout} className="cart__btn">
          Checkout
        </button>
      </footer>
    </section>
  );
};

export default Cart;
