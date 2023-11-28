import grillImage from "../img/grill3.jpg";
import bianca from "../img/deblinger-bianca.jpeg";
import juliana from "../img/elias-juliana.jpeg";
import martin from "../img/cardozo-martin.jpeg";

import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <section className="text-center">
        <article>
          {/* Primera sección */}
          <img src={grillImage} alt="Grill meat" className="grill-image" />
          <div className="position-absolute first-text">
            <p className="text-light flame-title">
              FLAME GRILLED, JUST TASTES BETTER!
            </p>
            <p className="text-light mt-5 grill-title">WE GRILL • YOU CHILL</p>
          </div>
        </article>
      </section>
      {/* Segunda sección */}
      <article className="text-center container">
        <p className="grill-subtitle">GRILL &amp; THRILL
        <br />
        RESTAURANT</p>
        <br />
        <hr />
        <p className="grill-text fw-bold">Value, quality, and good times are what Grill & Thrill strives for. We prepare, cook, and serve in our unique Wild Way and sincerely hope you enjoy your time with us as much as we appreciate yours. Flame-grilled Steaks, Ribs, and Chicken are our specialities but we also do amazing Burguers, Pizza, and much more. We realise that not everyone is a carnivore, so we continue to expand our menu to suit all. We only use the very best free-range, grass-fed New Tucson Burguer available. We carefully selected our Steaks and ensure they are aged until perfect, our Burguers cook overnight and our Chicken marinade for at least 24 hours before being flame-grilled to perfection. Eat delicious food. Grab a drink. But most of all, relax! And please enjoy our little corner of America in Argentina. We thank you from the bottom of our hearts for your continued support.</p>
      </article>
      {/* Tercera sección */}
      <article>
        <div className="back-three">
            <p className="text-members text-center">MEMBERS</p>
            <hr className="hr-members" />
            <br />
            <div className="text-center members">
                <div className="first-member-name">
                <img src={bianca} className="first-member" alt="Bianca is a member from grill and thrill's restaurant" />
                </div>
                <div className="second-member-name">
                <img src={juliana} className="second-member" alt="Juliana is a member from grill and thrill's restaurant" />
                </div>
                <div className="third-member-name">
                <img src={martin} className="third-member" alt="Martin is a member from grill and thrill's restaurant" />
                </div>
            </div>
        </div>
      </article>
    </>
  );
};
export default AboutUs;
