import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../assets/css/style.css";
import Loading from "./Loading";
import EmailForm from "./EmailForm";
const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      //   <div>
      //     <img src={user.picture} alt={user.name} />
      //     <h2>{user.name}</h2>
      //     <p>{user.email}</p>
      //   </div>
      <div className="container mt-5">
        <div className="card profile">
          <div className="card-body p-4 ">
            <img
              src={user.picture}
              className="img-thumbnail "
              alt="Ảnh đại diện"
            />
            <h3 className="mt-3">Xin chào {user.name}!</h3>
            <p className="mt-3">Vị trí : {user.locale}</p>
            <p className="mt-3">
              Email : <a href="">{user.email}</a>
            </p>
            <EmailForm />
          </div>

          <button
            className="btn btn-danger logout-btn"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Đăng Xuất
          </button>
        </div>
      </div>
    )
  );
};

export default Profile;
