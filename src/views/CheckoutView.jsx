import LogoutBtn from "../commons/LogoutBtn";
import Checkout from "../components/UserView/Checkout/Checkout";

import "../components/UserView/userStyles.css";

const CheckoutView = () => {
  return (
    <>
      <div className="d-flex justify-content-end me-3 mb-5">
        <LogoutBtn />
      </div>
      <Checkout />
    </>
  );
};

export default CheckoutView;
