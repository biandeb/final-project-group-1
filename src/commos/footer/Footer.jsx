import { Link } from "react-router-dom";

import appStoreImg from "../../img/app-store.png";
import googlePlayImg from "../../img/google-play.png";
import awardOne from "../../img/award-one.png";
import awardTwo from "../../img/award-two.png";
import awardThree from "../../img/award-three.png";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid" id="footer-page">
        <section className="row footer-section">
          <div className="col-4 col-md-6 col-sm-12">
            <p className="footer-title mt-5">
              Grill <strong>&amp; Thrill</strong>
            </p>
            <img
              src={googlePlayImg}
              className="img-google"
              alt="Get it on google play"
            />
            <img
              src={appStoreImg}
              className="img-apple"
              alt="Get it on app store"
            />
          </div>
          <div className="col-4 col-md-6 col-sm-12">
            <ul className="list-footer">
              <li>
                <Link
                  to="/contact-us"
                  className="mb-2 text-decoration-none d-block text-dark"
                >
                  Contact us
                </Link>
                <Link
                  to="/error"
                  className="mb-2 text-decoration-none d-block text-dark"
                >
                  Faqs &amp; Feedback
                </Link>
                <Link
                  to="/error"
                  className="mb-2 text-decoration-none d-block text-dark"
                >
                  Promotions
                </Link>
                <Link
                  to="/about-us"
                  className="mb-2 text-decoration-none d-block text-dark"
                >
                  About us
                </Link>
                <Link
                  to="/error"
                  className="mb-2 text-decoration-none d-block text-dark"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <hr />
        <section className="container text-center mt-4 mb-4">
          <img
            src={awardOne}
            className="award-one me-5"
            alt="First achievement reached by the restaurant"
          />
          <img
            src={awardTwo}
            className="award-two me-5"
            alt="Second achievement reached by the restaurant"
          />
          <img
            src={awardThree}
            className="award-three me-1"
            alt="Third achievement reached by the restaurant"
          />
        </section>
        <hr />
        <section className="container only-icons">
          <i className="bi bi-facebook fs-5 me-3"></i>
          <i className="bi bi-instagram fs-5 me-3"></i>
          <i className="bi bi-twitter fs-5"></i>
        </section>
        <p className="text-end">
          &copy; 2015 - 2023 Grill &amp; Thrill Restaurant
        </p>
      </footer>
    </>
  );
};
export default Footer;
