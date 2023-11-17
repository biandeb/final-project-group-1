import { NavLink } from "react-router-dom";

import "./navbar.css";

const NavBarMobile = () => {
  return (
    <header className="header" id="mobileFirst">
      <nav className="navbar bg-body-tertiary fixed-bottom border-top">
        <ul className="nav-links mx-auto">
          <li>
            <div className="text-center">
              <NavLink>
                <i className="bi bi-house fs-2 text-dark "></i>
              </NavLink>
              <NavLink
                className={`nav-link text-dark ${({ isActive }) =>
                  isActive ? "active" : ""}`}
                aria-current="page"
                to="/Home"
              >
                Home
              </NavLink>
            </div>
          </li>
          <li>
            <div className="text-center ms-5">
              <NavLink>
                <i className="bi bi-columns-gap fs-2 text-dark"></i>
              </NavLink>
              <NavLink
                className={`nav-link text-dark ${({ isActive }) =>
                  isActive ? "active" : " "}`}
                aria-current="page"
                to="/"
              >
                Menu
              </NavLink>
            </div>
          </li>
          <li>
            <div className="text-center ms-5 ">
              <NavLink>
                <i className="bi bi-building-fill-down fs-2 text-dark "></i>
              </NavLink>
              <NavLink
                className={`nav-link text-dark ${({ isActive }) =>
                  isActive ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
                Pedidos
              </NavLink>
            </div>
          </li>
          <li>
            <div className="text-center ms-5">
              <NavLink>
                <i className="bi bi-person-circle fs-2 text-dark "></i>
              </NavLink>
              <NavLink
                className={`nav-link text-dark ${({ isActive }) =>
                  isActive ? "activePage" : ""}`}
                aria-current="page"
                to="/"
              >
                Perfil
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBarMobile;
