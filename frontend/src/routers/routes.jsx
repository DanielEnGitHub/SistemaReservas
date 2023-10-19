import React from "react";
import { Routes, Route } from "react-router-dom";

// Verifiacion de rutas privadas
import PrivateRouter from "./config/PrivateRouter";

// Rutas privadas y publicas
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Rutas = () => {
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
