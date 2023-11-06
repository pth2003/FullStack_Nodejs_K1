import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
const LoginComponent = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="container">
      <div className=" login-form p-3 mt-5">
        <p>Cảm ơn bạn đã sử dụng dịch vụ của F8</p>
        <h4 className="mb-3">
          Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi
          tại đây!
        </h4>
        <button className="btn btn-primary" onClick={() => loginWithRedirect()}>
          Đăng Nhập
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
