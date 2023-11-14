import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { config } from "../assets/js/config";
import { client } from "../assets/js/client";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();

  const { SERVER_API, PAGE_LIMIT } = config;
  const [product, setProduct] = useState({});
  let [isLoading, setLoading] = useState(true);
  client.setUrl(SERVER_API);

  const getProduct = async () => {
    try {
      const { data } = await client.get(`/products/${id}`);
      console.log(data);
      if (data.status_code === "SUCCESS") {
        setProduct(data.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <div className="container px-4 px-lg-5 my-5">
        <Link to="/" className="btn btn-primary mb-3">
          Go home
        </Link>
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="col-md-6">
            <div className="mb-1">{product.brand}</div>
            <h1 className="display-5 fw-bolder">{product.name}</h1>
            <div className="fs-5 mb-5">
              <span className="text-decoration-line-through">45.00Đ</span>
              <span
                className="mx-3"
                style={{ color: "red", fontWeight: "bold" }}
              >
                {product.price}đ
              </span>
            </div>
            <h5>Mô tả sản phẩm :</h5>
            <p className="lead">{product.description}</p>
            <div className="d-flex">
              <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="number"
                defaultValue={1}
                style={{ maxWidth: "3rem" }}
              />
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
              >
                <i className="bi-cart-fill me-1"></i>
                Mua hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
