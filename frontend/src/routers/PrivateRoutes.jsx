import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// services
import { logoutService } from "../services/user";

// context
import { UserContext } from "../context/User";

// hooks
import { useTokenLocalStorage } from "../hooks/userTokenLocalStorage";

// react
import { useContext } from "react";
import { Home } from "../pages/private/Home";

const PrivateRoutes = () => {
  const { setUser, setToken } = useContext(UserContext);

  const { getToken, removeToken } = useTokenLocalStorage("token");

  const token = getToken();

  const handleLogout = async () => {
    const data = {
      token: token,
    };
    await logoutService(data);
    setUser(null);
    setToken(null);
    removeToken();
  };

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
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          end
          path="/products"
          element={
            <>
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
