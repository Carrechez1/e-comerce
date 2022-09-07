import React, { useState } from "react";

const ProductDescription = ({ productInfo, tot }) => {
  /*************************** */
  const val = tot;

  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(val);
  /*************************** */
  const handlePlus = () => {
    setCount(count + 1);
    setPrice(val * (count + 1));
  };

  const handleRes = () => {
    if (count > 1) {
      setCount(count - 1);
      setPrice(val * (count - 1));
    }
  };
  /*************************** */

  return (
    <section className="product__desc">
      <h2 className="product__descName">{productInfo?.title}</h2>
      <p className="product__descInfo">{productInfo?.description}</p>
      <div className="product__body">
        <article className="product__descPrice">
          <h3 className="product__descPriceTit">Price</h3>
          <span className="product__descPriceValue">{`$${price}`}</span>
        </article>
        <article className="product__descQuantify">
          <h3 className="produc__descQuantifyTit">quantify</h3>
          <div className="product__descQuantifyCount">
            <button className="product__descQuantifyBut" onClick={handleRes}>
              <strong>-</strong>
            </button>
            <div>{count}</div>
            <button className="product__descQuantifyBut" onClick={handlePlus}>
              <strong>+</strong>
            </button>
          </div>
        </article>
      </div>
      <footer className="product__descFooter">
        <button className="product__descBuy">Add to cart &#32;&#32;</button>
        <i className="bx bx-cart"></i>
      </footer>
    </section>
  );
};

export default ProductDescription;
