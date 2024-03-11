import { getListUsers } from "../../utils/apiUtils";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || (await getListUsers()),
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "users/setUsers":
      localStorage.setItem("users", JSON.stringify(action.payload));
      return { ...state, users: action.payload };
    case "users/addUser":
      localStorage.setItem(
        "users",
        JSON.stringify([...state.users, action.payload])
      );
      return {
        ...state,
        users: [
          ...state.users,
          { id: state.users.length + 1, ...action.payload },
        ],
      };
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

export default usersReducer;
