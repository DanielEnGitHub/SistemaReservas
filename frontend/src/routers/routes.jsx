import React from "react";
import { Routes, Route } from "react-router-dom";

// Verifiacion de rutas privadas
import PrivateRouter from "./config/PrivateRouter";

// Rutas privadas y publicas
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

// context
import { UserContext } from "../context/User";

// hooks
import { useTokenLocalStorage } from "../hooks/userTokenLocalStorage";

// react
import { useContext, useEffect } from "react";

const Rutas = () => {
  const { setUser, setToken } = useContext(UserContext);

  const { getToken } = useTokenLocalStorage("token");

  useEffect(() => {
    const token = getToken();
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <Routes>
      <Route path="*" element={<PublicRoutes />} />

      <Route
        path="/app/*"
        element={
          <PrivateRouter>
            <PrivateRoutes />
          </PrivateRouter>
        }
      />
    </Routes>
  );
};

export default Rutas;
