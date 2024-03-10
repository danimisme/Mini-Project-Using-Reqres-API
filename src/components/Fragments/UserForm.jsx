import InputForm from "../Elements/Input/InputForm";
import { hide } from "../../redux/reducers/modalShowReducer";
import { useDispatch, useSelector } from "react-redux";
const UserForm = () => {
  const modalShow = useSelector((state) => state.modalShow.modalShow);
  const dispatch = useDispatch();
  return (
    <div className={`modal ${modalShow ? "show" : "hide"}`}>
      <div className="user-form-container">
        <h1>User Form</h1>
        <span className="close-button" onClick={() => dispatch(hide())}>
          &times;
        </span>
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default UserForm;
