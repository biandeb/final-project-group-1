import "../../styles/homeDesktop.css";

import { Link } from "react-router-dom";

import bannerOne from "../../img/first-banner.png";
import bannerTwo from "../../img/second-banner.png";
import bannerThree from "../../img/third-banner.png";
import firstCateg from "../../img/first-categ.jpg";
import secondCateg from "../../img/second-categ.jpg";
import thirdCateg from "../../img/third-categ.jpg";
import cellphonePhoto from "../../img/cellphone.png";
import googlePlay from "../../img/google-play.png";
import appStore from "../../img/app-store.png";

const HomeDesktop = () => {
  return (
    <>
      <section id="home-desktop">
        <article>
          <div
            id="carouselExampleInterval"
            className="carousel slide carousel-photos"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="7000">
                <img src={bannerOne} className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item" data-bs-interval="7000">
                <img src={bannerTwo} className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item" data-bs-interval="7000">
                <img
                  src={bannerThree}
                  className="d-block w-100"
                  alt="..."
                ></img>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </article>
        <article className="container text-center section-categories">
          <div className="row">
            <div className="col-4">
              <div className="card">
                <img
                  src={firstCateg}
                  alt="Grilled marinated meat"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold title-cards">
                    Grilled marinated meat
                  </h5>
                  <p className="card-text text-cards">
                    Succulent sirloin, meticulously marinated in a blend of
                    savory herbs and spices, imparting a symphony of flavors
                  </p>
                  <Link to="/menu" className="btn btn-order">
                    Order now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img
                  src={secondCateg}
                  className="card-img-top w-100"
                  alt="Premium burguer"
                ></img>
                <div className="card-body">
                  <h5 className="card-title fw-bold title-cards">
                    Premium burguer
                  </h5>
                  <p className="card-text text-cards">
                    Experience the pinnacle of flavor with our premium burger,
                    elevated by the bold kick of house-made spicy hot sauce
                  </p>
                  <Link to="/menu" className="btn btn-order">
                    Order now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img
                  src={thirdCateg}
                  className="card-img-top"
                  alt="Grilled chicken"
                ></img>
                <div className="card-body">
                  <h5 className="card-title fw-bold title-cards">
                    Grilled chicken
                  </h5>
                  <p className="card-text text-cards">
                    Savor the succulence of grilled chicken, heightened by
                    fragrant thyme and zesty lemon, for a truly flavorful
                    delight
                  </p>
                  <Link to="/menu" className="btn btn-order">
                    Order now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="bg-article p-3">
          <div className="container text-center">
            <div className="row">
              <div className="col-6">
                <img
                  src={cellphonePhoto}
                  alt="cellphone with Grill and Thrills app"
                  className="image-mobile"
                />
              </div>
              <div className="col-6">
                <img
                  src={appStore}
                  alt="download on app store"
                  className="iphone-download"
                />
                <img
                  src={googlePlay}
                  alt="download on google play"
                  className="google-download"
                />
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
export default HomeDesktop;
