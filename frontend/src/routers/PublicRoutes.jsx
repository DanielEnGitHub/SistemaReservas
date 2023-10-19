import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Verifiacion de rutas publicas que no se muestran al estar logueado
import PublicRouter from "./config/PublicRouter";

// pages
import LoginScreen from "../pages/public/LoginScreen";
import RegisterScreen from "../pages/public/RegisterScreen/RegisterScreen";

const PublicRoutes = () => {
  /* RUTAS PUBLICAS */
  return (
    <>
      {/* <Navbar /> */}
      {/* Login, acceso si no se esta logueado */}
      <Routes>
        <Route
          end
          path="/register"
          element={
            <PublicRouter>
              <RegisterScreen />
            </PublicRouter>
          }
        />
        <Route
          end
          path="/"
          element={
            <PublicRouter>
              <LoginScreen />
            </PublicRouter>
          }
        />

        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
