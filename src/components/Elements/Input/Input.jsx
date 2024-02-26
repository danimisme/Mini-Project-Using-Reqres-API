const Input = (props) => {
  const { name, type, placeholder } = props;
  return <input type={type} placeholder={placeholder} id={name} />;
};

export default Input;
