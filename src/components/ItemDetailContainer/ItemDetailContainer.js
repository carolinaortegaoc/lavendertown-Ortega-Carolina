import React from 'react';
import { useEffect, useState } from "react";
import ItemDetail  from '../ItemDetail/ItemDetail';
import Products  from '../Products.json';

export function ItemDetailContainer() {
    const [item, setItem] = useState([]);

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
            .then((res) => setItem(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <ItemDetail  item={item} />
        </>
    );
}
