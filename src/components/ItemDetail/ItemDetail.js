import React, { useState } from "react";
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { ViewCart } from "../ViewCart/ViewCart";

const ItemDetail = ({ item }) => {
    const [cartQuantity, setCartQuantity] = useState(0);

    const saveQuantity = (counter) => {
      setCartQuantity(counter);
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
                                <div className="agregar">Agregar al carrito</div>
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