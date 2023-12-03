const Textarea = (props) => {
  const {
    placeholder,
    label,
    name,
    options = {},
    register,
    className = "",
  } = props;

  return (
    <fieldset className={`form-group ${className}`}>
      <textarea
        id={`${name}-textarea`}
        className="form-control form-control-user"
        placeholder={placeholder}
        {...register(name, options)}
      />
      <label htmlFor={`${name}-textarea`}>{label}</label>
    </fieldset>
  );
};
export default Textarea;
