import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { putPasswordFn } from "../../api/users";
import { toast } from "sonner";
import { useSession } from "../../stores/useSessions";
import { useEffect } from "react";
// import { useSession } from "../../stores/useSessions";

const PasswordForm = (props) => {
  const { setIsEditingPassword } = props;

  let password = "";

  const { user } = useSession();
  console.log(user)

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  useEffect(() => {
    setValue("password", password);
  }, [password, setValue]);


  //useMutation para UPDATE(PUT)
  const { mutate: putPassword } = useMutation({
    mutationFn: putPasswordFn,
    //mensaje de exito
    onSuccess: () => {
      //   login(data.data);

      Swal.close();
      toast.success("Your password was correctly updated");

      //resetear el form
      reset();
    },

    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  // HANDLERS____________________________

  const handleSubmit = (data) => {
    Swal.showLoading();

    putPassword({ data, user });
    console.log(data, user);

    //volver a myinfo
    setIsEditingPassword(false);
  };

  return (
    <form className="form-floating" onSubmit={onSubmitRHF(handleSubmit)}>
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
          className="btn btn-primary button btn-save w-50"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default PasswordForm;
