import Swal from "sweetalert2";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useProduct } from "../../stores/useProduct";
import { deleteProductFn, toggleProductAvailabilityFn } from "../../api/products.js"; // Asume que ya tienes una función para activar/desactivar

const TableRow = (props) => {
  const { product, index } = props;
  const { setProductIsEdit } = useProduct();
  const queryClient = useQueryClient();

  // Nueva función de mutación para activar/desactivar el producto
  const { mutate: toggleProductAvailability } = useMutation({
    mutationFn: () => toggleProductAvailabilityFn(product.id, !product.isAvailable),
    onSuccess: () => {
      Swal.close();
      toast.success(
        `Producto ${product.isAvailable ? "Desactivado" : "Activado"} exitosamente`
      );

      queryClient.invalidateQueries("products");
    },
    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  const handleEdit = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: `Estas por editar el producto "${product.name}"`,
      showCancelButton: true,
      confirmButtonText: "Si, editar",
      cancelButtonText: "No",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        setProductIsEdit(product);

        const formElement = document.getElementById("adminForm");
        const formOffset = formElement.offsetTop;
        window.scrollTo({
          top: formOffset,
          behavior: "auto", // Si no funciona bien, puedes cambiar a "auto" o quitar esta línea
        });
      }
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: `Estas por eliminar el producto "${product.name}"`,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        deleteProductFn(product.id);
      }
    });
  };

  const handleToggleAvailability = () => {
    Swal.fire({
      title: `¿Estás seguro de ${
        product.isAvailable ? "desactivar" : "activar"
      } el producto "${product.name}"?`,
      showCancelButton: true,
      confirmButtonText: product.isAvailable ? "Si, Desactivar" : "Si, Activar",
      cancelButtonText: "Cancelar",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        toggleProductAvailability(); // Llama a la función de mutación para activar/desactivar
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
                  className={`btn btn-${product.isAvailable ? "success" : "warning"} ms-2`}
                  onClick={handleToggleAvailability}
                >
                  {product.isAvailable ? "Desactivar" : "Activar"}
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
