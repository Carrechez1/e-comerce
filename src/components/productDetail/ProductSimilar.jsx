import React from "react";

const ProductSimilar = ({ producto }) => {
  console.log(producto);
  return (
    <article className="product__similarItemContent">
      <img
        className="product__similarItemimg"
        src={producto.productImgs[0]}
        alt=""
      />
      <h3>{producto.title}</h3>
      <h4>{producto.price}</h4>
    </article>
  );
};
export default ProductSimilar;
