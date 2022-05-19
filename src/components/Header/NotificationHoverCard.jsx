import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/img/testingprofilepic.png";
import classes from "./NotificationHoverCard.module.css";
const NotificationHoverCard = (props) => {
  const [isActive, setIsActive] = useState(false);
  console.log(props);
  const { data } = props;
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
        {data.notifications.length === 0 ? (
          <p>No Notifications</p>
        ) : (
          data.notifications.map((item) => (
            <Link
              to={"/notification"}
              className={classes.notificationHoverCard}
              key={item.title}
            >
              <div className={classes.notificationHoverCardTextContainer}>
                <h3>{item.title}</h3>
                <p>
                  {item.content.length > 30
                    ? item.content.slice(0, 30) + "..."
                    : item.content}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationHoverCard;
