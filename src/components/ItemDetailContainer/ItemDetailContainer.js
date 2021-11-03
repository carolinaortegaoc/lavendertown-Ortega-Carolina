import React from 'react';
import { useEffect, useState } from "react";
import ItemDetail  from '../ItemDetail/ItemDetail';
import Products  from '../Products.json';
import Loader from "react-loader-spinner";


function ItemDetailContainer() {
    const [item, setItem] = useState("");
    const itemId = parseInt();

    const getData = (data) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(data);
            } else {
                reject("Nope");
            }
        }, 2000);
    });

    useEffect(() => {
        getData(Products)
            .then((result) => {
                const filteredItems = result.filter(x => x.id === itemId)[0];
                setItem(filteredItems);
              })
              .catch((err) => console.log(err));
            }, [itemId]);
          

    return (
        <>
        {item ? (
    <ItemDetail  item={itemId} />
      ) : (
        <Loader type="Hearts" color="#FFBFFF" height={100} width={100} />
      )}
    </>
  );
};

export default ItemDetailContainer;