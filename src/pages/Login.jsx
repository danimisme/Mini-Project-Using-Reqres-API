import axios from "axios";
import { useEffect, useState } from "react";
import InputForm from "../components/Elements/Input/InputForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  const loginProcess = (data) => {
    axios
      .post("https://reqres.in/api/login", data)
      .then((res) => {
        setToken(res.data.token);
        toast.success("Login Success");
      })
      .catch((err) => {
        console.log(err);
        const message = err.response.data.error;
        toast.error("Login Failed : " + message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    loginProcess(data);
  };

  return (
    <div className="form-container">
      <ToastContainer position="top-center" theme="dark" />
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
