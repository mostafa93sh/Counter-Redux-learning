import { createSlice } from "@reduxjs/toolkit";
import { islogout } from "./authSlice";

const initState = { value: 1 };
const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increases: (state, action) => {
      state.value += action.payload;
    },
    decreases: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers: {
    [islogout]: (state, action) => {
      state.value = 0;
    },
  },
});

export default counterSlice;
