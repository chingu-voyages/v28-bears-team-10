import { GET_CURRENT_USER } from "../types";

const usersReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload[0],
      };
    case NO_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default usersReducer;
