import { Link, NavLink } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
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
              <li>
                <div className="text-center ms-2 mx-4 ">
                  <NavLink
                    className={`nav-link text-dark  ${({ isActive }) =>
                      isActive ? "active" : ""}`}
                    aria-current="page"
                    to="/"
                  >
                    Admin
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
                    Ayuda
                  </NavLink>
                </div>
              </li>
            </ul>
            <Link to={"/register"}>
              <button className="ms-5">Ingresar</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
