import React, { useEffect, useState } from "react";
import { config } from "../assets/js/config";
import { client } from "../assets/js/client";
import Loading from "./Loading";
import TodoWrapper from "./TodoWrapper";
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
    }
  };
  return (
    <div>
      {isLoading ? <Loading /> : ""}
      {isConfirm ? (
        <TodoWrapper />
      ) : (
        <div className="login-form">
          <h1>Chào mừng bạn đến Todo App</h1>
          <form onSubmit={handleSubmit}>
            <label>Nhập địa chỉ email của bạn:</label>
            <input
              type="email"
              value={email}
              onChange={handlechange}
              required
            />
            <button type="submit">Tiếp tục</button>
          </form>
        </div>
      )}
    </div>
  );
};
