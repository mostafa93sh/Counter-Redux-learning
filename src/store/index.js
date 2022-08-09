import React from "react";
import counterSlice from "./counterSlice";
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";

// const reducerCounter = (state = initState, action) => {
//   if (action.type === "increase") {
//     return { ...state, value: state.value + action.payload };
//   }
//   if (action.type === "decrease") {
//     return { ...state, value: state.value - action.payload };
//   }
//   if (action.type === "hideShow") {
//     return { ...state, toggleDisplay: !state.toggleDisplay };
//   }

//   return state;
// };

export const counterAction = counterSlice.actions;

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: AuthSlice },
});

export default store;
