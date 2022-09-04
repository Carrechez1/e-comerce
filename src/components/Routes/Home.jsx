import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/products.slice";
import Cardhome from "../home/Cardhome";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <div className="home">
      <div className="container__card">
        {products?.map((product) => (
          <Cardhome key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
