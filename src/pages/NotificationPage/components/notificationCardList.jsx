import React, {Fragment} from "react";
import NotificationCard from "./notificationCard";
import classes from "./notificationCardList.module.css";
import NotificationData from "./notificationData";

const NotificationCardList = () => {
    const listItems = NotificationData.map((item) => (
      <Fragment>
        <NotificationCard item={item} key={item.id}/>
      </Fragment>
    ));
  

  return <div className={classes.notification_list}>{listItems}</div>;
};

export default NotificationCardList;