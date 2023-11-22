import { useOrder } from "../../../stores/useOrder";
import "../userStyles.css";

const Counter = (props) => {
  const { count, setCount, context, product } = props;

  //ZUSTAND
  const { productsOrdered} = useOrder();

  const handleChange = (quantity) => {
    setCount(count + quantity);
  };

  const handleDelete = () => {
    //funcion para remover este producto de la lista de productos en el store

    let filteredOrder = productsOrdered.filter((item) => item !== product);
    console.log(filteredOrder);
    console.log('hola')
  };

  if(context === "CheckoutCard"){
    return (
      <div className="d-flex counter-div border  border-4">
        {count === 1 ? (
          <button
            className="amount-btn" onClick={handleDelete}
          >
            <i className="bi bi-trash text-danger" />
          </button>
        ) : (
          <button className="amount-btn" onClick={() => handleChange(-1)}>
            <i className="bi bi-dash text-danger" />
          </button>
        )}
  
        <p className="m-2">{count}</p>
  
        <button className="amount-btn" onClick={() => handleChange(+1)}>
          <i className="bi bi-plus text-danger"></i>
        </button>
      </div>
    );
  } 

  return (
    <div className="d-flex counter-div border  border-4">
      {count === 0 ? (
        <button
          className="amount-btn"
        >
          <i className="bi bi-dash text-body-tertiary" />
        </button>
      ) : (
        <button className="amount-btn" onClick={() => handleChange(-1)}>
          <i className="bi bi-dash text-danger" />
        </button>
      )}

      <p className="m-2">{count}</p>

      <button className="amount-btn" onClick={() => handleChange(+1)}>
        <i className="bi bi-plus text-danger"></i>
      </button>
    </div>
  );
};

export default Counter;