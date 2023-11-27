import { Link, NavLink, useNavigate } from "react-router-dom";

import "./navbar.css";
import { useSession } from "../../stores/useSessions";
import { toast } from "sonner";
import Swal from "sweetalert2";

const NavBarMobile = () => {
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
    <header className="header" id="mobileFirst">
      <nav className="navbar bg-body-tertiary fixed-bottom border-top">
        <ul className="nav-links mx-auto">
        { !user?.isAdmin &&(<li>
            <div className="text-center prueba">
              <NavLink
                className={`nav-link text-secondary ${({ isActive }) =>
                  isActive ? "active" : ""}`}
                aria-current="page"
                to="/Home"
              >
                <i className="bi bi-house fs-2 text-secondary "></i>
              </NavLink>
            </div>
          </li>)}
          { !user?.isAdmin &&( <li>
            <div className="text-center ms-5">
              <NavLink>
               
              </NavLink>
              <NavLink
                className={`nav-link text-secondary ${({ isActive }) =>
                  isActive ? "active" : " "}`}
                aria-current="page"
                to="/"
              >
                <i className="bi bi-columns-gap fs-2 text-secondary"></i>
              </NavLink>
            </div>
          </li>)}
          {isLoggedIn && !user?.isAdmin &&( <li>
            <div className="text-center ms-5  ">
              <NavLink>
                
              </NavLink>
              <NavLink
                className={`nav-link text-secondary  ${({ isActive }) =>
                  isActive ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
               <i className="bi bi-bag-fill fs-2 text-secondary"></i>
              </NavLink>
            </div>
          </li>)}
          {isLoggedIn &&  !user?.isAdmin &&( <li>
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
          </li>)}
          <li className="my-2">
            {!isLoggedIn ? (
              
              <Link to="/login">
                <div className="text-center ms-5">

                <i className="bi bi-box-arrow-right text-dark fs-2"></i>
                </div>
              </Link>
            ) : (
              <div className="text-center ms-5 mb-1">
                <button
                className="btn btn-danger"
                type="button"
                onClick={handleLogout}
              >
                <i className="bi bi-x-octagon mb-1"></i>
              </button>
              </div>
              
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBarMobile;
