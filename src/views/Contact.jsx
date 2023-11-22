import { Link } from "react-router-dom";

import "../styles/contact.css";


const Contact = () => {
    return (
        <>
          <p className='text-center fs-1 title'>CONTACT US</p>
          <p className='text-center'>
          Do not hesitate to contact us if you have questions or suggestions.
          </p>
          <div className='text-center'>
            <p>If you want to work with us,
                <Link to='/error' className='mt-3'> apply here.
                    </Link>
                    </p>
                    </div>
                    </>
                    );
                };

export default Contact;