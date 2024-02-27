import { useParams } from "react-router-dom";
import { useState } from "react";

const User = () => {
  let { id } = useParams();

  const [user, setUser] = useState({});

  return (
    <div className="container-lg">
      <h1>User : {id}</h1>
    </div>
  );
};

export default User;
