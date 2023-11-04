import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import { ProductList } from "./ProductList";
import { config } from "../assets/js/config";
import { client } from "../assets/js/client";
import { Order } from "./Order";
import Loading from "./Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ProductContext = React.createContext();

export const ProductWrapper = () => {
  const [productList, setList] = useState([]);
  const [cart, setCart] = useState([]);
  let [isLoading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const apiKey = localStorage.getItem("apiKey");
  const { SERVER_API, PAGE_LIMIT } = config;
  client.setUrl(SERVER_API);
  const getProduct = async () => {
    const { data } = await client.get(`/products?limit=${PAGE_LIMIT}`);
    if (data.status_code === "SUCCESS") {
      setList(data.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    handleCartOder(cart);
  }, [cart]);
  // useEffect(() => {
  //   console.log(orders);
  // }, [orders]);
  const handleUpdateCart = (value) => {
    setCart(value);
  };

  const handleCartOder = async (cart) => {
    if (cart.length !== 0) {
      const { data } = await client.post("/orders", cart, apiKey);
      if (data.status_code === "SUCCESS") {
        setOrders([...data.data]);
      } else {
        toast.error(data.message);
        localStorage.removeItem("apiKey");
        setTimeout(() => {
          location.reload();
        }, 1500);
      }
    }
  };

  return (
    <>
      <header className="bg-primary text-white text-center py-4">
        <h1>Danh sách sản phẩm</h1>
      </header>
      <div className="container mt-4">
        <ProductContext.Provider
          value={{ productList, handleUpdateCart, cart, orders }}
        >
          {isLoading ? <Loading /> : <ProductList />}
          <Order />
        </ProductContext.Provider>
      </div>
      <ToastContainer />
    </>
  );
};
