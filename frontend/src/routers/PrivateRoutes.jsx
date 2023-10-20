import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Title from "../components/Texts/Title";

import { Button } from "@chakra-ui/react";

// services
import { logoutService } from "../services/user";

// context
import { UserContext } from "../context/User";

// hooks
import { useTokenLocalStorage } from "../hooks/userTokenLocalStorage";

// react
import { useContext } from "react";

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
          path="/products"
          element={
            <>
              <Title content="products" black />
              <Button colorScheme="red" onClick={handleLogout}>
                logout
              </Button>
              <Link to={"/app/test/"}>test</Link>
            </>
          }
        />
        <Route
          end
          path="/test"
          element={
            <>
              <Title content="test" black />
              <Button colorScheme="red" onClick={handleLogout}>
                logout
              </Button>
              <Link to={"/app/products/"}>products</Link>
            </>
          }
        />

        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
