import grillImage from '../img/grill2.jpg';
import grillMeat from '../img/meat.jpg';

import "../styles/aboutUs.css";

const AboutUs = () => {
    return (
        <section className="text-center position-relative">
        <article>
        <img
            src={grillImage}
            alt='Grill meat'
            className='w-100 '
        />
        <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="text-light mt-5">FLAME GRILLED, JUST TASTES BETTER!</h1>
        <h2 className="text-light mt-5">WE GRILL • YOU CHILL</h2>
        </div>
        </article>
        <article className='container'>
            <div className='row'>
        <div className="text-center col-6 background-container">
        <div className="text-light position-absolute top-15 start-15 translate-middle">
            <h3 className='fw-bold'>Grill & Thrill are wild about food!</h3>
            <p className='fw-bold p-one'>Value, quality, and good times are what Grill & Thrill strives for. We prepare, cook, and serve in our unique Wild Way and sincerely hope you enjoy your time with us as much as we appreciate yours. Flame-grilled Steaks, Ribs, and Chicken are our specialities but we also do amazing Calamari, Pizza, and much more. We realise that not everyone is a carnivore, so we continue to expand our menu to suit all. We only use the very best free-range, grass-fed New Zealand Beef available, We carefully selected our Steaks and ensure they are aged until perfect, our Ribs cook overnight and our Chicken marinade for at least 24 hours before being flame-grilled to perfection. Eat delicious food. Grab a drink. But most of all, relax! And please enjoy our little corner of Africa in Auckland. We thank you from the bottom of our hearts for your continued support.</p>
            </div>
        </div>
        <div className="text-center col-6">
        <img
            src={grillMeat}
            alt='Grill meat'
            className='w-100'
        />
        </div>
        </div>
        </article>
      </section>
      )
}
export default AboutUs;