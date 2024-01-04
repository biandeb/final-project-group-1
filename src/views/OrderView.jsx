import { useQuery } from "@tanstack/react-query";
import { getProductsFn } from "../api/products";
import { NavLink } from "react-router-dom";
import { useOrder } from "../stores/useOrder";

import ProductsGallery from "../components/UserView/Products/ProductsGallery";
import TableNumberInput from "../components/UserView/TableNumber/TableNumberInput";

import "../components/UserView/userStyles.css";
import { useSession } from "../stores/useSessions";
import LogoutBtn from "../commons/LogoutBtn";

const OrderView = () => {
  const { isLoggedIn } = useSession();
  const { productsOrdered } = useOrder();

  const orderQuantity = productsOrdered.length;

  const {
    data: products,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["products"], queryFn: getProductsFn });

  if (isError) {
    return (
      <>
        <div className="m-5">
          <TableNumberInput />
          <div className="alert alert-danger">
            An error occurred while getting the products.
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="pt-5 order-container">
        <div className="d-flex justify-content-end me-3 mb-5">
          <LogoutBtn />
        </div>

        <TableNumberInput />
        <hr />
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <ProductsGallery products={products} />
        )}
        <div className="checkout-btn-container p-4 text-light d-flex justify-content-center">
          <NavLink
            className={(isActive) =>
              isActive ? "nav-link active" : "nav-link"
            }
            aria-current="page"
            to="/checkout"
          >
            <span className="p-4">Checkout</span>
          </NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-bag order-icon ms-2"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
          </svg>
          {orderQuantity === 0 ? (
            <span></span>
          ) : (
            <span className="widget-span">{orderQuantity}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderView;
