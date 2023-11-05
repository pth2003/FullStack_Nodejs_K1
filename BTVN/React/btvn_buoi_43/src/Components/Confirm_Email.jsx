import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import { config } from "../assets/js/config";
import { client } from "../assets/js/client";
import Loading from "./Loading";
import { ProductWrapper } from "./ProductWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { SERVER_API } = config;
client.setUrl(SERVER_API);
export const Confirm_Email = () => {
  const [email, setEmail] = useState("");
  let [isLoading, setLoading] = useState(false);
  let [isConfirm, setConfirm] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("apiKey")) {
      setConfirm(true);
    }
  }, []);
  const handlechange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    handleConfirm(email);
  };
  const handleConfirm = async (email) => {
    const { data } = await client.get(`/api-key?email=${email}`);
    if (data.code === 200) {
      const apiKey = data.data.apiKey;
      localStorage.setItem("apiKey", apiKey);
      setLoading(false);
      setConfirm(true);
    } else {
      toast.error(data.message);
      setLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? <Loading /> : ""}
      {isConfirm ? (
        <ProductWrapper />
      ) : (
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <label>Nhập địa chỉ email của bạn:</label>
            <input
              type="email"
              value={email}
              onChange={handlechange}
              required
              className="form-control"
            />
            <button type="submit">Tiếp tục</button>
          </form>
          <ToastContainer />
        </div>
      )}
    </div>
  );
};
