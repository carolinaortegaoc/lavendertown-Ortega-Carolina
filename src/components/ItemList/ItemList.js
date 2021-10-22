
import React from "react";
import "./ItemList.css";
import Item from '../Item/Item';
import loadImage from '../images/arrow-repeat.svg'


const ItemList = ({ productos }) => {
  return (
      <div className="coso">
        {productos.length ? (
            productos.map((producto) => 
                <Item item={producto} key={producto.id} />)
      ) : (
        <img src={loadImage} alt="loading" className="loadImage"/>
      )}
    </div>
  );
};

export default ItemList;