import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { Link, useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";


import { postUserFn } from "../../api/users";
import { useSession } from "../../stores/useSessions";

import Input from "../../components/Input/Input.jsx";

import "./registerStyle.css";
import { toast } from "sonner";

const Register = () => {
  // ZUSTAND --------------------------------------------

  const { login } = useSession();
  // RRD -----------------------------------------------------
  const navigate = useNavigate();
  // const navigate = useNavigate();

  // RHF -----------------------------------------------------

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

  // Tquery -----------------------------------------------------

  const { mutate: postUser } = useMutation({
    mutationFn: postUserFn,
    onSuccess: (data) => {
      Swal.close();
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Bienvenido",
      });
      navigate("/");

      login({ ...data, password: undefined });
    },
    onError: () => {
      Swal.close();
      toast.error("Ocurrio un error al registrar el usuario !!!")
    },
  });

  // Handlers -----------------------------------------------------

  const handleSubmit = (data) => {
    Swal.showLoading();
    postUser({ ...data, isAdmin: false, isAuthenticated: false });
  };

  // Render -----------------------------------------------------

  return (
    <>
      <section className="container mt-1">
        <article className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center fw-bold">
                    <h1 className=" h5 fw-bold mb-4 h1Color">
                      Create new account
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
                      name="firstName"
                      placeholder="First Name"
                      error={!!errors.firstName}
                    ></Input>
                    <div className="col-sm-6"></div>
                    <Input
                      register={register}
                      options={{
                        required: true,
                        minLength: 4,
                        maxLength: 60,
                      }}
                      name="lastName"
                      placeholder="Last Name"
                      error={!!errors.lastName}
                    ></Input>
                    <Input
                      register={register}
                      options={{
                        required: true,
                        minLength: 4,
                        maxLength: 60,
                      }}
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      error={!!errors.email}
                    ></Input>

                    <Input
                      register={register}
                      options={{
                        required: true,
                        minLength: 4,
                        maxLength: 60,
                      }}
                      type="password"
                      name="password"
                      placeholder="password"
                      error={!!errors.password}
                    ></Input>
                    <button
                      type="submit"
                      className="btn btn-primary button btn-user btn-block"
                    >
                      Sing Up
                    </button>
                  </form>

                  <div className="text-center">
                    <p className="small">
                      Already have an account?
                      <Link to={"/login"} className="fw-bolder">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Register;
