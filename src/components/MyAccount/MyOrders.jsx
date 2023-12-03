import { useQuery } from "@tanstack/react-query";
import { getOrdersFn } from "../../api/orders";
import MyOrdersList from "./MyOrdersList";

const MyOrders = () => {
  const {
    data: orders,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["orders"], queryFn: getOrdersFn });

  if (isError) {
    return (
      <>
        <div className="alert alert-danger mt-3">
          An error occurred while getting the orders
        </div>
      </>
    );
  }

  console.log(orders);
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return <>{orders && <MyOrdersList orders={orders.data} />}</>;
};

export default MyOrders;
