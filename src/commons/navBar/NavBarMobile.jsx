import { NavLink } from "react-router-dom";

import { useSession } from "../../stores/useSessions";

import "./navbar.css";

const NavBarMobile = () => {
  const { isLoggedIn, user } = useSession();

  return (
    <nav
      className="navbar bg-body-tertiary fixed-bottom border-top mt-5 z-3"
      id="mobileFirst"
    >
      <ul className="nav-links d-flex justify-content-evenly gap-3">
        {!user?.isAdmin && (
          <li>
            <div className="text-center  ">
              <NavLink
                className={`nav-link text-secondary ${({ isActive }) =>
                  isActive ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
                <i className="bi bi-house fs-2  "></i>
              </NavLink>
            </div>
          </li>
        )}
        {!user?.isAdmin && (
          <li>
            <div className="text-center ms-4">
              
              <NavLink
                className={`nav-link text-secondary ${({ isActive }) =>
                  isActive ? "active" : " "}`}
                aria-current="page"
                to="/order"
              >
                <i className="bi bi-columns-gap fs-2 "></i>
              </NavLink>
            </div>
          </li>
        )}
        {isLoggedIn && !user?.isAdmin && (
          <li>
            <div className="text-center ms-4  ">
            
              <NavLink
                className={`nav-link text-secondary  ${({ isActive }) =>
                  isActive ? "active" : ""}`}
                aria-current="page"
                to="/checkout"
              >
                <i className="bi bi-bag-fill fs-2 "></i>
              </NavLink>
            </div>
          </li>
        )}
        {isLoggedIn && !user?.isAdmin && (
          <li>
            <div className="text-center ms-4">
              <NavLink
                className={`nav-link text-secondary ${({ isActive }) =>
                  isActive ? "activePage" : ""}`}
                aria-current="page"
                to="/myaccount"
              >
                <i
                  className="bi bi-person-circle fs-2 "
                  id="iconColor"
                ></i>
              </NavLink>
            </div>
          </li>
        )}
        {isLoggedIn && !user?.isAdmin && (
          <li>
            <div className="text-center ms-4  ">
              
              <NavLink
                className={`nav-link text-secondary  ${({ isActive }) =>
                  isActive ? "active" : ""}`}
                aria-current="page"
                to="/contact-us"
              >
                <i className="bi bi-info-circle-fill fs-2 "></i>
              </NavLink>
            </div>
          </li>
        )}
        {isLoggedIn && !user?.isAdmin && (
          <li>
            <div className="text-center mx-4  ">
              
              <NavLink
                className={`nav-link text-secondary  ${({ isActive }) =>
                  isActive ? "active" : ""}`}
                aria-current="page"
                to="/about-us"
              >
                <i className="bi bi-person-lines-fill fs-2"></i>
              </NavLink>
            </div>
          </li>
        )}
        {user?.isAdmin && (
          <li>
            <div className="text-center   ">
              
              <NavLink
                className={`nav-link text-secondary  ${({ isActive }) =>
                  isActive ? "active" : ""}`}
                aria-current="page"
                to="/admin"
              >
                <i className="bi bi-person-add fs-2"></i>
              </NavLink>
            </div>
          </li>
        )}
         {user?.isAdmin && (
          <li>
            <div className="text-center   ">
              
              <NavLink
                className={`nav-link text-secondary  ${({ isActive }) =>
                  isActive ? "active" : ""}`}
                aria-current="page"
                to="/stats"
              >
                <i className="bi bi-bar-chart-line-fill fs-2"></i>
              </NavLink>
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBarMobile;
