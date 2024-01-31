import s from "./Navbar.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark justify-content-md-center">
      <div className={s.navContainer}>
        <button class="btn btn-info m-2">Ingresos</button>
        <button class="btn btn-info m-2">Usuarios</button>
        <button class="btn btn-info m-2">
          <Link to="/crear">Crear usuario</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
