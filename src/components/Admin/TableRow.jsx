import Swal from "sweetalert2";
import { deleteProductFn } from "../../api/products";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TableRow = (props) => {
  const { product, index } = props;
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
  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: `Estas por eliminar el proctuo "${product.title}"`,
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
    <tr>
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td>
        <img
          src={product.image}
          alt={product.name}
          className="admin-table-img w-25"
        />
      </td>
      <td>{product.price}</td>
      <td>
        <button type="button" className="btn btn-warning">
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger ms-2"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
