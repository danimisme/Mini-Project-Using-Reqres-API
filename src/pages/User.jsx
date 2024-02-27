import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  let { id } = useParams();

  const [user, setUser] = useState({});

  const getUser = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(user);

  return (
    <div className="container-lg">
      <h1>User : {id}</h1>
    </div>
  );
};

export default User;
