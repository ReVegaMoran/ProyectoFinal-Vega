import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { totalUnits } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-button" aria-label="Carrito">
      🛒 <span className="cart-badge">{totalUnits}</span>
    </Link>
  );
}

export default CartWidget;
