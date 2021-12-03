import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { getFirestore } from "../../firebase/index";
import { collection, addDoc } from "firebase/firestore";


const Cart = () => {
  const {cart, removeItem, clearCart} = useCart();
  const [buyer, setBuyer] = useState({
    buyerName: "",
    buyerMail: "",
    buyerPhone: "",
    buyerDireccion: "",
  });
  
  const totalToPay = cart.reduce((total, item) => {
    return total + item.info[0].price * item.quantity;
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
          <div className="producto-carrito" key={item.id}>
            <ul>
              <li>
                <div>
                  <div>
                    <img src={item.photo} alt="" className="itemImg" />
                    <p>{item.title}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: $ {item.price * item.quantity}</p>
                  </div>
                  <div>
                    <button className="boton-eliminar" onClick={() => {
                        removeItem(item.id);
                      }}
                    >Eliminar producto</button>
                    <button className="boton-vaciar" onClick={() => {
          clearCart(item);
        }}
      >Vaciar carrito</button>
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


export default Cart;