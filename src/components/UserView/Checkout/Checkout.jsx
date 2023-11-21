import '../userStyles.css'
import '../../../index.css'

import CheckoutList from './CheckoutList';
import Total from './Total';

const Checkout = () => {
  return (
    <div className='container-fluid'>
      <h5>Order</h5>
      <p>Table 9</p>
      <CheckoutList/>
      <Total/>
      <button className="btn w-100 order-btn text-light mt-4">Order</button>
    </div>
  );
};

export default Checkout;
