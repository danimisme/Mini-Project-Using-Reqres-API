import { combineReducers, createStore } from "redux";
import darkModeReducers from "./reducers/darkModeReducers";

const rootReducer = combineReducers({
  darkMode: darkModeReducers,
});

const store = createStore(rootReducer);

export default store;
