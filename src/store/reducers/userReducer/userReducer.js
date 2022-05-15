import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userID: "",
  userRole: -1,
  userName: "",
  userEmail: "",
  balance: 0,
  profilePicture: "",
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userID = action.payload._id;
      state.userRole = action.payload.userRole;
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.balance = action.payload.balance;
      state.profilePicture = action.payload.profilePicture;
    },
    logoff: (state) => {
      window.location.href = "/";
      state.isLoggedIn = false;
      state.userID = "";
      state.userRole = -1;
      state.userName = "";
      state.userEmail = "";
      state.balance = 0;
      state.profilePicture = "";
    },
  },
});

export const { login, logoff } = userReducer.actions;

export default userReducer.reducer;
