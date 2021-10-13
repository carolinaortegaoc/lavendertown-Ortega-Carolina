import React from 'react'
import './Style/navbarSASS.css'
import {CartWidget} from './CartWidget.js'

export const Navbar = () => {
        return (
            <>
                <nav className='nav'>
                <div className='container_title'>
                <h1>lavender town</h1>
                </div>
                <ul className='navUl'>
                    <li className='navLi'><a href="/#" className="a">Inicio</a></li>
                    <li className='navLi'><a href="/#" className="a">Productos</a></li>
                    <li className='navLi'><a href="/#" className="a">Nosotros</a></li>
                    <li className='navLi'><a href="/#" className="a">Contactanos</a></li>
                </ul>
                <CartWidget />
                </nav>
            </>
        )
    }
