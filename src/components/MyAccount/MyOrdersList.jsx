import { useSession } from "../../stores/useSessions";
import MyOrdersRow from "./MyOrdersRow";

const MyOrdersList = (props) => {
  const { orders } = props;

  const { user } = useSession();
  const userIdForOrders = user.id;

  const filteredOrders = orders.filter(
    (order) => order.userId === userIdForOrders,
  );

  return (
    <>
      <ul className="list-group list-group-flush">
        {filteredOrders.length === 0 ? <p>No orders registered </p> : null}
        {filteredOrders.map((order) => {
          return <MyOrdersRow key={order.id} order={order} />;
        })}
      </ul>
    </>
  );
};

export default MyOrdersList;
