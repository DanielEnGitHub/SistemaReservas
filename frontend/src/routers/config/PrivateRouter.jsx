import { Navigate } from "react-router-dom";

import Spinner from "../../components/Spinner";
import { useState } from "react";

const PrivateRouter = ({ children }) => {
  const user = false;

  // onAuthStateChanged

  // Si esta autenticado, retorna el children (componente hijo)
  return user ? children : <Navigate to="/" />;
};

export default PrivateRouter;
