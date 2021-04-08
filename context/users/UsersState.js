import React, { useReducer } from "react";
import axios from "axios";
import UsersContext from "./usersContext";
import UsersReducer from "./usersReducer";
import { GET_CURRENT_USER } from "../types";

const UsersState = (props) => {
  const initialState = {
    currentUser: null,
  };

  const [state, dispatch] = useReducer(UsersReducer, initialState);

  // Get current user

  return (
    <CatsContext.Provider
      value={{
        currentUser: state.currentUser,
      }}
    >
      {props.children}
    </CatsContext.Provider>
  );
};

export default UsersState;
