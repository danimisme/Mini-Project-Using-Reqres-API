import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WaveHeader from "../components/Fragments/WaveHeader";
import ImageContainer from "../components/Elements/ImageContainer";
import LoginForm from "../components/Fragments/LoginForm";
import AuthLayout from "../components/Layouts/AuthLayout";
const Login = () => {
  return (
    <AuthLayout>
      <ImageContainer src="./image/login-image.png" alt="image" />
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
