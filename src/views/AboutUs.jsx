import grillImage from '../img/grill2.jpg';

import "../styles/aboutUs.css";

const AboutUs = () => {
    return (
        <section className="text-center position-relative m-0">
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
        <hr className="text-light" />
        <div className='bg-light rounded p-4 '>
          <article className='row'>
            <div className='col-12 col-md-6 mb-2'>
            {/* <LoginForm /> */}
            </div>
            {/* <div className='col-12 col-md-6'>
              <img
                src='https://i.postimg.cc/tgRz5YRm/la-cocinita-de-Eze.jpg'
                alt='La cocinita de Ezequielito Amin'
                className='w-75 rounded'
              />
            </div> */}
          </article>
        </div>
      </section>
      )
}
export default AboutUs;