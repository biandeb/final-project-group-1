import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { putUserFn } from "../../api/users";
import { useEffect } from "react";

const UserForm = (props) => {
  const { user } = props;
  // console.log(user);

  // RHF -----------------------------------------------------

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  // seteo valores para editar usuario
  // if(user){
  //   setValue("firstname", user.firstName);
  //   setValue("lastname", user.lastName);
  //   setValue("email", user.email);
  //   setValue("password", user.password);
  // }

  useEffect(() => {
    if (user) {
      setValue('firstname', user.firstname);
      setValue('lastname', user.lastname);
      setValue('email', user.email);
      setValue('password', user.password);
    }
  }, [user, setValue]);



  const handleSubmit = (data) => {
    Swal.showLoading();

    if(user)
    putUser({...data, id: user.id});
  };

  //useMutation para UPDATE(PUT)
  const {mutate: putUser} = useMutation({
    mutationFn: putUserFn,
    //mensaje de exito
    onSuccess: ()=>{
        Swal.close();
        toast.success('Your user info was correctly updated');

    //resetear el form
    reset();

    //limpiar estado global
    // clearBlog();

    //recargar galeria con cards
    // QueryClient.invalidateQueries('users')
    },

    onError: (e)=>{
        Swal.close();
        toast.error(e.message)
    }
})


  return (
    <div>
      <p>formulario</p>
      <form className="user" onSubmit={onSubmitRHF(handleSubmit)}>
        <Input
          register={register}
          options={{
            required: true,
            minLength: 4,
            maxLength: 60,
          }}
          name="firstname"
          placeholder="First Name"
          error={!!errors.firstName}
        ></Input>
        <Input
          register={register}
          options={{
            required: true,
            minLength: 4,
            maxLength: 60,
          }}
          name="lastname"
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
        <div className="d-flex gap-3 justify-content-center">
          <button
            // type="submit"
            className="btn btn-primary button btn-user"
          >
            Save
          </button>
          <button type="button" className="btn btn-primary button btn-user ">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;