const initialState = {
  modalShow: false,
};

const modalShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case "modalShow/show":
      return { ...state, modalShow: true };
    case "modalShow/hide":
      return { ...state, modalShow: false };
    default:
      return state;
  }
};

export const show = () => {
  return { type: "modalShow/show" };
};

export const hide = () => {
  return { type: "modalShow/hide" };
};

export default modalShowReducer;
