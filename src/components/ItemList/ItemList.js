import React from "react";
import "./ItemList.css";
import Item from '../Item/Item';
import Loader from "react-loader-spinner";



const ItemList = ({ productos }) => {
  return (
      <div className="coso">
        {productos.length ? (
            productos.map((productos) => 
                <Item item={productos} key={productos.id} />
                )
      ) : (
        <Loader type="Hearts" color="#FFBFFF" height={100} width={100} />
      )}

    </div>
  );
};

export default ItemList;