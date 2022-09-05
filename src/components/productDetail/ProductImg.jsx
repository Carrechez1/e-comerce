import React from "react";

const ProductImg = ({ image }) => {
  return (
    <div className="product__imageCont">
      <img className="product__image" src={image} alt="" />
    </div>
  );
};

export default ProductImg;
