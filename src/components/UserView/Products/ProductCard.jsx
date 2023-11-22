import "../../../index.css";
import "../userStyles.css"

import { useOrder } from "../../../stores/useOrder.js";
import Counter from "./Counter.jsx";
import { useState } from "react";

const ProductCard = (props) => {

    const {product} = props;

    //USE STATE para counter
    const [count, setCount] = useState(0);

    product.amount = count

    //ZUSTAND

    const { setProductForOrder } = useOrder();

    //HANDLERS

    const handleOrder = () => {
        setProductForOrder(product);
        console.log(product);
    }

  return (
    <article className="p-2 mb-2 product-card col-12 col-md-3 me-md-3">
        <div className="row">
            <div className="col-7">
                <h5>{product.name}</h5>
                <p>{product.description}</p>
            </div>
            <div className="col-4">
                <img className="card-img" src={product.image} alt={product.name}></img>
            </div>
        </div>

        <div className="d-flex justify-content-between">
            <h5>${product.price}</h5>
            <Counter count={count} setCount={setCount}/>
        </div>

        <div className="text-end mt-2">
            <button className="order-btn w-100 text-light" onClick={handleOrder}>Add</button>
        </div>

    </article>
  )
}

export default ProductCard