import React from 'react';
import { useEffect, useState } from "react";
import ItemDetail  from '../ItemDetail/ItemDetail';
import Loader from "react-loader-spinner";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase/index";
import { getDocs, query, collection } from "firebase/firestore";


function ItemDetailContainer() {
    const [item, setItems] = useState("");
    const { id } = useParams();


    useEffect(() => {
      const db = getFirestore();
      const q = query(
        collection(db, "items")
      );
      getDocs(q).then((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => {
            const newDoc = { ...doc.data(), id: doc.id}
            console.log(newDoc)
            return doc.data();
          })
        );
      });
      },[id]);
 
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



