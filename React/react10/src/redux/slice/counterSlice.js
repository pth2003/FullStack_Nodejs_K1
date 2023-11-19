import { createSlice } from "@reduxjs/toolkit";

export const couterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    // trong reducer la cac action creator
    increment: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrement: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});
