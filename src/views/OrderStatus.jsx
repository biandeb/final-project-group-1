import { NavLink } from "react-router-dom";

const OrderStatus = () => {
  return (
    <>
      <div className="container-fluid fw-bolder p-5 d-flex flex-column justify-content-center text-center order-status bg-success mt-5">
        <h3 className="m-5">SUCCESSFUL ORDER</h3>
        <i className="bi bi-check-circle-fill fs-5"></i>
        <h5>Your order has been placed</h5>
        <hr />
        <p>You will receive an email confirmation shortly</p>
        <div className="mt-5">
          <h5>Your order will be ready in:</h5>
          <h4>20 min.</h4>
        </div>
      </div>
      <div className="p-4 bg-warning">
        <NavLink
          className={(isActive) => (isActive ? "nav-link active" : "nav-link")}
          aria-current="page"
          to="/order"
        >
          <h5 className="text-center">Make a new order</h5>
        </NavLink>
      </div>
    </>
  );
};

export default OrderStatus;
