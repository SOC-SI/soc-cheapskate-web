import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "./auth";
import qs from "qs";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const data = qs.parse(hash.substring(1));
    if (!data.confirmation_token) return;

    (async () => {
      console.log(data.confirmation_token);
      try {
        await auth.confirm(data.confirmation_token, true);
        navigate("/login");
      } catch (e) {}
    })();
  }, [navigate, hash]);

  // Add your own authentication on the below line.
  const isLoggedIn = auth.currentUser() !== null;

  return isLoggedIn ? children : <Navigate to={{ pathname: "/login" }} />;
};

export default PrivateRoute;
