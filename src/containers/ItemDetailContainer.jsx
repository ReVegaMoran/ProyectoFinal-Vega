import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import Loader from "../components/Loader";
import { hasFirebaseConfig } from "../services/firebase/firebaseConfig";
import { fetchProductById } from "../services/firebase/firestore";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    if (!hasFirebaseConfig) {
      setLoading(false);
      setError("Falta configurar Firebase (.env). Revisa el README.");
      return;
    }

    fetchProductById(itemId)
      .then((res) => setItem(res))
      .catch(() => setError("No se pudo cargar el producto."))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <main className="container">
      <h2 className="title">Detalle</h2>
      <p className="subtitle">Vista de detalle del producto.</p>

      {loading && <Loader text="Cargando detalle..." />}

      {!loading && error && <div className="loading">{error}</div>}

      {!loading && !error && !item && <div className="loading">No se encontró el producto.</div>}

      {!loading && !error && item && <ItemDetail item={item} />}
    </main>
  );
}

export default ItemDetailContainer;
