import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { name, label, type, placeholder } = props;
  return (
    <div className="input-container">
      <Label name={name} label={label} />
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
