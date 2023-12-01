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
        <div className="alert alert-danger">
          An error occurred while getting the products
        </div>
      </>
    );
  }

  return (
    <>{isLoading ? <h3>Loading...</h3> : <MyOrdersList orders={orders} />}</>
  );
};

export default MyOrders;
