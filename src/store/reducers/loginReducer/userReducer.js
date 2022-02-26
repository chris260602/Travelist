import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  tes: true,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logoff: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logoff } = userReducer.actions;

export default userReducer.reducer;
