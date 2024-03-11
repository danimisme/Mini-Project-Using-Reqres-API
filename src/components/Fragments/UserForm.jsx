import InputForm from "../Elements/Input/InputForm";
import { hide } from "../../redux/reducers/modalShowReducer";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/reducers/usersReducer";
const UserForm = ({ formFor, data }) => {
  const modalShow = useSelector((state) => state.modalShow.modalShow);
  const dispatch = useDispatch();

  const handleAddUser = (e) => {
    e.preventDefault();
    const user = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      avatar: e.target.avatar.value,
    };

    dispatch(addUser(user));
    dispatch(hide());
    e.target.reset();
  };

  return (
    <div className={`modal ${modalShow ? "show" : "hide"}`}>
      <div className="user-form-container">
        <h1>{formFor === "edit" ? "Edit User" : "Add User"}</h1>
        <span className="close-button" onClick={() => dispatch(hide())}>
          &times;
        </span>
        <form onSubmit={handleAddUser}>
          <InputForm
            name="firstName"
            label="First Name"
            type="text"
            placeholder="Enter Your First Name ..."
            value={data?.first_name}
          />
          <InputForm
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Enter Your Last Name ..."
            value={data?.last_name}
          />
          <InputForm
            name="email"
            label="Email"
            type="email"
            placeholder="Enter Your Email ..."
            value={data?.email}
          />
          <InputForm
            name="avatar"
            label="Avatar Link"
            type="text"
            placeholder="Enter Your Avatar Link ..."
            value={data?.avatar}
          />
          <button type="submit" className="btn btn-dark d-block ms-auto me-3">
            {formFor === "edit" ? (
              <i className="bi bi-pencil"> Edit</i>
            ) : (
              <i className="bi bi-check-circle"> Save</i>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
