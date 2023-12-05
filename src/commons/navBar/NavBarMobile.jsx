import { NavLink } from "react-router-dom";

import { useSession } from "../../stores/useSessions";

import "./navbar.css";


const NavBarMobile = () => {
  const { isLoggedIn, user } = useSession();

  return (
    <header className="header" id="mobileFirst">
      <nav className="navbar bg-body-tertiary fixed-bottom border-top">
        <ul className="nav-links mx-auto">
          {!user?.isAdmin && (
            <li>
              <div className="text-center prueba">
                <NavLink
                  className={`nav-link text-secondary ${({ isActive }) =>
                    isActive ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                >
                  <i className="bi bi-house fs-2 text-secondary "></i>
                </NavLink>
              </div>
            </li>
          )}
          {!user?.isAdmin && (
            <li>
              <div className="text-center ms-5">
                <NavLink></NavLink>
                <NavLink
                  className={`nav-link text-secondary ${({ isActive }) =>
                    isActive ? "active" : " "}`}
                  aria-current="page"
                  to="/order"
                >
                  <i className="bi bi-columns-gap fs-2 text-secondary"></i>
                </NavLink>
              </div>
            </li>
          )}
          {isLoggedIn && !user?.isAdmin && (
            <li>
              <div className="text-center ms-5  ">
                <NavLink></NavLink>
                <NavLink
                  className={`nav-link text-secondary  ${({ isActive }) =>
                    isActive ? "active" : ""}`}
                  aria-current="page"
                  to="/checkout"
                >
                  <i className="bi bi-bag-fill fs-2 text-secondary"></i>
                </NavLink>
              </div>
            </li>
          )}
          {isLoggedIn && !user?.isAdmin && (
            <li>
              <div className="text-center ms-5">
                <NavLink
                  className={`nav-link text-secondary ${({ isActive }) =>
                    isActive ? "activePage" : ""}`}
                  aria-current="page"
                  to="/myaccount"
                >
                  <i
                    className="bi bi-person-circle fs-2 text-secondary"
                    id="iconColor"
                  ></i>
                </NavLink>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBarMobile;
