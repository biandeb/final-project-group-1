
import { useQuery } from "@tanstack/react-query"
import AdminCards from "./AdminCards"
import AdminForm from "./AdminForm"
import { getProductsFn } from "../../api/products";


const Admin = () => {
 const { data:products, isError, isLoading } = useQuery({queryKey:["products"],queryFn:getProductsFn});
 
//caso de error
 if(isError){
  return(
    <>
        <AdminForm ></AdminForm>
        <h1 className="text-dark text-center mt-5 mb-5">Products</h1>
    <div className="alert alert-danger mt-3">
      Ocurrio un Error obteniendo los datos del servidor!!!!
    </div>
    </>
  )
 }
// caso de todo okey
  return (
    <div>
        <AdminForm ></AdminForm>
        <h1 className="text-dark text-center mt-5 mb-5">Products</h1>
        {isLoading ? <h3 className="text-dark mt-3 text-center">Cargando...</h3> :  <AdminCards products={products}></AdminCards> }
       
    </div>
  )
}

export default Admin