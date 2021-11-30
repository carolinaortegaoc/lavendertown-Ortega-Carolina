import React from "react";
import './Item.css';
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
<div className="gallery-container">
<div className="gallery__item">
<Link to={`/item/${item.id}`}><img src={item.photo} alt="foto" className="gallery__img" /></Link>
 <p className="gallery__name">{item.name}</p>
 <p className="gallery__name"> {item.description}</p>
  <p className="gallery__name">$ {item.price}</p>
  <Link to={`/item/${item.id}`}><button>Ver detalle</button></Link>
 </div>
</div>
  );
};

export default Item;