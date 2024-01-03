import Navbar from "./Navbar";
import NavBarMobile from "./NavBarMobile";
import "./navbar.css";


const NavBarMain = () => {
  return (
    <header className="header text-center">
      <Navbar></Navbar>
      <NavBarMobile></NavBarMobile>
    </header>
  );
};

export default NavBarMain;
