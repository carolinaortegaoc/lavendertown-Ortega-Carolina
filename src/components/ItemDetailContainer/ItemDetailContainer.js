import React from 'react';
import { useEffect, useState } from "react";
import ItemDetail  from '../ItemDetail/ItemDetail';
import Loader from "react-loader-spinner";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase/index";
import { getDoc, doc } from "firebase/firestore";


function ItemDetailContainer() {
    const [item, setItem] = useState("");
    const { id } = useParams();
    //const itemId = parseInt(id);

    useEffect(() => {
      const db = getFirestore();
      const itemColl = doc(db, "items", id);
      getDoc(itemColl).then((snap) => {
        if (snap.exists()) {
          setItem(snap.data());
        } 
      });
    }, [id]);
 
    return (
        <>
        {item ? (
    <ItemDetail  item={item} />
      ) : (
        <Loader type="Hearts" color="#FFBFFF" height={100} width={100} />
      )}
    </>
  );
};

export default ItemDetailContainer;


 

    /* const getData = (data) => new Promise((resolve, reject) => {
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
            }, [itemId]); */
          
