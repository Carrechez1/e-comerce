import React, { useState } from "react";

const ProductPaginacion = ({ pagina, setPagina, maximo }) => {
  /************************ */
  const nextPage = () => {
    if (pagina < maximo) {
      setPagina(pagina + 1);
    } else {
      setPagina((pagina = 1));
    }
  };
  const previusPage = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    } else {
      setPagina((pagina = maximo));
    }
  };
  return (
    <div className="product__paginacion">
      <button className="product__paginacionPrevius" onClick={previusPage}>
        &#60;
      </button>
      <button className="product__paginacionNext" onClick={nextPage}>
        &#62;
      </button>
    </div>
  );
};

export default ProductPaginacion;
