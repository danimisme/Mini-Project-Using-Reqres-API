import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { name, label, type, placeholder, value, onChange } = props;
  return (
    <div className="input-container">
      <Label name={name} label={label} />
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputForm;
