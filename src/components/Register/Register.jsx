import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { Link, useNavigate } from "react-router-dom";


import { postUserFn } from "../../api/users";
import { useSession } from "../../stores/useSessions";

import Input from "../../components/Input/Input.jsx";

import "./registerStyle.css";
import { toast } from "sonner";

const Register = () => {
  const { login } = useSession();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

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
        title: "Welcome",
      });

      login({ ...data, password: undefined });
      navigate("/");
      
    },
    onError: () => {
      Swal.close();
      toast.error("An error occurred while registering the user.");
    },
  });


  const handleSubmit = (data) => {
    Swal.showLoading();
    postUser(data);
    console.log(data)
  };


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
                      name="firstname"
                      placeholder="Firstname"
                      error={!!errors.firstname}
                    ></Input>
                    <div className="col-sm-6"></div>
                    <Input
                      register={register}
                      options={{
                        required: true,
                        minLength: 4,
                        maxLength: 60,
                      }}
                      name="lastname"
                      placeholder="Lastname"
                      error={!!errors.lastname}
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
                      placeholder="Email address"
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
                      className="btn btn-primary button btn-user btn-block"
                    >
                      Sign Up
                    </button>
                  </form>

                  <div className="text-center">
                    <p className="small">
                      ¿Already have an account? 
                      <Link to={"/login"} className="fw-bolder text-danger">
                        Log In
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
