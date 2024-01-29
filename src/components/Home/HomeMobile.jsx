import { Link } from "react-router-dom";

import "../../styles/homeMobile.css";

import logoBlack from "../../img/logo-fondo-negro.png";
import { useSession } from "../../stores/useSessions";

const HomeMobile = () => {
  const { isLoggedIn } = useSession();
  return (
    <section className="background-photo" id="home-mobile">
      <div className="btn-container">
        <img
          src={logoBlack}
          alt="logo Grill and Thrill"
          className="logo-black"
        />
        {isLoggedIn ? <Link to="/order" className="btn btn-continue">
          Continue
        </Link> : 
        <Link to="/login" className="btn btn-continue">
          Continue
        </Link>
        }
      </div>
    </section>
  );
};
export default HomeMobile;
