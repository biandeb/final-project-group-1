import { useForm } from "react-hook-form";

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const newMessage = () => {
   
    reset();
  };https://github.com/biandeb/final-project-group-1/commit/e265127b54844a64e0f91fe811296471bc22c07b

  return (
    <section className="text-form">
      <form
        onSubmit={handleSubmit(newMessage)}
        className="container form-inputs"
      >
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
                value: 3,
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
        <button type="submit" className="btn-submit fw-bold">
          Submit
        </button>
      </form>
    </section>
  );
};

export default FormContact;
