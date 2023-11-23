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
            <h1 className="text-light mt-5">
              FLAME GRILLED, JUST TASTES BETTER!
            </h1>
            <h2 className="text-light mt-5">WE GRILL • YOU CHILL</h2>
          </div>
        </article>
      </section>
      {/* Segunda sección */}
      <article>
        <p></p>
      </article>
    </>
  );
};
export default AboutUs;
