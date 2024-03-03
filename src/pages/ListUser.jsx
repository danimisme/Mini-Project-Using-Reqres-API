import { useEffect, useState } from "react";
import Pagination from "../components/Fragments/Pagination";
import Card from "../components/Fragments/Card";
import { getListUsers } from "../utils/apiUtils";
import Layout from "../components/Layouts/Layout";

const ListUser = () => {
  const [listUsers, setListUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getListUsers(page, setListUsers);
  }, [page]);

  return (
    <Layout navActive="List User">
      <div className="container-lg">
        <h1 className="text-center">Hello ReqRes Users !</h1>
        <div className="row  justify-content-center gap-1">
          {listUsers.map((user) => (
            <Card key={user.id} {...user} />
          ))}
        </div>
        <Pagination page={page} setPage={setPage} pages={2} />
      </div>
    </Layout>
  );
};

export default ListUser;
