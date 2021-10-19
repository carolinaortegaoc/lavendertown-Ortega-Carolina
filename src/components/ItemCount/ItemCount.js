import React from 'react';
import { useState } from 'react';

export function Counter() {
    const [counter, setCounter] = useState(0);

    const add = () => setCounter(counter + 1);
    const remove = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        } else {
            alert('Ups! No puedes agregar al carrito menos de un producto');
        }
    };

    return (
        <div>
            <button onClick={remove}>-</button>
            <p>{counter}</p>
            <button onClick={add}>+</button>
        </div>
    );
}
