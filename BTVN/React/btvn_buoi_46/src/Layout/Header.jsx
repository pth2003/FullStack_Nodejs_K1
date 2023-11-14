import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-primary text-white text-center py-4">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-2">
            <img
              src={logo}
              alt="Logo"
              style={{ maxWidth: "30%", height: "auto" }}
            />
          </div>
          <div className="col-md-2">
            <Link to="/cart" className="text-white">
              <i
                className="fa-solid fa-cart-shopping"
                style={{ fontSize: "30px" }}
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
