import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

const addItem = (item, quantity) => {
    const newItem = {...item, counter: quantity};
    const isInCart = cart.some((product) => product.id === item.id);
    if (!isInCart) {
        setCart([...cart, newItem]);
    } else {
setCart(cart.map((value) => {
    if (value.info.id === item.info.id) {
      value.quantity += item.quantity;
    } return value;
  }))
}
};


const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
};

const clearCart = () => {
    setCart([]);
};

return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
);
};