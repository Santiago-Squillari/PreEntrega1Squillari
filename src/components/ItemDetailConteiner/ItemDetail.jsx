import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {

  const handleAddToCart=(count) =>{
    const productCart = {...product, quantity:count}
    console.log(productCart)
  }
  
  return (
      <div className="item-detail">

        <div className="info-detail">
          <h1 className="title">{product.name}</h1>
          <p className="description">{product.description}</p>
          <p className="price">Precio: ${product.price}</p>
          <ItemCount handleAddToCart={handleAddToCart}/>
        </div>
        <div className="image-detail">
          <img src={product.image}/>
        </div>

      </div>
  );
};
export default ItemDetail;