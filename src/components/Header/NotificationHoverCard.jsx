import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/img/testingprofilepic.png";
import classes from "./NotificationHoverCard.module.css";
const NotificationHoverCard = (props) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (props.active === "true") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [props]);
  return (
    <div
      className={`${classes.notificationHoverCardMainContainer} ${
        isActive ? classes.active : ""
      }`}
    >
      <div className={classes.notificationHoverCardTop}>
        <h3>Notification</h3>
        <Link to={"/notification"}>See More</Link>
      </div>
      <div className={`${classes.notificationHoverCardContainer}`}>
        <Link to={"/notification"} className={classes.notificationHoverCard}>
          <div className={classes.notificationHoverCardTextContainer}>
            <h3>Purchase Progress</h3>
            <p>Bag on progress</p>
          </div>
        </Link>

        <Link to={"/notification"} className={classes.notificationHoverCard}>
          <div className={classes.notificationHoverCardTextContainer}>
            <h3>Message from Travelist</h3>
            <p>New promotion!</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotificationHoverCard;
