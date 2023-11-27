import Checkout from "../components/UserView/Checkout/Checkout";

import "../components/UserView/userStyles.css"
import { useOrder } from "../stores/useOrder";

const CheckoutView = () => {
  const{ clearProductOrder} = useOrder()
  return (
    <>
      <Checkout />
      <button className="ms-2" onClick={clearProductOrder}>Clear order</button>
    </>
  );
};

export default CheckoutView;
