import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Swal from "sweetalert2";

import Input from "../Input/Input";
import Textarea from "../TextArea/TextArea";

import { postProductsFn } from "../../api/products";

const AdminForm = () => {
  // RHF -----------------------------------------------------

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset,
  } = useForm();

  //  Tquery -----------------------------------------------------
  const queryClient = useQueryClient();
  const { mutate: postProdcuts } = useMutation({
    mutationFn: postProductsFn,
    onSuccess: () => {
      Swal.close();
      toast.success("producto guardado correctamente");
      reset();

      queryClient.invalidateQueries("products");
    },
    onError: () => {
      Swal.close();

      toast.error("ocurrio un error al guardar el procuto");
    },
  });

  //  Handle -----------------------------------------------------

  const handleSubmit = (data) => {
    Swal.showLoading();

    postProdcuts(data);
  };
  return (
    <section className="container mt-1 ">
      <article className="card shadow-lg ">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="p-5">
                <div className="text-center fw-bold">
                  <h1 className=" h3 fw-bold mb-4 h1Color">
                    Administration Panel
                  </h1>
                </div>
                <form className="user" onSubmit={onSubmitRHF(handleSubmit)}>
                  <Input
                    register={register}
                    options={{
                      required: true,
                      minLength: 4,
                      maxLength: 60,
                    }}
                    name="name"
                    placeholder="name"
                    error={!!errors.name}
                  ></Input>
                  <Input
                    register={register}
                    options={{
                      required: true,
                      minLength: 4,
                      pattern:
                        /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp|jpeg)/i,
                    }}
                    className="mt-2"
                    type="url"
                    label="Enlace a imagen"
                    name="image"
                    placeholder="https://google.com"
                    error={!!errors.image}
                  />
                  <Input
                    register={register}
                    options={{
                      required: true,
                      minLength: 1,
                      maxLength: 60,
                    }}
                    type="number"
                    name="price"
                    placeholder="Price"
                    error={!!errors.price}
                  ></Input>

                  <Textarea
                    register={register}
                    options={{
                      required: true,
                      minLength: 5,
                      maxLength: 3000,
                    }}
                    className="mt-2"
                    name="description"
                    placeholder="description the product"
                    error={!!errors.description}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary button btn-user btn-bloc h-25"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AdminForm;
