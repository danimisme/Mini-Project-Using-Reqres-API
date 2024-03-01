import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WaveHeader from "../components/Fragments/WaveHeader";
import ImageContainer from "../components/Elements/ImageContainer";
import LoginForm from "../components/Fragments/LoginForm";
const Login = () => {
  return (
    <>
      <WaveHeader>
        <ImageContainer src="./image/login-image.png" alt="image" />
        <LoginForm />
      </WaveHeader>
      <ToastContainer position="top-center" theme="dark" autoClose={1000} />
    </>
  );
};

export default Login;
