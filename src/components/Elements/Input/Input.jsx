const Input = (props) => {
  const { name, type, placeholder, value } = props;
  return (
    <input type={type} placeholder={placeholder} id={name} value={value} />
  );
};

export default Input;
