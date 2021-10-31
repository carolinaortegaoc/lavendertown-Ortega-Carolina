import React from 'react';
import { useState } from 'react';
import '../ItemCount/ItemCount.css'

const ItemCount = ({ stock, initial }) => {
    const [ItemCount, setCounter] = useState(initial);

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
    
    return (
        <div className="contador">
            <button onClick={remove}>-</button>
            <p>{ItemCount}</p>
            <button onClick={add}>+</button>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;