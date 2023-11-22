import "../../index.css";
import "./userStyles.css"

import { useOrder } from "../../stores/useOrder.js";

const ProductCard = (props) => {

    const {product} = props;

    //ZUSTAND

    const { setProductForOrder } = useOrder();

    //HANDLERS

    const handleOrder = () => {
        setProductForOrder(product);
    }

  return (
    <article className="p-2 mb-2 product-card col-12 col-md-3">
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
            <h5>{product.price}</h5>
            <div className="d-flex me-4">
                <button className="amount-btn">-</button>
                <h5 className="m-2">{product.amount}</h5>
                <button className="amount-btn">+</button>
            </div>
        </div>

        <div className="text-end mt-2 me-4">
            <button className="order-btn" onClick={handleOrder}>Add</button>
        </div>

    </article>
  )
}

export default ProductCard