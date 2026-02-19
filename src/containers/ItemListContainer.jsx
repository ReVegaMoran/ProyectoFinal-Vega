import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import Loader from "../components/Loader";
import { hasFirebaseConfig } from "../services/firebase/firebaseConfig";
import { fetchProducts } from "../services/firebase/firestore";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const banners = {
    all: "/banners/all.jpg",
    cascos: "/banners/cascos.jpg",
    guantes: "/banners/guantes.jpg",
    calzado: "/banners/calzado.jpg"
  };

  const bannerSrc = categoryId ? banners[categoryId] : banners.all;
  const title = categoryId ? `Categoría: ${categoryId}` : "Catálogo principal";

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setError("");

    if (!hasFirebaseConfig) {
      setLoading(false);
      setError("Falta configurar Firebase (.env). Revisa el README.");
      return;
    }

    fetchProducts(categoryId)
      .then((res) => {
        if (!isMounted) return;
        setItems(res);
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error("Firestore fetchProducts error:", err);
        setError("No se pudieron cargar los productos.");
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [categoryId]);

  return (
    <main className="container">
      <h2 className="title">{title}</h2>
      <p className="subtitle">Selecciona una categoría o entra al detalle de un producto.</p>

      {/* ✅ Banner */}
      {bannerSrc && (
        <div className="banner">
          <img src={bannerSrc} alt={title} />
        </div>
      )}

      {loading && <Loader text="Cargando productos..." />}

      {!loading && error && <div className="loading">{error}</div>}

      {!loading && !error && items.length === 0 && (
        <div className="loading">No hay productos para mostrar.</div>
      )}

      {!loading && !error && items.length > 0 && <ItemList items={items} />}
    </main>
  );
}

export default ItemListContainer;
