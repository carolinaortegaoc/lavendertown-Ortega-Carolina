import React, { useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from "../Context/CartContext";
import { ViewCart } from "../ViewCart/ViewCart";
import './ItemDetail.css';


const ItemDetail = ({ item }) => {
    const [cartQuantity, setCartQuantity] = useState(0);

    const { cart, addItem } = useCart();

  console.log(cart);

  const saveQuantity = (counter) => {
    setCartQuantity(counter);
    addItem({"info": item, "quantity": counter})
    console.log("Cantidad y tipo de producto", cart)
  };


    return (
        <>
            <div className="itemDetailContainer">
                    <div className="gallery-container">
                        <div className="gallery__item">
                            <img src={item.photo} alt="foto" className="gallery__img" />
                                <p className="gallery__name">{item.name}</p>
                                    <p>$ {item.price}</p>
                                    <p>$ {item.description}</p>
                            </div>
                        </div>
                        {cartQuantity ? (
        <ViewCart quantity={cartQuantity} />
      ) : (
        <ItemCount initial={1} stock={item.stock} id={item.id} onAdd={saveQuantity}
        />
      )}
    </div>
        </>
    );
}


export default ItemDetail;