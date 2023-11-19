import { Link } from 'react-router-dom';

import errorPhoto from '../img/error-photo.png'

const ErrorView = () => {
  return (
    <>
    <section className='text-center'>
    <img 
    src={errorPhoto}
    alt='Photo error 404'
    className='photo-error'
    />
      <h3 className='text-center mt-5'>Oh oh. We cant find this page!</h3>
      <p className='text-center'>
      Please check the URL or try again
      </p>
      <div className='text-center'>
        <Link to={-1} className='btn btn-dark mt-3'>
          Back
        </Link>
      </div>
      </section>
    </>
  );
};
export default ErrorView;