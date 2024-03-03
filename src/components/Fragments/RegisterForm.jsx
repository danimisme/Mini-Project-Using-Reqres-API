import { useEffect } from "react";
import Animation from "../../../aos";
import InputForm from "../Elements/Input/InputForm";
import { registerProcess } from "../../utils/apiUtils";
import { Link, useNavigate } from "react-router-dom";
import PasswordField from "../Elements/PasswordField";
const RegisterForm = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Animation();
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const dataUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const { name, email, password } = dataUser;
    registerProcess({ email: email, password: password }, navigate);
  };
  return (
    <div className="form-container" data-aos="fade-down">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <InputForm
          name="name"
          label="Name"
          type="text"
          placeholder="Enter Your Name ..."
        />
        <InputForm
          name="email"
          label="Email"
          type="email"
          placeholder="Enter Your Email ..."
        />
        <PasswordField
          name="password"
          label="Password"
          placeholder="Enter Your Password ..."
        />
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
