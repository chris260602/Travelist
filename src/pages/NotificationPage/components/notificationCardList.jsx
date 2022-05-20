import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NotificationCard from "./notificationCard";
import classes from "./notificationCardList.module.css";

const NotificationCardList = () => {
  const user = useSelector((state) => state.user);
  const [notificationData, setNotificationData] = useState([]);
  const [notificationLoading, setNotificationLoading] = useState(false);
  useEffect(() => {
    getNotification();
  }, []);
  const getNotification = async () => {
    setNotificationLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/notification/${user.userID}`,
        {
          withCredentials: true,
        }
      );
      setNotificationData(response.data.data);
    } catch (e) {
      console.log("Something Went Wrong");
    }
    setNotificationLoading(false);
  };

  const listItems =
    notificationData.length === 0 ? (
      <p>No Notification...</p>
    ) : (
      notificationData.map((item) => (
        <NotificationCard item={item} key={item._id} />
      ))
    );

  return (
    <div className={classes.notification_list}>
      {notificationLoading ? <h1>Loading...</h1> : listItems}
    </div>
  );
};

export default NotificationCardList;
