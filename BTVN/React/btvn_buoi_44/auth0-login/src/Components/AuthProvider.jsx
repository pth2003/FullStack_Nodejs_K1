import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

function AuthProvider({ children }) {
  return (
    <Auth0Provider
      domain={"dev-p86eg18jjkdtxxzc.us.auth0.com"}
      clientId={"YemX6WOddzT5ccFZXWlOrXhUzfgipbau"}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
}

export default AuthProvider;
