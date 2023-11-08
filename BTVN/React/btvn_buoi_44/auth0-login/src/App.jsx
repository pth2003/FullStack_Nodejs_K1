import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Components/Profile";
import LoginComponent from "./Components/LoginComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { isLoading, isAuthenticated, error, user } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  console.log(user);
  if (isAuthenticated) {
    return (
      <>
        <Profile />
      </>
    );
  } else {
    return <LoginComponent />;
  }
  <ToastContainer />;
}

export default App;
