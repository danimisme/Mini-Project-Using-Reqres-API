import { Link } from "react-router-dom";
import InputForm from "../components/Elements/Input/InputForm";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PasswordField from "../components/Elements/PasswordField";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [token, setToken] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

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

  const registerProcess = (data) => {
    axios
      .post("https://reqres.in/api/register", data)
      .then((res) => {
        setToken(res.data.token);
        toast.success("Register Success");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        const message = err.response.data.error;
        toast.error("Register Failed : " + message);
      });
  };

  return (
    <div className="form-container">
      <ToastContainer position="top-center" theme="dark" autoClose={1000} />

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

export default Register;
