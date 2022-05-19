import axios from "axios";
import React, { Fragment, useState } from "react";
import classes from "./notificationCard.module.css";
import promotionIcon from "../../../assets/img/notification_promotion_icon.svg";
import shoppingIcon from "../../../assets/img/notification_shopping_icon.svg";
import otherIcon from "../../../assets/img/notification_other_icon.png";
const NotificationCard = (props) => {
  const { item } = props;
  const [readMore, setReadMore] = useState(true);
  const [isSeen, setIsSeen] = useState(item.seen);
  const readMoreClick = () => {
    setReadMore(!readMore);
    if (isSeen === false) {
      handleIsSeen();
    }
  };
  const handleIsSeen = async () => {
    try {
      axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/notification/setseen`,
        {
          notificationID: item._id,
        },
        {
          withCredentials: true,
        }
      );
    } catch (e) {
      console.log("Something went wrong");
    }
    setIsSeen(true);
  };
  const finalContent = readMore
    ? item.content.length > 100
      ? item.content.slice(0, 100) + "..."
      : item.content
    : item.content;

  const notificationDate = new Date(item.timeSent).toLocaleDateString();

  return (
    <div
      className={`${classes.container} ${isSeen ? classes.seen : ""}`}
      onClick={readMoreClick}
    >
      <div className={classes.leftContainer}>
        <div className={classes.notificationType}>
          {item.type === "Promotion" ? (
            <img src={promotionIcon} alt="Error" />
          ) : item.type === "Shopping" ? (
            <img src={shoppingIcon} alt="Error" />
          ) : (
            <img src={otherIcon} alt="Error" />
          )}

          <p>{item.type}</p>
        </div>
        <div className={classes.notificationInfo}>
          <p className={classes.title}>{item.title}</p>
          <p className={classes.body}>{finalContent}</p>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <p className={classes.notificationRelease}>{notificationDate}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
