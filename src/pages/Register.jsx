import { Link } from "react-router-dom";
import InputForm from "../components/Elements/Input/InputForm";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PasswordField from "../components/Elements/PasswordField";
import { useNavigate } from "react-router-dom";
import WaveHeader from "../components/WaveHeader";
import Animation from "../../aos";
import { registerProcess } from "../utils/apiUtils";

const Register = () => {
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
    registerProcess({ email: email, password: password });
  };

  return (
    <>
      <WaveHeader>
        <div
          className="image-form col-4 d-none d-lg-block"
          style={{ zIndex: "1" }}
        >
          <img
            src="./image/register.png"
            alt=""
            className="img-fluid"
            data-aos="fade-right"
          />
        </div>
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
      </WaveHeader>
      <ToastContainer position="top-center" theme="dark" autoClose={1000} />
    </>
  );
};

export default Register;
