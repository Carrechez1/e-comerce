import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDescription from "../productDetail/ProductDescription";
import "../../css/productDetail.css";
import ProductImg from "../productDetail/ProductImg";
import ProductPaginacion from "../productDetail/ProductPaginacion";
import ProductImgButton from "../productDetail/ProductImgButton";
// https://ecommerce-api-react.herokuapp.com/api/v1/products/1
const ProductDetail = () => {
  /*************************** */
  const [productInfo, setProductInfo] = useState();
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(1);
  /*************************** */
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProductInfo(res.data.data.product))
      .catch((err) => console.log(err));
  }, []);

  /*************************** */
  const { id } = useParams();
  const maximo = productInfo?.productImgs.length / porPagina;
  console.log(productInfo);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <div className="product__container">
      <header className="product__header">
        <p className="product__returnHome" onClick={handleClick}>
          <strong>Home</strong>
        </p>
        <p>
          <i className="bx bxs-circle"></i>
        </p>
        <p className="product__headerTitle">
          <strong> {productInfo?.title}</strong>
        </p>
      </header>
      <div className="product__imgContainer">
        {productInfo?.productImgs
          .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
          .map((image) => (
            <ProductImg key={image.url} image={image} />
          ))}
        <ProductPaginacion
          pagina={pagina}
          setPagina={setPagina}
          maximo={maximo}
        />
      </div>
      <div className="product__imgButton">
        {productInfo?.productImgs.map((image, index) => (
          <ProductImgButton
            index={index + 1}
            key={image.url}
            image={image}
            pagina={pagina}
            setPagina={setPagina}
            productInfo={productInfo}
          />
        ))}
      </div>
      <div className="product__descContainer">
        <ProductDescription
          productInfo={productInfo}
          tot={productInfo?.price}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
