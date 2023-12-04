const Input = (props) => {
  const {
    placeholder,
    type = "text",
    name,
    options = {},
    register,
    className = "",
    error = false,
  } = props;
  return (
    <fieldset className={`form-group ${className}`}>
      <input
        type={type}
        id={`${name}-input`}
        className={`form-control form-control-user ${
          error ? "is-invalid" : ""
        }`}
        placeholder={placeholder}
        {...register(name, options)}
      />
    </fieldset>
  );
};

export default Input;
