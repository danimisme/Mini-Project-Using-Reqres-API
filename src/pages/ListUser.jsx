import axios from "axios";
import { useState } from "react";

const ListUser = () => {
  const [listUser, setListUser] = useState([]);

  return (
    <div className="container-lg">
      <h1>Hello ReqRes Users !</h1>
    </div>
  );
};

export default ListUser;
