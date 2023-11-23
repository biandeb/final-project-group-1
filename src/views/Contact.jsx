import { Link } from "react-router-dom";

import FormContact from "./FormContact.jsx";

import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="back-photo">
      <div className="container w-50 form-content">
        <p className="text-center fs-1 title">CONTACT US</p>
        <p className="text-center second-title">
          Do not hesitate to contact us if you have questions or suggestions.
        </p>
        <div className="text-center third-title">
          <p>
            If you want to work with us,
            <Link to="/error" className="mt-3 link-contact fw-bold">
              {" "}
              apply here.
            </Link>
          </p>
        </div>
        <FormContact />
      </div>
    </div>
  );
};

export default Contact;
