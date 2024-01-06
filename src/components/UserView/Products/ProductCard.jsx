import { useState } from "react";
import { useOrder } from "../../../stores/useOrder.js";

import Counter from "./Counter.jsx";
import Button from "../../Button/Button.jsx";

import "../../../index.css";
import "../userStyles.css";

const ProductCard = (props) => {
  const { product } = props;
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { setProductForOrder, productsOrdered, updateExistingProduct } =
    useOrder();

  const handleOrder = () => {
    const existingProductIndex = productsOrdered.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const existingProduct = productsOrdered[existingProductIndex];
      const productId = product.id;
      const updatedAmount = existingProduct.amount + count;
      updateExistingProduct(productId, updatedAmount);
    } else {
      setProductForOrder({ ...product, amount: count });
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const context = "ProductCard";

  return (
    <article className="p-4 mb-2 product-card col-12 col-md-5 col-lg-3 me-md-3 d-flex flex-column justify-content-between">
      <div className="row">
        <div className="col-6">
          <h5>{product.name}</h5>
          <Button
            title={"Details"}
            onClick={handleShowModal}
            className={"mt-3 mb-3"}
          ></Button>
        </div>
        <div className="col-6">
          <img
            className="card-img"
            src={product.image}
            alt={product.name}
          ></img>
        </div>
      </div>
      <article>
        <div className="d-flex justify-content-between">
          <h5>${product.price}</h5>
          <Counter
            count={count}
            setCount={setCount}
            context={context}
            productId={product.id}
            product={product}
          />
        </div>
      </article>
      <div className="text-end mt-2">
        <Button
          title={"Add"}
          onClick={handleOrder}
          className={"w-100 "}
        ></Button>
      </div>
      <div
        className={`modal fade${showModal ? " show" : ""}`}
        tabIndex="-1"
        style={{ display: showModal ? "block" : "none" }}
        onClick={handleCloseModal}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{product.name}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <p>{product.description}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
