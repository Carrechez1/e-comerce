import React, { useEffect, useState } from "react";

const ProductImgButton = ({ image, pagina, setPagina, index }) => {
  const location = () => {
    setPagina(index);
    console.log(index);
  };
  return (
    <div className="product__imgButtonCont">
      <button onClick={location} className="product__imgButtonBut">
        <img className="product__imgButtonImg" src={image} alt="" />
      </button>
    </div>
  );
};

export default ProductImgButton;
