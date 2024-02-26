import Label from "./Label";

const InputForm = (props) => {
  const { name, label, type, placeholder } = props;
  return (
    <div className="input-container">
      <Label name={name} label={label} />
      <input type={type} placeholder={placeholder} id={name} />
    </div>
  );
};

export default InputForm;
