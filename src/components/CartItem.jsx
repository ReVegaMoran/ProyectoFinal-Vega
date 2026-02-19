function CartItem({ item, onRemove }) {
  const subtotal = item.price * item.quantity;

  const categoryClass = `card-${item.category}`;

  return (
    <article className={`card cart-card ${categoryClass}`}>
      <div>
        <h3 className="card-title">{item.title}</h3>

        <p className={`category-badge badge-${item.category}`}>
          {item.category}
        </p>

        <div className="row" style={{ marginTop: 6 }}>
          <span className="muted">
            Precio: {window.formatPrice(item.price)}
          </span>
          <span className="muted">
            Cantidad: {item.quantity}
          </span>
        </div>

        <p className="price" style={{ marginTop: 8 }}>
          Subtotal: {window.formatPrice(subtotal)}
        </p>
      </div>

      <button
        className="btn danger"
        style={{ marginTop: 10 }}
        onClick={() => onRemove(item.id)}
      >
        Eliminar
      </button>
    </article>
  );
}

export default CartItem;
