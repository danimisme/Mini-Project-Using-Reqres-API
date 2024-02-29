import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { getListUsers } from "../utils/apiUtils";

const ListUser = () => {
  const [listUsers, setListUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getListUsers(page, setListUsers);
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
