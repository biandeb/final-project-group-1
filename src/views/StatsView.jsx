import { useQuery } from "@tanstack/react-query";

import Statistics from "../components/Statistics/Statistics";

import { getOrdersFn } from "../api/orders";

const StatsView = () => {
  const {
    data: orders,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["orders"], queryFn: getOrdersFn });

  if (isError) {
    return (
      <>
        <div className="alert alert-danger">
          An error occurred while getting the orders
        </div>
      </>
    );
  }

  return (
    <div className="container-fluid">
      <h3>Grill & Thrill Analytics</h3>
      <hr />
      <>{isLoading ? <h3>Loading...</h3> : <Statistics orders={orders} />}</>
    </div>
  );
};

export default StatsView;
