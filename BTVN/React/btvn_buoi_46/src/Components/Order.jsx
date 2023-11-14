import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export const Order = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const handlePayment = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    toast.success("Thanh toán thành công!");
    setCart([]);
  };

  return (
    <>
      <Link to="/" className="btn btn-primary mb-3">
        Go home
      </Link>
      {cart.length !== 0 ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sản phẩm</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Giá</th>
                <th scope="col">Tổng cộng</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem) => {
                return (
                  <tr key={cartItem._id}>
                    <td>{cartItem.name}</td>
                    <td>
                      <input
                        type="number"
                        value={cartItem.quantity}
                        className="form-control"
                        min="1"
                        style={{ width: "20%" }}
                        readOnly
                      />
                    </td>
                    <td>
                      <span style={{ fontWeight: "bold" }}>
                        {cartItem.price}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontWeight: "bold" }}>
                        {cartItem.price * cartItem.quantity}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-danger">Xóa</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <button className="btn btn-success" onClick={handlePayment}>
                    Thanh toán
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
          {/* <ToastContainer /> */}
        </div>
      ) : (
        <div className="row justify-content-center py-5 ">
          <div className="col-md-6 text-center">
            <h1>Giỏ hàng của bạn đang trống</h1>
            <p>Hãy chọn sản phẩm và thêm vào giỏ hàng để mua sắm.</p>
          </div>
        </div>
      )}
    </>
  );
};
