import React from "react";
import { Routes, Route } from "react-router-dom";
import Title from "../components/Texts/Title";

const PrivateRoutes = () => {
  /* RUTAS PRIVADAS */
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        {/* ----Dasboard---- */}
        {/* <Route
          end
          path="/"
          element={
            <Dashboard>
              <Title content="Dashboard" black />
            </Dashboard>
          }
        /> */}

        {/* <Route
          end
          path="/"
          element={
            <Dashboard>
              <Title content="Dashboard" black />
            </Dashboard>
          }
        /> */}

        {/* ----Products---- */}
        <Route
          end
          path="/products"
          element={<Title content="products" black />}
        />

        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
