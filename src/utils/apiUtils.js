import axios from "axios";
import { toast } from "react-toastify";

export const loginProcess = (data, callback) => {
  axios
    .post("https://reqres.in/api/login", data)
    .then((res) => {
      toast.success("Login Success");
      callback(res.data.token);
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
