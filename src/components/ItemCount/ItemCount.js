import React from 'react';
import { useEffect, useState } from 'react';
import '../ItemCount/ItemCount.css'

const ItemCount = ({ stock, initial, id, onAdd, texto, onCart=false  }) => {
    const [ItemCount, setCounter] = useState(initial);
    const [producto, setProducto] =useState(false)

    const add = () => {
        if (ItemCount < stock) {
            setCounter(ItemCount + 1);
        } else {
            alert('ups! No hay mas stock');
    }
    };
        const remove = () => {
            if (ItemCount > 1) {
                setCounter(ItemCount - 1);
            } else {
                alert('Ups! No puedes agregar al carrito menos de un producto');
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
        <div className="contador">
            <button onClick={remove}>-</button>
            <p>{ItemCount}</p>
            <button onClick={add}>+</button>
            {!onCart &&  <button className={ ` ${producto === false ? 'btnCarrito' : 'btn-CarritoDos'} col-9 col-sm-8 justify-self-center mt-2 ` } id={id} onClick={handleOnAdd}>
Añadir al carrito
          </button>}

        </div>
        
    );
}

export default ItemCount;