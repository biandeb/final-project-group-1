import "../../commos/styles.css";
import "./userStyles.css"

const ProductCard = () => {
  return (
    <article className="p-2 m-3 product-card col-12 col-md-3">
        <div className="row">
            <div className="col-7">
                <h5>Hamburguesa con queso</h5>
                <p>detalle corto del producto, pocas lineas</p>
            </div>
            <div className="col-4">
                <img className="card-img" src="https://assets.unileversolutions.com/recipes-v2/235485.jpg" alt="hamburguesa"></img>
            </div>
        </div>

        <div className="d-flex justify-content-between">
            <h5>$5000</h5>
            <div className="d-flex me-4">
                <button className="amount-btn">-</button>
                <h5 className="m-2">0</h5>
                <button className="amount-btn">+</button>
            </div>
        </div>

        <div className="text-end mt-2 me-4">
            <button className="order-btn">Agregar</button>
        </div>

    </article>
  )
}

export default ProductCard