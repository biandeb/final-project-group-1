import Swal from "sweetalert2";
import { deleteProductFn } from "../../api/products";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useProduct } from "../../stores/useProduct";

const TableRow = (props) => {
  const { product, index } = props;

  // Zustand -------------------------------------------------

  const { setProductIsEdit } = useProduct();

  // TQuery -------------------------------------------------

  const queryClient = useQueryClient();
  const { mutate: deleteProduct } = useMutation({
    mutationFn: deleteProductFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Proucto eliminado");

      queryClient.invalidateQueries("products");
    },
    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  // HANDLERS -------------------------------------------------

  const handleEdit = () => {
    console.log("hola");
    setProductIsEdit(product);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: `Estas por eliminar el proctuo "${product.name}"`,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        deleteProduct(product.id);
      }
    });
  };

  return (
    <>
   <div className="col-md-6">
  <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4 ">
        <img
          src={product.image}
          className="img-fluid rounded-start mt-4 h-75"
          alt={product.name}
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <p className="card-text fw-bolder fs-4">{index + 1}</p>
          <h5 className="card-title fw-bolder">{product.name}</h5>
          <p className="card-text"> $ {product.price}</p>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleEdit}
          >
            Editar
          </button>
          <button
            type="button"
            className="btn btn-danger ms-2"
            onClick={handleDelete}
          >
            Eliminar
          </button>
          <button
            type="button"
            className="btn btn-success ms-2"
           
          >
            Activar 
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default TableRow;
