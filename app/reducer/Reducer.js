"use client";
import { Staatliches } from "next/font/google";
import {
  ADD_COUNT,
  SUB_COUNT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SET_TOTAL,
  ADD_FOCUS,
  REMOVE_FOCUS,
} from "./Actions";

export const Reducer = (state, action) => {
  const { payload } = action;
  let newState = [];
  switch (action.type) {
    case ADD_COUNT:
      newState = state.cart.map((cartItem) => {
        if (cartItem.id === payload) {
          if (cartItem.count < cartItem.stock) {
            return { ...cartItem, count: cartItem.count + 1 };
          }
        }
        return cartItem;
      });
      return { ...state, cart: newState, total: 0 };
    case SUB_COUNT:
      newState = state.cart.map((cartItem) => {
        if (cartItem.id === payload) {
          if (cartItem.count > 1) {
            return { ...cartItem, count: cartItem.count - 1 };
          }
        }
        return cartItem;
      });
      return { ...state, cart: newState, total: 0 };
    case ADD_TO_CART:
      newState = state.cart;
      console.log("state: ", state.cart);
      const prodIndex = state.cart.findIndex((val) => val.id === payload.id);
      console.log(state.cart.findIndex((val) => val.id === payload.id));
      if (prodIndex < 0) {
        newState.push(payload);
      } else {
        newState[prodIndex].count++;
      }
      console.log(newState);
      return { ...state, cart: newState, total: 0 };
    case REMOVE_FROM_CART:
      const newCart = state.cart.filter((item) => item.id !== payload);

      return { ...state, cart: newCart, total: 0 };
    case CLEAR_CART:
      const empty = { cart: [] };
      return empty;
    case SET_TOTAL:
      return { ...state, total: state.total + payload };
    case ADD_FOCUS:
      return { ...state, focus: true };
    case REMOVE_FOCUS:
      return { ...state, focus: false };
    default:
      return state;
  }
};
