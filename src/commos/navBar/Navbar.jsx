import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSession } from "../../stores/useSessions";
import "./navbar.css";
import Swal from "sweetalert2";
import { toast } from "sonner";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout, user } = useSession();
  const handleLogout = () => {
    Swal.fire({
      title: "Atención",
      text: "Estás por cerrar tu sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, salir",
      cancelButtonText: "Cancelar",
    }).then((res) => {
      if (res.isConfirmed) {
        toast.success("Sesión cerrada exitosamente. Hasta luego!");
        logout();

        navigate("/login");
      }
    });
  };

  return (
    <header className="header " id="desktop">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom">
        <div className="container">
          <Link to="/">
            <img
              src="https://i.postimg.cc/VvvFvjYT/logo.png"
              alt="logo"
              className="imgLogo mx-5"
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse container"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-lg-0 nav-links ">
              <li>
                <div className="text-center mx-4">
                  <NavLink
                    className={`nav-link text-dark  ${({ isActive }) =>
                      isActive ? "active" : ""}`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="text-center ms-2 mx-4">
                  <NavLink
                    className={`nav-link text-dark  ${({ isActive }) =>
                      isActive ? "active" : ""}`}
                    aria-current="page"
                    to="/"
                  >
                    Menu
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="text-center ms-2 mx-4 ">
                  <NavLink
                    className={`nav-link text-dark  ${({ isActive }) =>
                      isActive ? "active" : ""}`}
                    aria-current="page"
                    to="/"
                  >
                    Pedidos
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="text-center ms-2 mx-4 ">
                  <NavLink
                    className={`nav-link text-dark ${({ isActive }) =>
                      isActive ? "active" : ""}`}
                    aria-current="page"
                    to="/"
                  >
                    Perfil
                  </NavLink>
                </div>
              </li>
              {user?.isAdmin && (
                <li>
                  <div className="text-center ms-2 mx-4 ">
                    <NavLink
                      className={`nav-link text-dark  ${({ isActive }) =>
                        isActive ? "active" : ""}`}
                      aria-current="page"
                      to="/admin"
                    >
                      Admin
                    </NavLink>
                  </div>
                </li>
              )}
            { !user?.isAdmin && (
              <li>
                <div className="text-center ms-2 mx-4 ">
                  <NavLink
                    className={`nav-link text-dark  ${({ isActive }) =>
                      isActive ? "active" : ""}`}
                    aria-current="page"
                    to="/contact-us"
                  >
                    Contact
                  </NavLink>
                </div>
              </li>)}
              { !user?.isAdmin && (<li>
                <div className="text-center ms-2 mx-4 ">
                  <NavLink
                    className={`nav-link text-dark  ${({ isActive }) =>
                      isActive ? "active" : ""}`}
                    aria-current="page"
                    to="/about-us"
                  >
                    About
                  </NavLink>
                </div>
              </li>)}
            </ul>
            {!isLoggedIn ? (
              <Link to="/login">
                <button className="ms-5">Ingresar</button>
              </Link>
            ) : (
              <button
                className="btn btn-danger"
                type="button"
                onClick={handleLogout}
              >
                Salir
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
