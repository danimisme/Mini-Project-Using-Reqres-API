import axios from "axios";
import { useEffect, useState } from "react";

const ListUser = () => {
  const [listUsers, setListUsers] = useState([]);

  const getListUsers = () => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => {
        setListUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getListUsers();
  }, []);

  return (
    <div className="container-lg">
      <h1>Hello ReqRes Users !</h1>
    </div>
  );
};

export default ListUser;
