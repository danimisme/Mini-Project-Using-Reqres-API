import { useState } from "react";
const PasswordField = (props) => {
  const { name, label, placeholder } = props;
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="input-container">
      <label htmlFor={name} onClick={() => setShowPassword(!showPassword)}>
        {label}
        {"  "}
        {showPassword ? (
          <i className="bi bi-eye-slash-fill"></i>
        ) : (
          <i className="bi bi-eye-fill"></i>
        )}
      </label>
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default PasswordField;
