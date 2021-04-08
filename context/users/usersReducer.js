import { GET_CURRENT_USER } from "../types";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CURRENT_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
