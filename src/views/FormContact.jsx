import { useForm } from "react-hook-form";

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const newContact = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(newContact)} className="container mt-4" >
        <fieldset>
          <label htmlFor="name-input" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name-input"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            {...register("name", {
              required: "This field is required.",
              minLength: {
                value: 3,
                message: "This field has a minimum of 3 characters.",
              },
              maxLength: {
                value: 20,
                message: "This field has a maximum of 20 characters.",
              },
            })}
            required
          />
          <p className="text-danger">{errors.name?.message}</p>
        </fieldset>
        <fieldset className="mt-2">
          <label htmlFor="phone-input" className="form-label">
            Phone
          </label>
          <input
            type="number"
            id="phone-input"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            {...register("phone", {
              required: "This field is required.",
              pattern: {
                value: /^(?:\+\d{1,3})?(?:[ -]?\d{1,}){8,}$/,
                message: "You must enter a valid phone number.",
              },
            })}
          />
          <p className="text-danger">{errors.phone?.message}</p>
        </fieldset>
        <fieldset className="mt-2">
          <label htmlFor="email-input" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email-input"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            {...register("email", {
              required: "This field is required.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "You must enter a valid email.",
              },
            })}
          />
          <p className="text-danger">{errors.email?.message}</p>
        </fieldset>
        <fieldset>
          <label htmlFor="name-input" className="form-label">
            Message
          </label>
          <textarea
            type="text"
            id="message-input"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            {...register("message", {
              required: "This field is required.",
              minLength: {
                value: 5,
                message: "This field has a minimum of 3 characters.",
              },
              maxLength: {
                value: 400,
                message: "This field has a maximum of 400 characters.",
              },
            })}
            required
          />
          <p className="text-danger">{errors.message?.message}</p>
        </fieldset>
        <button type="submit" className="btn btn-submit mt-3 mb-3">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormContact;
