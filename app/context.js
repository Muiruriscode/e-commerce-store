"use client";
import React, { createContext, useContext, useReducer } from "react";
import {
  ADD_COUNT,
  ADD_FOCUS,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FOCUS,
  REMOVE_FROM_CART,
  SET_TOTAL,
  SUB_COUNT,
  TOGGLE_FOCUS,
} from "./reducer/Actions";
import { Reducer } from "./reducer/Reducer";

const AppContext = createContext();

const initialState = {
  cart: [],
  total: 0,
  focus: false,
};

const zone = 1;

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const addItem = (id) => {
    dispatch({ type: ADD_TO_CART, payload: id });
  };
  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };
  const increase = (id) => {
    dispatch({ type: ADD_COUNT, payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: SUB_COUNT, payload: id });
  };
  const setTotal = (count) => {
    dispatch({ type: SET_TOTAL, payload: count });
  };
  const addFocus = () => {
    dispatch({ type: ADD_FOCUS });
  };
  const removeFocus = () => {
    dispatch({ type: REMOVE_FOCUS });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        addItem,
        increase,
        setTotal,
        decrease,
        addFocus,
        removeFocus,
        removeFromCart,
        zone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
