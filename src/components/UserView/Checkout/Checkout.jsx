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

const Checkout = () => {
  //ZUSTAND
  const { productsOrdered , clearProductOrder} = useOrder();
  const { tablenumberForOrder } = useTable();

  //TQUERY

      //POST
  const {mutate: postOrders} = useMutation({
    mutationFn: postOrderFn,
    //mensaje de exito
    onSuccess: ()=>{
        // Swal.close();
        toast.success('Your order was succesfully placed');
    },

    onError: (e)=>{
        Swal.close();
        toast.error(e.message)
    }
})

  const handleOrder = () =>{
      const newOrder = {
    productsordered: productsOrdered,
    tablenumber: tablenumberForOrder,
  };
console.log(newOrder)
    postOrders(newOrder);
    clearProductOrder();
}

    return (
      <div className="container-fluid">
        <h5>Order</h5>
        <TableNumber  />
        <CheckoutList productsOrdered={productsOrdered} />
        <Total />
        <button className="btn w-100 order-btn text-light mt-4" onClick={handleOrder}>Order</button>
      </div>
    );
  };




export default Checkout;
