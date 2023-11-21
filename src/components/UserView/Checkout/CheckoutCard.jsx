import '../userStyles.css'

const CheckoutCard = (props) => {

  const {product} = props;

  return (
    <article className="border-bottom border-secondary p-3 checkout-card col-12 col-md-3">
        <div className="d-flex justify-content-between">
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>

        <div className="d-flex justify-content-between mt-3">
        <button className="btn"><i className="bi bi-trash"></i></button>
            <div className="d-flex me-4">
                <button className="amount-btn">-</button>
                <h5 className="m-2">{product.amount}</h5>
                <button className="amount-btn">+</button>
            </div>
        </div>
    </article>
  )
}

export default CheckoutCard