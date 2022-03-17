import React from "react";
import wishListIcon from "../../assets/img/wishListIcon.svg";
import classes from "./Wishlist.module.css";

const Wishlist = () => {
  return (
    <div className={classes.wishlist}>
      <div className={classes.wishlistIcon}>
        <img src={wishListIcon} className={classes.loveIcon} alt="error" />
      </div>
    </div>
  );
};

export default Wishlist;
