import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { putUserFn } from "../../api/users";
import { useEffect } from "react";
import { useSession } from "../../stores/useSessions";

const UserForm = (props) => {
  const { user, setIsEditing } = props;

  const { login } = useSession();

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  useEffect(() => {
    if (user) {
      setValue("firstname", user.firstname);
      setValue("lastname", user.lastname);
      setValue("email", user.email);
      setValue("password", user.password);
    }
  }, [user, setValue]);

 

  const handleSubmit = (data) => {
    Swal.showLoading();

    if (user) putUser({ ...data, id: user.id }, 'updateUser');

    
    setIsEditing(false);
  };

  
  const { mutate: putUser } = useMutation({
    mutationFn: putUserFn,
    
    onSuccess: (data) => {
      login(data.data);

      Swal.close();
      toast.success("Your user info was correctly updated");

     
      reset();
    },

    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  return (
    <div>
      <form className="form-floating" onSubmit={onSubmitRHF(handleSubmit)}>
        <p>Firstname</p>
        <Input
          register={register}
          options={{
            required: true,
            minLength: 4,
            maxLength: 60,
          }}
          name="firstname"
          placeholder="First Name"
          error={!!errors.firstname}
        ></Input>
        <p>Lastname</p>
        <Input
          register={register}
          options={{
            required: true,
            minLength: 4,
            maxLength: 60,
          }}
          name="lastname"
          placeholder="Last Name"
          error={!!errors.lastname}
        ></Input>
        <p>Email</p>
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
        <div className="d-flex gap-3 justify-content-center">
          <button
            
            className="btn btn-primary button btn-save w-50"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;