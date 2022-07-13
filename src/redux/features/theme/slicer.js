import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export default createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme === "light"
        ? (state.theme = "dark")
        : (state.theme = "light");
    },
  },
});
