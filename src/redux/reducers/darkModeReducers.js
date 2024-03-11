const initialState = {
  isDarkMode: sessionStorage.getItem("isDarkMode") === "true" ? true : false,
};

const darkModeReducers = (state = initialState, action) => {
  switch (action.type) {
    case "darkMode/setDarkMode":
      sessionStorage.setItem("isDarkMode", !state.isDarkMode);
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export const setDarkMode = () => {
  return { type: "darkMode/setDarkMode" };
};

export default darkModeReducers;
