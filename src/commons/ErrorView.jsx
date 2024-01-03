import { Link } from "react-router-dom";

import errorPhoto from "../img/error-photo.png";

import "../styles/error.css";

const ErrorView = () => {
  return (
    <section>
      <div className="text-center">
        <img
          src={errorPhoto}
          alt="Photo error 404 not found"
          className="photo-error container"
        />
        <h3 className="text-center mt-5">Oh oh. We cant find this page!</h3>
        <p className="text-center fs-5">Please check the URL or try again</p>
        <div className="text-center">
          <Link to={-1} className="btn btn-dark mt-2">
            Back
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ErrorView;
