import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import "./registerStyle.css";
import { useMutation } from "@tanstack/react-query";

const Register = () => {
  // RHF -----------------------------------------------------

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    setValue,
    reset,
  } = useForm();
  // Tquery -----------------------------------------------------
  const { mutate: postUser } = useMutation({
    Mutation: postUserFn,
    onSuccess: () => {},
    onError: () => {},
  });
  // Handlers -----------------------------------------------------

  const handleSubmit = (data) => {
    postUser({...data,isAdmin:false});
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
                      <a href="#" className="fw-bolder">
                        {" "}
                        Login
                      </a>
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
