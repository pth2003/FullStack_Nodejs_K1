import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "./ProductWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Order = () => {
  const { productList, orders } = useContext(ProductContext);
  const [localOrders, setLocalOrders] = useState(orders);
  useEffect(() => {
    setLocalOrders(orders);
  }, [orders]);
  const handlePayment = () => {
    orders.splice(0, orders.length);
    toast.success("Thanh toán thành công!!!");
    setLocalOrders([]);
  };
  return (
    <>
      {orders.length !== 0 ? (
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
              {localOrders.map((localOrdersItem) => {
                const product = productList.find(
                  (item) => item._id === localOrdersItem.productId
                );

                return (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>
                      <input
                        type="number"
                        value={localOrdersItem.quantity}
                        className="form-control"
                        min="1"
                        style={{ width: "20%" }}
                        readOnly
                      />
                    </td>
                    <td>
                      <span style={{ fontWeight: "bold" }}>
                        {product.price}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontWeight: "bold" }}>
                        {product.price * localOrdersItem.quantity}
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
          <ToastContainer />
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h1>Giỏ hàng của bạn đang trống</h1>
            <p>Hãy chọn sản phẩm và thêm vào giỏ hàng để mua sắm.</p>
          </div>
        </div>
      )}
    </>
  );
};
