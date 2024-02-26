import { Link } from "react-router-dom";
import InputForm from "../components/Elements/Input/InputForm";

const Register = () => {
  return (
    <div className="form-container">
      <h1>Register</h1>
      <form>
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
          Don't have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
