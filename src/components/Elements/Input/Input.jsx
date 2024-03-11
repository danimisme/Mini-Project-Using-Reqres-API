const Input = (props) => {
  const { name, type, placeholder, value, onChange } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={name}
      defaultValue={value}
      onChange={onChange}
    />
  );
};

export default Input;
