import axios from "axios";
import { toast } from "react-toastify";

export const loginProcess = (data, callback) => {
  axios
    .post("https://reqres.in/api/login", data)
    .then((res) => {
      toast.success("Login Success");
      localStorage.setItem("token", res.data.token);
      setTimeout(() => {
        callback("/");
      }, 1500);
    })
    .catch((err) => {
      console.log(err);
      const message = err.response.data.error;
      toast.error("Login Failed : " + message);
    });
};

export const registerProcess = (data, callback) => {
  axios
    .post("https://reqres.in/api/register", data)
    .then((res) => {
      toast.success("Register Success");
      localStorage.setItem("token", res.data.token);
      setTimeout(() => {
        callback("/");
      }, 1500);
    })
    .catch((err) => {
      const message = err.response.data.error;
      toast.error("Register Failed : " + message);
    });
};

export const getListUsers = (page, callback) => {
  axios
    .get(`https://reqres.in/api/users?page=${page}`)
    .then((res) => {
      callback(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUser = (page, callback) => {
  axios
    .get(`https://reqres.in/api/users/${page}`)
    .then((res) => {
      callback(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
