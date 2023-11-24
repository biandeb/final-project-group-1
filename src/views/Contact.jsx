import { Link } from "react-router-dom";

import FormContact from "./FormContact.jsx";
import GoogleMap from "../helpers/GoogleMap.jsx";

import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="back-photo pt-5">
      <div className="container form-content">
        <p className="text-center first-title">
          <span className="part-text">CONTACT</span> US
        </p>
        <p className="text-center second-title">
          Do not hesitate to contact us if you have questions or suggestions.
        </p>
        <div className="text-center third-title">
          <p>
            If you want to work with us,
            <Link to="/error" className="link-contact fw-bold">
              {" "}
              apply here.
            </Link>
          </p>
        </div>
        <FormContact />
      </div>
      <div className="container round-5 ">

      <GoogleMap />
      </div>
    </section>
  );
};

export default Contact;
