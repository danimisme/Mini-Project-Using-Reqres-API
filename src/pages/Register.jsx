import "react-toastify/dist/ReactToastify.css";
import ImageContainer from "../components/Elements/ImageContainer";
import RegisterForm from "../components/Fragments/RegisterForm";
import AuthLayout from "../components/Layouts/AuthLayout";

const Register = () => {
  return (
    <AuthLayout>
      <ImageContainer src="./image/register.png" alt="image" />
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
