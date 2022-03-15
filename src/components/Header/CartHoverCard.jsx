import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/img/testingprofilepic.png";
import classes from "./CartHoverCard.module.css";
const CartHoverCard = (props) => {
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
      className={`${classes.cartHoverCardMainContainer} ${
        isActive ? classes.active : ""
      }`}
    >
      <div className={classes.cartHoverCardTop}>
        <h3>Cart</h3>
        <Link to={"/cart"}>See More</Link>
      </div>
      <div className={`${classes.cartHoverCardContainer}`}>
        <Link to={"/cart"} className={classes.cartHoverCard}>
          <div className={classes.cartHoverCardImageContainer}>
            <img src={profileIcon} alt="" />
          </div>
          <div className={classes.cartHoverCardTextContainer}>
            <h3>Bag</h3>
            <p className={classes.totalItems}>100 Items</p>
            <p>Rp.30000</p>
          </div>
        </Link>

        <Link to={"/cart"} className={classes.cartHoverCard}>
          <div className={classes.cartHoverCardImageContainer}>
            <img src={profileIcon} alt="" />
          </div>
          <div className={classes.cartHoverCardTextContainer}>
            <h3>Bag</h3>
            <p className={classes.totalItems}>100 Items</p>
            <p>Rp.30000</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CartHoverCard;
