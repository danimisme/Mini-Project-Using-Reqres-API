import axios from "axios";
import { useState } from "react";
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
      <h1>Form Login</h1>
      <form onSubmit={handleLogin}>
        {token && <h2>Login Success</h2>}
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
