import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../components/Fragments/Pagination";
import Animation from "../../aos";
import { getUser } from "../utils/apiUtils";
import UserDetailCard from "../components/Fragments/UserDetailCard";
import Layout from "../components/Layouts/Layout";
const User = () => {
  let { id } = useParams();
  const [user, setUser] = useState({});
  const [page, setPage] = useState(Number(id));

  useEffect(() => {
    getUser(page, setUser);
    Animation();
  }, [page]);

  return (
    <Layout navActive="User">
      <div className=" user-container container-lg mt-5">
        <UserDetailCard {...user} />
        <div className="mt-auto">
          <Pagination pages={12} page={page} setPage={setPage} />
        </div>
      </div>
    </Layout>
  );
};

export default User;
