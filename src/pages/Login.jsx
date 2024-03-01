import { useEffect, useState } from "react";
import InputForm from "../components/Elements/Input/InputForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import PasswordField from "../components/Elements/PasswordField";
import WaveHeader from "../components/WaveHeader";
import Animation from "../../aos";
import { loginProcess } from "../utils/apiUtils";
import ImageContainer from "../components/Elements/ImageContainer";
const Login = () => {
  useEffect(() => {
    Animation();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    loginProcess(data);
  };

  return (
    <>
      <WaveHeader>
        <ImageContainer src="./image/login-image.png" alt="image" />
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
      </WaveHeader>
      <ToastContainer position="top-center" theme="dark" autoClose={1000} />
    </>
  );
};

export default Login;
