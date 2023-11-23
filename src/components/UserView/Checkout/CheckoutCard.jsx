import { useState } from "react";
import Counter from "../Products/Counter";
import "../userStyles.css";


const CheckoutCard = (props) => {
  const { product } = props;

  // const count = product.amount


  //USE STATE para counter
  const [count, setCount] = useState(product.amount);
  console.log(product)

  // setCount(product.amount);

    //USE STATE para counter
    // const [count, setCount] = useState(0);

    // product.amount = count;
    // console.log(product.amount)


  //defino contexto para renderizado diferencial en counter
  const context = 'CheckoutCard';

  return (
    <article className="border-bottom border-secondary p-3 checkout-card col-12 col-md-3">
      <div className="d-flex justify-content-between">
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>

      <div className="d-flex justify-content-between">
        <p>Subtotal: ${product.price * count}</p>
        <Counter count={count} setCount={setCount} context={context} product={product} />
      </div>
    </article>
  );
};

export default CheckoutCard;
