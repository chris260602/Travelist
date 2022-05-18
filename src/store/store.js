import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import userReducer from "./reducers/userReducer/userReducer";
import cartReducer from "./reducers/cartReducer/cartReducer";
import notificationReducer from "./reducers/notificationReducer/notificationReducer";

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
  notification: notificationReducer,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
