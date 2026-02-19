import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  const linkClass = (base) => ({ isActive }) => `${isActive ? "active " : ""}${base}`.trim();

  return (
    <header className="navbar">
      <div className="brand">
        <h1>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            APR Catálogo EPP
          </Link>
        </h1>
        <small>Especialistas en seguridad laboral</small>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={linkClass("cat-all")}>
            Todos los EPP
          </NavLink>
        </li>

        <li>
          <NavLink to="/category/cascos" className={linkClass("cat-cascos")}>
            Cascos
          </NavLink>
        </li>

        <li>
          <NavLink to="/category/guantes" className={linkClass("cat-guantes")}>
            Guantes
          </NavLink>
        </li>

        <li>
          <NavLink to="/category/calzado" className={linkClass("cat-calzado")}>
            Calzado
          </NavLink>
        </li>
      </ul>

      <CartWidget />
    </header>
  );
}

export default NavBar;
