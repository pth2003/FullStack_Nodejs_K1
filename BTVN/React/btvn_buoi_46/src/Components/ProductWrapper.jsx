import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import { ProductList } from "./ProductList";
import { config } from "../assets/js/config";
import { client } from "../assets/js/client";
import { Order } from "./Order";
import Loading from "./Loading";
import Header from "../Layout/Header";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export const ProductContext = React.createContext();

export const ProductWrapper = () => {
  const [productList, setList] = useState([]);
  // const [cart, setCart] = useState([]);
  let [isLoading, setLoading] = useState(true);
  // const [orders, setOrders] = useState([]);

  const { SERVER_API, PAGE_LIMIT } = config;
  client.setUrl(SERVER_API);
  const getProduct = async () => {
    const { data } = await client.get(`/products?limit=${PAGE_LIMIT}`);

    if (data.status_code === "SUCCESS") {
      setList(data.data.listProduct);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
    // console.log(productList);
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="text-center mb-3">
          <h1>Danh sách sản phẩm</h1>
        </div>
        <ProductContext.Provider
          value={{
            productList,

            // orders,
            // handleUpdateOrders,
          }}
        >
          {isLoading ? <Loading /> : <ProductList />}
        </ProductContext.Provider>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};
