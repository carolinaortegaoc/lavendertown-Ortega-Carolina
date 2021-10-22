import React from 'react';
import { useState } from 'react';
import '../ItemCount/ItemCount.css'

export function ItemCount() {
    const [ItemCount, setCounter] = useState(0);

    const add = () => {
        if (ItemCount < 10) {
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
