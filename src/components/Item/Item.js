import React from "react";
import './Item.css';

const Item = ({ item }) => {
  return (
<div className="gallery-container">
<div className="gallery__item">
 <img src={item.photo} alt="foto" className="gallery__img" />
 <p className="gallery__name">{item.name}</p>
  <p>$ {item.price}</p>
 </div>
</div>
  );
};

export default Item;