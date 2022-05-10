import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/img/cartIcon.svg";
import wishListIcon from "../../assets/img/wishListIcon.svg";
import logoutIcon from "../../assets/img/logoutIcon.svg";
import historyIcon from "../../assets/img/historyIcon.svg";
import moneyIcon from "../../assets/img/moneyIcon.svg";
import manageProductsIcon from "../../assets/img/manageProductsIcon.svg";
import manageCategoriesIcon from "../../assets/img/manageCategoriesIcon.svg";
import classes from "./ProfileHoverCard.module.css";
import { useDispatch } from "react-redux";
import { logoff } from "../../store/reducers/userReducer/userReducer";
const ProfileHoverCard = (props) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (props.active === "true") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [props]);
  const logoutHandler = () => {
    dispatch(logoff());
  };
  return (
    <div
      className={`${classes.profileHoverCardMainContainer} ${
        isActive ? classes.active : ""
      }`}
    >
      <div className={classes.profileHoverCardTop}>
        <h3 className={classes.profileName}>{props.userName}</h3>
      </div>

      <div className={`${classes.profileHoverCardContainer}`}>
        {!props.isAdmin ? (
          <Fragment>
            <Link to={"/cart"} className={classes.profileHoverCard}>
              <div className={classes.profileHoverCardImageContainer}>
                <img src={cartIcon} alt="" />
              </div>
              <div className={classes.profileHoverCardTextContainer}>
                <p>Cart</p>
              </div>
            </Link>

            <Link to={"/wishlist"} className={classes.profileHoverCard}>
              <div className={classes.profileHoverCardImageContainer}>
                <img src={wishListIcon} alt="" />
              </div>
              <div className={classes.profileHoverCardTextContainer}>
                <p>Wishlist</p>
              </div>
            </Link>
            <Link to={"/history"} className={classes.profileHoverCard}>
              <div className={classes.profileHoverCardImageContainer}>
                <img src={historyIcon} alt="" />
              </div>
              <div className={classes.profileHoverCardTextContainer}>
                <p>History</p>
              </div>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <Link to={"/topup"} className={classes.profileHoverCard}>
              <div className={classes.profileHoverCardImageContainer}>
                <img src={moneyIcon} alt="" />
              </div>
              <div className={classes.profileHoverCardTextContainer}>
                <p>Top-Up Request</p>
              </div>
            </Link>

            <Link to={"/products"} className={classes.profileHoverCard}>
              <div className={classes.profileHoverCardImageContainer}>
                <img src={manageProductsIcon} alt="" />
              </div>
              <div className={classes.profileHoverCardTextContainer}>
                <p>Manage Products</p>
              </div>
            </Link>

            <Link to={"/categories"} className={classes.profileHoverCard}>
              <div className={classes.profileHoverCardImageContainer}>
                <img src={manageCategoriesIcon} alt="" />
              </div>
              <div className={classes.profileHoverCardTextContainer}>
                <p>Manage Categories</p>
              </div>
            </Link>
          </Fragment>
        )}
        <div className={classes.profileHoverCard} onClick={logoutHandler}>
          <div className={classes.profileHoverCardImageContainer}>
            <img src={logoutIcon} alt="" />
          </div>
          <div className={classes.profileHoverCardTextContainer}>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHoverCard;
