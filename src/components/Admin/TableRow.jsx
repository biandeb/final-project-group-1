import Swal from "sweetalert2";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useProduct } from "../../stores/useProduct.js";
import {
  deleteProductFn,
  toggleProductAvailabilityFn,
} from "../../api/products.js";

const TableRow = (props) => {
  const { product, index } = props;
  const { setProductIsEdit } = useProduct();
  const queryClient = useQueryClient();

  const { mutate: toggleProductAvailability } = useMutation({
    mutationFn: () =>
      toggleProductAvailabilityFn(product.id, !product.isAvailable),
    onSuccess: () => {
      Swal.close();
      toast.success(
        `Product ${product.isAvailable ? "Disabled" : "Activated"} successfully`
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
      title: "¿Are you sure?",
      text: `You are about to edit the product "${product.name}"`,
      showCancelButton: true,
      confirmButtonText: "Yes, edit",
      cancelButtonText: "No",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        setProductIsEdit(product);

        const formElement = document.getElementById("adminForm");
        const formOffset = formElement.offsetTop;
        window.scrollTo({
          top: formOffset,
          behavior: "auto",
        });
      }
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Are you sure?",
      text: `You are about to delete the product "${product.name}"`,
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
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
      title: `Are you sure to ${
        product.isAvailable ? "disable" : "activate"
      } the product "${product.name}"?`,
      showCancelButton: true,
      confirmButtonText: product.isAvailable ? "Yes, disable" : "Yes, activate",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        toggleProductAvailability();
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
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger ms-2"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className={`btn btn-${
                    product.isAvailable ? "success" : "warning"
                  } ms-2`}
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
