import React, { useReducer, useDispatch } from "react";
import AlertContext from "./alertContext";
import * as types from "./../../types";
import AlertReducer from "./alertReducer";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlertMessage = (msg, type) => {
    dispatch({
      type: types.SET_ALERT,
      payload: {
        msg: msg,
        type: type,
      },
    });

    setTimeout(() => dispatch({ type: types.REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlertMessage }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
