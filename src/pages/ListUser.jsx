import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../components/Elements/Pagination";

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
    <div className="container-lg">
      <h1 className="text-center">Hello ReqRes Users !</h1>
      <div className="row  justify-content-center gap-1">
        {listUsers.map((user) => (
          <div
            className="card col-10 col-md-4 col-lg-3 my-3  border-0"
            key={user.id}
          >
            <div className="image-container">
              <img
                src={user.avatar}
                className="card-img-top img-fluid"
                alt="..."
              />
            </div>
            <div className="card-body text-center">
              <p className="card-text fw-bold fs-4">{user.first_name}</p>
            </div>
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default ListUser;
