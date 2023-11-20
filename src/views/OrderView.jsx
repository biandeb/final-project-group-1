
import { useState } from 'react'
import ProductsGallery from '../components/UserView/ProductsGallery'
import TableNumber from '../components/UserView/TableNumber'
import TableNumberInput from '../components/UserView/TableNumberInput'

const OrderView = () => {

    const [tableNumber, setTableNumber] = useState()

  return (
    <>
        <div className='m-5'>
            <TableNumberInput setTableNumber={setTableNumber}/>
            <TableNumber tableNumber={tableNumber}/>
            <ProductsGallery/>
        </div>
    </>
  )
}

export default OrderView