import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return(
    <div>
      <NavBar />
      <ItemListContainer comida_1 = "muzarella" comida_2 = "fugazzeta" comida_3 = "especial"/>
    </div>
  )
}

export default App
