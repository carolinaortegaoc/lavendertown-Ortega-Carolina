import { React, useState } from "react";
import { db } from "../../firebase/index";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import "./CheckoutForm.css";

const CheckoutForm = ({cart, totalToPay}) => {
const [buyer, setBuyer] = useState({
    name: "",
    mail: "",
    phone: "",
  });

  const formHandler = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  }

  const history = useHistory();

  const date = new Date();
  const orderDate = date.toLocaleDateString();

  const handleBuy = (e) => {
    e.preventDefault();
      const order = {
        buyer,
        cart,
        totalToPay,
        date: orderDate,
      };
    console.log(order)
    

    
  const ordersCollection = collection(db, "orders");
  addDoc(ordersCollection, order).then(({ id }) =>
  Swal.fire({
    icon: 'success',
    title: 'Compra realizada!',
    text: `Muchas gracias! Su codigo de compra es: ${id}`,
    showConfirmButton: true
  }).then(() => history.push('/'))
    );
  }

return (
  <div className="formulario">
    <h2>Por favor, completa los datos de compra:</h2>
  <form action="#">
          <label>Inserta aquí tu nombre y apellido</label>
        <input  type="text" name="name" onChange={formHandler} />
        <label>Inserta aquí tu email</label>
        <input  type="text" name="mail" onChange={formHandler} />
        <label>Inserta aquí tu telefono</label>
        <input  type="text" name="phone" onChange={formHandler} />
        <button
          className="boton"
          onClick={handleBuy}
        >
          Finalizar Compra
        </button>
  </form>
  </div>
  )
};


export default CheckoutForm;