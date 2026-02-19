import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function CartPage() {
  const { cart, removeItem, clearCart, totalPrice, totalUnits } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <main className="container">
        <h2 className="title">Carrito</h2>
        <div className="loading">Carrito vacío</div>
        <div className="row" style={{ marginTop: 12 }}>
          <Link className="btn" to="/">
            Ir al catálogo
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <h2 className="title">Carrito</h2>
      <p className="subtitle">
        Total de unidades: {totalUnits}
      </p>

      <div className="grid">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={removeItem}
          />
        ))}
      </div>

      <div className="hr" />

      <section className="cart-summary">
        <div>
          <div className="total-label">Total a pagar</div>
          <div className="muted">
            Incluye {totalUnits} unidad(es)
          </div>
        </div>

        {/* ✅ Formateado global */}
        <div className="total-amount">
          {window.formatPrice(totalPrice)}
        </div>

        <div className="actions">
          <button className="btn danger" onClick={clearCart}>
            Vaciar carrito
          </button>
          <Link className="btn" to="/checkout">
            Finalizar compra
          </Link>
        </div>
      </section>
    </main>
  );
}

export default CartPage;
