import React from "react";
import { Link } from "react-router-dom";

const ECommerce = () => {
  return (
    <div>
      <Link to="/components">Ver componentes</Link>
      <br />
      <Link to="/login/">Login</Link>
    </div>
  );
};

export default ECommerce;
