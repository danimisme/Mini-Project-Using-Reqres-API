import axios from "axios";
import { toast } from "react-toastify";

export const loginProcess = (data) => {
  axios
    .post("https://reqres.in/api/login", data)
    .then((res) => {
      toast.success("Login Success");
      localStorage.setItem("token", res.data.token);
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    })
    .catch((err) => {
      console.log(err);
      const message = err.response.data.error;
      toast.error("Login Failed : " + message);
    });
};
