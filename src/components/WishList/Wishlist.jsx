import React from "react";
import wishListIcon from "../../assets/img/wishListIcon.svg";
import classes from "./Wishlist.module.css";

const Wishlist = (props) => {
  const { isWishList } = props;
  const clickHandler = async () => {
    if (!isWishList) {
      props.handleAdd();
    } else {
      props.handleRemove();
    }
  };
  return (
    <div className={classes.wishlist} onClick={clickHandler}>
      <div className={classes.wishlistIcon}>
        <img
          src={wishListIcon}
          className={`${classes.loveIcon} ${isWishList ? classes.active : ""}`}
          alt="error"
        />
      </div>
    </div>
  );
};

export default Wishlist;
