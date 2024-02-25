import { useState } from "react";
const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const emailInput = e.target.email.value;
    const passwordInput = e.target.password.value;
    setUserInput({ email: emailInput, password: passwordInput });
    console.log(userInput);
  };

  return (
    <div className="form-container">
      <h1>Form Login</h1>
      <form onSubmit={handleLogin}>
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
