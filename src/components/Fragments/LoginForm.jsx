import { Link, useNavigate } from "react-router-dom";
import { loginProcess } from "../../utils/apiUtils";
import InputForm from "../Elements/Input/InputForm";
import PasswordField from "../Elements/PasswordField";
import { useEffect } from "react";
import Animation from "../../../aos";

const LoginForm = () => {
  useEffect(() => {
    Animation();
  });
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    loginProcess(data, navigate);
  };
  return (
    <div className="form-container" data-aos="fade-down">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
