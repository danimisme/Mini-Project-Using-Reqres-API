import axios from "axios";
import { useEffect, useState } from "react";
import InputForm from "../components/Elements/Input/InputForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [token, setToken] = useState(undefined);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  const loginProcess = (data) => {
    axios
      .post("https://reqres.in/api/login", data)
      .then((res) => {
        toast.success("Login Success");
        setTimeout(() => {
          setToken(res.data.token);
          navigate("/");
        }, 1500);
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
      <ToastContainer position="top-center" theme="dark" autoClose={1000} />
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <InputForm
          name="email"
          label="Email"
          type="email"
          placeholder="Enter Your Email ..."
        />
        <div className="input-container">
          <label
            htmlFor="password"
            onClick={() => setShowPassword(!showPassword)}
          >
            Password{"  "}
            {showPassword ? (
              <i className="bi bi-eye-slash-fill"></i>
            ) : (
              <i className="bi bi-eye-fill"></i>
            )}
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
          />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
