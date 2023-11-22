import "../userStyles.css"

const Counter = (props) => {

    const {count, setCount} = props

    // const amount = product.amount

//     //USE STATE para setear el valor de amount
//   const [count, setCount] = useState(amount);

  const handleChange = (quantity) => {
    setCount(count + quantity);
  };

  const handleDelete = () => {
        //funcion para remover este producto de la lista de productos en el store
  };

  return (
    <div className="d-flex counter-div border  border-4">
      {count === 0 ? (
        <button className="amount-btn" onClick={() => handleDelete(setCount(0))}>
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
