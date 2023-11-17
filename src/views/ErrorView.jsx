import { Link } from 'react-router-dom';

const ErrorView = () => {
  return (
    <>
      <h3 className='text-center mt-5'>Oh oh. We cant find this page!</h3>
      <p className='text-center'>
      Please check the URL or try again
      </p>
      <div className='text-center'>
        <Link to={-1} className='btn btn-dark mt-3'>
          Back
        </Link>
      </div>
    </>
  );
};
export default ErrorView;