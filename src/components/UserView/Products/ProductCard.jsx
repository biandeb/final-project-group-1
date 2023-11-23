import "../../../index.css";
import "../userStyles.css";

import { useOrder } from "../../../stores/useOrder.js";
import { useState } from "react";

import Counter from "./Counter.jsx";

const ProductCard = (props) => {
  const { product } = props;

  // //USE STATE para counter
  const [count, setCount] = useState(0);

  // //revisar si esto es buena practica
  // product.amount = count

  //ZUSTAND

  const { setProductForOrder } = useOrder();

  //HANDLERS

  const handleOrder = () => {
    setProductForOrder({...product, amount: count});
  };

    //defino contexto para renderizado diferencial en counter
    const context = 'ProductCard';

  return (
    <article className="p-2 mb-2 product-card col-12 col-md-3 me-md-3">
      <div className="row">
        <div className="col-7">
          <h5>{product.name}</h5>
          <p>{product.description}</p>
        </div>
        <div className="col-4">
          <img
            className="card-img"
            src={product.image}
            alt={product.name}
          ></img>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <h5>${product.price}</h5>
        <Counter count={count} setCount={setCount} context={context} productId={product.id} product={product}/>
      </div>

      <div className="text-end mt-2">
        <button className="order-btn w-100 text-light" onClick={handleOrder}>
          Add
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
