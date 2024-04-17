import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner'
import ItemCount from './components/ItemCount/ItemCount'
import { CartProvider } from './context/CartContext'


function App() {
  const addToCart = (count) => {
    console.log(count)

  }
  return(
    <BrowserRouter>
    <CartProvider>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Nuestros productos" />} />

        <Route path="/category/:idCategory" element={<ItemListContainer saludo="Nuestros productos" />} />

      </Routes>
    </CartProvider>    
    </BrowserRouter>
  )
}

export default App
