import "./navbar.css";
const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar bg-body-tertiary fixed-bottom">
        <div className="container-fluid">
          <ul className=" mb-2 mb-lg-0 d-flex justify-content-center">
            <li>
              <div className="text-center">
                <i className="bi bi-house fs-2 "></i>
                <a className="nav-link  active" aria-current="page" href="#">
                  Home
                </a>
              </div>
            </li>
            <li>
            <div className="text-center ms-5">
            <i className="bi bi-columns-gap fs-2" ></i>
                <a className="nav-link   active" aria-current="page" href="#">
                  Menu
                </a>
              </div>
            </li>
            <li >
            <div className="text-center ms-5">
            <i className="bi bi-building-fill-down fs-2" ></i>
                <a className="nav-link   active" aria-current="page" href="#">
                  Pedidos
                </a>
              </div>
            </li>
            <li>
            <div className="text-center ms-5">
            <i className="bi bi-person-circle fs-2" ></i>
                <a className="nav-link   active" aria-current="page" href="#">
                  Perfil
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
