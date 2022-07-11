import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export default createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});
