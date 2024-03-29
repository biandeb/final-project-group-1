import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { putPasswordFn } from "../../api/users";
import { toast } from "sonner";
import { useSession } from "../../stores/useSessions";
import { useEffect } from "react";

const PasswordForm = (props) => {
  const { setIsEditingPassword } = props;

  let password = "";

  const { user } = useSession();
  

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

  const { mutate: putPassword } = useMutation({
    mutationFn: putPasswordFn,

    onSuccess: () => {
      Swal.close();
      toast.success("Your password was correctly updated");

      reset();
    },

    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  const handleSubmit = (data) => {
    Swal.showLoading();

    putPassword({ data, user });
    

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
        <button className="btn btn-primary button btn-save w-50">Save</button>
      </div>
    </form>
  );
};

export default PasswordForm;
