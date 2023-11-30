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

  const userId = user.id

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
    const newOrder = {
      productsordered: productsOrdered,
      tablenumber: tablenumberForOrder,
      userId: userId,
    };
    postOrders(newOrder);
    clearProductOrder();
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-end">
        <NavLink
          className={(isActive) => (isActive ? "nav-link active" : "nav-link")}
          aria-current="page"
          to="/order"
        >
          <i className="bi bi-x-lg"></i>
        </NavLink>
      </div>
      <h5>Order</h5>
      <TableNumber />
      <CheckoutList productsOrdered={productsOrdered} />
      <Total />
      <div className="checkout-btn-container  text-light">
        <p onClick={handleOrder}>Order</p>
      </div>
    </div>
  );
};

export default Checkout;
