import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/getProducts";
import { useParams } from "react-router-dom"
import "./Item.css"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams()

  useEffect(() => {
    getProducts
      .then((respuesta) => {
        if(idCategory){
          
          const newProducts = respuesta.filter((producto)=> producto.category === idCategory )
          setProducts(newProducts)
        }else{
          
          setProducts(respuesta)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("Finalizo la promesa"));
  }, [idCategory]);

  return (
    <div>
      <div>{saludo}</div>
      {
        products.map((product)=>{
        return <div className="card">
                <img className="item-img" src={product.image}/>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Stock: {product.stock}</p>
                <p>Precio: ${product.price}</p>
              </div>
        
        })
      }
      
    </div>
  );
};
export default ItemListContainer;