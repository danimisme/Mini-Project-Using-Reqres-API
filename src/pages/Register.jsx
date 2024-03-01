import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WaveHeader from "../components/Fragments/WaveHeader";
import ImageContainer from "../components/Elements/ImageContainer";
import RegisterForm from "../components/Fragments/RegisterForm";

const Register = () => {
  return (
    <>
      <WaveHeader>
        <ImageContainer src="./image/register.png" alt="image" />
        <RegisterForm />
      </WaveHeader>
      <ToastContainer position="top-center" theme="dark" autoClose={1000} />
    </>
  );
};

export default Register;
