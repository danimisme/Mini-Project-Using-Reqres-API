import InputForm from "../Elements/Input/InputForm";
import { hide } from "../../redux/reducers/modalShowReducer";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/reducers/usersReducer";
const UserForm = () => {
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
        <h1>User Form</h1>
        <span className="close-button" onClick={() => dispatch(hide())}>
          &times;
        </span>
        <form onSubmit={handleAddUser}>
          <InputForm
            name="firstName"
            label="First Name"
            type="text"
            placeholder="Enter Your First Name ..."
          />
          <InputForm
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Enter Your Last Name ..."
          />
          <InputForm
            name="email"
            label="Email"
            type="email"
            placeholder="Enter Your Email ..."
          />
          <InputForm
            name="avatar"
            label="Avatar Link"
            type="text"
            placeholder="Enter Your Avatar Link ..."
          />
          <button type="submit" className="btn btn-dark d-block ms-auto me-3">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
