import React from 'react'
import cartImage from '../images/logo.svg'
import './CartWidget.css';

export const CartWidget = () => {
    return (
        <div>
            <img src={cartImage} alt="carrito" className="Carrito"/>
        </div>
    )
}