
import ProductsGallery from '../components/UserView/ProductsGallery'
import TableNumberInput from '../components/UserView/TableNumberInput'

const OrderView = () => {

    
  return (
    <>
        <div className='m-5'>
            <TableNumberInput/>
            <ProductsGallery/>
        </div>
    </>
  )
}

export default OrderView