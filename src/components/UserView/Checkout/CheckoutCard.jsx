import { useEffect, useState } from "react";
import Counter from "../Products/Counter";
import "../userStyles.css";
import { useOrder } from "../../../stores/useOrder";


const CheckoutCard = (props) => {
  const { product } = props;

  const productId = product.id;
  const {setAmount} = useOrder();


    // USE STATE para counter
    const [count, setCount] = useState(product.amount);

//useEffect que registra si hubo cambios en count y cuando eso ocurre ejecuta setAmount      
      useEffect(()=>{
        setAmount(productId, count);
      }, [count, setAmount])

    
    //defino contexto para renderizado diferencial en counter
  const context = 'CheckoutCard';

  return (
    <article className="border-bottom border-secondary p-4 checkout-card col-12 m-2">
      <div className="d-flex justify-content-between">
        <p className="fs-2">{product.name}</p>
        <p>${product.price}</p>
      </div>

      <div className="d-flex justify-content-between">
        <p>Subtotal: ${product.price * product.amount}</p>
        <Counter count={count} setCount={setCount} context={context} product={product} productId={productId}/>
      </div>
    </article>
  );
};

export default CheckoutCard;
