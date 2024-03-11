import { getListUsers } from "../../utils/apiUtils";

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(await getListUsers()));
}

const initialState = {
  users: JSON.parse(localStorage.getItem("users")),
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "users/setUsers":
      localStorage.setItem("users", JSON.stringify(action.payload));
      return { ...state, users: action.payload };
    case "users/addUser":
      localStorage.setItem(
        "users",
        JSON.stringify([
          ...state.users,
          { id: state.users.length + 1, ...action.payload },
        ])
      );
      return {
        ...state,
        users: [
          ...state.users,
          { id: state.users.length + 1, ...action.payload },
        ],
      };
    case "users/deleteUser": {
      const updatedUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers,
      };
    }
    default:
      return state;
  }
};

export const setUsers = (payload) => {
  return { type: "users/setUsers", payload };
};

export const addUser = (payload) => {
  return { type: "users/addUser", payload };
};

export const deleteUser = (payload) => {
  return { type: "users/deleteUser", payload };
};
export default usersReducer;
