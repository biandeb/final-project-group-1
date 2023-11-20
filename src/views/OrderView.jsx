
import ProductsGallery from '../components/UserView/ProductsGallery'
import TableNumber from '../components/UserView/TableNumber'

const OrderView = () => {
  return (
    <div className='container-fluid m-2'>
        <TableNumber/>
        <ProductsGallery/>
    </div>
  )
}

export default OrderView