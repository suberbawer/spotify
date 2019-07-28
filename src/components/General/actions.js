export function setToken(token) {
  return dispatch => {
    dispatch({
      type: "SET_TOKEN",
      token
    });
  };
}

export function toggleTokenModal() {
  return (dispatch, getState) => {
    dispatch({
      type: "TOGGLE_MODAL",
      opened:
        getState() && getState().generalReducer
          ? !getState().generalReducer.opened
          : false
    });
  };
}
