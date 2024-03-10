const initialState = {
  isDarkMode: false,
};

const darkModeReducers = (state = initialState, action) => {
  switch (action.type) {
    case "darkMode/setDarkMode":
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export const setDarkMode = () => {
  return { type: "darkMode/setDarkMode" };
};

export default darkModeReducers;
