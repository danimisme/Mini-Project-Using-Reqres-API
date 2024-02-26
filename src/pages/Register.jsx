import { Link } from "react-router-dom";
import InputForm from "../components/Elements/Input/InputForm";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [token, setToken] = useState(undefined);

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
      })
      .catch((err) => {
        const message = err.response.data.error;
        toast.error("Register Failed : " + message);
      });
  };

  return (
    <div className="form-container">
      <ToastContainer position="top-center" theme="dark" />

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
        <InputForm
          name="password"
          label="Password"
          type="password"
          placeholder="Enter Your Password ..."
        />
        <button type="submit">Login</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
