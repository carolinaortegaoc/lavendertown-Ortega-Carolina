import React from 'react';
import { useEffect, useState } from 'react';
import '../ItemCount/ItemCount.css'
import Swal from "sweetalert2";

const ItemCount = ({ stock, initial, id, onAdd, onCart=false  }) => {
    const [ItemCount, setCounter] = useState(initial);
    const [producto, setProducto] =useState(false)

    const add = () => {
        if (ItemCount < stock) {
            setCounter(ItemCount + 1);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No tenemos mas stock disponible!',
              });
    }
    };
        const remove = () => {
            if (ItemCount > 1) {
                setCounter(ItemCount - 1);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No puedes agregar al carrito menos de un producto',
                  });
        }
        };

        const handleOnAdd = () => {
            if (ItemCount !== 0) {
              onAdd(ItemCount);
              setProducto(true)
            }
          };

          useEffect(() => {
            if (onCart) {
                onAdd(ItemCount) }
          }, [ItemCount, onAdd, onCart])

    return (
        <div className="gallery__name">
        <div className="contador">
            <button onClick={remove} className="boton">-</button>
            <p>{ItemCount}</p>
            <button onClick={add} className="boton">+</button>
            {!onCart &&  <button className={ ` ${producto === false ? 'boton' : 'boton'} col-9 col-sm-8 justify-self-center mt-2 ` } id={id} onClick={handleOnAdd}>
Añadir al carrito
          </button>}
</div>
    </div>
        
    );
}

export default ItemCount;