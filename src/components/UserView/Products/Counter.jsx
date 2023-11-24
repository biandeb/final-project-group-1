import { useOrder } from "../../../stores/useOrder";
import "../userStyles.css";

const Counter = (props) => {
  const { count, setCount, context, productId } = props;


  //ZUSTAND
  const { deleteProductFromOrder } = useOrder();


  //HANDLERS
  const handleChange = (quantity) => {
    setCount(count + quantity);
  };

  const handleDelete = () => {
    //funcion para remover este producto de la lista de productos en el store

    deleteProductFromOrder(productId)
    // let filteredOrder = productsOrdered.filter((item) => item !== product);
    // console.log(filteredOrder);
  };

  if(context === "CheckoutCard"){
    return (
      <div className="d-flex counter-div border border-danger-subtle border-2">
        {count === 1 ? (
          <button
            className="amount-btn" onClick={handleDelete}
          >
            <i className="bi bi-trash text-danger fs-3" />
          </button>
        ) : (
          <button className="amount-btn" onClick={() => {handleChange(-1)}}>
            <i className="bi bi-dash text-danger fs-3" />
          </button>
        )}
        <p className="m-2">{count}</p>
  
        <button className="amount-btn" onClick={() => {handleChange(+1)}}>
          <i className="bi bi-plus text-danger fs-3"></i>
        </button>
      </div>
    );
  } 

  return (
    <div className="d-flex counter-div border border-danger-subtle border-3">
      {count === 0 ? (
        <button
          className="amount-btn"
        >
          <i className="bi bi-dash text-body-tertiary fs-3" />
        </button>
      ) : (
        <button className="amount-btn" onClick={() => handleChange(-1)}>
          <i className="bi bi-dash text-danger fs-3" />
        </button>
      )}

      <p className="m-2">{count}</p>

      <button className="amount-btn" onClick={() => handleChange(+1)}>
        <i className="bi bi-plus text-danger fs-3"></i>
      </button>
    </div>
  );
};

export default Counter;