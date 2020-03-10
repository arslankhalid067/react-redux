const LoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN IN":
      return !state;
    case "SIGN OUT":
      return !state;
    default:
      return state;
  }
};
export default LoggedReducer;
