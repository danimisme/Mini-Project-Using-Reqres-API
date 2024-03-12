import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../components/Fragments/Pagination";
import Animation from "../../aos";
import UserDetailCard from "../components/Fragments/UserDetailCard";
import Layout from "../components/Layouts/Layout";
import { useSelector } from "react-redux";
const User = () => {
  let { id } = useParams();
  const [user, setUser] = useState({});
  const [page, setPage] = useState(0);

  const listUser = useSelector((state) => state.users.users);

  useEffect(() => {
    listUser.map((user, i) => {
      if (user.id === Number(id)) {
        setPage(i + 1);
      }
    });
    // user not found handler
    if (listUser.id === undefined) {
      setPage(1);
    }
  }, [id]);

  useEffect(() => {
    setUser(listUser[page - 1]);
    Animation();
  }, [page]);

  return (
    <Layout navActive="User">
      <div className=" user-container container-lg mt-5">
        <UserDetailCard {...user} />
        <div className="mt-auto">
          <Pagination pages={listUser.length} page={page} setPage={setPage} />
        </div>
      </div>
    </Layout>
  );
};

export default User;
