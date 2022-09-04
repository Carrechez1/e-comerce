import React, { useState } from "react";

const ProductDescription = ({ productInfo }) => {
  /*************************** */
  const [count, setCount] = useState(1);
  /*************************** */
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleRes = () => {
    if (count > 1) {
      setCount(count - 1);
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
          <span className="product__descPriceValue">{productInfo?.price}</span>
        </article>
        <article className="product__descQuantify">
          <h3 className="produc__descQuantifyTit">quantify</h3>
          <div className="product__descQuantifyCount">
            <button onClick={handlePlus}>+</button>
            <div>{count}</div>
            <button onClick={handleRes}>-</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductDescription;
