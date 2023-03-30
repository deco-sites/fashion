
const Input = (({
  variant = "primary",
  type = "text",
  class: _class = "",
  ...props
}) => {


  return (
    <input
      {...props}
      className={`${_class}`}
      type={type}
    />
  );
});

export default Input;
