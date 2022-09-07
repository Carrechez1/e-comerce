import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDescription from "../productDetail/ProductDescription";
import "../../css/productDetail.css";
import ProductImg from "../productDetail/ProductImg";
import ProductPaginacion from "../productDetail/ProductPaginacion";
import ProductImgButton from "../productDetail/ProductImgButton";

import ProductSimilar from "../productDetail/ProductSimilar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/products.slice";
// https://ecommerce-api-react.herokuapp.com/api/v1/products/1
const ProductDetail = () => {
  const dispatch = useDispatch();

  /*************************** */
  const [productInfo, setProductInfo] = useState();
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(1);
  const [category, setCategory] = useState();
  /*************************** */
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProductInfo(res.data.data.product))
      .catch((err) => console.log(err));
    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => setCategory(res.data.data.categories))
      .catch((err) => console.log(err));
    dispatch(getAllProducts());
  }, []);
  /************************ */
  let product;
  const products = useSelector((state) => state.products);

  product = products?.filter((element) => {
    if (productInfo?.category === element?.category.name) {
      return element;
    }
  });
  // console.log(product);
  const { id } = useParams();
  const maximo = productInfo?.productImgs.length / porPagina;
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
          .map((image, i) => (
            <ProductImg key={image} image={image} />
          ))}
        <ProductPaginacion
          pagina={pagina}
          setPagina={setPagina}
          maximo={maximo}
        />
      </div>
      <div className="product__imgButton">
        {productInfo?.productImgs.map((imagen, i) => (
          <ProductImgButton
            i={i + 1}
            key={imagen}
            imagen={imagen}
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
      <h2 className="product__similarItemTitle">Discover similar item</h2>
      <div className="product__similarItem">
        {product?.map((producto) => (
          <ProductSimilar key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
