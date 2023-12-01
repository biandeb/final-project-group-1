import { Link } from "react-router-dom";

import "../../styles/homeMobile.css";

import logoBlack from '../../img/logo-fondo-negro.png'

const HomeMobile = () => {
  return (
      <section className="background-photo" id="home-mobile">
        <div className="btn-container vh-100">
          <img src={logoBlack} alt="logo Grill and Thrill" className="logo-black" />
          <Link to="/login" className="btn btn-continue">
            Continue
          </Link>
        </div>
      </section>
  );
};
export default HomeMobile;
