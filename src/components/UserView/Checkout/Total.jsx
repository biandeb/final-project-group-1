import { useOrder } from "../../../stores/useOrder";

const Total = () => {
  const { productsOrdered } = useOrder();

  const totalAmount = productsOrdered.reduce(
    (total, product) => total + parseInt(product.price * product.amount),
    0,
  );

  return (
    <div className="mt-3 pe-3">
      <h5 className="text-end">Total: ${totalAmount}</h5>
    </div>
  );
};

export default Total;
