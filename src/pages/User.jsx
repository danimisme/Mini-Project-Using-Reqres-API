import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Fragments/Navbar";
import Pagination from "../components/Fragments/Pagination";
import Animation from "../../aos";
import { getUser } from "../utils/apiUtils";
const User = () => {
  let { id } = useParams();
  const [user, setUser] = useState({});
  const [page, setPage] = useState(Number(id));

  useEffect(() => {
    getUser(page, setUser);
    Animation();
  }, [page]);

  return (
    <>
      <Navbar active={"User"} />
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
              data-aos="fade-right"
            />
          </div>
          <div
            className="col-10 col-md-4 col-lg-5 align-self-center"
            data-aos="fade-left"
          >
            <ul className="list-group list-group-flush">
              <li className="list-group-item">ID : {user.id}</li>
              <li className="list-group-item">
                First Name : {user.first_name}
              </li>
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
    </>
  );
};

export default User;
