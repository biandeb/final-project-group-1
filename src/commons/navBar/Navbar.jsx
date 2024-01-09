import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";

import { useSession } from "../../stores/useSessions";

import "./navbar.css";
import Button from "../../components/Button/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout, user } = useSession();
  const handleLogout = () => {
    Swal.fire({
      title: "Attention",
      text: "You are about to log out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        toast.success("Session closed successfully. See you later!");
        logout();

        navigate("/login");
      }
    });
  };

  return (
    <header className="header" id="desktop">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom z-3">
        <div className="container">
          <Link to="/">
            <img
              src="https://i.postimg.cc/VvvFvjYT/logo.png"
              alt="logo of restaurant"
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
              {!user?.isAdmin && (
                <li>
                  <div className="text-center mx-4">
                    <NavLink
                      className="nav-link text-dark"
                      activeClassName="activeLink"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </div>
                </li>
              )}
              {!user?.isAdmin && (
                <li>
                  <div className="text-center ms-2 mx-4">
                    <NavLink
                      className={`nav-link text-dark  ${({ isActive }) =>
                        isActive ? "active" : ""}`}
                      aria-current="page"
                      to="/order"
                    >
                      Menu
                    </NavLink>
                  </div>
                </li>
              )}
              {!user?.isAdmin && isLoggedIn && (
                <li>
                  <div className="text-center ms-2 mx-4 ">
                    <NavLink
                      className={`nav-link text-dark  ${({ isActive }) =>
                        isActive ? "active" : ""}`}
                      aria-current="page"
                      to="/checkout"
                    >
                      Orders
                    </NavLink>
                  </div>
                </li>
              )}
              {!user?.isAdmin && isLoggedIn && (
                <li>
                  <div className="text-center ms-2 mx-4 ">
                    <NavLink
                      className={`nav-link text-dark ${({ isActive }) =>
                        isActive ? "active" : ""}`}
                      aria-current="page"
                      to="/myaccount"
                    >
                      Profile
                    </NavLink>
                  </div>
                </li>
              )}
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
              {user?.isAdmin && (
                <li>
                  <div className="text-center ms-2 mx-4 ">
                    <NavLink
                      className={`nav-link text-dark  ${({ isActive }) =>
                        isActive ? "active" : ""}`}
                      aria-current="page"
                      to="/stats"
                    >
                      Analytics
                    </NavLink>
                  </div>
                </li>
              )}
              {!user?.isAdmin && (
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
                </li>
              )}
              {!user?.isAdmin && (
                <li>
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
                </li>
              )}
            </ul>
            {!isLoggedIn ? (
              <Link to="/login">
                <Button title={"Sign In"}></Button>
              </Link>
            ) : (
              <Button title={"Log Out"} onClick={handleLogout}></Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
