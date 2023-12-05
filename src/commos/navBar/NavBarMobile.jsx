import { NavLink } from "react-router-dom";

import "./navbar.css";
import { useSession } from "../../stores/useSessions";


const NavBarMobile = () => {
  // const navigate = useNavigate();
  const { isLoggedIn, user } = useSession();
  // const handleLogout = () => {
  //   Swal.fire({
  //     title: "Atención",
  //     text: "Estás por cerrar tu sesión",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Si, salir",
  //     cancelButtonText: "Cancelar",
  //   }).then((res) => {
  //     if (res.isConfirmed) {
  //       toast.success("Sesión cerrada exitosamente. Hasta luego!");
  //       logout();

  //       navigate("/login");
  //     }
  //   });
  // };
  return (
      <nav className="navbar bg-body-tertiary fixed-bottom border-top mt-5" id="mobileFirst">
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
                  to="/"
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
                  to="/"
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
  
  );
};

export default NavBarMobile;
