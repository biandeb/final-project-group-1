import grillImage from '../img/grill2.jpg';
import grillMeat from '../img/meat.jpg';
import grillCook from '../img/meat-cook.jpg';

import "../styles/aboutUs.css";

const AboutUs = () => {
    return (
        <section className="text-center">
        <article>
            {/* Primera sección */}
        <img
            src={grillImage}
            alt='Grill meat'
            className='w-100 '
        />
        <div className="position-absolute first-text">
        <h1 className="text-light mt-5">FLAME GRILLED, JUST TASTES BETTER!</h1>
        <h2 className="text-light mt-5">WE GRILL • YOU CHILL</h2>
        </div>
        </article>
        {/* Segunda sección */}

        <article className='container'>
            <div className='row'>
        <div className="text-center col-lg-6 col-md-6 col-sm-12 background-container">
        <div className="div-text">
            <h3 className='fw-bold'>Grill & Thrill ARE WILD ABOUT FOOD</h3>
            <p className='text-light fw-bold p-one'>Value, quality, and good times are what Grill & Thrill strives for. We prepare, cook, and serve in our unique Wild Way and sincerely hope you enjoy your time with us as much as we appreciate yours. Flame-grilled Steaks, Ribs, and Chicken are our specialities but we also do amazing Calamari, Pizza, and much more. We realise that not everyone is a carnivore, so we continue to expand our menu to suit all. We only use the very best free-range, grass-fed Argentina Beef available. We carefully selected our Steaks and ensure they are aged until perfect, our Ribs cook overnight and our Chicken marinade for at least 24 hours before being flame-grilled to perfection. Eat delicious food. Grab a drink. But most of all, relax! And please enjoy our little corner of Argentina, Tucuman. We thank you from the bottom of our hearts for your continued support.</p>
            </div>
        </div>
        <div className="text-center col-lg-6 col-md-6 col-sm-12">
        <img
            src={grillMeat}
            alt='Grill meat'
            className='w-100'
        />
        </div>
        </div>
        </article>
        {/* Tercera sección */}
        <article className='container'>
            <div className='row'>
        <div className="text-center col-6">
        <img
            src={grillCook}
            alt='Grill meat cook'
            className='w-100'
        />
        </div>
        <div className="text-center col-6 background-container">
        <div className="div-text container">
            <h4 className='fw-bold p-open'>OPENING HOURS</h4>
            <div className='p-hours'>
            <p className='text-light fw-bold'>Monday- 05.00pm-9.30pm</p>
            <p className='text-light fw-bold'>Tuesday- 05.00pm-9.30pm</p>
            <p className='text-light fw-bold'>Wednesday- 05.00pm-9.30pm</p>
            <p className='text-light fw-bold'>Thursday- 01.00pm-9.00pm</p>
            <p className='text-light fw-bold'>Friday- 08.00am-9.00pm</p>
            <p className='text-light fw-bold'>Saturday- 08.00am-9.00pm</p>
            </div>
            </div>
        </div>
        </div>
        </article>
      </section>
      )
}
export default AboutUs;