const initState = {
  authError: null,
  auth: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("The username or password you entered is incorrect");
      return {
        ...state,
        authError: "The username or password you entered is incorrect"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        auth: true,
        authError: null
      };
    default:
      return state;
  }
};

export default authReducer;
