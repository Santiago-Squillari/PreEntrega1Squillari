import React from 'react'
import CartWidget from './CartWidget'
import "./navbar.css"
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
      <img className='icon' src="/img/icon.png"/>
      </Link>
    
      <ul className="categories-navbar">
        <Link to="/category/pizza" className="categorie-navbar">Pizzas</Link>
        <Link to="/category/hamburguesa" className="categorie-navbar">Hamburguesas</Link>
        <Link to="/category/lomito" className="categorie-navbar">Lomito</Link>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar