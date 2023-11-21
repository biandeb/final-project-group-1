import '../userStyles.css'

const CheckoutCard = () => {
  return (
    <article className="border-bottom border-secondary p-3 checkout-card col-12 col-md-3">
        <div className="d-flex justify-content-between">
            <p>Hamburguesa con queso</p>
            <p>$5000</p>
        </div>

        <div className="d-flex justify-content-between mt-3">
        <button className="btn"><i className="bi bi-trash"></i></button>
            <div className="d-flex me-4">
                <button className="amount-btn">-</button>
                <h5 className="m-2">0</h5>
                <button className="amount-btn">+</button>
            </div>
        </div>
    </article>
  )
}

export default CheckoutCard