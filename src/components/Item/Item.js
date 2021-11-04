import React from "react";
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ item }) => {
  return (
<div className="gallery-container">
<div className="gallery__item">
 <img src={item.photo} alt="foto" className="gallery__img" />
 <p className="gallery__name">{item.name}</p>
 <p className="gallery__name"> {item.description}</p>
  <p className="gallery__name">$ {item.price}</p>
  <ItemCount initial={1} stock={item.stock} />
 </div>
</div>
  );
};

export default Item;