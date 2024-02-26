import axios from "axios";
import { useState } from "react";
import InputForm from "../components/Elements/Input/InputForm";
const Login = () => {
  const [token, setToken] = useState(undefined);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const loginProcess = (data) => {
    axios
      .post("https://reqres.in/api/login", data)
      .then((res) => {
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    setUserInput(data);
    loginProcess(data);
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        {token && <h2>Login Success</h2>}
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
      </form>
    </div>
  );
};

export default Login;
