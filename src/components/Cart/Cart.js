import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";


export const Cart = () => {
  const { cart, removeItem, clear } = useCart();
  const totalToPay = cart.reduce((total, item) => {
    return total + item.info.price * item.quantity;
  }, 0);

  const handleBuy = () => {
    console.log(order);
  };
  const order = {
    buyer: { name: "jane doe", phone: "123456789", email: "email@email.com" },
    items: cart,
    totalToPay,
  }


  return cart.length ? (
    <div>
      <div>
        <h1>Carrito</h1>
        <Link to="/">
          <div>Seguir comprando</div>
        </Link>
      </div>

      {cart?.map((item) => {
        return (
          <div className="cart" key={item.info.id}>
            <ul>
              <li>
                <div>
                  <div>
                    <img
                      src={item.info.photo}
                      alt=""
                      className="itemImg"
                    />
                    <h3>{item.info.title}</h3>

                    <p>
                      {item.quantity}
                    </p>
                  </div>

                  <div>
                    <p>$ {item.info.price * item.quantity}</p>
                  </div>
                  <div>
                    <button
                      className="remove"
                      onClick={() => {
                        removeItem(item.id);
                      }}
                    >
                      Eliminar producto
                    </button>
                    <button
        className="vaciar"
        onClick={() => {
          clear(item);
        }}
      >
        Vaciar carrito
      </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        );
      })}


      <div>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <span className="label">Total</span>
            <span className="value">$ {totalToPay}</span>
          </li>
          <li>
            <a href="/#" className="btn continue" onClick={() => handleBuy()}>
              Comprar
            </a>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div>
      <div>
        <h1>Tu carrito esta vacio</h1>
        <Link to="/">
          <div>Seguir comprando</div>
        </Link>
      </div>
    </div>
  );
};