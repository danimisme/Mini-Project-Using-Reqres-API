import { combineReducers, createStore } from "redux";
import darkModeReducers from "./reducers/darkModeReducers";
import modalShowReducer from "./reducers/modalShowReducer";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
  darkMode: darkModeReducers,
  modalShow: modalShowReducer,
  users: usersReducer,
});

const store = createStore(rootReducer);

export default store;
