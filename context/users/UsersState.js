import React, { useReducer } from "react";
import axios from "axios";
import UsersContext from "./usersContext";
import UsersReducer from "./usersReducer";
import { GET_CURRENT_USER, NO_CURRENT_USER } from "../types";

const UsersState = (props) => {
  const initialState = {
    currentUser: null,
  };

  const [state, dispatch] = useReducer(UsersReducer, initialState);

  // Get current user
  const getCurrentUser = async (sub) => {
    try {
      const user = await axios.get(`/api/users/${sub}`);
      user
        ? dispatch({ type: GET_CURRENT_USER, payload: user.data })
        : dispatch({ type: NO_CURRENT_USER });
    } catch (err) {
      dispatch(console.error(err));
    }
  };

  return (
    <UsersContext.Provider
      value={{
        currentUser: state.currentUser,
        getCurrentUser,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersState;
