import React, { useContext, useRef } from 'react'
import { useState } from 'react';
import "./Navbar.css";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/dropdown.png';

export const Navbar = () => {
    const [menu, setMenu] = useState("shop")

    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef();

    const dropdown_toggle = (e)=> {
        menuRef.current.classList.toggle("nav-menu-visible")
        e.target.classList.toggle('open')
    }
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHoPPeR</p>
            </div>
            <img src={nav_dropdown} className='nav-dropdown' onClick={dropdown_toggle} alt="" />
            <ul className="nav-menu" ref={menuRef}>
                <li onClick={() => {setMenu("shop")}}> <Link className='menu-link' to='/'>Shop</Link> {menu==="shop" ? <hr/> : <></>} </li>
                <li onClick={() => {setMenu("men")}}> <Link className='menu-link' to='/men'>Men</Link> {menu==="men" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("women")}}><Link className='menu-link' to='/women'>Women</Link> {menu==="women" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("kids")}}><Link className='menu-link' to='/kids'>Kids</Link> {menu==="kids" ? <hr/> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="cart-icon" /></Link>
                <div className="nav-cart-count">
                    {getTotalCartItems()}
                </div>
            </div>
        </div>
    )
}
