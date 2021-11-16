import React from 'react'
import cartImage from '../images/logo.svg'
import { useCart } from "../Context/CartContext";
import './CartWidget.css';

export const CartWidget = ({ totalItems }) => {
    const { cart } = useCart();
    return (
        <div>
            <img src={cartImage} alt="carrito" className="Carrito"/>
            <div className={cart.length > 0 ? "quantity" : "quantity-hidden"}>
        {totalItems}
      </div>
        </div>
    )
}
