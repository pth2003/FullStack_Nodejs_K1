import React from "react";
import { ProductWrapper } from "./Components/ProductWrapper";

import { Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import { Order } from "./Components/Order";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductWrapper />}></Route>
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Order />} />
      </Routes>
      <ToastContainer />
    </>

    // <ProductDetail/>
  );
}

export default App;
