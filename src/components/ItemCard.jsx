import { Link } from "react-router-dom";

function ItemCard({ item }) {
  const categoryClass = `card-${item.category}`;

  return (
    <article className={`card ${categoryClass}`}>
      <div>
        <h3 className="card-title">{item.title}</h3>
        <p className={`category-badge badge-${item.category}`}>
          {item.category}
        </p>
      </div>

      <div className="row">
        <span className="price">
  {window.formatPrice(item.price)}
</span>
        <span className="muted">Stock: {item.stock}</span>
      </div>

      <Link className="btn" to={`/item/${item.id}`}>
        Ver detalle
      </Link>
    </article>
  );
}

export default ItemCard;
