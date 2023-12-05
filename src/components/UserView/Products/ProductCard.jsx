import "../../../index.css";
import "../userStyles.css";
import { useOrder } from "../../../stores/useOrder.js";
import Counter from "./Counter.jsx";
import { useState } from "react";
import { useSession } from "../../../stores/useSessions.js";

const ProductCard = (props) => {
  const { isLoggedIn } = useSession();
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
          <button onClick={handleShowModal} className="btn btn-outline-secondary w-100 mb-5 mt-3">
            <i className="bi bi-plus-lg"></i>
            info
          </button>
        </div>
        <div className="col-6">
          <img
            className="card-img"
            src={product.image}
            alt={product.name}
          ></img>
        </div>
      </div>
      {isLoggedIn && <article>
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

        <div className="text-end mt-2">
          <button
            className="add-btn w-100 text-light mt-2"
            onClick={handleOrder}
          >
            Add
          </button>
        </div>
      </article>}

      {/* Modal para mostrar detalles */}
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
              {/* Agrega aquí más detalles del producto según sea necesario */}
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
