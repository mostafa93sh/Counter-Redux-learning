import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "auth",
  initialState: { isLogedIn: false },
  reducers: {
    isLogin: (state) => {
      state.isLogedIn = true;
    },
    islogout: (state) => {
      state.isLogedIn = false;
    },
  },
});

export const { isLogin, islogout } = AuthSlice.actions;

export default AuthSlice.reducer;
