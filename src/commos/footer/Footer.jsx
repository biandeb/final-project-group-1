import { Link } from "react-router-dom";

import appStoreImg from "../../img/app-store.png";
import googlePlayImg from "../../img/google-play.png";

import "./footer.css";


const Footer = () => {
  return (
    <>
    <footer className="container-fluid mt-5">
        <article className="row footer-section">
        <div className="col-6 col-md-6 col-sm-12">
        <p className="footer-title">Grill <strong>&amp; Thrill</strong></p>
        <img src={googlePlayImg} className='img-google' alt="Get it on google play" />
        <img src={appStoreImg} className='img-apple' alt="Get it on app store" />
        </div>
        <div className="col-6 col-md-6 col-sm-12">
          <ul className="list-footer">
            <li>
            <Link to='/contact-us' className='mb-2 text-decoration-none d-block text-dark'>Contact us</Link>
            <Link to='/error' className='mb-2 text-decoration-none d-block text-dark'>Faqs &amp; Feedback</Link>
            <Link to='/error' className='mb-2 text-decoration-none d-block text-dark'>Promotions</Link>
            <Link to='/about-us' className='mb-2 text-decoration-none d-block text-dark'>About us</Link>
            <Link to='/error' className='mb-2 text-decoration-none d-block text-dark'>Privacy Policy</Link>
            </li>
            </ul>
        </div>
        </article>
    </footer>
  </>
  )
}
export default Footer;