import { useState } from "react";

function CheckoutForm({ onConfirm, total }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email) return;

    onConfirm({ name, phone, email });
  };

  return (
    <section className="card">
      <h3 style={{ marginTop: 0 }}>Datos del comprador</h3>

      {/* ✅ Total formateado */}
      <p className="muted">
        Total a pagar: {window.formatPrice(total)}
      </p>

      <form className="form" onSubmit={submit}>
        <div className="input">
          <label>Nombre</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
          />
        </div>

        <div className="input">
          <label>Teléfono</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Tu teléfono"
          />
        </div>

        <div className="input">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
          />
        </div>

        <button className="btn" type="submit">
          Confirmar compra
        </button>
      </form>
    </section>
  );
}

export default CheckoutForm;
