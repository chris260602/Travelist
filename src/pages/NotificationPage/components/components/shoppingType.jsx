import React from "react";
// import shopping from "../../assets/img/shopping.png";
import classes from "./type.module.css";

const ShoppingType = () => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <img
        //   src={shopping}
          className={classes.iconType}
          alt="error"
        />
      </div>
      <div>
          <p className={classes.typeName}>
              Shopping
          </p>
      </div>
    </div>
  );
};

export default ShoppingType;