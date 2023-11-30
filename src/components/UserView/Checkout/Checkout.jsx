import "../userStyles.css";
import "../../../index.css";

import CheckoutList from "./CheckoutList";
import Total from "./Total";
import TableNumber from "../TableNumber/TableNumber";

import { useOrder } from "../../../stores/useOrder";
import { useTable } from "../../../stores/useTable";
import { postOrderFn } from "../../../api/orders";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
import { useSession } from "../../../stores/useSessions";

const Checkout = () => {
  //ZUSTAND
  const { productsOrdered, clearProductOrder } = useOrder();
  const { tablenumberForOrder } = useTable();
  const { user } = useSession();

  // const{ clearProductOrder} = useOrder()

  const userId = user.id;

  //RRD
  const navigate = useNavigate();

  //TQUERY

  //POST
  const { mutate: postOrders } = useMutation({
    mutationFn: postOrderFn,
    //mensaje de exito
    onSuccess: () => {
      // Swal.close();
      toast.success("Your order was succesfully placed");
      setTimeout(() => {
        //navegar a pagina de estado de pedido
        navigate("/orderstatus");
      }, 2000);
    },

    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  const handleOrder = () => {
    Swal.fire({
      title: "Order",
      text: "Would you like to confirm the order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, confirm",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        const newOrder = {
          productsordered: productsOrdered,
          tablenumber: tablenumberForOrder,
          userId: userId,
        };

        postOrders(newOrder);
        clearProductOrder();
      }
    });
  };

  return (
    <div className="pb-5 pt-5 mb-5">
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
      <button className=" m-4 p-2 fs-5 bg-warning" onClick={clearProductOrder}>Clear order</button>
      <div className="order-btn-container  text-light">
        <button className="btn-order" onClick={handleOrder}>
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
