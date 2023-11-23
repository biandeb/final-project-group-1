import grillImage from "../img/grill3.jpg";

import "../styles/aboutUs.css";

const AboutUs = () => {
  return (
    <>
      <section className="text-center">
        <article>
          {/* Primera sección */}
          <img src={grillImage} alt="Grill meat" className="grill-image" />
          <div className="position-absolute first-text">
            <h1 className="text-light">
              FLAME GRILLED, JUST TASTES BETTER!
            </h1>
            <h2 className="text-light mt-5">WE GRILL • YOU CHILL</h2>
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
    </>
  );
};
export default AboutUs;
