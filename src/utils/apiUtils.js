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

export const getListUsers = async () => {
  try {
    const listUser = [];
    for (let i = 1; i <= 12; i++) {
      const user = await axios.get(`https://reqres.in/api/users/${i}`);
      listUser.push(user.data.data);
    }
    console.log("get users from api");
    return listUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};
