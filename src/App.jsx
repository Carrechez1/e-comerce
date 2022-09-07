import { useEffect, useState } from "react";

import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Routes/Home";
import ProductDetail from "./components/Routes/ProductDetail";
import Login from "./components/Routes/Login";
import Purchases from "./components/Routes/Purchases";
import Header from "./components/shared/Header";
import axios from "axios";

function App() {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users";
  //   const obj = {
  //     firstName: "Jose",
  //     lastName: "Carrero",
  //     email: "josedasda@yop.com",
  //     password: "12345678",
  //     phone: "1234567891",
  //     role: "admin",
  //   };
  //   axios
  //     .post(URL, obj)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err.response.data));
  // }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
