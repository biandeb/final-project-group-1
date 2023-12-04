import { useEffect, useState } from "react";

import { useOrder } from "../../../stores/useOrder";
import Counter from "../Products/Counter";

import "../userStyles.css";

const CheckoutCard = (props) => {
  const { product } = props;

  const productId = product.id;
  const { setAmount } = useOrder();

  const [count, setCount] = useState(product.amount);

  useEffect(() => {
    setAmount(productId, count);
  }, [count, setAmount]);

  const context = "CheckoutCard";

  return (
    <article className="border-bottom border-secondary p-4 checkout-card col-12 m-2">
      <div className="d-flex justify-content-between">
        <p className="fs-2">{product.name}</p>
        <p>${product.price}</p>
      </div>

      <div className="d-flex justify-content-between">
        <p>Subtotal: ${product.price * product.amount}</p>
        <Counter
          count={count}
          setCount={setCount}
          context={context}
          product={product}
          productId={productId}
        />
      </div>
    </article>
  );
};

export default CheckoutCard;
