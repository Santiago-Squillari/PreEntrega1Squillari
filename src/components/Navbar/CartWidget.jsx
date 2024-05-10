import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./navbar.css"

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  const quantity = totalQuantity()

  return (
    <Link to="/cart" className="cartwidget">
          <img className='icon' src="/img/cart.png"/>
      <p className="cartnumber">{ quantity > 0 && quantity }</p>
    </Link>
  );
};
export default CartWidget;