import React, {Fragment, useState} from "react";
import classes from "./notificationCard.module.css";

const NotificationCard = (props) => {

    
    console.log(
        props
    )
    const {item} = props;
    const [readMore, setReadMore] = useState(true);
    const readMoreClick = ()=> {
        setReadMore(!readMore);
    };

    const content = readMore? (item.body.slice(0, 100) + "...") : item.body;
  return (
    <Fragment>
      <div className={classes.container} onClick={readMoreClick}>
        <div className={classes.leftContainer}>
            <div className={classes.notificationType}>
                {item.notificationType}
            </div>
            <div className={classes.notificationInfo}>
                <p className={classes.title}>
                    {item.title}
                </p>
                <p className={classes.body}>
                    {content}
                </p>
            </div>
        </div>
        <div className={classes.rightContainer}>
            <p className={classes.notificationRelease}>
                {item.releaseDate}
            </p> 
        </div>
      </div>
    </Fragment>
  );
};

export default NotificationCard;