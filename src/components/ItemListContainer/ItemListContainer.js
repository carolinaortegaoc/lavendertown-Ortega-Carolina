import React from 'react';
import { useEffect, useState } from "react";
import ItemList  from '../ItemList/ItemList';
import Products  from '../Products.json';

function ItemListContainer() {
    const [productos, setProductos] = useState([]);

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
            .then((res) => setProductos(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <ItemList productos={productos} />
        </>
    );
}

export default ItemListContainer;