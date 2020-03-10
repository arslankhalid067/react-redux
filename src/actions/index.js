export const increment = jump => {
  return {
    type: "INCREMENT",
    payload: jump
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};
export const signIn = () => {
  return {
    type: "SIGN IN"
  };
};
export const signOut = () => {
  return {
    type: "SIGN OUT"
  };
};
