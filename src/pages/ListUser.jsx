import { useEffect, useState } from "react";
import Pagination from "../components/Fragments/Pagination";
import Card from "../components/Fragments/Card";
import { getListUsers } from "../utils/apiUtils";
import Layout from "../components/Layouts/Layout";
import UserForm from "../components/Fragments/UserForm";

const ListUser = () => {
  const [listUsers, setListUsers] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(listUsers.length / itemsPerPage);

  useEffect(() => {
    getListUsers(page, setListUsers);
  }, [page]);

  return (
    <Layout navActive="List User">
      <UserForm />
      <div className="container-lg">
        <h1 className="text-center">Hello ReqRes Users !</h1>
        <button className="btn btn-dark d-block mx-auto my-3 fs-5">
          <i className="bi bi-person-plus-fill me-2"></i>Add User
        </button>
        <div className="row  justify-content-center gap-1">
          {listUsers.slice(startIndex, endIndex).map((user) => (
            <Card key={user.id} {...user} />
          ))}
        </div>
        <Pagination page={page} setPage={setPage} pages={totalPages} />
      </div>
    </Layout>
  );
};

export default ListUser;
