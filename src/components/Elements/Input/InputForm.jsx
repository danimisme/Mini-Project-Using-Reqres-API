import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { name, label, type, placeholder, value } = props;
  return (
    <div className="input-container">
      <Label name={name} label={label} />
      <Input name={name} type={type} placeholder={placeholder} value={value} />
    </div>
  );
};

export default InputForm;
