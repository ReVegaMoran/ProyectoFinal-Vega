import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

function ItemDetail({ item }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem(
      {
        id: item.id,
        title: item.title,
        price: item.price
      },
      qty
    );
    setAdded(true);
  };

  const outOfStock = item.stock === 0;
  const categoryClass = `card-${item.category}`;

  return (
    <section className={`card ${categoryClass}`}>
      <h2 className="title" style={{ marginBottom: 0 }}>
        {item.title}
      </h2>

      <p className="subtitle" style={{ marginTop: 6 }}>
        {item.description}
      </p>

      <p className={`category-badge badge-${item.category}`}>
        {item.category}
      </p>

      <div className="row" style={{ marginTop: 8 }}>
        <span className="price">{window.formatPrice(item.price)}</span>
        <span className="muted">Stock: {item.stock}</span>
      </div>

      <div className="hr" />

      {outOfStock ? (
        <div className="loading">Producto sin stock</div>
      ) : added ? (
        <div className="row">
          <Link className="btn" to="/cart">
            Ir al carrito
          </Link>
          <Link className="btn secondary" to="/">
            Seguir comprando
          </Link>
        </div>
      ) : (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      )}
    </section>
  );
}

export default ItemDetail;
