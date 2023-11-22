import Counter from '../Products/Counter';
import '../userStyles.css'

const CheckoutCard = (props) => {

  const {product} = props;

  const count = product.amount

  return (
    <article className="border-bottom border-secondary p-3 checkout-card col-12 col-md-3">
        <div className="d-flex justify-content-between">
            <p>{product.name}</p>
            <p>${product.price}</p>
        </div>

        <div className="d-flex justify-content-between">
            <h5>Total: ${product.price*product.amount}</h5>
            <Counter count={count}/>
        </div>
    </article>
  )
}

export default CheckoutCard