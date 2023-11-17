
import { NavLink } from "react-router-dom";
import "./navbar.css"; 

const Navbar = () => {
  return (
    <header className="header" id="desktop">

  <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom">
  <div className="container">
    <a className="navbar-brand mx-5" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse container" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links ">
      <li>
            <div className="text-center mx-4">
              <NavLink>
                <i className="bi bi-house fs-5 text-dark "></i>
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
            <div className="text-center ms-5 mx-4">
              <NavLink>
                <i className="bi bi-columns-gap fs-5 text-dark"></i>
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
            <div className="text-center ms-5 mx-4 ">
              <NavLink>
                <i className="bi bi-building-fill-down fs-5 text-dark "></i>
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
            <div className="text-center ms-5  ">
              <NavLink>
                <i className="bi bi-person-circle fs-5 text-dark "></i>
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
      
    </div>
  </div>
</nav>
                  </header>
  )
}

export default Navbar