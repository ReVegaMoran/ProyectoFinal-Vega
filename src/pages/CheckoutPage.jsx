import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "../components/CheckoutForm";
import Loader from "../components/Loader";
import { hasFirebaseConfig } from "../services/firebase/firebaseConfig";
import { createOrder } from "../services/firebase/firestore";

function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  if (cart.length === 0 && !orderId) {
    return (
      <main className="container">
        <h2 className="title">Checkout</h2>
        <div className="loading">No hay productos en el carrito.</div>
        <div className="row" style={{ marginTop: 12 }}>
          <Link className="btn" to="/">
            Ir al catálogo
          </Link>
        </div>
      </main>
    );
  }

  const handleSubmit = async (buyer) => {
    setError("");

    if (!hasFirebaseConfig) {
      setError("Falta configurar Firebase (.env). Revisa el README.");
      return;
    }

    setLoading(true);

    try {
      const order = {
        buyer,
        items: cart.map((p) => ({
          id: p.id,
          title: p.title,
          price: p.price,
          quantity: p.quantity
        })),
        total: totalPrice
      };

      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (e) {
      setError(e.message || "No se pudo generar la orden. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <h2 className="title">Checkout</h2>
      <p className="subtitle">Completa tus datos para generar la orden.</p>

      {loading && <Loader text="Generando orden..." />}

      {!loading && error && <div className="loading">{error}</div>}

      {!loading && orderId ? (
        <div className="card">
          <h3>Compra confirmada ✅</h3>
          <p className="muted">Tu id de orden es:</p>
          <p className="price">{orderId}</p>

          <div className="row" style={{ marginTop: 12 }}>
            <Link className="btn" to="/">
              Volver al catálogo
            </Link>
          </div>
        </div>
      ) : (
        !loading && <CheckoutForm onConfirm={handleSubmit} total={totalPrice} />
      )}
    </main>
  );
}

export default CheckoutPage;
