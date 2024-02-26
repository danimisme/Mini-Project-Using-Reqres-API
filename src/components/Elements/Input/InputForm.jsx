const InputForm = (props) => {
  const { name, label, type, placeholder } = props;
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input type={type} placeholder={placeholder} id={name} />
    </div>
  );
};

export default InputForm;
