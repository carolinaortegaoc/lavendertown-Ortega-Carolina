import React from 'react';
import { useEffect, useState } from "react";
import ItemList  from '../ItemList/ItemList';
import Products  from '../Products.json';
import { useParams } from "react-router";


export const ItemListContainer = () => {
    const { catId } = useParams();
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
            .then((result) => {
                catId
                  ? setProductos(result.filter(x => x.category === catId))
                  : setProductos(result);
              })
            .catch((err) => console.log(err));
    }, [catId]);

    return (
        <>
            <ItemList productos={productos} />
        </>
    );
}

export default ItemListContainer;