import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

const addItem = (item, quantity) => {
    const newItem = {...item, counter: item.quantity};
    const isInCart = cart.some((product) => product.info.id === item.info.id);
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
    setCart(cart.filter((item) => item.info.id !== id));
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

export default CartContext;