import React from "react";
import { Link } from "react-router-dom";

export const ViewCart = ({ quantity }) => {
  return (
    <div className="gallery-container">
      <Link to="/cart">
        <button >Agregaste {quantity} productos</button>
      </Link>
    </div>
  );
};