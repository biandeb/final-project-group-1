import Swal from "sweetalert2";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useProduct } from "../../stores/useProduct";
import { deleteProductFn,  putProductsFn } from "../../api/products.js"; // Asume que ya tienes una función para activar/desactivar
import { useEffect, useState } from "react";

const TableRow = (props) => {
  const { product, index } = props;
  const { setProductIsEdit } = useProduct();
  const queryClient = useQueryClient();

  //USE STATE 
  const [availability, setAvailability] = useState(false)
  //USE EFFECT

  // TQUERY________________

  const { mutate: deleteProduct } = useMutation({
    mutationFn: deleteProductFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Product deleted");

      queryClient.invalidateQueries("products");
    },
    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  //HANDLERS

  const handleEdit = () => {
    Swal.fire({
      title: "¿Are you sure?",
      text: `You're about to edit the product "${product.name}"`,
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
          behavior: "auto", // Si no funciona bien, puedes cambiar a "auto" o quitar esta línea
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
      cancelButtonText: "No",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        deleteProduct(product.id);
        console.log(product.id);
      }
    });
  };

  const handleAvailability = () => {
    const newAvailability = !availability;
    setAvailability(newAvailability)
    console.log(newAvailability);
    putProductsFn(product, newAvailability);
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
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    is available?
                  </label>
                </div>
                {/* <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    is available?
                  </label>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableRow;
