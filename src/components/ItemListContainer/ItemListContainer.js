import React from 'react';
import { useEffect, useState } from "react";
import ItemList  from '../ItemList/ItemList';
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const getData = (q) =>
      getDocs(q).then((snap) => {
        setProductos(snap.docs.map((productos) => productos.data()));
      });
    
      if (id) {
        const q = query(collection(db, "items"), where("category", id));
        getData(q);
      } else {
        const q = query(collection(db, "items"));
        getData(q);
      }

    }, [id]);


    return (
        <>
            <ItemList productos={productos} />
        </>
    );
}

export default ItemListContainer;





 /*  const getData = (data) => new Promise((resolve, reject) => {
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
    }, [catId]); */