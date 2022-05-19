import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalNotification: 0,
  notifications: [
    {
      type: "",
      title: "",
      content: "",
    },
  ],
};

export const notificationReducer = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setSeenNotificationData: (state, action) => {
      state.totalNotification = action.payload.totalData;
      state.notifications = action.payload.notificationHeaderData;
    },
    resetSeenNotificationData: (state) => {
      state.totalNotification = 0;
      state.notifications = initialState.notifications;
    },
  },
});

export const { setSeenNotificationData, resetSeenNotificationData } =
  notificationReducer.actions;

export default notificationReducer.reducer;
