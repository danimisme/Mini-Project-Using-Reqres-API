import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../redux/reducers/usersReducer";
import UserForm from "./UserForm";
import { show } from "../../redux/reducers/modalShowReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserDetailCard = (props) => {
  const { first_name, last_name, email, avatar, id } = props;
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.users.users);
  const user = props;

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    toast.success(`${first_name} Deleted Successfully`);
    setTimeout(() => {
      const firstUserId = listUser[0].id;
      if (firstUserId === id) {
        window.location.href = `/user/${listUser[1].id}`;
      } else {
        window.location.href = `/user/${listUser[0].id}`;
      }
    }, 2000);
  };

  return (
    <>
      <UserForm formFor="edit" data={user} />
      <ToastContainer position="bottom-right" autoClose={2000} theme="dark" />
      <div className="row justify-content-center gap-1">
        <div className="col-8 col-md-6 col-lg-4">
          <img
            src={avatar}
            className="img-fluid w-100 rounded"
            alt="avatar"
            data-aos="fade-right"
          />
        </div>
        <div
          className="col-10 col-md-7 col-lg-5 align-self-center"
          data-aos="fade-left"
        >
          <ul className="list-group list-group-flush ">
            <li className="list-group-item">ID : {id}</li>
            <li className="list-group-item">First Name : {first_name}</li>
            <li className="list-group-item">Last Name : {last_name}</li>
            <li className="list-group-item">Email : {email}</li>
          </ul>
        </div>
      </div>
      <div className="button-container d-flex justify-content-end col-10">
        <button
          className="btn btn-primary me-2"
          onClick={() => dispatch(show())}
        >
          <i className="bi bi-pencil-fill me-1 "></i> Edit
        </button>
        <button
          className="btn btn-danger me-2"
          onClick={() => handleDelete(id)}
        >
          <i className="bi bi-trash3-fill"></i>Delete
        </button>
        <Link to={`/`} className="btn btn-dark">
          Back
        </Link>
      </div>
    </>
  );
};
export default UserDetailCard;
