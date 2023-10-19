import { Navigate } from "react-router-dom";

import { UserContext } from "../../context/User";

import { useContext } from "react";

// Children es una prop que simpre esta, los hijos de este componente
const PublicRouter = ({ children }) => {
  const { token } = useContext(UserContext);

  // Si no esta autenticado, retorna el children (componente hijo)
  return !token ? children : <Navigate to="/app/products" />;
};

export default PublicRouter;
