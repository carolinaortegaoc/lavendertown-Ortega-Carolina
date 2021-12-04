import React from "react";
import { Link } from "react-router-dom";

export const ViewCart = ({ quantity }) => {
  return (
    <div className="gallery-container">
      <Link to="/cart">
        <p>Agregaste {quantity} productos</p>
        <button>Terminar mi compra</button>
      </Link>
      <Link to="/#">
      <button>Seguir comprando</button>
      </Link>
    </div>
  );
};
