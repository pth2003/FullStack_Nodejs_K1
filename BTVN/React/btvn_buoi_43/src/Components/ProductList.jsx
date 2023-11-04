import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "./ProductWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ProductList = () => {
  const { productList, handleUpdateCart } = useContext(ProductContext);
  const [cart, setCart] = useState([]);
  const handleAddProcduct = (productId) => {
    const productInCart = cart.find((item) => item.productId === productId);

    if (productInCart) {
      productInCart.quantity += 1;
      const updatedCart = cart.map((item) =>
        item.productId === productId ? productInCart : item
      );
      setCart(updatedCart);
    } else {
      const newCartItem = { productId, quantity: 1 };
      setCart([...cart, newCartItem]);
    }
    toast.success("Thêm sản phẩm thành công!");
  };
  useEffect(() => {
    handleUpdateCart(cart);
  }, [cart]);
  return (
    <div className="row">
      {productList.map((product) => (
        <div className="col-md-3 mb-4" key={product._id}>
          <div className="card">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ maxHeight: "300px" }}
            />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <div className="d-flex justify-content-between">
                <p className="card-text ">
                  Giá:{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {product.price}
                    {"đ"}
                  </span>
                </p>
                <p className="card-text">Số lượng: {product.quantity}</p>
              </div>

              <button
                className="btn btn-primary"
                onClick={() => {
                  handleAddProcduct(product._id);
                }}
              >
                Mua hàng
              </button>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};
