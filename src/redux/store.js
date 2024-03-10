import { combineReducers, createStore } from "redux";
import darkModeReducers from "./reducers/darkModeReducers";
import modalShowReducer from "./reducers/modalShowReducer";

const rootReducer = combineReducers({
  darkMode: darkModeReducers,
  modalShow: modalShowReducer,
});

const store = createStore(rootReducer);

export default store;
