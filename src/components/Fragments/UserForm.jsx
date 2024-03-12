import InputForm from "../Elements/Input/InputForm";
import { hide } from "../../redux/reducers/modalShowReducer";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../../redux/reducers/usersReducer";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserForm = ({ formFor, data }) => {
  const modalShow = useSelector((state) => state.modalShow.modalShow);
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setUser({
      id: data?.id,
      first_name: data?.first_name,
      last_name: data?.last_name,
      email: data?.email,
      avatar: data?.avatar,
    });
  }, [data]);

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(hide());
    resetUser(e);
    toast.success(`${e.target.first_name.value} Added Successfully`);
    setTimeout(() => {
      dispatch(addUser(user));
    }, 1000);
  };

  const resetUser = (e) => {
    e.target.first_name.value = "";
    e.target.last_name.value = "";
    e.target.email.value = "";
    e.target.avatar.value = "";
    setUser({ ...user, first_name: "", last_name: "", email: "", avatar: "" });
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    dispatch(hide());
    dispatch(editUser(user));
    toast.info(`${e.target.first_name.value} Updated Successfully`);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className={`modal ${modalShow ? "show" : "hide"}`}>
        <div className="user-form-container">
          <h1>{formFor === "edit" ? "Edit User" : "Add User"}</h1>
          <span className="close-button" onClick={() => dispatch(hide())}>
            &times;
          </span>
          <form onSubmit={formFor === "edit" ? handleEditUser : handleAddUser}>
            <InputForm
              name="first_name"
              label="First Name"
              type="text"
              placeholder="Enter Your First Name ..."
              value={user.first_name}
              onChange={handleInputChange}
            />
            <InputForm
              name="last_name"
              label="Last Name"
              type="text"
              placeholder="Enter Your Last Name ..."
              value={user.last_name}
              onChange={handleInputChange}
            />
            <InputForm
              name="email"
              label="Email"
              type="email"
              placeholder="Enter Your Email ..."
              value={user.email}
              onChange={handleInputChange}
            />
            <InputForm
              name="avatar"
              label="Avatar Link"
              type="text"
              placeholder="Enter Your Avatar Link ..."
              value={user.avatar}
              onChange={handleInputChange}
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
      <ToastContainer position="bottom-right" theme="dark" autoClose={1000} />
    </>
  );
};

export default UserForm;
