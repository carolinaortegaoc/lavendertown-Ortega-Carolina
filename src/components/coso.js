import React from "react";

const productos = [{ id: "bici", price: 200, name: "biciclieta"}]

const task = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos);
    }, 3000);
});

task.then(
        (result) => {
            console.log(result);
        },
        (error) => {
            console.log(error);
        }
        );

export default function App() {
    return (
        <div>
            <h1>Hola!!</h1>
            <p>como estan</p>
        </div>
        );
}