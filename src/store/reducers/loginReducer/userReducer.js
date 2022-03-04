import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userid: -1,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userid = action.payload;
    },
    logoff: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logoff } = userReducer.actions;

export default userReducer.reducer;
