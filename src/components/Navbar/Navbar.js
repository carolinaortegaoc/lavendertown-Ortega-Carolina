import React from 'react'
import './Navbar.css';
import {CartWidget} from '../CartWidget/CartWidget'
import { Link, NavLink} from "react-router-dom";
import { useCart } from "../Context/CartContext";
import logolavender from "./logolavender.png";


export const Navbar = () => {
    const { cart } = useCart();

    const itemsInCart = cart.reduce((total, p) => total + p.quantity, 0);

        return (
            <>
                <nav className='nav'>
                <div className='container_title'>
                <Link to="/">
                        <img src={logolavender} alt="Logo" className="logo" />
                    </Link>
                </div>
                <ul className='navUl'>
                    <li className='navLi'><NavLink to={"/category/Cuerpo"}>Cuerpo</NavLink></li>
                    <li className='navLi'><NavLink to={"/category/Manos"}>Manos</NavLink></li>
                    <li className='navLi'><NavLink to={"/category/Serum"}>Serum</NavLink></li>
                    <li className='navLi'><NavLink to={"/category/Kits"}>Kits</NavLink></li>
                </ul>
                <Link to="/cart" style={{ textDecoration: "none" }}>
        <CartWidget totalItems={itemsInCart} />
      </Link>
                </nav>
            </>
        )
    }