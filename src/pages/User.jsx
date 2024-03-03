import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Fragments/Navbar";
import Pagination from "../components/Fragments/Pagination";
import Animation from "../../aos";
import { getUser } from "../utils/apiUtils";
import UserDetailCard from "../components/Fragments/UserDetailCard";
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
        <UserDetailCard {...user} />
        <div className="mt-auto">
          <Pagination pages={12} page={page} setPage={setPage} />
        </div>
      </div>
    </>
  );
};

export default User;
