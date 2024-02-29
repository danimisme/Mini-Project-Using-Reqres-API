import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../components/Elements/Pagination";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const ListUser = () => {
  const [listUsers, setListUsers] = useState([]);
  const [page, setPage] = useState(1);

  const getListUsers = () => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((res) => {
        setListUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getListUsers();
  }, [page]);

  return (
    <>
      <Navbar active={"List User"} />
      <div className="container-lg">
        <h1 className="text-center">Hello ReqRes Users !</h1>
        <div className="row  justify-content-center gap-1">
          {listUsers.map((user) => (
            <Card
              key={user.id}
              id={user.id}
              avatar={user.avatar}
              firstName={user.first_name}
              email={user.email}
            />
          ))}
        </div>
        <Pagination page={page} setPage={setPage} pages={2} />
      </div>
    </>
  );
};

export default ListUser;
