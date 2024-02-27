import { useParams } from "react-router-dom";

const User = () => {
  let { id } = useParams();
  return (
    <div className="container-lg">
      <h1>User : {id}</h1>
    </div>
  );
};

export default User;
