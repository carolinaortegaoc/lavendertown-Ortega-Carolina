import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { getFirestore } from "../../firebase/index";
import { collection, addDoc } from "firebase/firestore";


export const Cart = () => {
  const { cart, removeItem, clear } = useCart();
  const [buyer, setBuyer] = useState({
    buyerName: "",
    buyerMail: "",
    buyerPhone: "",
    buyerDireccion: "",
  });
  const totalToPay = cart.reduce((total, item) => {
    return total + item.info.price * item.quantity;
  }, 0);
  const date = new Date();
  const orderDate = date.toLocaleDateString();
  const formHandler = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleBuy = (e) => {
    const db = getFirestore();
    const order = {
      buyer,
      cart,
      totalToPay,
      date: orderDate,
    };

    console.log(order)

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) =>
      console.log(id)
    );
    clear();
  };


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
          <li className="totalRow">
            <form onSubmit={handleBuy}>
              <input
                type="text"
                placeholder="Nombre y Apellido"
                name="buyerName"
                onChange={formHandler}
              />
              <input
                type="email"
                placeholder="Mail"
                name="buyerMail"
                onChange={formHandler}
              />
              <input
                type="domicilio"
                placeholder="direccion"
                name="buyerDireccion"
                onChange={formHandler}
              />
              <input
                type="tel"
                placeholder="Teléfono"
                name="buyerPhone"
                onChange={formHandler}
              />
            </form>
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