const initialState = {
  token: "",
  opened: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "TOGGLE_MODAL":
      return { ...state, opened: action.opened };
    default:
      return state;
  }
}
