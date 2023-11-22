import { useOrder } from "../../../stores/useOrder"

const Total = () => {

  //ZUSTAND

  const { productsOrdered } = useOrder();
  
  const totalAmount = productsOrdered.reduce((total, product)=> total + parseInt(product.price), 0);
  console.log(totalAmount)


  return (
    <div className="mt-3">
        <h5 className="text-end">Total: ${totalAmount}</h5>
    </div>
  )
}

export default Total