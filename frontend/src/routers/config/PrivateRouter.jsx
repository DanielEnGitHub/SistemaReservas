import { Navigate } from "react-router-dom";

import Spinner from "../../components/Spinner";
import { useState } from "react";

const PrivateRouter = ({ children }) => {
  const [loader, setLodaer] = useState(true);
  const user = true;

  // onAuthStateChanged

  // Si esta autenticado, retorna el children (componente hijo)
  return user ? children : loader ? <Spinner /> : <Navigate to="/" />;
};

export default PrivateRouter;
