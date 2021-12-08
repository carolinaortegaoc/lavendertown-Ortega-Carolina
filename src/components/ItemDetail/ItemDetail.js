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
    const elemento = {"info": currentItem, "quantity": counter}
    addItem(elemento)
    
  };
  
  useEffect(() => {// eslint-disable-next-line
    setCurrentItem(props.item.find(i => i.id == props.id));
  }, [props]);


  return (
    <>
        <div className="itemDetailContainer">
                <div className="gallery-container">
                    <div className="gallery__item">
                        <img src={currentItem.photo} alt="foto" className="gallery__img" />
                        </div>
                            <div className="gallery__name">
                            <h1>{currentItem.name}</h1>
                                <h2>$ {currentItem.price}</h2>
                                <p>{currentItem.description}</p>
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