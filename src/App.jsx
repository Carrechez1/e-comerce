import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Routes/Home";
import ProductDetail from "./components/Routes/ProductDetail";
import Login from "./components/Routes/Login";
import Purchases from "./components/Routes/Purchases";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Signup from "./components/Routes/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
