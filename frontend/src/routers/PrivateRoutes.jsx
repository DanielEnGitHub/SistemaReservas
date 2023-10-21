import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// react
import { Home } from "../pages/private/Home";
import HeaderComponent from "../components/Layout/Header";

const PrivateRoutes = () => {
  /* RUTAS PRIVADAS */
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        {/* ----Products---- */}
        <Route
          end
          path="/"
          element={
            <>
              <HeaderComponent />
              <Home />
            </>
          }
        />
        <Route
          end
          path="/viajes"
          element={
            <>
              <HeaderComponent />
              <Home />
            </>
          }
        />

        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
