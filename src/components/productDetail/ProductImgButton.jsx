import React, { useEffect, useState } from "react";

const ProductImgButton = ({ imagen, pagina, setPagina, i }) => {
  const location = () => {
    setPagina(i);
  };
  return (
    <div className="product__imgButtonCont">
      <button onClick={location} className="product__imgButtonBut">
        <img className="product__imgButtonImg" src={imagen} alt="" />
      </button>
    </div>
  );
};

export default ProductImgButton;
