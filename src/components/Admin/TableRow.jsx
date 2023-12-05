import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";

import { useProduct } from "../../stores/useProduct";
import { deleteProductFn,  putProductsFn } from "../../api/products.js"; // Asume que ya tienes una función para activar/desactivar

const TableRow = (props) => {
  const { product, index } = props;
  const { setProductIsEdit } = useProduct();
  const queryClient = useQueryClient();

  const [availability, setAvailability] = useState(product.isAvailable)

  const { mutate: deleteProduct } = useMutation({
    mutationFn: deleteProductFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Product deleted.");

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
      text: `You're about to edit the product "${product.name}"`,
      showCancelButton: true,
      confirmButtonText: "Yes, edit",
      cancelButtonText: "Cancel",
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
      text: `You're aboute to delete the product "${product.name}"`,
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        deleteProduct(product.id);
      }
    });
  };

  const handleAvailability = () => {
    const newAvailability = !availability;
    setAvailability(newAvailability);
    const updatedProduct = {...product, isAvailable: newAvailability};
    putProductsFn(updatedProduct, newAvailability);
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

                <div className="form-check" onClick={handleAvailability}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked={availability}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    ¿Is available?
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableRow;
