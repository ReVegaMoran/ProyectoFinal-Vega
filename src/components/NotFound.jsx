import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container">
      <h2 className="title">404</h2>
      <p className="subtitle">No encontré esa ruta. Revisa el enlace o vuelve al inicio.</p>
      <Link className="btn" to="/">
        Ir al catálogo
      </Link>
    </main>
  );
}

export default NotFound;
