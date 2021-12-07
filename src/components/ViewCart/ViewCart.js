import React from "react";
import { Link } from "react-router-dom";
import "./ViewCart.css"

export const ViewCart = ({ quantity }) => {
  return (
    <div className="viewCart">
      <Link to="/cart">
      <p className="tituloCart">Agregaste {quantity} productos</p>
        <button className="boton">Terminar mi compra</button>
      </Link>
      <Link to="/#">
      <button className="boton">Seguir comprando</button>
      </Link>
    </div>
  );
};
