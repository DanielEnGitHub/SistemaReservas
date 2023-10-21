import { Navigate } from "react-router-dom";

// context
import { UserContext } from "../../context/User";

import { useContext } from "react";

const PrivateRouter = ({ children }) => {
  const { token } = useContext(UserContext);

  // onAuthStateChanged

  // Si esta autenticado, retorna el children (componente hijo)
  return token ? children : <Navigate to="/" />;
};

export default PrivateRouter;
