import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>APR Catálogo EPP</h3>
          <p>Especialistas en seguridad laboral</p>
        </div>

        <div className="footer-links">
          <Link to="/">Catálogo</Link>
          <Link to="/category/cascos">Cascos</Link>
          <Link to="/category/guantes">Guantes</Link>
          <Link to="/category/calzado">Calzado</Link>
        </div>

        <div className="footer-copy">
          <p>© {new Date().getFullYear()} APR Catálogo EPP</p>
          <p>Proyecto Final React - René Vega</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
