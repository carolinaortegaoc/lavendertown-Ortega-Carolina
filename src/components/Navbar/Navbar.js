import React from 'react'
import '../Style/navbarSASS.css'
import {CartWidget} from '../CartWidget/CartWidget'
import { Link, NavLink} from "react-router-dom";

export const Navbar = () => {
        return (
            <>
                <nav className='nav'>
                <div className='container_title'>
                <Link to={"/"}>lavender town</Link>
                </div>
                <ul className='navUl'>
                    <li className='navLi'><NavLink to={"/category/cuerpo"}>cuerpo</NavLink></li>
                    <li className='navLi'><NavLink to={"/category/manos"}>manos</NavLink></li>
                    <li className='navLi'><NavLink to={"/category/serum"}>serum</NavLink></li>
                    <li className='navLi'><NavLink to={"/category/kit"}>kits</NavLink></li>
                </ul>
                <CartWidget />
                </nav>
            </>
        )
    }
