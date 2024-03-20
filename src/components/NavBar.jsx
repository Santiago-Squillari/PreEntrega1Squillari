import React from 'react'
import CartWidget from './CartWidget'
import "./navbar.css"
import ItemListContainer from './ItemListContainer'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <img className='icon' src="/img/icon.png"/>
        <h1>Comidas.com</h1>
    
            <button id='pizza'>Pizzas</button>
            <button id='hamburguesa'>Hamburguesas</button>
            <button id='lomito'>Lomitos</button>
        
        <CartWidget />
    </nav>
  )
}

export default NavBar