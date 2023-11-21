import '../userStyles.css'
import '../../../index.css'

import CheckoutList from './CheckoutList';
import Total from './Total';
import { useOrder } from '../../../stores/useOrder';

const Checkout = () => {

  const {productsOrdered} = useOrder();

  return (
    <div className='container-fluid'>
      <h5>Order</h5>
      <p>Table 9</p>
      <CheckoutList productsOrdered={productsOrdered}/>
      <Total/>
      <button className="btn w-100 order-btn text-light mt-4">Order</button>
    </div>
  );
};

export default Checkout;
