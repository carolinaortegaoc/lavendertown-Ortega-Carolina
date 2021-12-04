import React, { useEffect, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from "../Context/CartContext";
import { ViewCart } from "../ViewCart/ViewCart";

import './ItemDetail.css';


const ItemDetail = ( props ) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  
  const { addItem } = useCart();
  
  const [ currentItem, setCurrentItem ] = useState([]);
  const saveQuantity = (counter) => {
    setCartQuantity(counter);
    addItem({"info": currentItem, "quantity": counter})
    
  };
  
  useEffect(() => {
    setCurrentItem(props.item.find(i => i.id == props.id));
  }, []);


    return (
        <>
            <div className="itemDetailContainer">
                    <div className="gallery-container">
                        <div className="gallery__item">
                            <img src={currentItem.photo} alt="foto" className="gallery__img" />
                                <p className="gallery__name">{currentItem.name}</p>
                                    <p>$ {currentItem.price}</p>
                                    <p>$ {currentItem.description}</p>
                            </div>
                        </div>
                        {cartQuantity ? (
        <ViewCart quantity={cartQuantity} />
      ) : (
        <ItemCount initial={1} stock={currentItem.stock} id={currentItem.id} onAdd={saveQuantity}
        />
      )}
    </div>
        </>
    );
}


export default ItemDetail;