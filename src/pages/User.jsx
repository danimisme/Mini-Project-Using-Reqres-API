import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/Elements/Pagination";

const User = () => {
  let { id } = useParams();

  const [user, setUser] = useState({});
  const [page, setPage] = useState(Number(id));

  const getUser = () => {
    axios
      .get(`https://reqres.in/api/users/${page}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, [page]);

  return (
    <div
      className="container-lg mt-5 d-flex flex-column "
      style={{ height: "80vh" }}
    >
      <div className="row justify-content-center gap-1">
        <div className="col-8 col-md-3 col-lg-4">
          <img
            src={user.avatar}
            className="img-fluid w-100 rounded"
            alt="avatar"
          />
        </div>
        <div className="col-10 col-md-4 col-lg-5 align-self-center">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">ID : {user.id}</li>
            <li className="list-group-item">First Name : {user.first_name}</li>
            <li className="list-group-item">Last Name : {user.last_name}</li>
            <li className="list-group-item">Email : {user.email}</li>
          </ul>
        </div>
      </div>
      <div className="button-container d-flex justify-content-end col-10">
        <Link to={`/`} className="btn btn-dark">
          Back
        </Link>
      </div>
      <div className="mt-auto">
        <Pagination pages={12} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default User;
