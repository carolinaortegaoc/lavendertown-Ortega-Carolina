import { React } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import CheckoutForm from "../Form/CheckoutForm";
import "./Cart.css";


const Cart = () => {
  const {cart, removeItem, clearCart} = useCart();
  const totalToPay = cart.reduce((total, item) => {
    return total + item.info.price * item.quantity;
  }, 0);
  

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
          <div className="contenedor-carrito">
                <div>
                  <div className="producto-carrito" key={item.info.id}>
                    <img src={item.info.photo} alt="" className="itemImg" />
                    </div>
                    <div className="titulos-carrito">
                    <p>{item.title}</p>
                    <p>Cantidad: {item.info.quantity}</p>
                    <p>Precio: $ {item.info.price * item.quantity}</p>
                    </div>
                  <div>
                    <button className="boton" onClick={() => {
                        removeItem(item.id);
                      }}
                    >Eliminar producto</button>
                    <button className="boton" onClick={() => {
          clearCart(item);
        }}
      >Vaciar carrito</button>
                  </div>
                </div>
          </div>
        );
      })}
      <div>
      <h2 className="titulos-carrito">Total</h2>
      <p className="titulos-carrito">$ {totalToPay}</p>
      </div>
      <CheckoutForm cart={cart} totalToPay={totalToPay}/>
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