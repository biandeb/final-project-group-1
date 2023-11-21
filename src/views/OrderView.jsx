
import { useQuery } from '@tanstack/react-query';
import { getProductsFn } from '../api/products';
import ProductsGallery from '../components/UserView/ProductsGallery'
import TableNumberInput from '../components/UserView/TableNumberInput'


const OrderView = () => {

  const {data: products, isError, isLoading} = useQuery({queryKey: ['products'], queryFn: getProductsFn});

  if(isError){
    return (
      <>
          <div className='m-5'>
              <TableNumberInput/> 
              <div className="alert alert-danger">An error occurred while getting the products</div>
          </div>
      </>
    )
  }

  return (
    <>
        <div className='m-5'>
            <TableNumberInput/> 
            {isLoading? <h3>Loading...</h3> : <ProductsGallery products={products}/>}
        </div>
    </>
  )
}

export default OrderView