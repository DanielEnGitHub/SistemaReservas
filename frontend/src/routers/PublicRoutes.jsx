import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Verifiacion de rutas publicas que no se muestran al estar logueado
import PublicRouter from "./config/PublicRouter";
import Title from "../components/Texts/Title";

// pages
import LoginScreen from "../pages/public/LoginScreen";
// import RegisterScreen from "../pages/public/RegisterScreen";
// import Components from "../pages/Components";

const PublicRoutes = () => {
  /* RUTAS PUBLICAS */
  return (
    <>
      {/* <Navbar /> */}
      {/* Login, acceso si no se esta logueado */}
      <Routes>
        {/* <Route
          end
          path="/"
          element={
            <PublicRouter>
              <Title content="Login" black />
            </PublicRouter>
          }
        /> */}
        {/* Register, acceso si no se esta logueado */}
        <Route
          end
          path="/register"
          element={
            <PublicRouter>
              <Title content="register" black />
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
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}

        {/* //*** E-COMERCE */}
        {/* <Route end path="/" element={<ECommerce />} /> */}
        {/* <Route end path="/components" element={<Components />} /> */}

        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
