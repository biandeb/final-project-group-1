import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

import { useSession } from "../../stores/useSessions";

import Input from "../Input/Input";

import "./login.css";
import { postLoginFn } from "../../api/auth";
import { toast } from "sonner";


const Login = () => {
  // Zustabd -------------------------------------
  const { login } = useSession();

  // RRD -------------------------------------
  const navigate = useNavigate();

  // RHF -------------------------------------
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

  // Tquery -----------------------------------------------------

  const { mutate: postLogin, isLoading } = useMutation({
    mutationFn: postLoginFn,
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

      login(data);

      if (data.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/order");
      }
      

    },
    onError: (e) => {
      Swal.close();
      toast.error(e.message)
    },
  });

  // Handle -------------------------------------

  const handleSubmit = (data) => {

    if (!isLoading) {
      Swal.showLoading();
      postLogin(data);
      
    }
  };
  // Render -----------------------------------------------------

  return (
    <>
      <section className="container">
        <article className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className=" text-gray-900 mb-4 fw-bold h1Color">Login</h1>
                      </div>
                      <form
                        className="user"
                        onSubmit={onSubmitRHF(handleSubmit)}
                      >
                        <Input
                          register={register}
                          options={{
                            required: true,
                            minLength: 4,
                            maxLength: 60,
                          }}
                          type="email"
                          name="email"
                          placeholder="Enter Email Address..."
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
                          placeholder="Password"
                          error={!!errors.password}
                        ></Input>
                        <button
                          type="submit"
                          className="btn button fw-bolder btn-user btn-block"
                        >
                          Login
                        </button>
                      </form>

                      <div className="text-center">
                        <Link className="small fw-bolder" to={"/register"}>
                          Create an Account!
                        </Link>
                      </div>
                    </div>
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

export default Login;
