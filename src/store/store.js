import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/loginReducer/userReducer";
export const store = configureStore({
  reducer: { user: userReducer },
});
