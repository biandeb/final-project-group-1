import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

import { useSession } from "../../stores/useSessions";

import Input from "../Input/Input";

import "./login.css";
import { postLoginFn } from "../../api/auth";
import { toast } from "sonner";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useSession();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

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
        title: "Welcome",
      });

      login(data);

      if (data.isAdmin === true) {
        navigate("/admin");
      } else {
        navigate("/order");
      }
    },
    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  const handleSubmit = (data) => {
    if (!isLoading) {
      Swal.showLoading();
      postLogin(data);
    }
  };

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
                        <h1 className=" text-gray-900 mb-4 fw-bold h1Color">
                          Log In
                        </h1>
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
                          placeholder="Enter email address"
                          error={!!errors.email}
                        ></Input>
                        <Input
                          register={register}
                          options={{
                            required: true,
                            minLength: 4,
                            maxLength: 60,
                          }}
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Password"
                          error={!!errors.password}
                          
                        ></Input>
                        <div className="form-check mb-5">
                          <input
                            type="checkbox"
                            id="showPassword"
                            className="form-check-input "
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                          />
                          <label htmlFor="showPassword" className="ms-1 fw-bolder">
                            Show Password
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="btn button fw-bolder btn-user btn-block"
                        >
                          Log In
                        </button>
                      </form>

                      <div className="text-center">
                        <Link
                          className="small fw-bolder text-danger"
                          to={"/register"}
                        >
                          ¡Create an account!
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
