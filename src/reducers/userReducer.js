export function userReducer(state = null, action) {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return "Logout";
    default:
      return null;
  }
}
