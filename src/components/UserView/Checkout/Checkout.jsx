import "../userStyles.css";
import "../../../index.css";

import CheckoutList from "./CheckoutList";
import Total from "./Total";
import TableNumber from "../TableNumber/TableNumber";

import { useOrder } from "../../../stores/useOrder";
import { postOrderFn } from "../../../api/orders";
import { useSession } from "../../../stores/useSessions";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../Button/Button";

const Checkout = () => {
  const { productsOrdered, clearProductOrder } = useOrder();
  const { user } = useSession();

  if (!user || !user.id) {
   
    return Swal.showLoading();
  }

  const userId = user.id;

  const navigate = useNavigate();

  const { mutate: postOrders } = useMutation({
    mutationFn: postOrderFn,
    onSuccess: () => {
      toast.success("Your order was succesfully placed.");
      setTimeout(() => {
        navigate("/orderstatus");
      }, 2000);
    },

    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  const handleOrder = () => {
    if (productsOrdered.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your order is empty",
      });
    } else {
      Swal.fire({
        title: "Order",
        text: "¿Would you like to confirm the order?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, confirm",
        cancelButtonText: "Cancel",
      }).then((res) => {
        if (res.isConfirmed) {
          const products = productsOrdered.map((product) => ({
            ...product,
            id: undefined,
          }));

          const newOrder = {
            productsOrdered: products,
            userId: userId,
          };

          postOrders(newOrder);
          clearProductOrder();
        }
      });
    }
  };

  return (
    <div className="checkout-container pt-5">
      <div className="d-flex justify-content-end">
        <NavLink
          className={(isActive) => (isActive ? "nav-link active" : "nav-link")}
          aria-current="page"
          to="/order"
        >
          <div className="d-flex gap-3 pe-3">
            <i className="bi bi-arrow-left"></i>
            <h5>Back to menu</h5>
          </div>
        </NavLink>
      </div>
      <h5 className="ms-5">Order</h5>
      <TableNumber />
      <CheckoutList productsOrdered={productsOrdered} />
      <Total />
      <Button
        title={"Clear Order"}
        onClick={clearProductOrder}
        className={"bg-warning text-dark m-4 p-2 fs-5"}
      ></Button>
      <div className="order-btn-container  text-light">
        <Button title={"Confirm order"} onClick={handleOrder} className={"w-100"}></Button>
      </div>
    </div>
  );
};

export default Checkout;
