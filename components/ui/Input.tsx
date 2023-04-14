const Input = ({
  variant = "primary",
  type = "text",
  class: _class = "",
  ...props
}) => {
  return (
    <input
      {...props}
      className={`h-9 text-base-300 ${_class}`}
      type={type}
    />
  );
};

export default Input;
